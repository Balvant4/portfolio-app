import React from "react";
import Link from "next/link";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

function UserSection({ session, closeMenu }: any) {
  return (
    <div>
      {session ? (
        <>
          <span className="pr-5">
            Hi, {session?.user?.username || session?.user?.email}
          </span>
          <Button
            className=" bg-textcolor hover:bg-btnhover text-black text-[1rem] font-bold"
            onClick={() => {
              signOut();
              closeMenu();
            }}
          >
            Logout
          </Button>
        </>
      ) : (
        <Link href="/sign-in">
          <Button className="bg-textcolor hover:bg-btnhover text-black font-bold">
            Login
          </Button>
        </Link>
      )}
    </div>
  );
}

export default UserSection;
