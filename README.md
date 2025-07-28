# NextWise

**NextWise** is a modern web application built with **Next.js**, **Clerk** for authentication, **Prisma** for database access, and **Inngest** for serverless event workflows.
It’s designed to be scalable, maintainable, and production-ready — deployed seamlessly on **Vercel**.

---

## 🚀 **Features**

* ✅ **Next.js** — React framework with SSR & API routes
* 🔑 **Clerk Auth** — Secure, easy-to-use authentication & user management
* ⚡ **Prisma ORM** — Type-safe database access with PostgreSQL
* 🟢 **Inngest** — Event-driven serverless workflows
* ☁️ **Vercel Deployment** — Fast CI/CD with preview & production environments

---

## 📂 **Project Structure**

```
/
├── app/             # Next.js App Router
├── pages/api/       # API routes (e.g. Inngest handler)
├── prisma/          # Prisma schema & migrations
├── components/      # React components
├── public/          # Static assets
├── .env.local       # Local environment variables
├── next.config.js   # Next.js config
├── package.json
```

---

## ⚙️ **Environment Variables**

Copy `.env.example` (or `.env.local` in dev) and configure:

```env
DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<db>"
CLERK_API_KEY="your-clerk-api-key"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
```

On **Vercel**, add these variables in **Project → Settings → Environment Variables**.
Don’t wrap values in quotes!

---

## 📥 **Getting Started**

1️⃣ **Clone the repo**

```bash
git clone https://github.com/prakriti82/NextWise.git
cd NextWise
```

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Set up your environment**

* Add your `DATABASE_URL` & Clerk keys in `.env.local`

4️⃣ **Run local dev server**

```bash
npx prisma generate
npx prisma migrate dev
npm run dev
```

Open [`http://localhost:3000`](http://localhost:3000) in your browser!

---

## 🚀 **Deploy**

Deployed automatically via **Vercel**:

* Push to your `main` or `production` branch.
* Vercel builds and deploys with your environment variables.

---

## 🗂️ **Tech Stack**

* **Framework:** Next.js 14+
* **Auth:** Clerk
* **Database:** PostgreSQL with Prisma ORM
* **Serverless:** Inngest
* **Deploy:** Vercel

---

## 📌 **Contributing**

1. Fork the repo
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes
4. Push and open a PR

---

## 🛡️ **License**

[MIT](LICENSE)

---

## 📣 **Credits**

Built by **Prakriti Aryan** — with ❤️, ☕, and lots of `console.log()`.

---

**Deploy. Scale. Enjoy. ✨**
