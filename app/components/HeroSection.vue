<script setup lang="ts">
const { y: scrollY } = useWindowScroll()
const parallaxY = computed(() => scrollY.value * 0.35)
</script>

<template>
  <section id="hero" class="relative h-screen min-h-[640px] overflow-hidden flex items-center">

    <!-- Parallax background -->
    <div
      class="absolute inset-0 scale-110"
      :style="{ transform: `scale(1.1) translateY(${parallaxY}px)` }"
    >
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&q=85"
        alt="Ember & Oak restaurant interior"
        class="absolute inset-0 w-full h-full object-cover object-center"
        fetchpriority="high"
      />
    </div>

    <!-- Multi-layer gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-coal/90 via-coal/55 to-transparent" />
    <div class="absolute inset-0 bg-gradient-to-t from-coal/70 via-transparent to-coal/20" />

    <!-- Content -->
    <div class="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 pt-nav">
      <div class="max-w-2xl">
        <p class="section-label section-label--light animate-fade-in" style="animation-delay:0.3s; opacity:0; animation-fill-mode:forwards">
          Est. 2019 · Nashville, Tennessee
        </p>

        <h1
          class="heading-display text-white mt-4 animate-fade-up"
          style="font-size: clamp(3rem, 7vw, 5.5rem); animation-delay:0.5s; opacity:0; animation-fill-mode:forwards"
        >
          Where Fire<br />
          Meets <em class="text-ember-light not-italic">Seasonal Craft</em>
        </h1>

        <p
          class="mt-6 text-white/70 text-lg leading-relaxed max-w-md animate-fade-up"
          style="animation-delay:0.7s; opacity:0; animation-fill-mode:forwards"
        >
          Wood-fired cuisine rooted in the Southern tradition,<br class="hidden sm:block" />
          elevated with modern technique and honest ingredients.
        </p>

        <div
          class="mt-10 flex flex-wrap gap-4 animate-fade-up"
          style="animation-delay:0.9s; opacity:0; animation-fill-mode:forwards"
        >
          <a
            href="#reservations"
            class="inline-flex items-center gap-2 px-7 py-3.5 bg-ember hover:bg-ember-dark text-white text-sm font-medium tracking-widest uppercase transition-all duration-200 rounded-sm group"
          >
            Reserve a Table
            <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <a
            href="#menu"
            class="inline-flex items-center px-7 py-3.5 border border-white/30 hover:border-white/70 text-white text-sm font-medium tracking-widest uppercase transition-all duration-200 rounded-sm"
          >
            View Menu
          </a>
        </div>

        <!-- Awards / press strip -->
        <div
          class="mt-14 flex items-center gap-6 animate-fade-in"
          style="animation-delay:1.2s; opacity:0; animation-fill-mode:forwards"
        >
          <div class="h-px w-8 bg-white/30" />
          <span class="text-white/40 text-[0.68rem] tracking-[0.18em] uppercase">As featured in</span>
          <div class="flex items-center gap-5 text-white/35 text-[0.7rem] font-medium tracking-widest uppercase">
            <span>Bon Appétit</span>
            <span class="text-white/20">·</span>
            <span>Nashville Scene</span>
            <span class="text-white/20">·</span>
            <span>Food & Wine</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll cue -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
      <span class="text-white/35 text-[0.65rem] tracking-[0.2em] uppercase">Scroll</span>
      <div class="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-bob" />
    </div>

    <!-- Right edge decorative year -->
    <div
      class="absolute right-8 bottom-1/2 translate-y-1/2 text-white/10 font-serif text-[7rem] font-light leading-none select-none hidden lg:block"
      style="writing-mode: vertical-rl;"
    >
      2019
    </div>
  </section>
</template>
