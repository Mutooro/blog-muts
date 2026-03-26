<script setup lang="ts">
import { profile } from '~/data/profile'
import { ArrowRight, Send } from 'lucide-vue-next'
</script>

<template>
  <section class="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 min-h-[calc(100vh-8rem)]">
    <!-- Text Content -->
    <div class="flex-1 text-center lg:text-left animate-slide-up">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-glow text-accent-lt text-xs font-semibold uppercase tracking-wider mb-8 border border-accent/20">
        <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
        Available for Work
      </div>

      <h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
        {{ profile.name }}
      </h1>

      <p class="text-lg md:text-xl text-text-3 font-medium mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
        {{ profile.bio }}
      </p>

      <div class="flex flex-wrap justify-center lg:justify-start gap-4">
        <UiAppButton to="/resume" variant="primary" class="gap-2 group px-8 py-4 text-base">
          View My Resume
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </UiAppButton>
        <UiAppButton to="/contact" variant="secondary" class="gap-2 px-8 py-4 text-base">
          <Send class="w-4 h-4" />
          Contact me
        </UiAppButton>
      </div>
    </div>

    <!-- Hero Image Area -->
    <div class="flex-shrink-0 w-full max-w-[320px] md:max-w-md lg:max-w-[420px] animate-slide-up [animation-delay:200ms]">
      <div class="relative group">
        <!-- Decorative Glow -->
        <div class="absolute -inset-4 bg-gradient-to-tr from-accent to-teal opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity"></div>
        
        <!-- Main Image -->
        <div class="relative aspect-square overflow-hidden rounded-[40px] border-2 border-border-2 bg-surface rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
          <NuxtImg 
            :src="profile.photo || '/img/test_1.JPG'" 
            class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
          />
        </div>

        <!-- Float Badge (Placeholder for "What I Do" item or similar) -->
        <div class="absolute -bottom-6 -left-6 bg-surface-2 border border-border p-5 rounded-2xl shadow-xl animate-bounce [animation-duration:4s]">
           <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center text-teal text-xl">🚀</div>
              <div class="text-left">
                <div class="text-[10px] uppercase tracking-widest text-text-4 font-bold">Specialist</div>
                <div class="text-sm font-bold">IT Infrastructure</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>
