<script setup lang="ts">
import { Phone, Mail, MapPin, Send } from 'lucide-vue-next'
import { profile } from '~/data/profile'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const onSubmit = () => {
  // Placeholder for form submission logic
  console.log('Form submitted:', form)
  alert('Thank you! Your message has been sent.')
  // Reset form
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>

<template>
  <section class="py-24">
    <div class="mb-14">
      <div class="section-label">07 — Get in Touch</div>
      <h2 class="section-title">Contact</h2>
      <p class="section-sub">Have a project in mind or just want to say hello? Drop me a message below.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <!-- Contact Details -->
      <div class="space-y-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
           <div class="bg-surface border border-border p-8 rounded-3xl hover:border-border-2 hover:bg-surface-2 transition-all group">
              <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                 <Phone class="w-6 h-6" />
              </div>
              <h4 class="text-sm font-bold text-text-4 uppercase tracking-[0.08em] mb-2">Call Me</h4>
              <p class="text-lg font-bold tracking-tight">{{ profile.contact.phone }}</p>
           </div>

           <div class="bg-surface border border-border p-8 rounded-3xl hover:border-border-2 hover:bg-surface-2 transition-all group">
              <div class="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-6 group-hover:scale-110 transition-transform">
                 <MapPin class="w-6 h-6" />
              </div>
              <h4 class="text-sm font-bold text-text-4 uppercase tracking-[0.08em] mb-2">Location</h4>
              <p class="text-lg font-bold tracking-tight">{{ profile.contact.location }}</p>
           </div>
        </div>

        <div class="bg-surface border border-border p-8 rounded-3xl hover:border-border-2 hover:bg-surface-2 transition-all group">
           <div class="flex items-center gap-6">
              <div class="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center text-coral group-hover:scale-110 transition-transform">
                 <Mail class="w-6 h-6" />
              </div>
              <div class="flex-1">
                 <h4 class="text-sm font-bold text-text-4 uppercase tracking-[0.08em] mb-1">Email Me</h4>
                 <p class="text-lg font-bold tracking-tight">{{ profile.contact.email }}</p>
              </div>
           </div>
        </div>

        <!-- Placeholder for Map -->
        <div class="h-[280px] rounded-[40px] bg-surface border border-border overflow-hidden relative group cursor-pointer grayscale group-hover:grayscale-0 transition-all shadow-xl shadow-black/20">
           <div class="absolute inset-0 bg-accent/5 pointer-events-none"></div>
           <div class="absolute inset-0 flex items-center justify-center text-accent font-bold tracking-[0.2em] uppercase text-xs">
              Google Maps Integrated
           </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="bg-surface border border-border p-10 md:p-14 rounded-[48px] shadow-2xl relative overflow-hidden">
        <!-- Glow effects -->
        <div class="absolute -top-12 -right-12 w-32 h-32 bg-accent blur-3xl opacity-5 pointer-events-none"></div>
        <div class="absolute -bottom-12 -left-12 w-32 h-32 bg-teal blur-3xl opacity-5 pointer-events-none"></div>

        <form @submit.prevent="onSubmit" class="space-y-8 relative z-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div class="space-y-4">
              <label class="text-[11px] font-bold uppercase tracking-[0.1em] text-text-4 ml-2">Your Name</label>
              <input 
                v-model="form.name" 
                type="text" 
                required 
                placeholder="Mutooro Martin"
                class="w-full bg-surface-2 border border-border rounded-xl px-6 py-4 text-sm font-medium focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-text-4"
              />
            </div>
            <div class="space-y-4">
              <label class="text-[11px] font-bold uppercase tracking-[0.1em] text-text-4 ml-2">Your Email</label>
              <input 
                v-model="form.email" 
                type="email" 
                required 
                placeholder="martin.mutooro@gmail.com"
                class="w-full bg-surface-2 border border-border rounded-xl px-6 py-4 text-sm font-medium focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-text-4"
              />
            </div>
          </div>

          <div class="space-y-4">
            <label class="text-[11px] font-bold uppercase tracking-[0.1em] text-text-4 ml-2">Subject</label>
            <input 
              v-model="form.subject" 
              type="text" 
              required 
              placeholder="How can I help you?"
              class="w-full bg-surface-2 border border-border rounded-xl px-6 py-4 text-sm font-medium focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-text-4"
            />
          </div>

          <div class="space-y-4">
            <label class="text-[11px] font-bold uppercase tracking-[0.1em] text-text-4 ml-2">Message</label>
            <textarea 
              v-model="form.message" 
              required 
              rows="5"
              placeholder="Tell me about your project..."
              class="w-full bg-surface-2 border border-border rounded-xl px-6 py-4 text-sm font-medium focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none placeholder:text-text-4"
            ></textarea>
          </div>

          <UiAppButton type="submit" variant="primary" class="w-full py-5 text-base gap-3 group">
             Send Message
             <Send class="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </UiAppButton>
        </form>
      </div>
    </div>
  </section>
</template>
