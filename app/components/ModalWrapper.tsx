"use client";

import React from "react";
import { createPortal } from "react-dom";

interface ModalWrapperProps {
    children: React.ReactNode; // Conteúdo do modal
}

export default function ModalWrapper({ children }: ModalWrapperProps) {
    // Verifica se está no navegador (evita erros no SSR)
    if (typeof window === "undefined") return null;

    // Obtém o contêiner do modal no DOM
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) return null;

    // Renderiza o conteúdo do modal no contêiner usando React Portal
    return createPortal(
        <div className="z-[1000] relative">{children}</div>, // Adiciona z-[1000] aqui
        modalRoot
    );
}
