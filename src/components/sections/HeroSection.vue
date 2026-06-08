<script setup>
import { onMounted, ref } from 'vue'
import AppButton from '../ui/AppButton.vue'
import { config } from '../../data/config.js'

// Animación de contadores
const counters = ref(config.stats.map(() => 0))

function animateCounter(index, target, duration = 1800) {
  const start = performance.now()
  const update = (time) => {
    const elapsed = time - start
    const progress = Math.min(elapsed / duration, 1)
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3)
    counters.value[index] = Math.round(eased * target)
    if (progress < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

onMounted(() => {
  // Delay inicial para que se vea la animación de entrada
  setTimeout(() => {
    config.stats.forEach((stat, i) => {
      setTimeout(() => animateCounter(i, stat.value), i * 150)
    })
  }, 600)
})
</script>

<template>
  <section id="hero" class="hero-section" aria-label="Presentación">
    <!-- Background orbs -->
    <div class="hero-bg" aria-hidden="true">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      <div class="hero-grid"></div>
    </div>

    <div class="container hero-inner">
      <!-- Left: Text content -->
      <div class="hero-content">
        <!-- Available badge -->
        <div v-if="config.available" class="available-badge" aria-label="Estado de disponibilidad">
          <span class="pulse-dot" aria-hidden="true"></span>
          {{ config.availableText }}
        </div>

        <!-- Heading -->
        <h1 class="hero-title">
          <span class="hero-name">{{ config.name }}</span>
          <span class="hero-role gradient-text">{{ config.role }}</span>
        </h1>

        <!-- Description -->
        <p class="hero-bio">{{ config.bioShort }}</p>

        <!-- CTAs -->
        <div class="hero-ctas">
          <AppButton href="#projects" variant="primary" size="lg">
            Ver proyectos
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </AppButton>

          <AppButton href="#contact" variant="ghost" size="lg">
            Contactarme
          </AppButton>

        </div>

        <!-- Social links -->
        <div class="hero-socials">
          <a :href="config.github" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a :href="config.linkedin" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a v-if="config.twitter" :href="config.twitter" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Twitter / X">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a :href="`mailto:${config.email}`" class="social-link" aria-label="Correo electrónico">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Right: Avatar -->
      <div class="hero-avatar-wrap" aria-hidden="true">
        <div class="avatar-glow"></div>
        <div class="avatar-ring"></div>
        <img
          src="/images/avatar.png"
          alt="Foto de perfil"
          class="avatar-img"
          width="400"
          height="400"
          loading="eager"
        />
        <!-- Floating tech badges -->
        <div class="tech-badge tech-badge-vue">Spring Boot</div>
        <div class="tech-badge tech-badge-js">Flutter</div>
        <div class="tech-badge tech-badge-css">Vue.js</div>
      </div>
    </div>

    <!-- Stats bar -->
    <div class="container">
      <div class="hero-stats" role="list" aria-label="Estadísticas">
        <div
          v-for="(stat, i) in config.stats"
          :key="stat.label"
          class="stat-item"
          role="listitem"
        >
          <span class="stat-value">
            <span :aria-label="`${stat.value}${stat.suffix}`">{{ counters[i] }}{{ stat.suffix }}</span>
          </span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section */
.hero-section {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding-block: var(--space-24) var(--space-8);
}

/* Background */
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}

.orb-1 {
  width: 600px;
  height: 600px;
  top: -200px;
  right: -100px;
  background: var(--orb-1);
  animation: orbFloat1 14s ease-in-out infinite;
}

.orb-2 {
  width: 400px;
  height: 400px;
  bottom: -100px;
  left: -80px;
  background: var(--orb-2);
  animation: orbFloat2 18s ease-in-out infinite;
}

.orb-3 {
  width: 300px;
  height: 300px;
  top: 40%;
  left: 40%;
  background: var(--orb-3);
  animation: orbFloat3 22s ease-in-out infinite;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--color-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, transparent 70%);
  opacity: 0.5;
}

/* Inner layout */
.hero-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
  align-items: center;
  padding-block: var(--space-12);
}

@media (min-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1.1fr 0.9fr;
    gap: var(--space-16);
  }
}

/* Content */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  animation: fadeInUp 0.8s ease both;
}

/* Available badge */
.available-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  width: fit-content;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  background: var(--color-surface-elevated);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-muted);
  backdrop-filter: blur(8px);
  animation: fadeIn 0.6s ease 0.2s both;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-teal);
  animation: pulseDot 2s ease-in-out infinite;
  flex-shrink: 0;
}

/* Title */
.hero-title {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: fadeInUp 0.8s ease 0.1s both;
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: var(--font-extrabold);
  color: var(--color-text);
  line-height: 1.1;
}

.hero-role {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: var(--font-bold);
  line-height: 1.2;
}

/* Bio */
.hero-bio {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  line-height: 1.7;
  max-width: 520px;
  animation: fadeInUp 0.8s ease 0.2s both;
}

/* CTAs */
.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  animation: fadeInUp 0.8s ease 0.3s both;
}

/* Social links */
.hero-socials {
  display: flex;
  gap: var(--space-3);
  animation: fadeInUp 0.8s ease 0.4s both;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface-elevated);
  color: var(--color-text-muted);
  transition: color var(--transition-fast), background-color var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast);
  text-decoration: none;
}

.social-link:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: var(--color-accent-muted);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--color-accent-glow);
}

/* Avatar */
.hero-avatar-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: scaleIn 0.8s ease 0.3s both;
}

.avatar-glow {
  position: absolute;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--color-accent-glow), transparent 70%);
  animation: pulseGlow 4s ease-in-out infinite;
}

.avatar-ring {
  position: absolute;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  border: 1.5px solid var(--color-accent);
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

.avatar-img {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-accent);
  box-shadow: var(--shadow-glow);
  animation: float 6s ease-in-out infinite;
}

@media (min-width: 768px) {
  .avatar-img { width: 360px; height: 360px; }
  .avatar-ring { width: 420px; height: 420px; }
  .avatar-glow { width: 400px; height: 400px; }
}

/* Floating tech badges */
.tech-badge {
  position: absolute;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  border: 1px solid var(--color-border);
  backdrop-filter: blur(8px);
  background: var(--color-surface-elevated);
  color: var(--color-text);
  box-shadow: var(--shadow-card);
  white-space: nowrap;
}

.tech-badge-vue {
  bottom: 10%;
  left: 5%;
  color: #42b883;
  border-color: #42b883;
  animation: float 5s ease-in-out infinite 0.5s;
}

.tech-badge-js {
  top: 15%;
  right: 5%;
  color: #f7df1e;
  border-color: #f7df1e;
  background: rgba(247, 223, 30, 0.08);
  animation: float 5s ease-in-out infinite 1s;
}

.tech-badge-css {
  top: 55%;
  left: 0;
  color: var(--color-teal);
  border-color: var(--color-teal);
  background: var(--color-teal-muted);
  animation: float 5s ease-in-out infinite 1.5s;
}

/* Stats */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
  margin-top: var(--space-10);
  padding: var(--space-6) var(--space-8);
  border-radius: var(--radius-2xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  backdrop-filter: blur(12px);
  animation: fadeInUp 0.8s ease 0.5s both;
}

@media (min-width: 640px) {
  .hero-stats { grid-template-columns: repeat(4, 1fr); }
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-1);
  padding: var(--space-2);
}

.stat-item:not(:last-child) {
  border-right: 1px solid var(--color-border);
}

@media (max-width: 639px) {
  .stat-item:nth-child(2) { border-right: none; }
}

.stat-value {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: var(--font-extrabold);
  color: var(--color-accent);
  line-height: 1;
}

.stat-label {
  font-size: var(--text-xs);
  color: var(--color-text-subtle);
  text-align: center;
  line-height: 1.3;
}
</style>
