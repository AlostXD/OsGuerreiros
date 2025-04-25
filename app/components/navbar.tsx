"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <div
                className={`bg-zinc-950 flex flex-col items-center p-4 fixed h-full top-0 z-50 transition-transform duration-300 overflow-hidden w-64 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <nav className="flex flex-col items-center h-full w-full mt-16">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="flex gap-2 justify-center items-center w-full hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:font-bold hover:text-osg-orange"
                    >
                        <p className="block text-center">Fechar</p>
                        <span className="flex flex-col gap-1 bg-osg-orange p-2 rounded-md">
                            <div className="bg-white p-0.5 w-6"></div>
                            <div className="bg-white p-0.5 w-6"></div>
                            <div className="bg-white p-0.5 w-6"></div>
                        </span>
                    </button>
                    <ul className="flex flex-col gap-4 mt-8">
                        <li className="hover:text-osg-orange transition-colors cursor-pointer">
                            <Link href="#home">Home</Link>
                        </li>
                        <li className="hover:text-osg-orange transition-colors cursor-pointer">
                            <Link href="#sobre">Sobre</Link>
                        </li>
                        <li className="relative cursor-pointer">
                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="cursor-pointer focus:outline-none hover:text-osg-orange transition-colors flex items-center justify-between"
                                >
                                    Estatuto
                                    <Image
                                        src="/ico-scroll.webp"
                                        width={20}
                                        height={40}
                                        alt="scroll"
                                        quality={100} // Ensures the highest quality for the icon
                                        className={`transition-transform duration-300 ${
                                            dropdownOpen ? "rotate-180" : "rotate-0"
                                        } ml-6`}
                                    />
                                </button>
                                {dropdownOpen && (
                                    <ul className="absolute left-0 top-full mt-2 bg-zinc-950 shadow-lg rounded-md border border-osg-orange">
                                        {[
                                            "geral",
                                            "academia-b",
                                            "academia-a",
                                            "principal-a",
                                            "principal-b",
                                            "elite",
                                            "headstaff-staff",
                                        ].map((tipo) => (
                                            <li
                                                key={tipo}
                                                className="hover:bg-osg-orange hover:text-black transition-colors focus-within:bg-osg-orange"
                                            >
                                                <Link
                                                    href={`https://osguerreiros.com/estatuto-${tipo}`}
                                                    className="block px-4 py-2"
                                                >
                                                    {tipo
                                                        .split("-")
                                                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                                        .join(" ")}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                        <li className="hover:text-osg-orange transition-colors cursor-pointer">
                            <Link href="#junte-se">Junte-se</Link>
                        </li>
                        <li className="hover:text-osg-orange transition-colors cursor-pointer">
                            <Link href="#servidores-de-games">Servidores de Games</Link>
                        </li>
                        <li className="hover:text-osg-orange transition-colors cursor-pointer">
                            <Link href="#faq">F.A.Q</Link>
                        </li>
                        <li className="hover:text-osg-orange transition-colors cursor-pointer">
                            <Link href="#administracao">Administração</Link>
                        </li>
                        <li className="hover:text-osg-orange transition-colors cursor-pointer">
                            <Link href="#patrocinadores">Patrocinadores</Link>
                        </li>
                        <li className="hover:text-osg-orange transition-colors cursor-pointer">
                            <Link href="#contato">Contatos</Link>
                        </li>
                    </ul>
                    <Image
                        src="/logo.webp"
                        width={150}
                        height={150}
                        alt="Logo"
                        className="mt-auto"
                    />
                </nav>
            </div>

            {/* Open Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed flex items-center gap-2 top-4 left-4 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                    <span className="flex flex-col gap-1 bg-osg-orange p-2 rounded-md">
                        <div className="bg-white p-0.5 w-6"></div>
                        <div className="bg-white p-0.5 w-6"></div>
                        <div className="bg-white p-0.5 w-6"></div>
                    </span>
                </button>
            )}
        </>
    );
}
