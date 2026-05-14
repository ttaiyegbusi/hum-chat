// The redirect from "/" to "/dashboard" is configured in next.config.js
// via the redirects() function — that's more reliable than a server-side
// redirect() call when pages are statically prerendered on Vercel.
// This file exists only to satisfy the App Router's route requirement.

export default function Home() {
  return null;
}
