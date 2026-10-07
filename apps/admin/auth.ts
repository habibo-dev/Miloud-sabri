import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@miloud-sabri/database";

export const { auth, handlers } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [Google({ clientId: process.env.AUTH_GOOGLE_ID, clientSecret: process.env.AUTH_GOOGLE_SECRET })],
  callbacks: {
    async authorized({ auth }) {
      return auth?.user?.role === "ADMIN" || auth?.user?.role === "AGENT";
    },
    async session({ session, user }) {
      if (session.user) session.user.role = user.role;
      return session;
    }
  },
  pages: { signIn: "/login" }
});