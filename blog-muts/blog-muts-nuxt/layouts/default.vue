<script setup lang="ts">
import '../assets/css/main.css'
</script>

<template>
  <div class="relative min-h-screen bg-bg-base overflow-x-hidden">
    <!-- Sidebar (Desktop/Tablet) -->
    <LayoutAppSidebar />

    <!-- Mobile Nav (Mobile/Tablet) -->
    <LayoutAppMobileNav />

    <!-- Main Content -->
    <main class="lg:pl-[280px] min-h-screen">
      <div class="relative max-w-7xl mx-auto px-6 py-8 md:px-12 md:py-16">
        <slot />
      </div>
    </main>
  </div>
</template>

<style>
/* Layout transitions or global styles if needed */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
