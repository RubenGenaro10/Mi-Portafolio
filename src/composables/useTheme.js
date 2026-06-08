// ============================================================
// useTheme.js — Dark / Light mode toggle
// Persiste preferencia en localStorage
// ============================================================
import { ref, watchEffect } from 'vue'

const STORAGE_KEY = 'portfolio-theme'

const isDark = ref(false)

function initTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = stored ? stored === 'dark' : systemDark !== false // default dark
}

function toggleTheme() {
  isDark.value = !isDark.value
}

watchEffect(() => {
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem(STORAGE_KEY, theme)
})

export function useTheme() {
  return { isDark, toggleTheme, initTheme }
}
