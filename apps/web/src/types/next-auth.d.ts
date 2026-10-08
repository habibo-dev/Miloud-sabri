import type { DefaultSession } from "next-auth";
import type { UserRole } from "@miloud-sabri/database";

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole;
    } & DefaultSession["user"];
  }
}