<script setup lang="ts">
const { observe } = useReveal()

const hours = [
  { day: 'Tuesday – Thursday', time: '5:00 – 10:00 PM', open: true },
  { day: 'Friday – Saturday',  time: '5:00 – 11:00 PM', open: true },
  { day: 'Sunday',             time: '4:00 – 9:00 PM',  open: true },
  { day: 'Monday',             time: 'Closed',           open: false },
]

const form = reactive({
  firstName: '',
  lastName:  '',
  email:     '',
  phone:     '',
  date:      '',
  time:      '',
  guests:    '',
  notes:     '',
})

const state = ref<'idle' | 'submitting' | 'success'>('idle')

async function submit() {
  state.value = 'submitting'
  await new Promise(r => setTimeout(r, 1200))
  state.value = 'success'
  setTimeout(() => {
    state.value = 'idle'
    Object.assign(form, { firstName: '', lastName: '', email: '', phone: '', date: '', time: '', guests: '', notes: '' })
  }, 5000)
}

const timeSlots = ['5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM','10:00 PM']
const guestOptions = ['1 Guest','2 Guests','3 Guests','4 Guests','5 Guests','6 Guests','Large party (7+)']
</script>

<template>
  <section id="reservations" class="py-24 lg:py-36 bg-warm">
    <div class="max-w-[1200px] mx-auto px-6 lg:px-12">
      <div class="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-20 items-start">

        <!-- Info column -->
        <div>
          <p :ref="el => observe(el as Element)" class="reveal section-label">Reservations</p>
          <h2
            :ref="el => observe(el as Element)"
            class="reveal reveal-delay-1 heading-display text-coal mt-2 mb-10"
            style="font-size: clamp(2.2rem, 4vw, 3.4rem);"
          >
            Join Us for an<br />Unforgettable Evening
          </h2>

          <!-- Hours -->
          <div :ref="el => observe(el as Element)" class="reveal reveal-delay-2">
            <p class="text-[0.7rem] font-medium tracking-[0.16em] uppercase text-stone mb-4">Hours</p>
            <ul class="divide-y divide-parchment">
              <li
                v-for="h in hours"
                :key="h.day"
                class="flex justify-between items-center py-4"
              >
                <span :class="['text-sm font-medium', h.open ? 'text-coal' : 'text-stone/60']">{{ h.day }}</span>
                <span :class="['text-sm tabular-nums', h.open ? 'text-stone' : 'text-stone/40']">{{ h.time }}</span>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div :ref="el => observe(el as Element)" class="reveal reveal-delay-3 mt-10 space-y-3">
            <p class="text-[0.7rem] font-medium tracking-[0.16em] uppercase text-stone mb-4">Contact</p>
            <a href="https://maps.google.com" class="flex items-center gap-3 text-sm text-stone hover:text-ember transition-colors duration-200">
              <span class="w-4 text-center">📍</span> 417 Broadway Ave, Nashville, TN 37203
            </a>
            <a href="tel:6155550182" class="flex items-center gap-3 text-sm text-stone hover:text-ember transition-colors duration-200">
              <span class="w-4 text-center">📞</span> (615) 555-0182
            </a>
            <a href="mailto:hello@emberandoak.com" class="flex items-center gap-3 text-sm text-stone hover:text-ember transition-colors duration-200">
              <span class="w-4 text-center">✉️</span> hello@emberandoak.com
            </a>
          </div>
        </div>

        <!-- Form -->
        <div
          :ref="el => observe(el as Element)"
          class="reveal reveal-delay-1 bg-white rounded-sm shadow-[0_8px_60px_rgba(26,23,20,0.10)] p-8 lg:p-12"
        >
          <!-- Success state -->
          <Transition
            enter-active-class="transition-all duration-500 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
          >
            <div v-if="state === 'success'" class="text-center py-8">
              <div class="text-5xl mb-4">🕯️</div>
              <h3 class="font-serif text-2xl text-coal mb-3">Request Received</h3>
              <p class="text-stone text-sm leading-relaxed">
                Thank you! We'll confirm your reservation<br />by email within 2 hours.
              </p>
            </div>
          </Transition>

          <form v-if="state !== 'success'" @submit.prevent="submit" novalidate>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label class="form-label">First Name</label>
                <input v-model="form.firstName" type="text" placeholder="Jane" class="form-input" required />
              </div>
              <div>
                <label class="form-label">Last Name</label>
                <input v-model="form.lastName"  type="text" placeholder="Doe"  class="form-input" required />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label class="form-label">Email</label>
                <input v-model="form.email" type="email" placeholder="jane@example.com" class="form-input" required />
              </div>
              <div>
                <label class="form-label">Phone</label>
                <input v-model="form.phone" type="tel" placeholder="(615) 555-0000" class="form-input" />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label class="form-label">Date</label>
                <input v-model="form.date" type="date" class="form-input" required />
              </div>
              <div>
                <label class="form-label">Time</label>
                <select v-model="form.time" class="form-input" required>
                  <option value="">Select time</option>
                  <option v-for="t in timeSlots" :key="t">{{ t }}</option>
                </select>
              </div>
            </div>

            <div class="mb-4">
              <label class="form-label">Guests</label>
              <select v-model="form.guests" class="form-input" required>
                <option value="">Select guests</option>
                <option v-for="g in guestOptions" :key="g">{{ g }}</option>
              </select>
            </div>

            <div class="mb-6">
              <label class="form-label">Special Requests</label>
              <textarea
                v-model="form.notes"
                rows="3"
                placeholder="Dietary restrictions, celebrations, seating preferences…"
                class="form-input resize-none"
              />
            </div>

            <button
              type="submit"
              :disabled="state === 'submitting'"
              class="w-full py-4 bg-ember hover:bg-ember-dark disabled:bg-ember/60 text-white text-sm font-medium tracking-[0.12em] uppercase transition-all duration-200 rounded-sm flex items-center justify-center gap-3"
            >
              <span v-if="state === 'submitting'" class="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              {{ state === 'submitting' ? 'Sending…' : 'Request Reservation' }}
            </button>

            <p class="text-center text-stone/50 text-xs mt-4">
              Reservations confirmed by email within 2 hours.
            </p>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.form-label {
  @apply block text-[0.7rem] font-medium tracking-[0.1em] uppercase text-stone mb-1.5;
}
.form-input {
  @apply w-full px-4 py-3 border border-parchment rounded-sm text-sm text-coal bg-cream focus:outline-none focus:border-ember focus:bg-white transition-colors duration-200;
  appearance: none;
}
</style>
