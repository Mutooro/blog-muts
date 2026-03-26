<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
import { testimonials } from '~/data/testimonials'
</script>

<template>
  <section class="py-24">
    <div class="mb-14">
      <div class="section-label">02 — Feedback</div>
      <h2 class="section-title">Testimonials</h2>
      <p class="section-sub">Word of mouth remains the strongest indicator of quality and dedication.</p>
    </div>

    <!-- Simple Responsive Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div 
        v-for="testimonial in testimonials" 
        :key="testimonial.author"
        class="group relative bg-surface border border-border p-10 rounded-[40px] hover:border-border-2 hover:bg-surface-2 transition-all duration-300"
      >
        <Quote class="absolute top-10 right-10 w-10 h-10 text-accent/10 group-hover:text-accent/20 transition-colors" />

        <!-- User Info -->
        <div class="flex items-center gap-5 mb-8">
          <div class="w-16 h-16 rounded-2xl overflow-hidden border border-border bg-surface-3">
             <NuxtImg :src="testimonial.image" class="w-full h-full object-cover" />
          </div>
          <div>
            <h4 class="text-base font-bold">{{ testimonial.author }}</h4>
            <p class="text-[12px] text-text-4 uppercase tracking-[0.08em] font-semibold">{{ testimonial.company }}</p>
          </div>
        </div>

        <!-- Quote -->
        <blockquote class="text-[15px] text-text-2 italic leading-relaxed font-medium">
          "{{ testimonial.quote }}"
        </blockquote>
      </div>
    </div>
  </section>
</template>
