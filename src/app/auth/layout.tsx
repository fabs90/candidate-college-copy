"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function LayoutSuperAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-primary  min-h-screen">{children}</main>
    </QueryClientProvider>
  );
}
