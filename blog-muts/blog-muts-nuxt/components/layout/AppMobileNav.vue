<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
const isOpen = ref(false)
</script>

<template>
  <div class="lg:hidden sticky top-0 left-0 w-full h-[72px] bg-surface/80 backdrop-blur-md border-b border-white/5 z-40 px-6 flex items-center justify-between">
    <div class="font-bold text-lg tracking-tight">Mutooro.M</div>
    <button @click="isOpen = !isOpen" class="p-2 text-text-2 hover:text-accent transition-colors">
      <Menu v-if="!isOpen" class="w-6 h-6" />
      <X v-else class="w-6 h-6" />
    </button>

    <!-- Mobile Drawer Wrapper (Simplistic for now) -->
    <Teleport to="body">
      <div v-show="isOpen" class="fixed inset-0 bg-bg-base/95 z-[60] p-12 lg:hidden flex flex-col justify-center items-center text-center">
        <button @click="isOpen = false" class="absolute top-6 right-6 p-2 text-text-3">
          <X class="w-8 h-8" />
        </button>
        <!-- Nav Links (Simplified for placeholder) -->
        <nav class="space-y-8 text-2xl font-bold">
           <NuxtLink to="/" @click="isOpen = false" class="block">Home</NuxtLink>
           <NuxtLink to="/resume" @click="isOpen = false" class="block">Resume</NuxtLink>
           <NuxtLink to="/portfolio" @click="isOpen = false" class="block">Portfolio</NuxtLink>
           <NuxtLink to="/blog" @click="isOpen = false" class="block">Blog</NuxtLink>
           <NuxtLink to="/contact" @click="isOpen = false" class="block">Contact</NuxtLink>
        </nav>
      </div>
    </Teleport>
  </div>
</template>
