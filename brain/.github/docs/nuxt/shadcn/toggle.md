---
title: Toggle
description: A two-state button that can be either on or off.
source: apps/www/src/registry/default/ui/toggle
primitive: https://www.reka-ui.com/docs/components/toggle.html
---

<ComponentPreview name="ToggleDemo" />

## Installation

<TabPreview name="CLI">
<template #CLI>

```bash
npx shadcn-vue@latest add toggle
```
</template>

<template #Manual>

<Steps>

### Install the following dependencies:

```bash
npm install reka-ui
```

### Copy and paste the following code into your project

<<< @/registry/default/ui/toggle/Toggle.vue

</Steps>

</template>
</TabPreview>

## Usage

```vue
<script setup lang="ts">
import { Toggle } from '@/components/ui/toggle'
</script>

<template>
  <Toggle>Toggle</Toggle>
</template>
```

## Examples

### Default

<ComponentPreview name="ToggleDemo" />

### Outline

<ComponentPreview name="ToggleItalicDemo" />

### With Text

<ComponentPreview name="ToggleItalicWithTextDemo" />

### Small

<ComponentPreview name="ToggleSmallDemo" />

### Large

<ComponentPreview name="ToggleLargeDemo" />

### Disabled

<ComponentPreview name="ToggleDisabledDemo" />
