"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import AddNoteDialog from "@/components/AddNoteDialog";

export default function Navbar() {
  const [showAddNoteDialog, setShowAddNoteDialog] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between px-3 shadow">
        <Link href={`/`} className="flex items-center">
          <Image src={logo} alt="Icon" width={80} height={80} />
          <h3 className="hidden md:block">JAM NOTE</h3>
        </Link>
        <div className="flex items-center gap-3">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  width: "2.5rem",
                  height: "2.5rem",
                },
              },
            }}
          />
          <Button
            onClick={() => setShowAddNoteDialog(!showAddNoteDialog)}
            className="flex gap-3 bg-black"
          >
            <Plus />
            <p className=" text-sm md:text-lg">ADD NOTE</p>
          </Button>
        </div>
      </div>
      <div className="">
        <AddNoteDialog
          open={showAddNoteDialog}
          setOpen={setShowAddNoteDialog}
        />
      </div>
    </>
  );
}
