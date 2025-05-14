'use client';

import { Button } from '@/components/ui/button';
import {
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { SidebarGroupLabel } from '@/components/ui/sidebar';
import { Sidebar, SidebarContent, SidebarGroup } from '@/components/ui/sidebar';
import { SignInButton, useClerk, useUser } from '@clerk/nextjs';
import {
  Calendar,
  ChartNoAxesColumn,
  HeartIcon,
  HistoryIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { toast } from 'sonner';

export function DashboardSidebard() {
  const pathname = usePathname();
  const { user } = useUser();
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut(() => {
      toast('Successfully signed out', {
        description: 'See you next time!',
        position: 'top-center',
      });
    });
  };

  return (
    <Sidebar>
      {user && (
        <SidebarHeader>
          <h1 className="p-2 text-3xl font-bold">Hi, {user?.firstName}</h1>
        </SidebarHeader>
      )}
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

              {user ? (
                <>
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
                        <Image src={user.imageUrl} alt="User avatar" width={20} height={20} />
                        <span className="text-lg">User settings</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </>
              ) : (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <SignInButton>
                      <Button variant="outline" size="icon" className="cursor-pointer">
                        <LogInIcon />
                        <span className="text-lg">Login</span>
                      </Button>
                    </SignInButton>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {user && (
        <SidebarFooter className="py-4">
          <Button
            variant="destructive"
            size="icon"
            className="flex items-center gap-2 cursor-pointer w-full py-2 px-4 hover:font-bold"
            onClick={handleSignOut}
          >
            <LogOutIcon />
            <span className="text-lg">Logout</span>
          </Button>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
