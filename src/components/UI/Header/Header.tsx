"use client";

import { LAYOUT_CONFIG } from "@/config/layout.config";
import { NAVIGATION_ITEMS } from "@/constants";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RegistrationModal from "../Modals/registration.modals";
import LoginModal from "../Modals/login.modal";
import { useState } from "react";
import { signOutFunc } from "@/actions/sign-out";
import { useAuthStore } from "@/store/auth.store";

export const Logo = () => {
  return (
    <Image src="/logo.svg" width={28} height={28} alt="Recipes logo" priority />
  );
};

export default function Header() {
  const pathname = usePathname();

  const { isAuth, status, session, setAuthState } = useAuthStore();

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOutFunc();
    } catch (error) {
      console.log("error:", error);
    }
    setAuthState("unauthenticated", null);
  };

  const renderNavigation = () => {
    return NAVIGATION_ITEMS.filter((item) => {
      if (item.href === "/ingredients") {
        return isAuth;
      }
      return true;
    }).map((navItem) => {
      // check is active menu item
      const isActiveItem = pathname === navItem.href;

      return (
        <NavbarItem isActive={isActiveItem} key={navItem.href}>
          <Link
            color="foreground"
            href={navItem.href}
            className={`px-3 py-1 ${
              isActiveItem ? "text-blue-500" : "text-foreground"
            }
                hover:text-blue-300 hover:border
                hover:border-blue-300 hover:rounded-md 
                hover:shadow-lg transition-colors 
                transition-border transition-shadow duration-500`}
          >
            {navItem.label}
          </Link>
        </NavbarItem>
      );
    });
  };

  return (
    <Navbar style={{ height: LAYOUT_CONFIG.headerHeight }}>
      <NavbarBrand>
        <Link href="/" className="flex gap-1 align-center">
          <Logo />
          <p className="font-bold text-inherit">Recipes</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {renderNavigation()}
      </NavbarContent>

      <NavbarContent justify="end">
        {isAuth && (
          <NavbarItem className="hidden lg:flex">
            Hello {session?.user?.email}
          </NavbarItem>
        )}
        {status === "loading" ? (
          <p>Loading...</p>
        ) : (
          !isAuth && (
            <NavbarItem className="hidden lg:flex">
              <Button
                color="default"
                variant="flat"
                onPress={() => setIsLoginOpen(true)}
              >
                Login
              </Button>
            </NavbarItem>
          )
        )}
        {!isAuth && (
          <NavbarItem>
            <Button
              color="primary"
              variant="flat"
              onPress={() => setIsRegistrationOpen(true)}
            >
              Sign Up
            </Button>
          </NavbarItem>
        )}
        {isAuth && (
          <NavbarItem>
            <Button color="primary" variant="flat" onPress={handleSignOut}>
              Sign Out
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </Navbar>
  );
}
