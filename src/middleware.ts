import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPrivateRoute = createRouteMatcher([
  '/user(.*)',
  '/favorites(.*)',
  '/history(.*)',
  '/statistics/drivers/(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPrivateRoute(req)) {
    // For statistics routes, check if season parameter is less than current year
    if (req.url.includes('/statistics/drivers/')) {
      const url = new URL(req.url);
      const season = url.searchParams.get('season');
      const currentYear = new Date().getFullYear();

      // Only protect if season is less than current year or season parameter is missing
      if (!season || parseInt(season) < currentYear) {
        await auth.protect();
      }
    } else {
      // For other private routes, always protect
      await auth.protect();
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
