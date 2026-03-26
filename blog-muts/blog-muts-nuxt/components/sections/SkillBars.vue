<script setup lang="ts">
import { designSkills, codingSkills, knowledgeTags } from '~/data/skills'
import { Palette, Code, Lightbulb } from 'lucide-vue-next'
</script>

<template>
  <section class="py-24">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <!-- Design Skills -->
      <div>
        <div class="flex items-center gap-4 mb-10">
           <div class="w-10 h-10 bg-coral/10 rounded-xl flex items-center justify-center text-coral">
              <Palette class="w-5 h-5" />
           </div>
           <h3 class="text-2xl font-bold">Design Skills</h3>
        </div>

        <div class="space-y-8">
          <div v-for="skill in designSkills" :key="skill.name">
             <div class="flex justify-between items-center mb-3">
                <span class="text-sm font-bold tracking-tight">{{ skill.name }}</span>
                <span class="text-xs font-mono text-text-4">{{ skill.percent }}%</span>
             </div>
             <div class="h-2 w-full bg-surface-2 rounded-full overflow-hidden border border-white/5">
                <div 
                  class="h-full bg-coral rounded-full transition-all duration-1000 origin-left"
                  :style="{ width: `${skill.percent}%` }"
                ></div>
             </div>
          </div>
        </div>
      </div>

      <!-- Coding Skills -->
      <div>
        <div class="flex items-center gap-4 mb-10">
           <div class="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
              <Code class="w-5 h-5" />
           </div>
           <h3 class="text-2xl font-bold">Coding Skills</h3>
        </div>

        <div class="space-y-8">
          <div v-for="skill in codingSkills" :key="skill.name">
             <div class="flex justify-between items-center mb-3">
                <span class="text-sm font-bold tracking-tight">{{ skill.name }}</span>
                <span class="text-xs font-mono text-text-4">{{ skill.percent }}%</span>
             </div>
             <div class="h-2 w-full bg-surface-2 rounded-full overflow-hidden border border-white/5">
                <div 
                  class="h-full bg-accent rounded-full transition-all duration-1000 origin-left"
                  :style="{ width: `${skill.percent}%` }"
                ></div>
             </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Knowledge Tags -->
    <div class="mt-24">
        <div class="flex items-center gap-4 mb-10 justify-center">
           <div class="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center text-amber">
              <Lightbulb class="w-5 h-5" />
           </div>
           <h3 class="text-2xl font-bold">Knowledge</h3>
        </div>

        <div class="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
           <div 
             v-for="tag in knowledgeTags" 
             :key="tag"
             class="px-5 py-2 rounded-xl bg-surface border border-border text-[13px] font-semibold text-text-2 hover:border-accent hover:text-accent transition-all cursor-default"
           >
             {{ tag }}
           </div>
        </div>
    </div>
  </section>
</template>
