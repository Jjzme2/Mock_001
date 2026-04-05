<script setup lang="ts">
import { menuSections } from '~/data/menu'

const activeTab = ref('starters')
const activeSection = computed(() => menuSections.find(s => s.id === activeTab.value))

const { observe } = useReveal()

const dietaryLabel: Record<string, string> = {
  v:  'Vegetarian',
  gf: 'Gluten-Free',
}
</script>

<template>
  <section id="menu" class="py-24 lg:py-36 bg-coal text-cream overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div :ref="el => observe(el as Element)" class="reveal text-center mb-16">
        <p class="section-label section-label--light">Spring Menu 2026</p>
        <h2
          class="heading-display text-cream mt-2"
          style="font-size: clamp(2.2rem, 4vw, 3.4rem);"
        >
          A Taste of the Season
        </h2>
        <p class="text-white/45 mt-4 max-w-md mx-auto text-sm leading-relaxed">
          Our menu changes with every harvest. Please inform your server of any dietary restrictions.
        </p>
      </div>

      <!-- Tabs -->
      <div :ref="el => observe(el as Element)" class="reveal flex justify-center mb-12">
        <div class="flex border border-white/10 rounded-sm overflow-hidden">
          <button
            v-for="section in menuSections"
            :key="section.id"
            :class="[
              'px-8 py-3 text-[0.75rem] font-medium tracking-[0.12em] uppercase transition-all duration-200',
              activeTab === section.id
                ? 'bg-ember text-white'
                : 'text-white/45 hover:text-white hover:bg-white/5',
            ]"
            @click="activeTab = section.id"
          >
            {{ section.label }}
          </button>
        </div>
      </div>

      <!-- Menu items grid -->
      <Transition
        enter-active-class="transition-all duration-400 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        mode="out-in"
      >
        <div
          v-if="activeSection"
          :key="activeSection.id"
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5"
        >
          <div
            v-for="item in activeSection.items"
            :key="item.name"
            class="relative bg-coal p-8 group hover:bg-white/[0.03] transition-colors duration-300"
          >
            <!-- Tag -->
            <div v-if="item.tag" class="mb-3">
              <span class="inline-block text-[0.62rem] font-medium tracking-widest uppercase px-3 py-1 rounded-full bg-ember/20 text-ember-light border border-ember/30">
                {{ item.tag }}
              </span>
            </div>

            <div class="flex justify-between items-baseline gap-4 mb-3">
              <h3 class="font-serif text-xl font-light text-cream group-hover:text-white transition-colors duration-200">
                {{ item.name }}
              </h3>
              <span class="font-serif text-xl text-ember-light shrink-0">${{ item.price }}</span>
            </div>

            <p class="text-white/40 text-sm leading-relaxed">{{ item.description }}</p>

            <!-- Dietary icons -->
            <div v-if="item.dietary?.length" class="mt-4 flex gap-2">
              <span
                v-for="d in item.dietary"
                :key="d"
                :title="dietaryLabel[d]"
                class="text-[0.6rem] font-semibold tracking-wider px-1.5 py-0.5 border border-white/15 text-white/35 rounded"
              >
                {{ d.toUpperCase() }}
              </span>
            </div>

            <!-- Hover accent line -->
            <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-ember/0 via-ember/50 to-ember/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
          </div>
        </div>
      </Transition>

      <!-- Footer CTA -->
      <div :ref="el => observe(el as Element)" class="reveal mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t border-white/8">
        <div>
          <p class="text-white/30 text-xs tracking-widest uppercase">Tasting menus available for parties of 6+</p>
          <p class="text-white/20 text-xs mt-1">Prices subject to seasonal change · Service charge not included</p>
        </div>
        <a
          href="#reservations"
          class="shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-ember text-white/60 hover:text-white text-[0.75rem] tracking-widest uppercase transition-all duration-200 rounded-sm group"
        >
          Reserve Your Table
          <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
      </div>

    </div>
  </section>
</template>
