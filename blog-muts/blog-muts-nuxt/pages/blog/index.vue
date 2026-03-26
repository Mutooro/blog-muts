<script setup lang="ts">
import { profile } from '~/data/profile'
import { Calendar, User, ArrowRight } from 'lucide-vue-next'

const { data: posts } = await useAsyncData('posts', () => queryContent('blog').find())

useHead({
  title: `Blog — ${profile.name}`,
  meta: [
    { name: 'description', content: `Insights and articles by ${profile.name}` }
  ]
})
</script>

<template>
  <section class="py-24">
    <div class="mb-14">
      <div class="section-label">08 — Insights</div>
      <h2 class="section-title">Blog</h2>
      <p class="section-sub">Thoughts on technology, design, and my professional journey.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <NuxtLink 
        v-for="post in posts" 
        :key="post._path"
        :to="post._path"
        class="group bg-surface border border-border rounded-[40px] overflow-hidden hover:border-border-2 transition-all flex flex-col h-full"
      >
        <div class="aspect-[16/9] overflow-hidden bg-surface-3">
           <NuxtImg :src="post.image || '/img/blog/blog_post_1.jpg'" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        <div class="p-10 flex flex-col flex-1">
           <div class="flex items-center gap-4 mb-6">
              <span class="px-3 py-1 rounded-full bg-accent-glow text-accent-lt text-[10px] font-bold uppercase tracking-widest">{{ post.category || 'General' }}</span>
              <div class="flex items-center gap-2 text-[12px] text-text-4">
                 <Calendar class="w-3.5 h-3.5" />
                 <span>{{ new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}</span>
              </div>
           </div>

           <h3 class="text-2xl font-bold mb-4 group-hover:text-accent-lt transition-colors leading-tight">{{ post.title }}</h3>
           <p class="text-[14px] text-text-3 leading-relaxed mb-8 line-clamp-2">
             {{ post.description }}
           </p>

           <div class="mt-auto flex items-center gap-2 text-[13px] font-bold text-accent-lt group-hover:text-accent transition-colors">
              Read Implementation
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </div>
        </div>
      </NuxtLink>
    </div>

    <div v-if="posts?.length === 0" class="py-24 text-center">
       <p class="text-text-3 italic">More articles coming soon...</p>
    </div>
  </section>
</template>
