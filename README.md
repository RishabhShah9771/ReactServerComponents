# ReactServerComponents
# ⚙️ React Features That Require Special Setup

Some modern React features **are not available in every project setup** (especially those using traditional client-side tools like Vite or CRA). These features **require special configurations** because they depend on server-side execution or custom bundlers.

## ❗ Not Usable in Plain React Projects (e.g., Vite, CRA)

The following features are **only supported in frameworks like Next.js (App Router)** or custom setups using React’s experimental server components infrastructure:

## 🔒 Advanced React Features

| Feature | Description | Why Extra Setup is Needed |
|--------|-------------|---------------------------|
| **React Server Components (RSC)** | Components that run only on the server—ideal for data fetching and reduced client JS | Requires server-side rendering and file-based routing |
| **Server Actions** | Server functions that can be directly called from the client via forms or events | Needs server runtime + bundler support |
| **`use()` Hook** | Allows awaiting promises inside components (e.g. data fetch) | Only usable in Server Components, not client-side code |

---

## 🧭 Project Setup: Client vs Server Code

### 🟢 Client-Side Code
- Runs in the browser
- Traditional React apps (e.g., **Vite**, **Create React App**) fall under this category
- Supports:
  - Hooks (`useState`, `useEffect`, etc.)
  - JSX
  - Client-side routing
  - `useContext`, `useReducer`, etc.

### 🔵 Non Client-Side Code (Server/Build-Time)
- Runs on the server or during build
- Requires specialized frameworks or custom bundlers (e.g., **Next.js with App Router**)
- Supports:
  - **React Server Components**
  - **Server Actions**
  - `use()` with Promises
  - Build-time data fetching
  - Partial hydration

---

## ✅ When to Use These Features

| Use Case | Required Setup |
|----------|----------------|
| Static or client-heavy SPA | ✅ Vite, CRA |
| Server-side rendering, SEO, or data-heavy apps | ✅ Next.js (App Router) |
| Using Server Components or `use()` | ✅ Next.js or custom SSR setup |

---

## 💡 Summary

> If you're using a basic React setup (like Vite), **you won't be able to use Server Components, Server Actions, or `use()`** without switching to or configuring a server-aware setup like **Next.js with the App Router**.

For the latest support and experimental features, refer to the official React and Next.js docs.
