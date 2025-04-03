"use client";
import Link from "next/link";
import { ChevronLeft, Menu, X } from "lucide-react";
import { ThemeSwitch } from "./theme-switch";
import { LanguageSelector } from "./language-selector";
import type { Locale } from "@/i18n/config";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavbarProps {
  currentLang: Locale;
  dictionary: any;
}

export function Navbar({ currentLang, dictionary }: NavbarProps) {
  const isRTL = currentLang === "ar";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white container mx-auto  mt-12 rounded-xl dark:bg-[#0D1530] border border-gray-200 dark:border-gray-800 py-3">
      <div className="flex justify-between items-center ">
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {(isRTL
            ?  ["home", "features", "solutions", "packages", "academy"]
            : ["home", "features", "solutions", "packages", "academy"]
          ).map((key) => (
            <Link key={key} href="#" className="hover:text-primary">
              {dictionary.navbar.menu[key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <LanguageSelector
              currentLang={currentLang}
              dictionary={dictionary}
            />
            <ThemeSwitch  />
          </div>
          <Button
            className="bg-[#6C31FF] md:flex hidden py-6 px-6 hover:bg-[#5a29d4] text-white"
            size="sm"
          >
            <span className="flex items-center text-sm">
              {dictionary.navbar.startNow}
              <ChevronLeft className="ms-1 h-4 w-4" />
            </span>
          </Button>
          <Button
            className="bg-[#FFAA45]   md:flex hidden py-6 px-5  hover:bg-[#f09c3a] text-gray-800"
            size="sm"
          >
            {dictionary.navbar.signIn}
            <ChevronLeft className="ms-1 h-4 w-4" />
          </Button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-12 flex flex-col gap-4 text-sm font-medium border-t pt-4">
          {(isRTL
            ? ["academy", "packages", "solutions", "features", "home"]
            : ["home", "features", "solutions", "packages", "academy"]
          ).map((key) => (
            <Link
              key={key}
              href="#"
              className="hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {dictionary.navbar.menu[key]}
            </Link>
          ))}
          <Button
            className="bg-[#6C31FF] py-6 px-6 hover:bg-[#5a29d4] text-white"
            size="sm"
          >
            <span className="flex items-center text-sm">
              {dictionary.navbar.startNow}
              <ChevronLeft className="ms-1 h-4 w-4" />
            </span>
          </Button>
          <Button
            className="bg-[#FFAA45] py-6 px-5  hover:bg-[#f09c3a] text-gray-800"
            size="sm"
          >
            {dictionary.navbar.signIn}
            <ChevronLeft className="ms-1 h-4 w-4" />
          </Button>
        </div>
      )}
    </header>
  );
}
