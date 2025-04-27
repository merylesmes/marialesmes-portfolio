# 🧑‍💻 GitHub Workflow para Trabajo en Equipo

Esta guía explica cómo colaborar en este proyecto usando ramas, commits y pull requests en GitHub.

---

## 🔧 Configuración inicial

1. Una persona crea el repositorio en GitHub.
2. Agrega al resto del equipo como colaboradores en:
   **Settings > Collaborators**.
3. Cada miembro clona el repositorio:

```bash
git clone https://github.com/usuario/repositorio.git
```

---

## 🌱 Crear una rama nueva

Antes de trabajar en una nueva funcionalidad o cambio, crea una rama:

```bash
git checkout -b nombre-de-la-rama
```

Ejemplo:

```bash
git checkout -b feature-login
```

---

## 💾 Guardar y subir cambios

Guarda tu trabajo de esta forma:

```bash
git add .
git commit -m "Descripción clara del cambio"
git push origin nombre-de-la-rama
```

---

## 🔁 Crear un Pull Request (PR)

1. Ve a GitHub.
2. Haz clic en **"Compare & pull request"**.
3. Describe tus cambios y crea el PR.
4. Otro miembro del equipo puede revisarlo y aprobarlo.

---

## 🔄 Fusionar la rama con `main`

Una vez aprobado el PR:

1. Haz clic en **"Merge pull request"**.
2. Luego en **"Confirm merge"**.
3. Puedes borrar la rama si ya no es necesaria.

---

## 🧹 Mantener tu copia actualizada

Antes de comenzar a trabajar:

```bash
git checkout main
git pull origin main
```

O actualiza tu rama:

```bash
git checkout tu-rama
git pull origin main
git merge main
```

O continuar con la rama subida:
 ```bash
git fetch origin
git checkout nombre-rama

```


---

## ✅ Buenas prácticas

- Usa nombres de ramas claros: `feature-login`, `bugfix-error-404`, etc.
- Siempre trabaja en ramas, no directamente en `main`.
- Revisa los Pull Requests de tus compañeros antes de mergear.
- Haz commits claros y frecuentes.

---

---

## 🔀 Mergear ramas manualmente

Si prefieres hacer el merge desde la terminal, sigue estos pasos:

```bash
# Ve a la rama principal
git checkout main

# Actualízala
git pull origin main

# Mergea la rama que trabajaste
git merge nombre-de-la-rama

