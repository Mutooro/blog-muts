<script setup lang="ts">
import { certificates } from '~/data/certificates'
import { Award, Calendar, Hash } from 'lucide-vue-next'
</script>

<template>
  <section class="py-24">
    <div class="mb-14 text-center">
      <div class="section-label">05 — Achievements</div>
      <h2 class="section-title">Certificates</h2>
      <p class="section-sub mx-auto">Verified credentials that validate my expertise in digital marketing and frontend development.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div 
        v-for="cert in certificates" 
        :key="cert.id"
        class="group relative bg-surface border border-border p-10 rounded-[40px] hover:border-border-2 hover:bg-surface-2 transition-all duration-300"
      >
        <Award class="absolute top-10 right-10 w-12 h-12 text-teal/10 group-hover:text-teal/20 transition-colors" />

        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-8">
           <div class="w-20 h-20 rounded-3xl bg-surface-3 flex items-center justify-center border border-white/5 p-4 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all">
              <NuxtImg :src="cert.logo" class="w-full h-full object-contain" />
           </div>

           <div class="flex-1 text-center sm:text-left">
              <h4 class="text-xl font-bold mb-5 leading-snug">{{ cert.title }}</h4>
              
              <div class="flex flex-wrap justify-center sm:justify-start gap-6 text-[13px] text-text-4">
                 <div class="flex items-center gap-2">
                    <Hash class="w-4 h-4 text-accent/60" />
                    <span class="font-mono tracking-tight uppercase">{{ cert.id }}</span>
                 </div>
                 <div class="flex items-center gap-2">
                    <Calendar class="w-4 h-4 text-accent/60" />
                    <span>{{ cert.date }}</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>
