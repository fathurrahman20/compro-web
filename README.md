# 🌐 Company Profile Web (COMPRO-WEB)

Frontend dari aplikasi Company Profile, dibangun menggunakan React + TypeScript + Vite.
Menggunakan TanStack Query untuk data fetching, Shadcn UI + TailwindCSS untuk styling, dan Zod untuk form validation.

Live URL:
👉 [https://compro-web.onrender.com/](https://compro-web.onrender.com/)

---

## 🚀 Tech Stack

| Layer           | Teknologi                                     |
| --------------- | --------------------------------------------- |
| Framework       | React 19 + TypeScript                         |
| Build Tool      | Vite                                          |
| UI & CSS        | TailwindCSS, Shadcn UI, Headless UI, Radix UI |
| Data Fetching   | TanStack React Query                          |
| HTTP Client     | Axios                                         |
| Form Validation | React Hook Form + Zod                         |
| Animation       | Framer Motion                                 |
| Routing         | React Router v7                               |

---

## 📁 Project Structure

Struktur utama project:

```
src/
 ├─ animations/       → Framer motion variants
 ├─ assets/           → Static assets (logo, images, icons)
 ├─ components/       → Reusable UI components (global)
 ├─ context/          → App context (user/auth state, etc.)
 ├─ data/             → Static data list
 ├─ hooks/            → Custom hooks
 ├─ lib/              → Helpers & utilities (cn, configs)
 ├─ pages/            → Page views
 ├─ routes/           → Routing system (createBrowserRouter)
 ├─ schema/           → Zod form validation schemas
 ├─ service/          → API client (Axios + instance config)
 ├─ types/            → TypeScript type definitions
 ├─ App.tsx           → Root component
 └─ main.tsx          → App mount + provider wrappers
```

---

## 🧭 Routing Overview

Router `createBrowserRouter()`:

| Path         | Komponen                | Deskripsi               |
| ------------ | ----------------------- | ----------------------- |
| `/login`     | `LoginPage`             | Login user              |
| `/dashboard` | `DashboardPage`         | Protected route         |
| `/`          | `MainLayout` + children | Public pages            |
| `/about`     | `AboutPage`             | Company information     |
| `/services`  | `ServicesPage`          | List layanan perusahaan |
| `/contact`   | `ContactPage`           | Informasi kontak        |
| `*`          | `NotFoundPage`          | 404 Page                |

---

## 📦 Setup Project

Clone repo:

```sh
git clone https://github.com/fathurrahman20/compro-web.git
cd compro-web
```

Install dependencies:

```sh
bun install
```

> Bisa pakai `npm install` bila tidak pakai Bun

Copy environment file:

```sh
cp .env.example .env
```

Set `.env` sesuai backend:

```
VITE_API_URL=https://compro-api.onrender.com
```

---

## ▶️ Menjalankan Project

Development:

```sh
bun dev
```

App akan berjalan di:

```
http://localhost:5173
```

Production build:

```sh
bun run build
bun run preview
```

---

### 🔒 Authentication

Aplikasi menggunakan **JWT Authentication dengan Bearer Token Scheme**:

- **Access Token** & **Refresh Token** disimpan di Cookie
- Setiap request ke endpoint menggunakan header:

  ```
  Authorization: Bearer <access_token>
  ```

- Jika access token kadaluarsa:

  - Backend menyediakan endpoint refresh token untuk mendapatkan token baru
  - Jika refresh gagal → user otomatis logout

Protected route behavior:

| Kondisi                | Aksi                            |
| ---------------------- | ------------------------------- |
| Tidak ada access token | Redirect ke `/login`            |
| Refresh berhasil       | User tetap di halaman protected |
| Refresh gagal          | Clear user + redirect login     |

State management authentication dilakukan melalui:

✅ React Context (AuthContext)
✅ TanStack Query untuk API interaction
✅ React Router untuk guard halaman

---

### 🧑‍💼 User Flow

1. User login → access & refresh token disimpan
2. AuthContext fetch user via `/auth/me`
3. Protected route hanya render halaman ketika:

   - `isAuthenticated === true`
   - `isLoadingUser === false`

4. Logout → semua token dan user state dibersihkan

---
