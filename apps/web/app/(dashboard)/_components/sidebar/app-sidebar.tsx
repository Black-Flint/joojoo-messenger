"use client";

import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const data = {
  user: {
    name: "shadcn",
    username: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Favorites",
      items: [
        {
          title: "Installation",
          url: "#",
          avatar: "/avatars/shadcn.jpg",
        },
        {
          title: "Project Structure",
          url: "#",
          avatar: "/avatars/shadcn.jpg",
        },
      ],
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup className="gap-1">
              <SidebarGroupLabel className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <CollapsibleTrigger className="flex w-full items-center justify-between group/label">
                  <span>{item.title}</span>
                  <ChevronRight
                    size={16}
                    className="relative top-px shrink-0 transition-transform group-data-panel-open/label:rotate-90"
                  />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton className="text-xs bg-red-400 rounded-sm h-14 p-3">
                          <Avatar className="h-10 w-10 ">
                            <AvatarImage src={item.avatar} alt={item.title} />
                            <AvatarFallback className="">
                              {item.title.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
