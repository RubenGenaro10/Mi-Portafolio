<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'ghost', 'outline', 'teal'].includes(v),
  },
  href: { type: String, default: null },
  target: { type: String, default: '_self' },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  disabled: { type: Boolean, default: false },
})

const tag = props.href ? 'a' : 'button'
</script>

<template>
  <component
    :is="tag"
    :href="href"
    :target="href ? target : undefined"
    :rel="href && target === '_blank' ? 'noopener noreferrer' : undefined"
    :disabled="!href && disabled"
    class="app-btn"
    :class="[`btn-${variant}`, `btn-${size}`, { 'btn-disabled': disabled }]"
  >
    <slot />
  </component>
</template>

<style scoped>
.app-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-xl);
  transition:
    background-color var(--transition-base),
    color var(--transition-base),
    border-color var(--transition-base),
    box-shadow var(--transition-base),
    transform var(--transition-fast);
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  border: 1.5px solid transparent;
  line-height: 1;
}

.app-btn:hover:not(.btn-disabled) {
  transform: translateY(-1px);
}

.app-btn:active:not(.btn-disabled) {
  transform: translateY(0);
}

/* Sizes */
.btn-sm {
  font-size: var(--text-sm);
  padding: var(--space-2) var(--space-4);
  height: 36px;
}

.btn-md {
  font-size: var(--text-base);
  padding: var(--space-3) var(--space-6);
  height: 44px;
}

.btn-lg {
  font-size: var(--text-lg);
  padding: var(--space-4) var(--space-8);
  height: 52px;
}

/* Variants */
.btn-primary {
  background: var(--color-accent);
  color: #ffffff;
  border-color: transparent;
  box-shadow: 0 0 20px var(--color-accent-glow);
}

.btn-primary:hover:not(.btn-disabled) {
  background: var(--color-accent-hover);
  box-shadow: 0 0 30px var(--color-accent-glow);
}

.btn-ghost {
  background: transparent;
  color: var(--color-text);
  border-color: var(--color-border);
}

.btn-ghost:hover:not(.btn-disabled) {
  background: var(--color-surface-muted);
  border-color: var(--color-border-hover);
}

.btn-outline {
  background: transparent;
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.btn-outline:hover:not(.btn-disabled) {
  background: var(--color-accent-muted);
}

.btn-teal {
  background: var(--color-teal);
  color: #0a0a0f;
  border-color: transparent;
  font-weight: var(--font-bold);
}

.btn-teal:hover:not(.btn-disabled) {
  filter: brightness(1.1);
}

/* Disabled */
.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
