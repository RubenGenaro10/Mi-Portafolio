<script setup>
import { ref } from 'vue'
import AppButton from '../ui/AppButton.vue'
import AppBadge from '../ui/AppBadge.vue'
import { config } from '../../data/config.js'
import { technicalSkills } from '../../data/skills.js'

// Mostrar solo las primeras 6 skills como preview
const previewSkills = technicalSkills.slice(0, 6)
</script>

<template>
  <section id="about" class="section" aria-label="Sobre mí">
    <div class="container about-inner">
      <!-- Avatar / Image side -->
      <div class="about-image reveal" aria-hidden="true">
        <div class="image-frame">
          <img
            src="/images/avatar.png"
            :alt="`Foto de ${config.name}`"
            class="about-photo"
            width="480"
            height="480"
            loading="lazy"
          />
          <!-- Decoration -->
          <div class="image-decoration deco-1"></div>
          <div class="image-decoration deco-2"></div>
        </div>

        <!-- Experience card (floating) -->
        <div class="exp-card card" role="complementary" aria-label="Experiencia">
          <div class="exp-card-icon" aria-hidden="true">⚡</div>
          <div>
            <p class="exp-card-value">{{ config.stats[2]?.value }}+ años</p>
            <p class="exp-card-label">de experiencia</p>
          </div>
        </div>
      </div>

      <!-- Text side -->
      <div class="about-content">
        <p class="section-label reveal reveal-delay-1">Sobre mí</p>
        <h2 class="section-title reveal reveal-delay-2">
          Construyo con pasión,<br />
          <span class="gradient-text">código y curiosidad</span>
        </h2>

        <p class="about-bio reveal reveal-delay-3">{{ config.bio }}</p>

        <p class="about-bio reveal reveal-delay-4">
          Me especializo en arquitecturas <strong>Full Stack</strong> con dominio en el ecosistema <strong>Java / Spring Boot</strong> y <strong>.NET</strong> en backend, junto con <strong>Vue.js, React y Angular</strong> en frontend. En mobile desarrollo con <strong>Flutter</strong> (Dart) y <strong>Android nativo</strong> (Kotlin), lo que me permite entregar soluciones completas end-to-end.
        </p>

        <!-- Info chips -->
        <div class="about-info reveal reveal-delay-5">
          <div class="info-chip">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {{ config.location }}
          </div>
          <div v-if="config.available" class="info-chip info-chip-available">
            <span class="pulse-dot" aria-hidden="true"></span>
            {{ config.availableText }}
          </div>
        </div>

        <!-- Tech stack preview -->
        <div class="about-skills reveal reveal-delay-5">
          <p class="skills-label">Stack principal</p>
          <div class="skills-list">
            <AppBadge
              v-for="skill in previewSkills"
              :key="skill.name"
              :label="skill.name"
              variant="accent"
            />
          </div>
        </div>

        <!-- CTAs -->
        <div class="about-ctas reveal reveal-delay-5">
          <AppButton href="#contact" variant="primary">
            Hablemos
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </AppButton>
          <AppButton
            :href="config.github"
            variant="ghost"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            Ver GitHub
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-16);
  align-items: center;
}

@media (min-width: 1024px) {
  .about-inner {
    grid-template-columns: 1fr 1fr;
  }
}

/* Image side */
.about-image {
  position: relative;
  display: flex;
  justify-content: center;
}

.image-frame {
  position: relative;
  width: fit-content;
}

.about-photo {
  width: min(400px, 100%);
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius-3xl);
  border: 2px solid var(--color-border);
  box-shadow: var(--shadow-card);
  position: relative;
  z-index: 1;
  animation: float 7s ease-in-out infinite;
}

.image-decoration {
  position: absolute;
  border-radius: var(--radius-3xl);
}

.deco-1 {
  inset: -12px -12px 12px 12px;
  background: var(--color-accent-muted);
  border: 1px solid var(--color-accent);
  opacity: 0.4;
  z-index: 0;
}

.deco-2 {
  inset: -24px -24px 24px 24px;
  border: 1px solid var(--color-border);
  z-index: 0;
}

/* Experience card */
.exp-card {
  position: absolute;
  bottom: -20px;
  right: -20px;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  z-index: 2;
  animation: float 5s ease-in-out infinite 1s;
}

@media (max-width: 640px) {
  .exp-card { right: 0; }
}

.exp-card-icon {
  font-size: 1.5rem;
  line-height: 1;
}

.exp-card-value {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  color: var(--color-accent);
  line-height: 1;
}

.exp-card-label {
  font-size: var(--text-xs);
  color: var(--color-text-subtle);
  margin-top: 2px;
}

/* Content side */
.about-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.about-bio {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  line-height: 1.8;
}

.about-bio strong {
  color: var(--color-accent);
  font-weight: var(--font-semibold);
}

/* Info chips */
.about-info {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.info-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  background: var(--color-surface-elevated);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.info-chip-available {
  border-color: var(--color-teal);
  color: var(--color-teal);
  background: var(--color-teal-muted);
}

.pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-teal);
  animation: pulseDot 2s ease-in-out infinite;
  flex-shrink: 0;
}

/* Skills preview */
.about-skills { display: flex; flex-direction: column; gap: var(--space-3); }

.skills-label {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-text-subtle);
}

.skills-list { display: flex; flex-wrap: wrap; gap: var(--space-2); }

/* CTAs */
.about-ctas { display: flex; flex-wrap: wrap; gap: var(--space-3); }
</style>
