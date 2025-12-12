"use client";

import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Buy Real Estate", href: "/properties" },
  { label: "Turkish Citizenship", href: "/turkishcitizenship" },
  { label: "Buyer Guide", href: "/buyerguide" },
  { label: "Blogs", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed top-4 left-0 right-0 z-50 px-4 sm:px-6'>
      <div>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-md border border-gray-100/60 rounded-full shadow-2xl'>
          <Link href='/'>
            <Image
              src='/PQT_logo.svg'
              alt='Property Quest Logo'
              width={96}
              height={34}
            />
          </Link>
          <div className='hidden lg:flex items-center space-x-6 text-zinc-900'>
            {menuItems.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}
                className='hover:text-red-800'>
                {menu.label}
              </Link>
            ))}
          </div>
          <div className='hidden md:flex items-center space-x-4 text-zinc-900'>
            <Link
              href='/search'
              aria-label='Search'>
              <Search />
            </Link>
            <Link href='/'>Login</Link>
            <Link href='/'>Register</Link>
          </div>
          {/* Mobile menu button */}
          <button
            className='lg:hidden p-2 rounded-md text-zinc-900'
            onClick={() => setOpen(!open)}
            aria-label='Toggle Menu'
            aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile full-screen menu overlay */}
        {open && (
          <div className='fixed inset-0 z-40 bg-white p-6 flex flex-col lg:hidden'>
            <div className='flex items-center justify-between mb-6'>
              <Link
                href='/'
                onClick={() => setOpen(false)}>
                <Image
                  src='/PQT_logo.svg'
                  alt='logo'
                  width={96}
                  height={34}
                />
              </Link>
              <button
                className='p-2 rounded-md'
                onClick={() => setOpen(false)}
                aria-label='Close Menu'>
                <X />
              </button>
            </div>

            <nav className='flex flex-col gap-4 text-lg font-medium'>
              {menuItems.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.href}
                  onClick={() => setOpen(false)}
                  className='text-zinc-900'>
                  {menu.label}
                </Link>
              ))}
            </nav>

            <div className='mt-6 border-t border-gray-200 pt-6 flex flex-col gap-4'>
              <Link
                href='/search'
                onClick={() => setOpen(false)}
                className='flex items-center gap-2'>
                <Search /> <span>Search</span>
              </Link>

              <Link
                href='/'
                onClick={() => setOpen(false)}>
                Login
              </Link>
              <Link
                href='/'
                onClick={() => setOpen(false)}>
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
