<script setup>
defineProps({
  label: { type: String, required: true },
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'accent', 'teal', 'muted'].includes(v),
  },
})
</script>

<template>
  <span class="app-badge" :class="`badge-${variant}`">{{ label }}</span>
</template>

<style scoped>
.app-badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: 0.02em;
  white-space: nowrap;
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.badge-default {
  background: var(--color-surface-muted);
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
}

.badge-accent {
  background: var(--color-accent-muted);
  color: var(--color-accent);
}

.badge-teal {
  background: var(--color-teal-muted);
  color: var(--color-teal);
}

.badge-muted {
  background: transparent;
  color: var(--color-text-subtle);
  border: 1px solid var(--color-border);
}
</style>
