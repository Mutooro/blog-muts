<script setup lang="ts">
import { portfolio } from '~/data/portfolio'
import { Play, Music, ZoomIn, Eye } from 'lucide-vue-next'

const categories = ['All', 'Detailed', 'Mockups', 'SoundCloud', 'Vimeo Videos', 'YouTube Videos']
const activeCategory = ref('All')

const filteredPortfolio = computed(() => {
  if (activeCategory.value === 'All') return portfolio
  return portfolio.filter(item => item.category.includes(activeCategory.value))
})
</script>

<template>
  <section class="py-24">
    <div class="mb-14">
      <div class="section-label">06 — Showcase</div>
      <h2 class="section-title">Portfolio</h2>
      <p class="section-sub">A curated collection of projects spanning design, development, and digital strategy.</p>
    </div>

    <!-- Category Filters -->
    <div class="flex flex-wrap gap-3 mb-12">
       <button 
         v-for="cat in categories" 
         :key="cat"
         @click="activeCategory = cat"
         class="px-5 py-2.5 rounded-full text-[13px] font-bold tracking-tight transition-all border"
         :class="activeCategory === cat ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20' : 'bg-surface border-border text-text-3 hover:border-border-2 hover:text-text-1'"
       >
         {{ cat }}
       </button>
    </div>

    <!-- Portfolio Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="item in filteredPortfolio" 
        :key="item.title"
        class="group relative aspect-[4/3] rounded-[32px] overflow-hidden bg-surface border border-border hover:border-accent/40 transition-all duration-500"
      >
        <NuxtImg :src="item.thumbnail" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        
        <!-- Overlay -->
        <div class="absolute inset-0 bg-bg-base/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
           <div class="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <div v-if="item.type === 'video'" class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
                 <Play class="w-6 h-6 fill-white" />
              </div>
              <div v-else-if="item.type === 'audio'" class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
                 <Music class="w-6 h-6" />
              </div>
              <div v-else class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
                 <Eye class="w-6 h-6" />
              </div>
           </div>

           <h4 class="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75">{{ item.title }}</h4>
           <div class="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform delay-100">
              <span v-for="c in item.category.slice(1)" :key="c" class="text-[10px] uppercase font-bold tracking-[0.1em] text-accent-lt">
                {{ c }}
              </span>
           </div>

           <!-- Placeholder for Link/Lightbox -->
           <div class="absolute inset-0 cursor-pointer"></div>
        </div>
      </div>
    </div>
  </section>
</template>
