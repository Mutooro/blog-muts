<script setup lang="ts">
import { 
  ShoppingCart, 
  Monitor, 
  PenTool, 
  Settings,
  ArrowUpRight
} from 'lucide-vue-next'

const services = [
  {
    title: 'Ecommerce',
    description: 'Specialized in building and managing high-converting stores using modern stacks. Expert in inventory and network systems.',
    icon: ShoppingCart,
    color: 'text-amber',
    bg: 'bg-amber/10'
  },
  {
    title: 'Web Design',
    description: 'Designing both static and interactive web applications that are commercial or personal. Expert in modern UI/UX trends.',
    icon: Monitor,
    color: 'text-teal',
    bg: 'bg-teal/10'
  },
  {
    title: 'Copywriting',
    description: 'Expertise in typewriting, technical documentation, and copywriting. Clear knowledge on Microsoft and digital text stacks.',
    icon: PenTool,
    color: 'text-accent-lt',
    bg: 'bg-accent/10'
  },
  {
    title: 'Management',
    description: 'Possesses clear knowledge on managing systems remotely through virtual point servers and network administration.',
    icon: Settings,
    color: 'text-coral',
    bg: 'bg-coral/10'
  }
]
</script>

<template>
  <section class="py-24">
    <div class="mb-14">
      <div class="section-label">01 — Services</div>
      <h2 class="section-title">What I Do</h2>
      <p class="section-sub">Combining technical expertise with creative design to build robust digital solutions.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        v-for="service in services" 
        :key="service.title"
        class="group relative bg-surface border border-border p-8 rounded-2xl hover:border-border-2 hover:bg-surface-2 transition-all duration-300 overflow-hidden"
      >
        <!-- Background Glow -->
        <div class="absolute -right-4 -top-4 w-24 h-24 blur-3xl rounded-full transition-opacity opacity-0 group-hover:opacity-10" :class="service.bg"></div>

        <div class="flex items-start justify-between mb-8">
          <div 
            class="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
            :class="[service.bg, service.color]"
          >
            <component :is="service.icon" class="w-7 h-7" />
          </div>
          <ArrowUpRight class="w-5 h-5 text-text-4 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>

        <h3 class="text-lg font-bold mb-3 group-hover:text-accent-lt transition-colors">{{ service.title }}</h3>
        <p class="text-[13px] text-text-3 leading-relaxed mb-4">
          {{ service.description }}
        </p>

        <div class="flex flex-wrap gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
           <span class="text-[9px] px-2 py-1 rounded bg-surface border border-border text-text-4 uppercase font-bold tracking-widest">Optimized</span>
           <span class="text-[9px] px-2 py-1 rounded bg-surface border border-border text-text-4 uppercase font-bold tracking-widest">Modern Stack</span>
        </div>
      </div>
    </div>
  </section>
</template>
