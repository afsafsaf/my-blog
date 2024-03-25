import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Ghost, Menu } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <div className="container mx-auto px-4">
        <div className="item-center flex justify-between py-4">
          <Link href={"/"} className="cursor-pointer text-2xl font-bold">
            NewsHub
          </Link>

          <div className="hidden md:block">
            <div className="flex cursor-pointer items-center gap-8">
              <Link href={"/"}>
                <h3>Home</h3>
              </Link>
              <h3>Profile</h3>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="block md:hidden">
              <Button variant="ghost">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {" "}
                <Link href={"/"}>Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
