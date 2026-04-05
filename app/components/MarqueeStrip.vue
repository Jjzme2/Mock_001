<script setup lang="ts">
const items = [
  'Wood-Fired Cuisine',
  'Seasonally Sourced',
  'Nashville, TN',
  'Est. 2019',
  'Open Tues – Sun',
  'Private Dining Available',
]

// Duplicate for seamless loop
const doubled = [...items, ...items]
</script>

<template>
  <div class="bg-ember overflow-hidden py-3 select-none">
    <div class="flex animate-marquee whitespace-nowrap">
      <span
        v-for="(item, i) in doubled"
        :key="i"
        class="inline-flex items-center gap-5 px-8 text-white text-[0.7rem] font-medium tracking-[0.2em] uppercase"
      >
        {{ item }}
        <span class="text-ember-light/60 text-base leading-none">✦</span>
      </span>
    </div>
  </div>
</template>
