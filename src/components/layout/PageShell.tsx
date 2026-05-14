"use client";

import { useState } from "react";
import { TopBar } from "./TopBar";
import { DrawerMenu } from "./DrawerMenu";

interface PageShellProps {
  title: string;
  backHref?: string | null;
  backLabel?: string;
  children: React.ReactNode;
}

export function PageShell({ title, backHref, backLabel, children }: PageShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar
        title={title}
        backHref={backHref}
        backLabel={backLabel}
        onOpenMenu={() => setMenuOpen(true)}
      />
      <main className="flex-1 px-3 pb-8 sm:px-6 lg:px-12">{children}</main>
      <DrawerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
