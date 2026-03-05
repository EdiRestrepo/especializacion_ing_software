import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (auth.isLoading$ | async) {
      <div class="profile-loading">
        <div class="profile-spinner"></div>
        <span>Cargando perfil...</span>
      </div>
    }

    @if ((auth.isAuthenticated$ | async) && (auth.user$ | async); as user) {
      <div class="profile-container">
        <div class="avatar-wrapper">
          @if (user.picture) {
            <img
              [src]="user.picture"
              [alt]="user.name || 'User'"
              class="avatar-img"
            />
          } @else {
            <div class="avatar-placeholder">
              {{ getInitials(user.name || user.email || 'U') }}
            </div>
          }
          <div class="avatar-status"></div>
        </div>

        <div class="profile-info">
          <h3 class="profile-name">{{ user.name || 'Usuario' }}</h3>
          <p class="profile-email">{{ user.email }}</p>
        </div>

        @if (user.email_verified !== undefined) {
          <div class="profile-meta">
            <div class="meta-item">
              <span class="meta-icon">{{ user.email_verified ? '✅' : '⏳' }}</span>
              <span class="meta-text">{{ user.email_verified ? 'Email verificado' : 'Email pendiente de verificación' }}</span>
            </div>
          </div>
        }
      </div>
    }
  `,
  styles: [`
    .profile-loading {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      padding: 2rem;
      color: #a0aec0;
    }

    .profile-spinner {
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-top-color: #667eea;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .profile-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
      animation: fadeIn 0.4s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }

    .avatar-wrapper {
      position: relative;
    }

    .avatar-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid rgba(102, 126, 234, 0.5);
      box-shadow: 0 8px 24px rgba(102, 126, 234, 0.25);
      transition: transform 0.3s ease;
    }

    .avatar-img:hover {
      transform: scale(1.05);
    }

    .avatar-placeholder {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea, #764ba2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.2rem;
      font-weight: 700;
      color: white;
      box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
    }

    .avatar-status {
      position: absolute;
      bottom: 4px;
      right: 4px;
      width: 18px;
      height: 18px;
      background: #48bb78;
      border-radius: 50%;
      border: 3px solid #24243e;
      box-shadow: 0 2px 8px rgba(72, 187, 120, 0.4);
    }

    .profile-info {
      text-align: center;
    }

    .profile-name {
      font-size: 1.5rem;
      font-weight: 700;
      color: #f7fafc;
      margin: 0 0 0.35rem;
    }

    .profile-email {
      font-size: 1rem;
      color: #a0aec0;
      margin: 0;
    }

    .profile-meta {
      width: 100%;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    .meta-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.5rem 0;
    }

    .meta-icon {
      font-size: 1rem;
    }

    .meta-text {
      font-size: 0.9rem;
      color: #a0aec0;
    }
  `]
})
export class ProfileComponent {
  protected auth = inject(AuthService);

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }
}
