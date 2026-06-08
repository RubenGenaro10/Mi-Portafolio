<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../../composables/useTheme.js'
import { config } from '../../data/config.js'

const { isDark, toggleTheme } = useTheme()

const menuOpen = ref(false)
const scrolled = ref(false)

const props = defineProps({
  activeSection: { type: String, default: 'hero' },
})

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

function closeMenu() {
  menuOpen.value = false
  document.body.style.overflow = ''
}

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <!-- Skip link for accessibility -->
  <a href="#hero" class="skip-link sr-only">Saltar al contenido principal</a>

  <header class="site-header" :class="{ 'header-scrolled': scrolled }">
    <div class="container header-inner">
      <!-- Logo -->
      <a href="#hero" class="logo" @click="closeMenu" aria-label="Ir al inicio">
        <span class="logo-mark" aria-hidden="true">&lt;/&gt;</span>
        <span class="logo-name">{{ config.name.split(' ')[0] }}</span>
      </a>

      <!-- Desktop nav -->
      <nav class="nav-desktop" aria-label="Navegación principal">
        <a
          v-for="link in config.navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link"
          :class="{ 'nav-link-active': activeSection === link.href.slice(1) }"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Actions -->
      <div class="header-actions">
        <!-- Theme toggle -->
        <button
          id="theme-toggle"
          class="icon-btn"
          :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
          @click="toggleTheme"
        >
          <!-- Sun icon (light mode) -->
          <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
          </svg>
          <!-- Moon icon (dark mode) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
          </svg>
        </button>

        <!-- CTA Button (desktop) -->
        <a
          :href="config.github"
          target="_blank"
          rel="noopener noreferrer"
          class="header-cta"
          aria-label="Ver GitHub"
        >
          GitHub
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M7 7h10v10M7 17 17 7"/>
          </svg>
        </a>

        <!-- Hamburger (mobile) -->
        <button
          id="mobile-menu-btn"
          class="icon-btn hamburger"
          :class="{ 'is-open': menuOpen }"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
          @click="toggleMenu"
        >
          <span class="bar bar-1"></span>
          <span class="bar bar-2"></span>
          <span class="bar bar-3"></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile menu overlay -->
  <Transition name="overlay">
    <div
      v-if="menuOpen"
      class="mobile-overlay"
      aria-hidden="true"
      @click="closeMenu"
    />
  </Transition>

  <!-- Mobile menu panel -->
  <Transition name="slide">
    <nav
      v-if="menuOpen"
      id="mobile-menu"
      class="mobile-menu"
      aria-label="Menú móvil"
    >
      <div class="mobile-menu-header">
        <span class="logo-name">{{ config.name }}</span>
        <button class="icon-btn" aria-label="Cerrar menú" @click="closeMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <ul class="mobile-nav-list">
        <li v-for="link in config.navLinks" :key="link.href">
          <a
            :href="link.href"
            class="mobile-nav-link"
            :class="{ 'mobile-nav-link-active': activeSection === link.href.slice(1) }"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="mobile-menu-footer">
        <a :href="config.github" target="_blank" rel="noopener noreferrer" class="mobile-social-link">
          GitHub
        </a>
        <a :href="config.linkedin" target="_blank" rel="noopener noreferrer" class="mobile-social-link">
          LinkedIn
        </a>
        <a :href="`mailto:${config.email}`" class="mobile-social-link">
          Email
        </a>
      </div>
    </nav>
  </Transition>
</template>

<style scoped>
/* Header base */
.site-header {
  position: sticky;
  top: 0;
  z-index: var(--z-header);
  border-bottom: 1px solid transparent;
  background: transparent;
  transition:
    background-color var(--transition-slow),
    border-color var(--transition-slow),
    backdrop-filter var(--transition-slow);
}

.header-scrolled {
  background: color-mix(in srgb, var(--color-bg) 85%, transparent);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom-color: var(--color-border);
  box-shadow: var(--shadow-soft);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

/* Logo */
.logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-weight: var(--font-bold);
  color: var(--color-text);
  transition: color var(--transition-fast);
  text-decoration: none;
}

.logo:hover { color: var(--color-accent); }

.logo-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--color-accent);
  color: #fff;
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
}

.logo-name {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
}

/* Desktop nav */
.nav-desktop {
  display: none;
  align-items: center;
  gap: var(--space-1);
}

@media (min-width: 768px) {
  .nav-desktop { display: flex; }
}

.nav-link {
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-muted);
  border-radius: var(--radius-lg);
  transition: color var(--transition-fast), background-color var(--transition-fast);
  text-decoration: none;
}

.nav-link:hover {
  color: var(--color-text);
  background: var(--color-surface-muted);
}

.nav-link-active {
  color: var(--color-accent) !important;
  background: var(--color-accent-muted) !important;
}

/* Header actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

/* Icon button */
.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface-elevated);
  color: var(--color-text-muted);
  cursor: pointer;
  transition: background-color var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
}

.icon-btn:hover {
  background: var(--color-surface-muted);
  color: var(--color-text);
  border-color: var(--color-border-hover);
}

/* Header CTA */
.header-cta {
  display: none;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-xl);
  background: var(--color-accent-muted);
  transition: background-color var(--transition-fast), box-shadow var(--transition-fast);
  text-decoration: none;
}

.header-cta:hover {
  background: var(--color-accent);
  color: #fff;
  box-shadow: var(--shadow-accent);
}

@media (min-width: 768px) {
  .header-cta { display: inline-flex; }
}

/* Hamburger */
.hamburger {
  flex-direction: column;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: var(--space-2);
}

@media (min-width: 768px) {
  .hamburger { display: none; }
}

.bar {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: transform var(--transition-base), opacity var(--transition-base);
}

.hamburger.is-open .bar-1 {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.is-open .bar-2 {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger.is-open .bar-3 {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile overlay */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: calc(var(--z-header) - 1);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

/* Mobile menu panel */
.mobile-menu {
  position: fixed;
  inset-block: 0;
  right: 0;
  z-index: var(--z-header);
  width: min(320px, 85vw);
  background: var(--color-surface-elevated);
  border-left: 1px solid var(--color-border);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  overflow-y: auto;
}

.mobile-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-nav-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  flex: 1;
}

.mobile-nav-link {
  display: block;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-text-muted);
  border-radius: var(--radius-xl);
  transition: color var(--transition-fast), background-color var(--transition-fast);
  text-decoration: none;
}

.mobile-nav-link:hover,
.mobile-nav-link-active {
  color: var(--color-accent);
  background: var(--color-accent-muted);
}

.mobile-menu-footer {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-6);
}

.mobile-social-link {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  transition: color var(--transition-fast);
  text-decoration: none;
}

.mobile-social-link:hover { color: var(--color-accent); }

/* Transitions */
.overlay-enter-active,
.overlay-leave-active { transition: opacity var(--transition-base); }
.overlay-enter-from,
.overlay-leave-to { opacity: 0; }

.slide-enter-active,
.slide-leave-active { transition: transform var(--transition-slow); }
.slide-enter-from,
.slide-leave-to { transform: translateX(100%); }

/* Skip link */
.skip-link:focus {
  position: fixed;
  top: var(--space-4);
  left: var(--space-4);
  z-index: calc(var(--z-header) + 1);
  padding: var(--space-2) var(--space-4);
  background: var(--color-accent);
  color: #fff;
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
}
</style>
