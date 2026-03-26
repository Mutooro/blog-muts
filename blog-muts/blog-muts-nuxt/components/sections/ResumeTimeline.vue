<script setup lang="ts">
import { education, experience } from '~/data/timeline'
import { GraduationCap, Briefcase } from 'lucide-vue-next'
</script>

<template>
  <section class="py-24">
    <div class="mb-14">
      <div class="section-label">04 — My Journey</div>
      <h2 class="section-title">Resume</h2>
      <p class="section-sub">A summary of my educational background and professional milestones.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <!-- Experience Column -->
      <div>
        <div class="flex items-center gap-4 mb-10">
           <div class="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
              <Briefcase class="w-5 h-5" />
           </div>
           <h3 class="text-2xl font-bold">Experience</h3>
        </div>

        <div class="relative space-y-12 before:absolute before:left-[19px] before:top-2 before:bottom-0 before:w-0.5 before:bg-white/5">
          <div 
            v-for="item in experience" 
            :key="item.period" 
            class="relative pl-12 group"
          >
            <!-- Marker Dot -->
            <div class="absolute left-0 top-1.5 w-10 h-10 flex items-center justify-center z-10">
               <div class="w-2.5 h-2.5 rounded-full bg-accent group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
            </div>

            <div class="text-[12px] text-accent-lt font-bold uppercase tracking-widest mb-2">{{ item.period }}</div>
            <h4 class="text-lg font-bold mb-1">{{ item.role }}</h4>
            <div class="text-[13px] text-text-4 font-semibold mb-4">{{ item.company }}</div>
            <p class="text-[14px] text-text-3 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Education Column -->
      <div>
        <div class="flex items-center gap-4 mb-10">
           <div class="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center text-teal">
              <GraduationCap class="w-5 h-5" />
           </div>
           <h3 class="text-2xl font-bold">Education</h3>
        </div>

        <div class="relative space-y-12 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/5">
          <div 
            v-for="item in education" 
            :key="item.year" 
            class="relative pl-12 group"
          >
            <!-- Marker Dot -->
            <div class="absolute left-0 top-1.5 w-10 h-10 flex items-center justify-center z-10">
               <div class="w-2.5 h-2.5 rounded-full bg-teal group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
            </div>

            <div class="text-[12px] text-teal font-bold uppercase tracking-widest mb-2">{{ item.year }}</div>
            <h4 class="text-lg font-bold mb-1">{{ item.degree }}</h4>
            <div class="text-[13px] text-text-4 font-semibold mb-4">{{ item.institution }}</div>
            <p class="text-[14px] text-text-3 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
