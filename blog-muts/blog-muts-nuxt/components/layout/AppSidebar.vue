<script setup lang="ts">
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  Book,
  Twitter,
  Linkedin,
  Facebook,
  Phone,
  Mail as MailIcon,
  MapPin,
  FileText
} from 'lucide-vue-next'
import { profile } from '~/data/profile'

const navLinks = [
  { name: 'About Me', to: '/', icon: User },
  { name: 'Resume', to: '/resume', icon: GraduationCap },
  { name: 'Portfolio', to: '/portfolio', icon: Briefcase },
  { name: 'Blog', to: '/blog', icon: Book },
  { name: 'Contact', to: '/contact', icon: Mail },
]
</script>

<template>
  <aside 
    id="site_header" 
    class="fixed top-0 left-0 h-full w-[280px] bg-surface border-r border-border hidden lg:flex flex-col z-50 overflow-y-auto"
  >
    <!-- Profile Section -->
    <div class="p-8 pb-6 text-center border-b border-border">
      <div class="relative w-32 h-32 mx-auto mb-5 group">
        <div class="absolute inset-0 bg-accent rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <NuxtImg 
          :src="profile.photo || '/img/test_1.JPG'" 
          :alt="profile.name"
          class="relative w-full h-full rounded-full object-cover border-2 border-border-2"
        />
      </div>
      <h2 class="text-xl font-bold tracking-tight mb-1">{{ profile.name }}</h2>
      <p class="text-[13px] text-text-3 font-medium uppercase tracking-wider">{{ profile.title }}</p>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 p-6">
      <ul class="space-y-1">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink 
            :to="link.to"
            itemprop="url"
            class="flex items-center gap-4 px-4 py-3 rounded-lg text-text-2 hover:text-text-1 hover:bg-surface-2 transition-all group"
            active-class="bg-accent-glow !text-accent-lt font-semibold border-l-2 border-accent"
          >
            <component :is="link.icon" class="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:text-accent transition-colors" />
            <span class="text-[15px]">{{ link.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- Bottom Section: Socials & Info -->
    <div class="p-8 border-t border-border mt-auto">
      <div class="flex justify-center gap-4 mb-6">
        <a :href="profile.socials.twitter" target="_blank" class="text-text-3 hover:text-accent transition-colors">
          <Twitter class="w-5 h-5" />
        </a>
        <a :href="profile.socials.linkedin" target="_blank" class="text-text-3 hover:text-accent transition-colors">
          <Linkedin class="w-5 h-5" />
        </a>
        <a :href="profile.socials.facebook" target="_blank" class="text-text-3 hover:text-accent transition-colors">
          <Facebook class="w-5 h-5" />
        </a>
      </div>

      <div class="space-y-3 mb-8">
        <div class="flex items-center gap-3 text-[13px] text-text-3">
          <Phone class="w-4 h-4 text-accent/60" />
          <span>{{ profile.contact.phone }}</span>
        </div>
        <div class="flex items-center gap-3 text-[13px] text-text-3 overflow-hidden">
          <MailIcon class="w-4 h-4 text-accent/60" />
          <span class="truncate">{{ profile.contact.email }}</span>
        </div>
      </div>

      <UiAppButton :href="profile.cvUrl" target="_blank" variant="primary" class="w-full gap-2">
        <FileText class="w-4 h-4" />
        View CV
      </UiAppButton>

      <div class="mt-8 pt-6 border-t border-border/50 text-center">
        <p class="text-[10px] text-text-4 uppercase tracking-[0.1em]">© {{ new Date().getFullYear() }} All Rights Reserved</p>
      </div>
    </div>
  </aside>
</template>
