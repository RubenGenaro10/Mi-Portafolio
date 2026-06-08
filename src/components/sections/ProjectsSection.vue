<script setup>
import AppButton from '../ui/AppButton.vue'
import AppBadge from '../ui/AppBadge.vue'
import { projects } from '../../data/projects.js'
import { config } from '../../data/config.js'
</script>

<template>
  <section id="projects" class="section" aria-label="Proyectos">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <p class="section-label reveal">Proyectos</p>
        <h2 class="section-title reveal reveal-delay-1">
          Trabajo <span class="gradient-text">seleccionado</span>
        </h2>
        <p class="section-subtitle reveal reveal-delay-2">
          Proyectos que muestran mis habilidades técnicas, proceso de desarrollo y atención al detalle.
        </p>
      </div>

      <!-- Projects grid (bento layout) -->
      <div class="projects-grid" role="list">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="project-card card reveal"
          :class="{ 'project-featured': index === 0 }"
          role="listitem"
        >
          <!-- Image -->
          <div class="project-image-wrap">
            <img
              :src="project.image"
              :alt="`Captura de pantalla de ${project.title}`"
              class="project-image"
              loading="lazy"
              width="800"
              height="500"
            />
            <!-- Category badge -->
            <div class="project-category-badge">
              <AppBadge :label="project.category" variant="accent" />
            </div>
          </div>

          <!-- Content -->
          <div class="project-content">
            <div class="project-meta">
              <span class="project-year">{{ project.year }}</span>
              <div class="project-links">
                <a
                  v-if="project.repoUrl"
                  :href="project.repoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link-icon"
                  :aria-label="`Ver repositorio de ${project.title} en GitHub`"
                >
                  <!-- GitHub icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link-icon"
                  :aria-label="`Ver demo de ${project.title}`"
                >
                  <!-- External link icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>

            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>

            <!-- Tech stack -->
            <div class="project-tech" aria-label="Tecnologías usadas">
              <AppBadge
                v-for="tech in project.tech"
                :key="tech"
                :label="tech"
                variant="default"
              />
            </div>

            <!-- CTA -->
            <div class="project-cta">
              <AppButton
                v-if="project.demoUrl"
                :href="project.demoUrl"
                variant="primary"
                size="sm"
                target="_blank"
              >
                Ver demo
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M7 7h10v10M7 17 17 7"/>
                </svg>
              </AppButton>
              <AppButton
                v-if="project.repoUrl"
                :href="project.repoUrl"
                variant="ghost"
                size="sm"
                target="_blank"
              >
                Código
              </AppButton>
            </div>
          </div>
        </article>
      </div>

      <!-- CTA to GitHub -->
      <div class="projects-footer reveal">
        <p class="projects-footer-text">¿Quieres ver más proyectos?</p>
        <AppButton :href="config.github" variant="outline" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          Ver todos en GitHub
        </AppButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Bento grid */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  .project-featured {
    grid-column: 1 / -1; /* Full width for featured */
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .project-featured {
    grid-column: 1 / 3;
  }
}

/* Project card */
.project-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform var(--transition-slow), border-color var(--transition-base), box-shadow var(--transition-slow);
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-card), 0 0 30px var(--color-accent-glow);
}

/* Image */
.project-image-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
  background: var(--color-surface-muted);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-image {
  transform: scale(1.04);
}

.project-category-badge {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  z-index: 1;
}

/* Content */
.project-content {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
}

.project-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-year {
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  color: var(--color-text-subtle);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.project-links {
  display: flex;
  gap: var(--space-2);
}

.project-link-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-surface-muted);
  color: var(--color-text-muted);
  transition: color var(--transition-fast), border-color var(--transition-fast), background-color var(--transition-fast);
  text-decoration: none;
}

.project-link-icon:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: var(--color-accent-muted);
}

.project-title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--color-text);
  transition: color var(--transition-fast);
  line-height: 1.3;
}

.project-card:hover .project-title {
  color: var(--color-accent);
}

.project-description {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
  flex: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.project-cta {
  display: flex;
  gap: var(--space-2);
  padding-top: var(--space-2);
  border-top: 1px solid var(--color-border);
}

/* Footer CTA */
.projects-footer {
  margin-top: var(--space-16);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  text-align: center;
}

.projects-footer-text {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
}
</style>
