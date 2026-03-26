<script setup lang="ts">
import { Heart, Clock, Star } from 'lucide-vue-next'

const stats = [
  {
    label: 'Happy Clients',
    value: 88,
    icon: Heart,
    color: 'text-coral',
    bg: 'bg-coral/10'
  },
  {
    label: 'Working Hours',
    value: 780,
    icon: Clock,
    color: 'text-teal',
    bg: 'bg-teal/10'
  },
  {
    label: 'Awards Won',
    value: 7,
    icon: Star,
    color: 'text-amber',
    bg: 'bg-amber/10'
  }
]
</script>

<template>
  <section class="py-12">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div 
        v-for="stat in stats" 
        :key="stat.label"
        class="relative group bg-surface border border-border p-10 rounded-[28px] text-center hover:border-border-2 transition-all duration-300"
      >
        <!-- Background Orbit Glow -->
        <div class="absolute inset-0 bg-transparent rounded-[28px] overflow-hidden">
           <div class="absolute -right-12 -bottom-12 w-32 h-32 blur-3xl rounded-full opacity-10 transition-opacity group-hover:opacity-20" :class="stat.bg"></div>
        </div>

        <div 
          class="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-3xl shadow-lg border border-white/5 bg-surface-2"
          :class="stat.color"
        >
          <component :is="stat.icon" class="w-8 h-8" />
        </div>

        <div class="text-4xl md:text-5xl font-black mb-2 tracking-tighter">
          {{ stat.value }}
        </div>
        <p class="text-[11px] uppercase tracking-[0.15em] font-bold text-text-4 group-hover:text-text-2 transition-colors">
          {{ stat.label }}
        </p>
      </div>
    </div>
  </section>
</template>
