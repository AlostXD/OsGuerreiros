"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
                            <div className="bg-white p-0.5 w-8"></div>
                            <div className="bg-white p-0.5 w-8"></div>
                            <div className="bg-white p-0.5 w-8"></div>
                        </span>
                    </button>
                    <ul className="flex flex-col gap-4 mt-8">
                        <li className="hover:text-osg-orange transition-colors cursor-pointer">
                            Home
                        </li>
                        <li className="hover:text-osg-orange transition-colors cursor-pointer">
                            Sobre
                        </li>
                        <li className="hover:text-osg-orange transition-colors cursor-pointer">
                            Estatuto
                        </li>
                        {/* Adicione os outros itens de navegação aqui */}
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
                        <div className="bg-white p-0.5 w-8"></div>
                        <div className="bg-white p-0.5 w-8"></div>
                        <div className="bg-white p-0.5 w-8"></div>
                    </span>
                </button>
            )}
        </>
    );
}
