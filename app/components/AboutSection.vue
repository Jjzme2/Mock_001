<script setup lang="ts">
const { observe } = useReveal()

const stats = [
  { value: '150', unit: 'mi', label: 'Sourcing Radius' },
  { value: '18',  unit: '+',  label: 'Local Partners' },
  { value: '4',   unit: '',   label: 'Seasonal Menus' },
  { value: '12',  unit: 'yr', label: 'Of Craft' },
]
</script>

<template>
  <section id="about" class="py-24 lg:py-36 bg-cream overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-6 lg:px-12">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        <!-- Images -->
        <div :ref="el => observe(el as Element)" class="reveal relative">
          <!-- Main image -->
          <div class="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1000&q=80"
              alt="Chef Maya Aldren"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <!-- Inset image -->
          <div class="absolute -bottom-8 -right-6 w-48 h-48 lg:w-64 lg:h-64 overflow-hidden rounded-sm border-4 border-cream shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
              alt="Signature dish"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <!-- Floating badge -->
          <div class="absolute top-6 -left-6 bg-coal text-cream rounded-full w-24 h-24 flex flex-col items-center justify-center text-center shadow-xl">
            <span class="font-serif text-3xl font-light leading-none">12</span>
            <span class="text-[0.55rem] tracking-widest uppercase text-white/60 mt-1">Years of<br/>Craft</span>
          </div>
        </div>

        <!-- Text -->
        <div class="lg:pl-8">
          <p :ref="el => observe(el as Element)" class="reveal section-label">Our Story</p>
          <h2
            :ref="el => observe(el as Element)"
            class="reveal reveal-delay-1 heading-display text-coal mt-2 mb-8"
            style="font-size: clamp(2.2rem, 4vw, 3.4rem);"
          >
            Rooted in Tradition,<br />Driven by Curiosity
          </h2>

          <div :ref="el => observe(el as Element)" class="reveal reveal-delay-2 space-y-5">
            <p class="text-stone leading-relaxed">
              Chef Maya Aldren opened Ember & Oak with a single belief: that the best meals begin long before the kitchen. We source every ingredient from within 150 miles, partner with local farms, and let the seasons dictate our menu.
            </p>
            <p class="text-stone leading-relaxed">
              Our hearth — a seven-foot hand-built oak-burning fireplace — sits at the heart of the dining room. It is not merely a cooking vessel. It is the soul of everything we do.
            </p>
          </div>

          <!-- Signature -->
          <div :ref="el => observe(el as Element)" class="reveal reveal-delay-3 mt-8 flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1583394293214-bf1a4e4eabdd?w=80&q=80"
              alt="Chef Maya"
              class="w-12 h-12 rounded-full object-cover object-top"
            />
            <div>
              <p class="text-coal font-medium text-sm">Maya Aldren</p>
              <p class="text-stone text-xs tracking-wide">Executive Chef & Founder</p>
            </div>
          </div>

          <!-- Stats -->
          <div :ref="el => observe(el as Element)" class="reveal reveal-delay-4 mt-10 pt-10 border-t border-parchment grid grid-cols-4 gap-4">
            <div v-for="stat in stats" :key="stat.label" class="text-center lg:text-left">
              <p class="font-serif text-3xl font-light text-coal leading-none">
                {{ stat.value }}<span class="text-ember text-xl">{{ stat.unit }}</span>
              </p>
              <p class="text-stone text-xs tracking-wide mt-1">{{ stat.label }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
