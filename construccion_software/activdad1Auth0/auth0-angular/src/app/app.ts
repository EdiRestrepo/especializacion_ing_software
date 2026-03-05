import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './components/login-button.component';
import { LogoutButtonComponent } from './components/logout-button.component';
import { ProfileComponent } from './components/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginButtonComponent, LogoutButtonComponent, ProfileComponent],
  template: `
    <div class="app-wrapper">
      <!-- Navbar -->
      <nav class="navbar">
        <div class="navbar-brand">
          <img
            src="https://cdn.auth0.com/website/assets/logos/auth0-logo-white.svg"
            alt="Auth0 Logo"
            class="navbar-logo"
          />
          <span class="navbar-title">Auth0 Angular</span>
        </div>
        <div class="navbar-actions">
          @if (auth.isAuthenticated$ | async) {
            <app-logout-button />
          } @else if (!(auth.isLoading$ | async)) {
            <app-login-button />
          }
        </div>
      </nav>

      <!-- Loading State -->
      @if (auth.isLoading$ | async) {
        <div class="loading-container">
          <div class="spinner"></div>
          <p class="loading-text">Cargando...</p>
        </div>
      }

      <!-- Error State -->
      @if (auth.error$ | async; as error) {
        <div class="content-container">
          <div class="card error-card">
            <div class="error-icon">⚠️</div>
            <h2 class="error-title">Error de autenticación</h2>
            <p class="error-message">{{ getErrorMessage(error) }}</p>
            <p class="error-detail">Detalle: {{ error.message }}</p>
            <div class="error-actions">
              <button class="btn btn-primary" (click)="loginWithRedirect()">
                <span class="btn-icon">🔑</span> Iniciar sesión
              </button>
              <button class="btn btn-success" (click)="signUp()">
                <span class="btn-icon">📝</span> Registrarse
              </button>
              <button class="btn btn-secondary" (click)="retry()">
                <span class="btn-icon">🏠</span> Volver al inicio
              </button>
            </div>
          </div>
        </div>
      }

      <!-- Main Content -->
      @if (!(auth.isLoading$ | async) && !(auth.error$ | async)) {
        <div class="content-container">
          <!-- Authenticated State -->
          @if (auth.isAuthenticated$ | async) {
            <div class="card welcome-card">
              <div class="welcome-header">
                <div class="success-badge">
                  <span class="success-icon">✓</span>
                </div>
                <h1 class="welcome-title">¡Bienvenido!</h1>
                <p class="welcome-subtitle">Has iniciado sesión correctamente</p>
              </div>
              <div class="divider"></div>
              <h2 class="section-title">Tu Perfil</h2>
              <app-profile />
            </div>
          } @else {
            <!-- Unauthenticated State -->
            <div class="hero-section">
              <div class="hero-content">
                <div class="hero-badge">🔐 Autenticación segura</div>
                <h1 class="hero-title">Bienvenido a <span class="gradient-text">Auth0 Angular</span></h1>
                <p class="hero-description">
                  Inicia sesión para acceder a tu cuenta de forma segura con Auth0.
                  Protegemos tu identidad con los más altos estándares de seguridad.
                </p>
                <div class="hero-actions">
                  <app-login-button />
                </div>
                <div class="hero-features">
                  <div class="feature">
                    <span class="feature-icon">🛡️</span>
                    <span class="feature-text">Seguro</span>
                  </div>
                  <div class="feature">
                    <span class="feature-icon">⚡</span>
                    <span class="feature-text">Rápido</span>
                  </div>
                  <div class="feature">
                    <span class="feature-icon">🌐</span>
                    <span class="feature-text">Universal</span>
                  </div>
                </div>
              </div>
              <div class="hero-visual">
                <div class="hero-graphic">
                  <div class="circle circle-1"></div>
                  <div class="circle circle-2"></div>
                  <div class="circle circle-3"></div>
                  <div class="shield-icon">🔒</div>
                </div>
              </div>
            </div>
          }
        </div>
      }

      <!-- Footer -->
      <footer class="footer">
        <p>Powered by <strong>Auth0</strong> &amp; <strong>Angular</strong></p>
      </footer>
    </div>
  `,
  styles: [`
    /* ===== Layout ===== */
    .app-wrapper {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* ===== Navbar ===== */
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      background: rgba(15, 12, 41, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .navbar-brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .navbar-logo {
      height: 28px;
      opacity: 0.9;
    }

    .navbar-title {
      font-size: 1.2rem;
      font-weight: 600;
      background: linear-gradient(135deg, #667eea, #764ba2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .navbar-actions {
      display: flex;
      align-items: center;
    }

    /* ===== Loading ===== */
    .loading-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
    }

    .spinner {
      width: 48px;
      height: 48px;
      border: 4px solid rgba(255, 255, 255, 0.1);
      border-top-color: #667eea;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .loading-text {
      font-size: 1.1rem;
      color: #a0aec0;
    }

    /* ===== Content ===== */
    .content-container {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    /* ===== Card ===== */
    .card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 2.5rem;
      width: 100%;
      max-width: 520px;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
      animation: fadeInUp 0.5s ease-out;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ===== Welcome Card (Authenticated) ===== */
    .welcome-header {
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .success-badge {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: linear-gradient(135deg, #48bb78, #38a169);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      box-shadow: 0 8px 24px rgba(72, 187, 120, 0.3);
    }

    .success-icon {
      font-size: 1.8rem;
      color: white;
      font-weight: bold;
    }

    .welcome-title {
      font-size: 2rem;
      font-weight: 700;
      color: #f7fafc;
      margin-bottom: 0.5rem;
    }

    .welcome-subtitle {
      font-size: 1.05rem;
      color: #a0aec0;
    }

    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
      margin: 1.5rem 0;
    }

    .section-title {
      font-size: 1.15rem;
      font-weight: 600;
      color: #cbd5e0;
      text-align: center;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    /* ===== Hero Section (Unauthenticated) ===== */
    .hero-section {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4rem;
      padding: 2rem;
      max-width: 1100px;
      width: 100%;
      margin: 0 auto;
      animation: fadeInUp 0.6s ease-out;
    }

    .hero-content {
      flex: 1;
      max-width: 540px;
    }

    .hero-badge {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: rgba(102, 126, 234, 0.15);
      border: 1px solid rgba(102, 126, 234, 0.3);
      border-radius: 999px;
      font-size: 0.85rem;
      color: #a3b1ff;
      margin-bottom: 1.5rem;
      font-weight: 500;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 800;
      line-height: 1.15;
      color: #f7fafc;
      margin-bottom: 1.25rem;
    }

    .gradient-text {
      background: linear-gradient(135deg, #667eea 0%, #b794f6 50%, #f687b3 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-description {
      font-size: 1.15rem;
      line-height: 1.7;
      color: #a0aec0;
      margin-bottom: 2rem;
    }

    .hero-actions {
      margin-bottom: 2.5rem;
    }

    .hero-features {
      display: flex;
      gap: 2rem;
    }

    .feature {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .feature-icon {
      font-size: 1.25rem;
    }

    .feature-text {
      font-size: 0.95rem;
      color: #a0aec0;
      font-weight: 500;
    }

    /* ===== Hero Visual ===== */
    .hero-visual {
      flex: 0 0 auto;
    }

    .hero-graphic {
      position: relative;
      width: 280px;
      height: 280px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .circle {
      position: absolute;
      border-radius: 50%;
      border: 2px solid;
      animation: pulse 3s ease-in-out infinite;
    }

    .circle-1 {
      width: 280px;
      height: 280px;
      border-color: rgba(102, 126, 234, 0.2);
      animation-delay: 0s;
    }

    .circle-2 {
      width: 200px;
      height: 200px;
      border-color: rgba(183, 148, 246, 0.25);
      animation-delay: 0.5s;
    }

    .circle-3 {
      width: 120px;
      height: 120px;
      border-color: rgba(246, 135, 179, 0.3);
      animation-delay: 1s;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.7; }
      50% { transform: scale(1.08); opacity: 1; }
    }

    .shield-icon {
      font-size: 3.5rem;
      z-index: 1;
      filter: drop-shadow(0 4px 20px rgba(102, 126, 234, 0.4));
    }

    /* ===== Error Card ===== */
    .error-card {
      text-align: center;
      max-width: 560px;
      border-color: rgba(245, 101, 101, 0.25);
    }

    .error-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .error-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #fc8181;
      margin-bottom: 0.75rem;
    }

    .error-message {
      font-size: 1.05rem;
      color: #e2e8f0;
      line-height: 1.6;
      margin-bottom: 0.75rem;
    }

    .error-detail {
      font-size: 0.85rem;
      color: #718096;
      margin-bottom: 1.5rem;
      word-break: break-word;
    }

    .error-actions {
      display: flex;
      gap: 0.75rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* ===== Buttons ===== */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.7rem 1.4rem;
      font-size: 0.95rem;
      font-weight: 600;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: inherit;
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }

    .btn:active {
      transform: translateY(0);
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
    }

    .btn-success {
      background: linear-gradient(135deg, #48bb78, #38a169);
      color: white;
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: #e2e8f0;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.15);
    }

    .btn-icon {
      font-size: 1rem;
    }

    /* ===== Footer ===== */
    .footer {
      text-align: center;
      padding: 1.5rem 2rem;
      font-size: 0.85rem;
      color: #4a5568;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .footer strong {
      color: #718096;
    }

    /* ===== Responsive ===== */
    @media (max-width: 768px) {
      .navbar {
        padding: 0.75rem 1rem;
      }

      .navbar-title {
        font-size: 1rem;
      }

      .hero-section {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
        padding: 1.5rem;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-description {
        font-size: 1rem;
      }

      .hero-features {
        justify-content: center;
      }

      .hero-visual {
        display: none;
      }

      .hero-actions {
        display: flex;
        justify-content: center;
      }

      .card {
        padding: 1.5rem;
        border-radius: 16px;
      }

      .content-container {
        padding: 1rem;
      }

      .welcome-title {
        font-size: 1.5rem;
      }

      .error-actions {
        flex-direction: column;
        align-items: center;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 1.65rem;
      }

      .hero-features {
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
      }

      .navbar-logo {
        height: 22px;
      }
    }
  `]
})
export class App {
  protected auth = inject(AuthService);

  getErrorMessage(error: Error): string {
    const msg = error.message?.toLowerCase() || '';
    if (msg.includes('unauthorized') || msg.includes('401')) {
      return 'No se pudo completar la autenticación. Si ya tienes una cuenta, intenta iniciar sesión. Si no, regístrate con un correo nuevo.';
    }
    if (msg.includes('access_denied')) {
      return 'Acceso denegado. Verifica tus credenciales o intenta con otro método.';
    }
    if (msg.includes('login_required')) {
      return 'Tu sesión ha expirado. Por favor inicia sesión nuevamente.';
    }
    return 'Ocurrió un error durante la autenticación. Intenta nuevamente.';
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  signUp(): void {
    this.auth.loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup'
      }
    });
  }

  retry(): void {
    window.location.href = window.location.origin;
  }
}
