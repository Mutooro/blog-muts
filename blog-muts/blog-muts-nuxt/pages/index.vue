<script setup lang="ts">
import { profile } from '~/data/profile'

useHead({
  title: `${profile.name} — ${profile.title}`,
  meta: [
    { name: 'description', content: profile.bio }
  ]
})
</script>

<template>
  <div class="space-y-12">
    <!-- Hero Section -->
    <SectionsHeroIntro />

    <!-- Services Section -->
    <SectionsServicesGrid />

    <!-- Facts & Stats -->
    <SectionsFunFacts />

    <!-- Testimonials -->
    <SectionsTestimonials />

    <!-- Clients -->
    <SectionsClientsMarquee />
  </div>
</template>
