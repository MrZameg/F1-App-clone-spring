export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      favoriteTeams?: string[];
      favoriteDrivers?: string[];
    };
  }
}
