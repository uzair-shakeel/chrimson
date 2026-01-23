"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import data from "./data.json";

type NavItem = {
  name: string;
  link: string;
  hasDropdown: boolean;
  submenu: string[];
  active: boolean;
};

const Navbar = () => {
  const pathname = usePathname();
  const [drawerShown, setDrawerShown] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!drawerShown) return;
    const scrollY = window.scrollY || 0;
    const prev = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
    };
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    return () => {
      const y =
        Number((document.body.style.top || "0").replace(/[^-\d]/g, "")) || 0;
      document.body.style.position = prev.position;
      document.body.style.top = prev.top;
      document.body.style.left = prev.left;
      document.body.style.right = prev.right;
      document.body.style.width = prev.width;
      window.scrollTo(0, Math.abs(y));
    };
  }, [drawerShown]);

  useEffect(() => {
    lastY.current = window.scrollY || 0;
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const delta = y - lastY.current;
        setScrolled(y > 8);
        if (Math.abs(delta) > 6) {
          setVisible(delta < 0 || y < 10);
          lastY.current = y;
        }
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: NavItem[] = useMemo(() => {
    const list = data.nav.list;
    return list.map((it) => {
      const link = it.link || "#";
      const isRoot = link === "/";
      const isActive = isRoot ? pathname === "/" : pathname?.startsWith(link);
      return {
        name: it.item || "",
        link,
        hasDropdown: false,
        submenu: [],
        active: !!isActive,
      };
    });
  }, [pathname]);

  return (

    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm py-0"
        : "bg-transparent py-2"
        } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between w-full h-20 sm:h-24 px-6 md:px-12 gap-6 md:gap-16">
        <div className="flex items-center">
          <Image
            src={scrolled ? "/logo-black.svg" : "/logo.svg"}
            alt="logo"
            width={200}
            height={80}
            className="w-[180px] sm:w-[200px] transition-all duration-300"
          />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item: NavItem) => (
            <Link
              key={item.name}
              href={item.link || "#"}
              className={`text-[15px] font-[600] tracking-wide transition-all duration-300 relative group overflow-hidden ${scrolled ? "text-gray-800" : "text-white"
                }`}
            >
              <span className="relative z-10">{item.name}</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${scrolled ? "bg-gray-800" : "bg-white"
                  } ${item.active ? "scale-x-100" : ""}`}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button
            aria-label="Open menu"
            className={`md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md transition-colors ${scrolled ? "text-gray-800 border-gray-200" : "text-white border-white/20"
              } border`}
            onClick={() => {
              setDrawerShown(true);
              requestAnimationFrame(() => setDrawerOpen(true));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu (Portal) */}
      {
        mounted &&
        drawerShown &&
        createPortal(
          <div className="fixed inset-0 w-screen h-screen z-50 md:hidden overscroll-contain">
            <div
              className={`absolute inset-0 w-full h-full bg-black/40 transition-opacity duration-300 ${drawerOpen ? "opacity-100" : "opacity-0"
                }`}
              onClick={() => {
                setDrawerOpen(false);
                setTimeout(() => setDrawerShown(false), 300);
              }}
            />
            <div
              className={`absolute right-0 top-0 h-screen max-h-screen w-[78%] max-w-[320px] bg-white shadow-xl p-5 flex flex-col overflow-y-auto transform transition-transform duration-300 ${drawerOpen ? "translate-x-0" : "translate-x-full"
                }`}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-end justify-end">

                <button
                  aria-label="Close menu"
                  className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-gray-200"
                  onClick={() => {
                    setDrawerOpen(false);
                    setTimeout(() => setDrawerShown(false), 300);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#000"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <nav className="mt-6 space-y-1">
                {navItems.map((item: NavItem) => (
                  <Link
                    key={item.name}
                    href={item.link || "#"}
                    className={`block rounded-md px-3 py-3 text-base font-medium ${item.active
                      ? "text-green-600 bg-green-50"
                      : "text-gray-800 hover:bg-gray-50"
                      }`}
                    onClick={() => {
                      setDrawerOpen(false);
                      setTimeout(() => setDrawerShown(false), 300);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>,
          document.body
        )
      }
    </div >
  );
};

export default Navbar;
