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

## 🔒 Authentication

- Email/password login ke backend → JWT disimpan sebagai HttpOnly Cookie
- TanStack Query digunakan untuk fetch user & session persist
- Protected pages redirect ke `/login` jika tidak authenticated

---
