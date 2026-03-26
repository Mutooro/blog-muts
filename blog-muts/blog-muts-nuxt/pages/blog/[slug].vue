<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(`post-${route.params.slug}`, () => queryContent('blog').where({ _path: route.path }).findOne())

useHead({
  title: post.value?.title ? `${post.value.title} — Mutooro Martin` : 'Blog Post',
  meta: [
    { name: 'description', content: post.value?.description }
  ]
})
</script>

<template>
  <article v-if="post" class="py-24">
    <!-- Post Header -->
    <header class="max-w-3xl mx-auto mb-20 text-center">
       <div class="flex items-center justify-center gap-4 mb-8 text-[12px] font-bold uppercase tracking-widest text-accent-lt">
          <span>{{ post.category }}</span>
          <span class="w-1 h-1 rounded-full bg-border-2"></span>
          <span>{{ new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}</span>
       </div>

       <h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter">
         {{ post.title }}
       </h1>

       <p class="text-xl text-text-3 font-medium mb-12 italic opacity-80 leading-relaxed font-sora">
         "{{ post.description }}"
       </p>

       <div class="aspect-video rounded-[48px] overflow-hidden bg-surface-3 shadow-2xl relative border border-border">
          <NuxtImg :src="post.image" class="w-full h-full object-cover" />
       </div>
    </header>

    <!-- Post Content (Prose) -->
    <div class="max-w-3xl mx-auto prose prose-invert prose-lg prose-indigo prose-img:rounded-[24px] prose-blockquote:border-accent prose-blockquote:bg-surface-2 prose-blockquote:p-6 prose-blockquote:rounded-2xl">
      <ContentDoc />
    </div>

    <!-- Post Footer -->
    <footer class="max-w-3xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col items-center">
       <div class="flex flex-wrap gap-3 mb-12 justify-center">
          <span v-for="tag in post.tags" :key="tag" class="px-4 py-1.5 rounded-full bg-surface text-[12px] font-bold text-text-4 border border-border">#{{ tag }}</span>
       </div>

       <UiAppButton to="/blog" variant="secondary" class="gap-2 group">
          Back to Blog
       </UiAppButton>
    </footer>
  </article>

  <div v-else class="py-24 text-center">
    <p class="text-text-3">Post not found.</p>
    <UiAppButton to="/blog" variant="primary" class="mt-8">Return to Blog</UiAppButton>
  </div>
</template>

<style>
/* Custom prose overrides if needed */
.prose h2, .prose h3 {
  @apply tracking-tight font-black mb-6 mt-12;
}
.prose p {
  @apply text-text-2 leading-8 mb-8 text-[17px] font-medium;
}
.prose blockquote p {
  @apply mb-0;
}
</style>
