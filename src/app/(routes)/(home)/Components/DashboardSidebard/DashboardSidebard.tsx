'use client';

import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { SidebarGroupLabel } from '@/components/ui/sidebar';
import { Sidebar, SidebarContent, SidebarGroup } from '@/components/ui/sidebar';
import {
  Calendar,
  ChartNoAxesColumn,
  HeartIcon,
  HistoryIcon,
  HomeIcon,
  UserIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function DashboardSidebard() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold mb-4 text-base">
            F1 Tracker app, by Mb
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-4">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/"
                    className={`${
                      pathname === '/'
                        ? 'font-bold text-sidebar-accent bg-sidebar-accent-foreground'
                        : 'font-medium'
                    }`}
                  >
                    <HomeIcon />
                    <span className="text-lg">Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/schedule"
                    className={`${
                      pathname === '/schedule'
                        ? 'font-bold text-sidebar-accent bg-sidebar-accent-foreground'
                        : 'font-medium'
                    }`}
                  >
                    <Calendar />
                    <span className="text-lg">Schedule</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/statistics"
                    className={`${
                      pathname === '/statistics'
                        ? 'font-bold text-sidebar-accent bg-sidebar-accent-foreground'
                        : 'font-medium'
                    }`}
                  >
                    <ChartNoAxesColumn />
                    <span className="text-lg">Statistics</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/favorites"
                    className={`${
                      pathname === '/favorites'
                        ? 'font-bold text-sidebar-accent bg-sidebar-accent-foreground'
                        : 'font-medium'
                    }`}
                  >
                    <HeartIcon />
                    <span className="text-lg">Favortie drivers</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/history"
                    className={`${
                      pathname === '/history'
                        ? 'font-bold text-sidebar-accent bg-sidebar-accent-foreground'
                        : 'font-medium'
                    }`}
                  >
                    <HistoryIcon />
                    <span className="text-lg">History</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/user"
                    className={`${
                      pathname === '/user'
                        ? 'font-bold text-sidebar-accent bg-sidebar-accent-foreground'
                        : 'font-medium'
                    }`}
                  >
                    <UserIcon />
                    <span className="text-lg">User</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
