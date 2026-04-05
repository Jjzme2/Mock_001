/**
 * useReveal — Intersection Observer based scroll-reveal.
 * Attach the returned `containerRef` to a wrapper element,
 * then call `observe(el)` on each child you want animated.
 */
export function useReveal() {
  const observer = ref<IntersectionObserver | null>(null)

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )
  })

  onUnmounted(() => observer.value?.disconnect())

  function observe(el: Element | null) {
    if (el) observer.value?.observe(el)
  }

  return { observe }
}
