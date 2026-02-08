"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/workshops", label: "Workshops" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Only apply scroll effect on home page
    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // On non-home pages, navbar is always visible
    const shouldShowNavbar = !isHomePage || isScrolled;

    return (
        <div
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
                shouldShowNavbar ? "px-4 pt-4" : "px-0 pt-0"
            )}
        >
            <nav
                className="mx-auto max-w-7xl rounded-2xl transition-all duration-500 ease-out"
                style={{
                    background: shouldShowNavbar ? 'rgba(255, 255, 255, 0.7)' : 'transparent',
                    backdropFilter: shouldShowNavbar ? 'blur(16px)' : 'none',
                    WebkitBackdropFilter: shouldShowNavbar ? 'blur(16px)' : 'none',
                    border: shouldShowNavbar ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent',
                    boxShadow: shouldShowNavbar
                        ? '0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)'
                        : 'none',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <Container
                    className={cn(
                        "flex items-center justify-between transition-all duration-500 ease-out",
                        shouldShowNavbar ? "h-16" : "h-20"
                    )}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className={cn(
                            "flex items-center gap-2 transition-all duration-500 ease-out flex-1 justify-center md:flex-none md:justify-start",
                            shouldShowNavbar ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        )}
                    >
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <img
                                src="/images/logo.jpg"
                                alt="Mindsake Logo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <span className="font-heading text-xl font-bold text-primary-dark tracking-tight">
                            Mindsake
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div
                        className={cn(
                            "hidden md:flex md:gap-8 md:items-center transition-all duration-500 ease-out",
                            shouldShowNavbar ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        )}
                    >
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary-dark",
                                    pathname === link.href ? "text-primary-dark font-semibold" : "text-secondary"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button size="sm" href="https://forms.gle/a23Fe4UPjVquuAVZA" target="_blank">Book Session</Button>
                    </div>

                    {/* Mobile Menu Toggle - Animated Hamburger */}
                    <button
                        className={cn(
                            "md:hidden relative w-6 h-6 flex flex-col justify-center items-center transition-all duration-500 ease-out",
                            shouldShowNavbar ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {/* Top bar */}
                        <span
                            className={cn(
                                "absolute w-6 h-0.5 bg-secondary transition-all duration-300 ease-out",
                                isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                            )}
                        />
                        {/* Middle bar */}
                        <span
                            className={cn(
                                "absolute w-6 h-0.5 bg-secondary transition-all duration-300 ease-out",
                                isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                            )}
                        />
                        {/* Bottom bar */}
                        <span
                            className={cn(
                                "absolute w-6 h-0.5 bg-secondary transition-all duration-300 ease-out",
                                isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                            )}
                        />
                    </button>
                </Container>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="mt-2 mx-auto max-w-7xl rounded-xl p-4 md:hidden"
                    style={{
                        background: 'rgba(255, 255, 255, 0.85)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
                    }}
                >
                    <div className="flex flex-col space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-base font-medium transition-colors hover:text-primary-dark",
                                    pathname === link.href ? "text-primary-dark" : "text-secondary"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button className="w-full" href="https://forms.gle/a23Fe4UPjVquuAVZA" target="_blank">Book Session</Button>
                    </div>
                </div>
            )}
        </div>
    );
}
