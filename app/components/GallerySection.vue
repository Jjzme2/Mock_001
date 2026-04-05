<script setup lang="ts">
const { observe } = useReveal()

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80',
    alt: 'Dining room atmosphere',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    alt: 'Signature dish',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    alt: 'Bar and cocktails',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=80',
    alt: 'Wine selection',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80',
    alt: 'Private dining room',
    span: 'lg:col-span-2',
  },
]

const lightboxOpen = ref(false)
const activePhoto  = ref(0)

function openLightbox(i: number) {
  activePhoto.value = i
  lightboxOpen.value = true
}
function closeLightbox() { lightboxOpen.value = false }
function prevPhoto() { activePhoto.value = (activePhoto.value - 1 + photos.length) % photos.length }
function nextPhoto() { activePhoto.value = (activePhoto.value + 1) % photos.length }

// Close on Escape
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (!lightboxOpen.value) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') prevPhoto()
    if (e.key === 'ArrowRight') nextPhoto()
  })
})
</script>

<template>
  <section id="gallery" class="py-24 lg:py-36 bg-warm overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div :ref="el => observe(el as Element)" class="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <p class="section-label">The Experience</p>
          <h2
            class="heading-display text-coal mt-2"
            style="font-size: clamp(2.2rem, 4vw, 3.4rem);"
          >
            Step Inside
          </h2>
        </div>
        <p class="text-stone text-sm max-w-xs leading-relaxed">
          From the oak-burning hearth to the candlelit private rooms — every corner tells a story.
        </p>
      </div>

      <!-- Masonry-style grid -->
      <div
        :ref="el => observe(el as Element)"
        class="reveal grid grid-cols-2 lg:grid-cols-4 grid-rows-[240px_240px] gap-3"
      >
        <button
          v-for="(photo, i) in photos"
          :key="i"
          :class="['relative overflow-hidden rounded-sm group cursor-zoom-in', photo.span]"
          @click="openLightbox(i)"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <!-- Hover overlay -->
          <div class="absolute inset-0 bg-coal/0 group-hover:bg-coal/30 transition-colors duration-300 flex items-center justify-center">
            <span class="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">⊕</span>
          </div>
        </button>
      </div>

    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 z-[100] bg-coal/95 backdrop-blur-sm flex items-center justify-center"
          @click.self="closeLightbox"
        >
          <!-- Close -->
          <button
            class="absolute top-6 right-6 text-white/60 hover:text-white text-3xl transition-colors duration-200"
            @click="closeLightbox"
          >
            ×
          </button>

          <!-- Prev -->
          <button
            class="absolute left-4 text-white/50 hover:text-white text-2xl p-4 transition-colors duration-200"
            @click="prevPhoto"
          >
            ←
          </button>

          <img
            :src="photos[activePhoto].src.replace(/w=\d+/, 'w=1400')"
            :alt="photos[activePhoto].alt"
            class="max-w-[90vw] max-h-[85vh] object-contain rounded-sm shadow-2xl"
          />

          <!-- Next -->
          <button
            class="absolute right-4 text-white/50 hover:text-white text-2xl p-4 transition-colors duration-200"
            @click="nextPhoto"
          >
            →
          </button>

          <!-- Caption -->
          <p class="absolute bottom-8 text-white/40 text-xs tracking-widest uppercase">
            {{ photos[activePhoto].alt }} &nbsp;·&nbsp; {{ activePhoto + 1 }} / {{ photos.length }}
          </p>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
