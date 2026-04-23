'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Farm', href: '/farm' },
  { name: 'Contact', href: '/contact' },
]

export default function AgroNavbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const isHome = pathname === '/'
  const isTransparentMode = isHome && !scrolled;

  const textColor =
    isHome && !scrolled ? 'text-white' 
      : !isHome && scrolled 
      ? 'text-white'
      : 'text-black'

    const logo = (scrolled || (isHome && !scrolled))
      ? '/Logo/light-agro-logo.svg'
      : '/Logo/dark-agro-logo.svg';

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Agro Logo"
              width={220}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors ${
                    active
                      ? 'text-primary'
                      : `${textColor} hover:text-primary`
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                      active ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className={`md:hidden ${textColor} `}
          >
            <AiOutlineMenu size={22} />
          </button>
        </div>
      </header>

      {/* OVERLAY (Sheet-style backdrop) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* DRAWER (Sheet-like panel) */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-background shadow-xl md:hidden
        transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b">
          <span className="font-semibold text-sm">Menu</span>

          <button onClick={() => setOpen(false)}>
            <AiOutlineClose size={22} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 px-6 py-8">
          {navLinks.map((link) => {
            const active = pathname === link.href

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-semibold transition-colors ${
                  active
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </aside>
    </>
  )
}