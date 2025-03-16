import { Toaster } from "react-hot-toast";

import { UserRole } from "@prisma/client";

import Sidebar from "@/components/admin/Sidebar";
import { RoleGate } from "@/components/auth/role-gate";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RoleGate
      allowedRole={[UserRole.ADMIN]}
      backButtonHref="/"
      backButtonLabel="Go to Home"
    >
      <Toaster position="top-center" />
      <main className="min-h-screen md:flex md:gap-4 relative">
        <Sidebar />
        {children}
      </main>
    </RoleGate>
  );
}
