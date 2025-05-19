# Tanstack Table Vue

Tanstack Table Vue is the official Vue implementation of Tanstack Table (formerly React Table), a headless UI library for building powerful tables and datagrids.

## Installation

```bash
npm install @tanstack/vue-table
```

## Using `useVueTable`

In Nuxt projects, always use the `useVueTable` composable from Tanstack Table Vue for implementing tables. This composable provides a powerful, type-safe way to build tables with sorting, filtering, pagination, and other features.

### Basic Example

```vue
<script setup lang="ts">
import {
  flexRender,
  getCoreRowModel,
  type ColumnDef
} from '@tanstack/vue-table'
import { useVueTable } from '@tanstack/vue-table'

// Define your data type
interface Person {
  id: string
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
}

// Define your columns
const columns: ColumnDef<Person, any>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'visits',
    header: 'Visits',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  }
]

// Define your data
const data = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    visits: 10,
    status: 'Active',
  },
  // More data...
]

// Initialize the table with useVueTable
const table = useVueTable({
  get data() {
    return data
  },
  get columns() {
    return columns
  },
  getCoreRowModel: getCoreRowModel(),
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in table.getHeaderGroups()[0].headers" :key="header.id">
          {{ flexRender(header.column.columnDef.header, header.getContext()) }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in table.getRowModel().rows" :key="row.id">
        <td v-for="cell in row.getVisibleCells()" :key="cell.id">
          {{ flexRender(cell.column.columnDef.cell, cell.getContext()) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
```

## Advanced Features

### Sorting

```typescript
import { getSortedRowModel } from '@tanstack/vue-table'

const sorting = ref([])

const table = useVueTable({
  // ...other options
  getSortedRowModel: getSortedRowModel(),
  state: {
    get sorting() {
      return sorting.value
    }
  },
  onSortingChange: (updater) => {
    sorting.value = typeof updater === 'function' ? updater(sorting.value) : updater
  },
})
```

### Filtering

```typescript
import { getFilteredRowModel } from '@tanstack/vue-table'

const globalFilter = ref('')

const table = useVueTable({
  // ...other options
  getFilteredRowModel: getFilteredRowModel(),
  state: {
    get globalFilter() {
      return globalFilter.value
    }
  },
  onGlobalFilterChange: (updater) => {
    globalFilter.value = typeof updater === 'function' ? updater(globalFilter.value) : updater
  },
})
```

### Pagination

```typescript
import { getPaginationRowModel } from '@tanstack/vue-table'

const table = useVueTable({
  // ...other options
  getPaginationRowModel: getPaginationRowModel(),
})

// Then in your template:
// table.getCanPreviousPage()
// table.getCanNextPage()
// table.previousPage()
// table.nextPage()
// table.getPageCount()
// table.getState().pagination.pageIndex
```

## Best Practices

1. Always use TypeScript for type safety
2. Define column configuration outside the component if reused
3. Handle loading and error states appropriately
4. Implement proper accessibility for tables
5. Use responsive design patterns for mobile views

## Further Resources

- [Official Tanstack Table Documentation](https://tanstack.com/table/latest/docs/adapters/vue-table)
- [GitHub Repository](https://github.com/TanStack/table)
