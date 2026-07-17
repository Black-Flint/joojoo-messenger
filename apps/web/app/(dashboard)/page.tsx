import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/sidebar/app-sidebar";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>
  );
}
