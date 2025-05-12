"use client";
import Link from "next/link";
import { ChevronLeft, Menu, X } from "lucide-react";
import { ThemeSwitch } from "./theme-switch";
import { LanguageSelector } from "./language-selector";
import type { Locale } from "@/i18n/config";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface NavbarProps {
  currentLang: Locale;
  dictionary: any;
}

export function Navbar({ currentLang, dictionary }: NavbarProps) {
  const isRTL = currentLang == "ar";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white container mx-auto  z-20  mt-6 rounded-xl dark:bg-[#0D1530] dark:border-[#1A6ADC] border border-gray-200  py-3">
      <div className="flex items-center ">
        <div className=" flex flex-grow gap-12">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="mr-2"
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {(isRTL
              ? ["home", "features", "solutions", "packages", "academy"]
              : ["home", "features", "solutions", "packages", "academy"]
            ).map((key) => (
              <Link key={key} href="#" className="hover:text-primary">
                {dictionary.navbar.menu[key]}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <ThemeSwitch isRTL={isRTL} />
            <LanguageSelector
              currentLang={currentLang}
              dictionary={dictionary}
            />
          </div>

          <Button
            className=" relative overflow-hidden group transition-all duration-300 bg-[#6C31FF] md:flex hidden py-6 px-6 hover:bg-[#5a29d4] text-white"
            size="sm"
          >
            <span className="flex items-center text-sm">
              <span className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 text-lg text-base-black w-full font-semibold transition-all duration-500 group-hover:bottom-[-30px] text-center">
                {dictionary.navbar.startNow}
              </span>

              {/* Main text */}
              <span className="text-[16px] text-base-black font-medium leading-[160%]">
                {dictionary.navbar.startNow}
              </span>

              <ChevronLeft className="ms-1 h-4 w-4" />
            </span>
          </Button>
          <Button
            className=" relative overflow-hidden group transition-all duration-300 bg-[#FFCA64]   md:flex hidden py-6 px-5  hover:bg-[#f09c3a] text-gray-800"
            size="sm"
          >
            <span className="flex items-center text-sm">
              <span className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 text-lg text-base-black w-full font-semibold transition-all duration-500 group-hover:bottom-[-30px] text-center">
                {dictionary.navbar.signIn}
              </span>

              {/* Main text */}
              <span className="text-[16px] text-base-black font-medium leading-[160%]">
                {dictionary.navbar.signIn}
              </span>

              <ChevronLeft className="ms-1 h-4 w-4" />
            </span>
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
        <div>
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium border-t pt-4"
              >
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
                <ThemeSwitch isRTL={isRTL} />
                <div className="flex">
                  <LanguageSelector
                    currentLang={currentLang}
                    dictionary={dictionary}
                  />
                </div>
                <Button
                  className="bg-[#FFAA45] py-6 px-5 hover:bg-[#f09c3a] text-gray-800"
                  size="sm"
                >
                  {dictionary.navbar.signIn}
                  <ChevronLeft className="ms-1 h-4 w-4" />
                </Button>
                <Button
                  className="bg-[#6C31FF] py-6 px-6 hover:bg-[#5a29d4] text-white"
                  size="sm"
                >
                  <span className="flex items-center text-sm">
                    {dictionary.navbar.startNow}
                    <ChevronLeft className="ms-1 h-4 w-4" />
                  </span>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </header>
  );
}
