import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@miloud-sabri/database";
const { handlers } = NextAuth({ adapter: PrismaAdapter(db), providers: [Google({ clientId: process.env.AUTH_GOOGLE_ID, clientSecret: process.env.AUTH_GOOGLE_SECRET })], pages: { signIn: "/login" } });
export const { GET, POST } = handlers;