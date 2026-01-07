import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, Menu, X, Dumbbell } from "lucide-react";
import clsx from "clsx";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Programs", href: "#plans" },
        { name: "Trainers", href: "#trainers" },
        { name: "Members", href: "#members" },
    ];

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="p-2 bg-lime-400 rounded-lg group-hover:rotate-12 transition-transform">
                        <Dumbbell className="w-6 h-6 text-black" />
                    </div>
                    <span className="text-2xl font-black italic tracking-tighter text-gray-900 dark:text-white">
                        POWER<span className="text-lime-500">GYM</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-wide text-gray-600 dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black font-bold uppercase text-sm tracking-wider hover:scale-105 active:scale-95 transition-all rounded-sm">
                        Join Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-yellow-400"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-900 dark:text-white p-1"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 border-t dark:border-zinc-800 p-4 shadow-xl flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-lg font-bold text-gray-900 dark:text-white py-2 border-b dark:border-zinc-800"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="w-full py-3 bg-lime-500 text-black font-bold uppercase tracking-wider">
                        Join Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
