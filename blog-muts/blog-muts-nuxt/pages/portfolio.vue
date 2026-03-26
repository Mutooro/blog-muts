<script setup lang="ts">
import { profile } from '~/data/profile'

useHead({
  title: `Portfolio — ${profile.name}`,
  meta: [
    { name: 'description', content: `Showcase of projects by ${profile.name}` }
  ]
})
</script>

<template>
  <div class="space-y-12">
    <!-- Portfolio Section -->
    <SectionsPortfolioGrid />
  </div>
</template>
