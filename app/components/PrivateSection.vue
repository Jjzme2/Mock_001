<script setup lang="ts">
const { observe } = useReveal()

const perks = [
  { icon: '🕯️', title: 'Dedicated Sommelier', desc: 'Our wine director curates a bespoke pairing for your event.' },
  { icon: '🍽️', title: 'Custom Menu',          desc: 'Work with Chef Maya to craft a menu around your occasion.' },
  { icon: '🎶', title: 'Live Music Option',    desc: 'Intimate acoustic performances available on request.' },
  { icon: '📸', title: 'Photography Package',  desc: 'In-house photographer available to document your evening.' },
]
</script>

<template>
  <section id="private" class="relative py-24 lg:py-36 overflow-hidden">

    <!-- Background -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=2000&q=80"
        alt="Private dining"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-coal/88" />
    </div>

    <div class="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">
      <div class="max-w-xl mb-16">
        <p :ref="el => observe(el as Element)" class="reveal section-label section-label--light">
          Private Dining
        </p>
        <h2
          :ref="el => observe(el as Element)"
          class="reveal reveal-delay-1 heading-display text-white mt-2"
          style="font-size: clamp(2.2rem, 4vw, 3.4rem);"
        >
          Celebrate Something Extraordinary
        </h2>
        <p :ref="el => observe(el as Element)" class="reveal reveal-delay-2 text-white/55 mt-5 leading-relaxed">
          Our private dining room seats up to 24 guests in an intimate, candlelit setting. From corporate dinners to milestone celebrations, we make it unforgettable.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="(perk, i) in perks"
          :key="perk.title"
          :ref="el => observe(el as Element)"
          :class="`reveal reveal-delay-${i + 1}`"
          class="bg-white/[0.06] backdrop-blur-sm border border-white/10 p-6 rounded-sm hover:bg-white/[0.09] transition-colors duration-300"
        >
          <span class="text-2xl block mb-3">{{ perk.icon }}</span>
          <h3 class="font-serif text-lg text-white font-light mb-2">{{ perk.title }}</h3>
          <p class="text-white/45 text-sm leading-relaxed">{{ perk.desc }}</p>
        </div>
      </div>

      <div :ref="el => observe(el as Element)" class="reveal mt-10">
        <a
          href="#reservations"
          class="inline-flex items-center gap-2 px-7 py-3.5 bg-ember hover:bg-ember-dark text-white text-sm font-medium tracking-widest uppercase transition-all duration-200 rounded-sm group"
        >
          Enquire About Private Dining
          <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
      </div>
    </div>
  </section>
</template>
