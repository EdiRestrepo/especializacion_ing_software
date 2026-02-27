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

- edison1988@yopmail.com


