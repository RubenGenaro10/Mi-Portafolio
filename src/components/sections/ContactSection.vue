<script setup>
import { ref, reactive } from 'vue'
import AppButton from '../ui/AppButton.vue'
import { config } from '../../data/config.js'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const submitState = ref('idle') // 'idle' | 'sending' | 'success' | 'error'

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validate() {
  let valid = true
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Por favor ingresa tu nombre.'
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Por favor ingresa tu email.'
    valid = false
  } else if (!validateEmail(form.email)) {
    errors.email = 'Por favor ingresa un email válido.'
    valid = false
  }

  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres.'
    valid = false
  }

  return valid
}

async function handleSubmit() {
  if (!validate()) return

  submitState.value = 'sending'

  // Simulación de envío (reemplaza con tu backend/EmailJS/Formspree)
  await new Promise((resolve) => setTimeout(resolve, 1500))

  submitState.value = 'success'

  // Reset form
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''

  setTimeout(() => { submitState.value = 'idle' }, 4000)
}
</script>

<template>
  <section id="contact" class="section contact-section" aria-label="Contacto">
    <!-- Background decoration -->
    <div class="contact-bg" aria-hidden="true">
      <div class="contact-orb"></div>
    </div>

    <div class="container contact-inner">
      <!-- Left: Info -->
      <div class="contact-info">
        <p class="section-label reveal">Contacto</p>
        <h2 class="section-title reveal reveal-delay-1">
          ¿Tienes un proyecto<br />
          <span class="gradient-text">en mente?</span>
        </h2>
        <p class="contact-subtitle reveal reveal-delay-2">
          Estoy disponible para proyectos freelance, colaboraciones o simplemente para charlar sobre tecnología. ¡Escríbeme!
        </p>

        <!-- Contact methods -->
        <div class="contact-methods reveal reveal-delay-3" role="list" aria-label="Métodos de contacto">
          <a
            :href="`mailto:${config.email}`"
            class="contact-method card"
            role="listitem"
            aria-label="Enviar correo"
          >
            <div class="method-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div>
              <p class="method-label">Email</p>
              <p class="method-value">{{ config.email }}</p>
            </div>
          </a>

          <a
            :href="config.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-method card"
            role="listitem"
            aria-label="Ver LinkedIn"
          >
            <div class="method-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <p class="method-label">LinkedIn</p>
              <p class="method-value">Conectemos en LinkedIn</p>
            </div>
          </a>

          <a
            :href="config.github"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-method card"
            role="listitem"
            aria-label="Ver GitHub"
          >
            <div class="method-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div>
              <p class="method-label">GitHub</p>
              <p class="method-value">Ver mis repositorios</p>
            </div>
          </a>
        </div>
      </div>

      <!-- Right: Form -->
      <div class="contact-form-wrap reveal reveal-delay-2">
        <form
          class="contact-form card"
          @submit.prevent="handleSubmit"
          novalidate
          aria-label="Formulario de contacto"
        >
          <h3 class="form-title">Envíame un mensaje</h3>

          <!-- Name -->
          <div class="form-group">
            <label for="contact-name" class="form-label">Nombre *</label>
            <input
              id="contact-name"
              v-model="form.name"
              type="text"
              name="name"
              class="form-input"
              :class="{ 'input-error': errors.name }"
              placeholder="Tu nombre"
              autocomplete="name"
              required
            />
            <p v-if="errors.name" class="error-msg" role="alert">{{ errors.name }}</p>
          </div>

          <!-- Email -->
          <div class="form-group">
            <label for="contact-email" class="form-label">Email *</label>
            <input
              id="contact-email"
              v-model="form.email"
              type="email"
              name="email"
              class="form-input"
              :class="{ 'input-error': errors.email }"
              placeholder="tu@email.com"
              autocomplete="email"
              required
            />
            <p v-if="errors.email" class="error-msg" role="alert">{{ errors.email }}</p>
          </div>

          <!-- Subject -->
          <div class="form-group">
            <label for="contact-subject" class="form-label">Asunto</label>
            <input
              id="contact-subject"
              v-model="form.subject"
              type="text"
              name="subject"
              class="form-input"
              placeholder="¿De qué quieres hablar?"
            />
          </div>

          <!-- Message -->
          <div class="form-group">
            <label for="contact-message" class="form-label">Mensaje *</label>
            <textarea
              id="contact-message"
              v-model="form.message"
              name="message"
              class="form-input form-textarea"
              :class="{ 'input-error': errors.message }"
              placeholder="Cuéntame sobre tu proyecto o idea..."
              rows="5"
              required
            ></textarea>
            <p v-if="errors.message" class="error-msg" role="alert">{{ errors.message }}</p>
          </div>

          <!-- Submit -->
          <button
            id="contact-submit"
            type="submit"
            class="submit-btn"
            :class="{ 'submit-success': submitState === 'success' }"
            :disabled="submitState === 'sending'"
            :aria-busy="submitState === 'sending'"
          >
            <!-- Idle state -->
            <template v-if="submitState === 'idle'">
              Enviar mensaje
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </template>

            <!-- Sending -->
            <template v-else-if="submitState === 'sending'">
              <span class="spinner" aria-hidden="true"></span>
              Enviando...
            </template>

            <!-- Success -->
            <template v-else-if="submitState === 'success'">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              ¡Mensaje enviado!
            </template>
          </button>

          <p class="form-disclaimer">
            Al enviar este formulario, aceptas que me comunique contigo por email.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  overflow: hidden;
  background: var(--color-bg-alt);
}

.contact-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.contact-orb {
  position: absolute;
  width: 500px;
  height: 500px;
  bottom: -200px;
  right: -100px;
  border-radius: 50%;
  background: var(--orb-1);
  filter: blur(100px);
  opacity: 0.5;
}

.contact-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-16);
  align-items: start;
  position: relative;
}

@media (min-width: 1024px) {
  .contact-inner { grid-template-columns: 1fr 1fr; }
}

/* Info side */
.contact-info { display: flex; flex-direction: column; gap: var(--space-8); }

.contact-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  line-height: 1.7;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.contact-method {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5);
  transition: transform var(--transition-base), border-color var(--transition-fast), box-shadow var(--transition-base);
  text-decoration: none;
}

.contact-method:hover {
  transform: translateX(6px);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-card);
}

.method-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-xl);
  background: var(--color-accent-muted);
  color: var(--color-accent);
  flex-shrink: 0;
  transition: background-color var(--transition-fast);
}

.contact-method:hover .method-icon-wrap {
  background: var(--color-accent);
  color: #fff;
}

.method-label {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-subtle);
  margin-bottom: 2px;
}

.method-value {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text);
}

/* Form side */
.contact-form-wrap { width: 100%; }

.contact-form {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.form-title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

/* Form groups */
.form-group { display: flex; flex-direction: column; gap: var(--space-2); }

.form-label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-muted);
}

.form-input {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-text);
  background: var(--color-surface-muted);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-3) var(--space-4);
  width: 100%;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast), background-color var(--transition-fast);
  outline: none;
}

.form-input::placeholder { color: var(--color-text-subtle); }

.form-input:focus {
  border-color: var(--color-accent);
  background: var(--color-surface-elevated);
  box-shadow: 0 0 0 3px var(--color-accent-muted);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;
}

.input-error { border-color: #ff6b6b !important; }

.error-msg {
  font-size: var(--text-xs);
  color: #ff6b6b;
  padding-left: var(--space-1);
}

/* Submit button */
.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  width: 100%;
  padding: var(--space-4);
  border-radius: var(--radius-xl);
  background: var(--color-accent);
  color: #fff;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  cursor: pointer;
  border: none;
  transition: background-color var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast);
  box-shadow: 0 0 20px var(--color-accent-glow);
}

.submit-btn:hover:not(:disabled) {
  background: var(--color-accent-hover);
  transform: translateY(-1px);
  box-shadow: 0 0 30px var(--color-accent-glow);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-success {
  background: var(--color-teal) !important;
  box-shadow: 0 0 20px rgba(0, 212, 170, 0.3) !important;
}

/* Spinner */
.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.form-disclaimer {
  font-size: var(--text-xs);
  color: var(--color-text-subtle);
  text-align: center;
  line-height: 1.5;
}
</style>
