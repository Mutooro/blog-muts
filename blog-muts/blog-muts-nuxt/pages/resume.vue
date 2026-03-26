<script setup lang="ts">
import { profile } from '~/data/profile'

useHead({
  title: `Resume — ${profile.name}`,
  meta: [
    { name: 'description', content: `Professional experience and educational background of ${profile.name}` }
  ]
})
</script>

<template>
  <div class="space-y-12">
    <!-- Timeline Section (Experience & Education) -->
    <SectionsResumeTimeline />

    <!-- Skills Section -->
    <SectionsSkillBars />

    <!-- Certificates -->
    <SectionsCertificates />
  </div>
</template>
