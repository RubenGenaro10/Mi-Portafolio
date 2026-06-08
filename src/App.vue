<script setup>
import { onMounted } from 'vue'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import { useTheme } from './composables/useTheme.js'
import { useScrollSpy } from './composables/useScrollSpy.js'
import { useReveal } from './composables/useReveal.js'

// Init theme on mount
const { initTheme } = useTheme()

// Scroll spy — track active section for nav
const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact']
const { activeSection } = useScrollSpy(sectionIds)

// Reveal animations on scroll
useReveal('.reveal')

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div id="main-app">
    <AppHeader :active-section="activeSection" />

    <main id="main-content" tabindex="-1">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<style>
/* Global app wrapper */
#main-app {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

#main-content {
  flex: 1;
  outline: none;
}

/* Ensure sections alternate background nicely */
#about { background: var(--color-bg); }
#projects { background: var(--color-bg); }
</style>
