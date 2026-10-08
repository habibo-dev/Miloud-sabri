import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@miloud-sabri/database";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      const role = (user as unknown as { role?: typeof session.user.role }).role;
      if (session.user && role) session.user.role = role;
      return session;
    },
  },
  pages: { signIn: "/connexion" },
});
