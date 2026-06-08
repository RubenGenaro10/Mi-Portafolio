<script setup>
import { computed } from 'vue'
import { config } from '../../data/config.js'

const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <!-- Top row -->
      <div class="footer-top">
        <!-- Brand -->
        <div class="footer-brand">
          <a href="#hero" class="logo-link" aria-label="Ir al inicio">
            <span class="logo-mark" aria-hidden="true">&lt;/&gt;</span>
            <span class="logo-text">{{ config.name }}</span>
          </a>
          <p class="footer-tagline">
            Construyendo experiencias web <br />con pasión y código limpio.
          </p>
        </div>

        <!-- Quick links -->
        <nav class="footer-nav" aria-label="Enlaces rápidos del footer">
          <p class="footer-nav-title">Navegación</p>
          <ul>
            <li v-for="link in config.navLinks" :key="link.href">
              <a :href="link.href" class="footer-link">{{ link.label }}</a>
            </li>
          </ul>
        </nav>

        <!-- Social links -->
        <div class="footer-social">
          <p class="footer-nav-title">Contacto</p>
          <ul>
            <li>
              <a :href="config.github" target="_blank" rel="noopener noreferrer" class="footer-link footer-social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a :href="config.linkedin" target="_blank" rel="noopener noreferrer" class="footer-link footer-social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </li>
            <li v-if="config.twitter">
              <a :href="config.twitter" target="_blank" rel="noopener noreferrer" class="footer-link footer-social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Twitter / X
              </a>
            </li>
            <li>
              <a :href="`mailto:${config.email}`" class="footer-link footer-social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                {{ config.email }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom row -->
      <div class="footer-bottom">
        <p class="footer-copy">
          &copy; {{ year }} {{ config.name }}. Hecho con
          <span aria-label="amor">❤️</span> usando
          <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" class="footer-link inline-link">Vue 3</a>
          &amp;
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" class="footer-link inline-link">Vite</a>.
        </p>
        <a
          v-if="config.cvUrl"
          :href="config.cvUrl"
          download
          class="cv-download-btn"
          aria-label="Descargar CV en PDF"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Descargar CV
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-alt);
  padding-block: var(--space-16) var(--space-8);
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-10);
}

@media (min-width: 640px) {
  .footer-top { grid-template-columns: 1fr 1fr; }
}

@media (min-width: 1024px) {
  .footer-top { grid-template-columns: 2fr 1fr 1.5fr; }
}

/* Brand */
.footer-brand { display: flex; flex-direction: column; gap: var(--space-4); }

.logo-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
  color: var(--color-text);
  transition: color var(--transition-fast);
}

.logo-link:hover { color: var(--color-accent); }

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
  font-family: var(--font-display);
}

.logo-text {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
}

.footer-tagline {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
}

/* Nav */
.footer-nav, .footer-social { display: flex; flex-direction: column; gap: var(--space-4); }

.footer-nav-title {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-text-subtle);
}

.footer-nav ul,
.footer-social ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer-link {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
  text-decoration: none;
}

.footer-link:hover { color: var(--color-accent); }

.footer-social-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.inline-link {
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* Bottom */
.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border);
}

@media (min-width: 640px) {
  .footer-bottom {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.footer-copy {
  font-size: var(--text-sm);
  color: var(--color-text-subtle);
}

/* CV download button */
.cv-download-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-xl);
  background: var(--color-accent-muted);
  transition: background-color var(--transition-fast), color var(--transition-fast), box-shadow var(--transition-fast);
  text-decoration: none;
  white-space: nowrap;
}

.cv-download-btn:hover {
  background: var(--color-accent);
  color: #fff;
  box-shadow: var(--shadow-accent);
}
</style>
