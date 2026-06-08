<script setup>
import { ref, computed } from 'vue'
import { technicalSkills, softSkills, skillCategories } from '../../data/skills.js'

const activeCategory = ref('Todos')

const filteredSkills = computed(() => {
  if (activeCategory.value === 'Todos') return technicalSkills
  return technicalSkills.filter(s => s.category === activeCategory.value)
})
</script>

<template>
  <section id="skills" class="section skills-section" aria-label="Habilidades">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <p class="section-label reveal">Habilidades</p>
        <h2 class="section-title reveal reveal-delay-1">
          Mi <span class="gradient-text">stack tecnológico</span>
        </h2>
        <p class="section-subtitle reveal reveal-delay-2">
          Herramientas y tecnologías que uso para crear productos web modernos y escalables.
        </p>
      </div>

      <!-- Category filter -->
      <div class="category-filter reveal reveal-delay-3" role="group" aria-label="Filtrar por categoría">
        <button
          v-for="cat in skillCategories"
          :key="cat"
          class="filter-btn"
          :class="{ 'filter-btn-active': activeCategory === cat }"
          :aria-pressed="activeCategory === cat"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Technical skills grid -->
      <div class="skills-grid" role="list">
        <TransitionGroup name="skills-transition">
          <div
            v-for="skill in filteredSkills"
            :key="skill.name"
            class="skill-card card reveal"
            role="listitem"
          >
            <div class="skill-header">
              <span class="skill-icon" aria-hidden="true">{{ skill.icon }}</span>
              <div>
                <p class="skill-name">{{ skill.name }}</p>
                <p class="skill-category">{{ skill.category }}</p>
              </div>
              <span class="skill-level-text">{{ skill.level }}%</span>
            </div>

            <!-- Progress bar -->
            <div class="skill-bar" role="progressbar" :aria-valuenow="skill.level" aria-valuemin="0" aria-valuemax="100" :aria-label="`${skill.name}: ${skill.level}%`">
              <div
                class="skill-bar-fill"
                :style="{ width: `${skill.level}%` }"
              ></div>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <!-- Divider -->
      <div class="skills-divider" aria-hidden="true"></div>

      <!-- Soft skills -->
      <div class="soft-skills-section">
        <h3 class="soft-skills-title reveal">
          <span class="gradient-text">Habilidades blandas</span>
        </h3>

        <div class="soft-skills-grid" role="list">
          <div
            v-for="(skill, i) in softSkills"
            :key="skill.name"
            class="soft-skill-card card reveal"
            :class="`reveal-delay-${Math.min(i + 1, 5)}`"
            role="listitem"
          >
            <span class="soft-skill-icon" aria-hidden="true">{{ skill.icon }}</span>
            <div>
              <p class="soft-skill-name">{{ skill.name }}</p>
              <p class="soft-skill-desc">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  background: var(--color-bg-alt);
}

/* Filter */
.category-filter {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: center;
  margin-bottom: var(--space-10);
}

.filter-btn {
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  background: var(--color-surface-elevated);
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  background: var(--color-accent-muted);
}

.filter-btn-active {
  background: var(--color-accent) !important;
  color: #fff !important;
  border-color: var(--color-accent) !important;
  box-shadow: 0 0 20px var(--color-accent-glow);
}

/* Skills grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-4);
  margin-bottom: var(--space-12);
  position: relative;
  min-height: 100px;
}

.skill-card {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-accent);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.skill-icon {
  font-size: 1.5rem;
  line-height: 1;
  flex-shrink: 0;
}

.skill-name {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-text);
}

.skill-category {
  font-size: var(--text-xs);
  color: var(--color-text-subtle);
  margin-top: 1px;
}

.skill-level-text {
  margin-left: auto;
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  color: var(--color-accent);
  font-family: var(--font-display);
}

/* Progress bar */
.skill-bar {
  height: 6px;
  border-radius: var(--radius-full);
  background: var(--color-surface-muted);
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  border-radius: var(--radius-full);
  background: var(--gradient-accent);
  transition: width 1s ease;
  box-shadow: 0 0 8px var(--color-accent-glow);
}

/* Transition */
.skills-transition-enter-active,
.skills-transition-leave-active {
  transition: all 0.3s ease;
}

.skills-transition-enter-from,
.skills-transition-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(10px);
}

/* Divider */
.skills-divider {
  height: 1px;
  background: var(--color-border);
  margin-block: var(--space-12);
}

/* Soft skills */
.soft-skills-section { display: flex; flex-direction: column; gap: var(--space-8); }

.soft-skills-title {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  text-align: center;
}

.soft-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-4);
}

.soft-skill-card {
  padding: var(--space-5);
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  transition: transform var(--transition-base), border-color var(--transition-base);
}

.soft-skill-card:hover {
  transform: translateY(-3px);
  border-color: var(--color-accent);
}

.soft-skill-icon {
  font-size: 1.75rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 2px;
}

.soft-skill-name {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-text);
  margin-bottom: var(--space-1);
}

.soft-skill-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
}
</style>
