// ============================================================
// useReveal.js — Animaciones de entrada al hacer scroll
// Agrega clase 'is-visible' cuando el elemento entra al viewport
// ============================================================
import { onMounted, onUnmounted } from 'vue'

export function useReveal(selector = '.reveal') {
  let observer = null

  onMounted(() => {
    const options = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          // Una vez visible, dejar de observar para performance
          observer.unobserve(entry.target)
        }
      })
    }, options)

    // Observar todos los elementos con la clase dada
    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}

// Función helper para usar en componentes individuales con templateRef
export function useRevealElement(elementRef) {
  let observer = null

  onMounted(() => {
    const el = elementRef.value
    if (!el) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    )

    observer.observe(el)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
