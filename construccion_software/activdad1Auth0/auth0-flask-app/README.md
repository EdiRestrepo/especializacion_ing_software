# CREAR SSL EN WINDOWS -> ejecutar este comando en powershell 
## en linux es ->  `openssl rand -hex 64` 
$bytes = New-Object byte[] 64
[System.Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes)
($bytes | ForEach-Object { $_.ToString("x2") }) -join ""
## Crear Carpetas visual studio code
mkdir templates, static
New-Item app.py -ItemType File
New-Item auth.py -ItemType File
New-Item templates/index.html -ItemType File
New-Item templates/profile.html -ItemType File
New-Item static/style.css -ItemType File

# Flask + Auth0 (Proyecto de ejemplo)

Pequeña aplicación de ejemplo que integra Auth0 mediante la librería `auth0-server-python` y una app Flask con rutas asíncronas. El proyecto muestra un inicio de sesión, callback, perfil y cierre de sesión.

**Estructura principal**
- `app.py`: servidor Flask con rutas de autenticación.
- `auth.py`: inicializa el cliente de Auth0 (`ServerClient`) y almacenes en memoria para desarrollo.
- `templates/`: `index.html` y `profile.html` (vistas).
- `static/style.css`: estilos.

## Requisitos
- Python 3.10+ (se recomienda 3.11)
- Windows / Linux / macOS
- Cuenta y aplicación configurada en Auth0

## Instalación (Windows PowerShell)
```powershell
python -m venv venv
venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

En Linux / macOS:
```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Variables de entorno
Crear un archivo `.env` en la raíz con las siguientes variables (reemplazar valores):
```
AUTH0_DOMAIN=tu-dominio.auth0.com
AUTH0_CLIENT_ID=your_client_id
AUTH0_CLIENT_SECRET=your_client_secret
AUTH0_SECRET=valor_secreto_generado
AUTH0_REDIRECT_URI=http://localhost:5000/callback
AUTH0_AUDIENCE=
```

Generar un `AUTH0_SECRET` (ejemplos):
- Linux/macOS: `openssl rand -hex 64`
- Windows PowerShell:
```powershell
$bytes = New-Object byte[] 64
[System.Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes)
($bytes | ForEach-Object { $_.ToString("x2") }) -join ""
```

## Configurar aplicación en Auth0
1. Crear una aplicación tipo "Regular Web Application".
2. En **Application settings** ajustar:
	- `Allowed Callback URLs`: `http://localhost:5000/callback`
	- `Allowed Logout URLs`: `http://localhost:5000/`
	- `Allowed Web Origins`: `http://localhost:5000`
3. Copiar `Domain`, `Client ID` y `Client Secret` al `.env`.

## Ejecutar la app (desarrollo)
```powershell
# Activar entorno (Windows)
venv\Scripts\Activate.ps1
# Ejecutar
python app.py
```
La aplicación se inicia en `http://localhost:5000`.

## Notas importantes
- Las implementaciones de `MemoryStateStore` y `MemoryTransactionStore` en `auth.py` son en memoria y solo para desarrollo. En producción usar Redis, base de datos u otro almacenamiento persistente.
- `app.config['SESSION_COOKIE_SECURE']` está en `False` para desarrollo local (HTTP). En producción con HTTPS debe establecerse en `True`.
- Asegúrate de que las rutas y `AUTH0_REDIRECT_URI` coincidan exactamente con la configuración en Auth0.

## Descripción rápida de flujo
1. `GET /` muestra botón de login o información del usuario si ya autenticado.
2. `GET /login` inicia el flujo interactivo de Auth0 y redirige al login.
3. Auth0 redirige a `GET /callback` tras autenticación; la app completa el login.
4. `GET /profile` muestra datos del usuario (protegida; redirige a `/login` si no hay usuario).
5. `GET /logout` cierra sesión en Auth0 y redirige.

## Próximos pasos recomendados
- Reemplazar stores en memoria por Redis/Postgres para sesiones.
- Habilitar HTTPS y configurar `SESSION_COOKIE_SECURE=True`.
- Añadir manejo de errores y logging más robusto.

---
Autor: (proyecto de ejemplo)



