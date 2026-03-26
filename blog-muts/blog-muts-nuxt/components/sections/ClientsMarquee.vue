<script setup lang="ts">
import { clients } from '~/data/clients'
</script>

<template>
  <section class="py-24 border-t border-white/5">
    <div class="mb-14 text-center">
      <div class="section-label">03 — Partners</div>
      <h2 class="section-title">Whom I've Worked With</h2>
    </div>

    <!-- Scrolling Marquee (CSS Only) -->
    <div class="relative w-full overflow-hidden flex items-center h-24 mask-gradient">
      <!-- Gradient Masks -->
      <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-base to-transparent z-10"></div>
      <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-base to-transparent z-10"></div>

      <div class="flex animate-marquee hover:[animation-play-state:paused] gap-12 sm:gap-24 items-center whitespace-nowrap px-12">
        <!-- Double the list for seamless loop -->
        <a 
          v-for="client in [...clients, ...clients]" 
          :key="client.name + Math.random()"
          :href="client.url" 
          target="_blank"
          class="flex-shrink-0 group grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        >
          <NuxtImg :src="client.logo" :alt="client.name" class="h-10 sm:h-12 w-auto object-contain" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
  display: flex;
}

.mask-gradient {
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}
</style>
