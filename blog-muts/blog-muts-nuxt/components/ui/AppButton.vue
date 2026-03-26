<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  to?: string
  href?: string
}>()
</script>

<template>
  <component
    :is="to ? 'NuxtLink' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    class="btn"
    :class="{
      'btn-primary': variant === 'primary' || !variant,
      'btn-secondary': variant === 'secondary',
      'hover:bg-surface-3 bg-transparent text-text-2 transition-colors': variant === 'ghost',
    }"
  >
    <slot />
  </component>
</template>
