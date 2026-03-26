<script setup lang="ts">
import { profile } from '~/data/profile'

useHead({
  title: `Contact — ${profile.name}`,
  meta: [
    { name: 'description', content: `Get in touch with ${profile.name} for projects and collaborations.` }
  ]
})
</script>

<template>
  <div class="space-y-12">
    <!-- Contact Section -->
    <SectionsContactSection />
  </div>
</template>
