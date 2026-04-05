<script setup lang="ts">
const year = new Date().getFullYear()

const navLinks = [
  { label: 'About',           href: '#about' },
  { label: 'Menu',            href: '#menu' },
  { label: 'Gallery',         href: '#gallery' },
  { label: 'Private Dining',  href: '#private' },
  { label: 'Reservations',    href: '#reservations' },
  { label: 'Gift Cards',      href: '#' },
  { label: 'Press',           href: '#' },
  { label: 'Careers',         href: '#' },
]
</script>

<template>
  <footer class="bg-coal text-white">

    <!-- Main footer -->
    <div class="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
      <div class="grid lg:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-8">

        <!-- Brand -->
        <div>
          <p class="font-serif text-3xl font-light tracking-wide">
            Ember <span class="text-ember">&</span> Oak
          </p>
          <p class="text-white/40 text-sm mt-3 leading-relaxed max-w-xs">
            Wood-fired cuisine rooted in the Southern tradition, elevated with modern technique and honest ingredients.
          </p>
          <!-- Socials -->
          <div class="flex gap-3 mt-6">
            <a
              v-for="s in ['IG', 'FB', 'TW']"
              :key="s"
              href="#"
              class="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[0.65rem] font-semibold text-white/40 hover:border-ember hover:text-ember transition-all duration-200"
            >
              {{ s }}
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <p class="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-white/30 mb-5">Navigate</p>
          <ul class="space-y-3">
            <li v-for="link in navLinks.slice(0, 4)" :key="link.href">
              <a :href="link.href" class="text-sm text-white/50 hover:text-white transition-colors duration-200">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-white/30 mb-5">Information</p>
          <ul class="space-y-3">
            <li v-for="link in navLinks.slice(4)" :key="link.href">
              <a :href="link.href" class="text-sm text-white/50 hover:text-white transition-colors duration-200">
                {{ link.label }}
              </a>
            </li>
          </ul>
          <!-- Address -->
          <div class="mt-8 space-y-2">
            <p class="text-white/30 text-xs">417 Broadway Ave</p>
            <p class="text-white/30 text-xs">Nashville, TN 37203</p>
            <a href="tel:6155550182" class="text-white/30 text-xs hover:text-white/60 transition-colors duration-200 block">(615) 555-0182</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/[0.06] py-5">
      <div class="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-white/25 text-xs">
          © {{ year }} Ember & Oak. All rights reserved.
        </p>
        <div class="flex items-center gap-4">
          <span class="inline-flex items-center gap-1.5 text-ember-light/50 text-[0.65rem] tracking-widest uppercase bg-ember/10 border border-ember/20 px-2.5 py-1 rounded-full">
            ✦ Mock Portfolio Site
          </span>
          <a href="#" class="text-white/25 text-xs hover:text-white/50 transition-colors duration-200">Privacy</a>
          <a href="#" class="text-white/25 text-xs hover:text-white/50 transition-colors duration-200">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>
