"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/cn";

interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/livestream", label: "Livestream" },
  { href: "/chats", label: "Chats" },
  { href: "/profile", label: "Profile" },
  { href: "/settings", label: "Settings" },
];

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "X (Twitter)" },
];

export function DrawerMenu({ open, onClose }: DrawerMenuProps) {
  const pathname = usePathname();

  // Close on escape, lock body scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay — soft white-ish wash, not dark scrim, matches design */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-canvas/75 backdrop-blur-[2px]"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
            className={cn(
              "fixed right-0 top-0 z-50 flex h-full flex-col",
              "w-full sm:w-[420px] lg:w-[460px]",
              "bg-surface shadow-lift"
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 lg:px-12 lg:py-8">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-strong">
                Menu
              </span>
              <button
                onClick={onClose}
                className="text-muted-strong transition-colors hover:text-ink"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Nav items — big, airy, minimal */}
            <nav className="flex-1 px-8 pt-8 lg:px-12">
              <ul className="space-y-7">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "block text-3xl lg:text-4xl transition-colors",
                          active
                            ? "font-bold text-ink"
                            : "font-light text-muted-strong hover:text-ink"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer — social row */}
            <div className="px-8 py-8 lg:px-12 lg:py-10">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="text-sm text-muted-strong transition-colors hover:text-ink"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
