"use client";
import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User } from "next-auth";
import { Button } from "../ui/button";

function Navbar() {
  const { data: session } = useSession();

  const user: User = session?.user as User;

  return (
    <div>
      <nav>
        {session ? (
          <>
            <span>Welcome,{user?.username || user?.email}</span>
            <Button className="" onClick={() => signOut()}>
              Logout
            </Button>
          </>
        ) : (
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
