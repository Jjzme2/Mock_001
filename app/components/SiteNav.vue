<script setup lang="ts">
const { y: scrollY } = useWindowScroll()
const scrolled = computed(() => scrollY.value > 60)

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu  = () => (menuOpen.value = false)

// Lock body scroll when mobile menu is open
watch(menuOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

const links = [
  { label: 'About',        href: '#about' },
  { label: 'Menu',         href: '#menu' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Private Dining', href: '#private' },
]
</script>

<template>
  <!-- Desktop nav -->
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 h-nav transition-all duration-500',
      scrolled
        ? 'bg-coal/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-[1200px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="font-serif text-2xl font-light text-white tracking-wide">
        Ember <span class="text-ember">&</span> Oak
      </a>

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="text-[0.75rem] font-medium tracking-[0.12em] uppercase text-white/65 hover:text-white transition-colors duration-200 link-underline"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- CTA -->
      <div class="hidden md:flex items-center gap-4">
        <a
          href="#reservations"
          class="text-[0.75rem] font-medium tracking-[0.1em] uppercase px-5 py-2.5 bg-ember hover:bg-ember-dark text-white transition-colors duration-200 rounded-sm"
        >
          Reserve a Table
        </a>
      </div>

      <!-- Hamburger -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-1 text-white"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <span
          :class="['block h-px w-6 bg-white transition-all duration-300', menuOpen ? 'rotate-45 translate-y-2.5' : '']"
        />
        <span
          :class="['block h-px w-6 bg-white transition-all duration-300', menuOpen ? 'opacity-0' : '']"
        />
        <span
          :class="['block h-px w-6 bg-white transition-all duration-300', menuOpen ? '-rotate-45 -translate-y-2.5' : '']"
        />
      </button>
    </div>
  </nav>

  <!-- Mobile overlay -->
  <Transition
    enter-active-class="transition-all duration-500 ease-out-expo"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="menuOpen"
      class="fixed inset-0 z-40 bg-coal flex flex-col items-center justify-center gap-2"
    >
      <ul class="flex flex-col items-center gap-6 text-center">
        <li
          v-for="(link, i) in links"
          :key="link.href"
          :style="{ transitionDelay: `${i * 60}ms` }"
          class="opacity-0 translate-y-4 transition-all duration-500"
          :class="menuOpen ? 'opacity-100 translate-y-0' : ''"
        >
          <a
            :href="link.href"
            class="font-serif text-4xl font-light text-cream hover:text-ember-light transition-colors duration-200"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </li>
        <li
          :style="{ transitionDelay: `${links.length * 60}ms` }"
          class="mt-4 opacity-0 translate-y-4 transition-all duration-500"
          :class="menuOpen ? 'opacity-100 translate-y-0' : ''"
        >
          <a
            href="#reservations"
            class="inline-block px-8 py-3 bg-ember text-white text-[0.8rem] font-medium tracking-[0.1em] uppercase rounded-sm"
            @click="closeMenu"
          >
            Reserve a Table
          </a>
        </li>
      </ul>

      <!-- Address in corner -->
      <div class="absolute bottom-8 text-center">
        <p class="text-white/30 text-xs tracking-widest uppercase">417 Broadway Ave · Nashville, TN</p>
      </div>
    </div>
  </Transition>
</template>
