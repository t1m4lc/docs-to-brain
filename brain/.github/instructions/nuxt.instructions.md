---
applyTo: "**/*.vue,**/*.ts,**/nuxt.config.*"
---
# Nuxt.js Development Guidelines

## General Principles
- Use Nuxt 3 composition API with `<script setup>` for all components
- Follow Vue 3's best practices for reactivity and component design
- Leverage Nuxt auto-imports for composables and components
- Respect the Nuxt directory structure conventions

## File Organization
- Place components in the `components/` directory
- Keep pages in the `pages/` directory for automatic routing
- Use `composables/` for shared composition functions
- Implement server routes in `server/` directory
- Store layouts in `layouts/` directory
- Use the `middleware/` directory for navigation guards

## TypeScript Usage
- Use TypeScript for all new code
- Define proper interfaces and types for component props
- Leverage Nuxt's type helpers like `defineProps`, `defineEmits` and `definePageMeta`
- Export types from dedicated type files when shared across components

## Data Fetching
- Use `useFetch` or `useAsyncData` for data fetching
- Apply proper error handling for all async operations
- Implement loading states for better UX
- Consider caching strategies with `useFetch` options

## State Management
- Use `useState` for simple state that needs to be shared across components
- For complex state, use Pinia stores
- Follow SSR-friendly patterns for state management
- Remember that `useState` values are shared between users in SSR context

## Server Routes & API
- Implement server routes in the `server/api` directory
- Use `defineEventHandler` for server endpoints
- Validate input data on the server side
- Apply proper error handling with `createError`
- Use server routes for sensitive operations

## SEO & Meta Tags
- Use `useHead` or `useSeoMeta` for managing meta tags
- Set up proper SEO information for all pages
- Consider dynamic meta tags based on page content
- Implement OpenGraph and Twitter card meta tags for sharing

## Performance
- Implement proper component lazy-loading with `defineAsyncComponent`
- Use Suspense for loading states
- Consider selective hydration for large pages
- Implement proper caching strategies

## Examples

### Auto-imports

```typescript
// Auto-imports example - no manual imports needed
<script setup lang="ts">
// useState is auto-imported
const counter = useState('counter', () => 0)

// useRoute is auto-imported
const route = useRoute()

// No need to import ref or computed
const doubled = computed(() => counter.value * 2)

function increment() {
  counter.value++
}
</script>
```

### Data Fetching

```typescript
// Effective data fetching with error and loading states
<script setup lang="ts">
const { data: products, pending, error, refresh } = await useFetch('/api/products', {
  // Cache for 30 seconds on the client side
  key: 'products',
  cache: process.client ? 30 : undefined,
  // Transform the response
  transform: (response) => response.products,
  // Handle errors
  onResponseError: (error) => {
    console.error('Failed to fetch products:', error)
  }
})

// Gracefully handle loading and error states
</script>

<template>
  <div>
    <div v-if="pending" class="loading">Loading products...</div>
    <div v-else-if="error" class="error">
      Failed to load products: {{ error.message }}
      <button @click="refresh">Try Again</button>
    </div>
    <ProductList v-else :products="products" />
  </div>
</template>
```

### Server Routes

```typescript
// server/api/products.ts
export default defineEventHandler(async (event) => {
  // Get query parameters
  const { category, limit } = getQuery(event)
  
  // Validate input
  if (category && typeof category !== 'string') {
    throw createError({
      statusCode: 400,
      message: 'Invalid category parameter'
    })
  }
  
  try {
    // Fetch data from database
    const products = await db.product.findMany({
      where: category ? { category } : undefined,
      take: limit ? parseInt(limit as string) : 20
    })
    
    return {
      products,
      count: products.length
    }
  } catch (error) {
    console.error('Database error:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch products'
    })
  }
})
```

### Composables Pattern

```typescript
// composables/useAuthentication.ts
export const useAuthentication = () => {
  const user = useState<User | null>('user', () => null)
  const isAuthenticated = computed(() => !!user.value)
  const token = useCookie('auth_token')
  
  async function login(credentials: { email: string; password: string }) {
    try {
      const { data, error } = await $fetch('/api/auth/login', {
        method: 'POST',
        body: credentials
      })
      
      if (error) throw new Error(error.message)
      
      user.value = data.user
      token.value = data.token
      return { success: true }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Login failed' 
      }
    }
  }
  
  function logout() {
    user.value = null
    token.value = null
    navigateTo('/login')
  }
  
  return {
    user,
    isAuthenticated,
    login,
    logout
  }
}
```
