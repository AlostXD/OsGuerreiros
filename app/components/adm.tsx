"use client";

import React, { useState } from "react";
import Image from "next/image";
import ModalWrapper from "./ModalWrapper"; // Importar o ModalWrapper

interface AdmProps {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Adm({ setIsModalOpen }: AdmProps) {
    const [modalAberto, setModalAberto] = useState<number | null>(null);

    const adm = [
        {
            id: 1,
            name: "Bruno \"BFshow\" Felipe",
            cargo: "CEO",
            img: "/ceo-bf.webp",
            alt: "Foto",
            email: "bfshow@osguerreiros.com",
            bio: "Bruno Felipe também conhecido como BFshow é o fundador da equipe Os Guerreiros, atua como um CEO da equipe Os Guerreiros.",
            social: {
                facebook: "https://www.facebook.com/canalBFshow",
                instagram: "https://www.instagram.com/osg.bfshow",
                twitter: "https://twitter.com/canalBFshow",
            },
        },
        {
            id: 2,
            name: "Vanderlei \"Alost\" Ribeiro",
            cargo: "CCO & CTO",
            img: "/headstaff-discord-alost.webp",
            alt: "Foto",
            email: "alost@osguerreiros.com",
            bio: "Vanderlei Ribeiro, conhecido como Alost ocupa dentro da equipe Os Guerreiros o cargo de Headstaff Discord da equipe, sendo responsável pela administração dos servidores que levam nosso nome, sendo também responsável pelo bem-estar de todas as pessoas que fazem parte do nosso Discord.",
            social: {
                instagram: "https://www.instagram.com/alostxd/",
            },
        },
    ];

    function abrirModal(id: number) {
        setModalAberto(id);
        setIsModalOpen(true);
    }

    function fecharModal() {
        setModalAberto(null);
        setIsModalOpen(false);
    }

    return (
        <>
            <div className="bg-[url(/bg-adm.webp)] bg-cover bg-center bg-local min-h-screen flex flex-col justify-center items-center gap-8 p-4" id="administracao">
                <h1 className="font-bold text-osg-orange text-3xl text-center">Equipe Administrativa</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {adm.map((admin) => (
                        <div
                            key={admin.id}
                            className="flex flex-col gap-4 items-center justify-center bg-osg-orange/80 rounded-lg p-4 w-full max-w-[300px] shadow-2xl cursor-pointer"
                            onClick={() => abrirModal(admin.id)}
                        >
                            <Image
                                src={admin.img}
                                width={200}
                                height={200}
                                alt={admin.alt}
                                className="rounded-full shadow-2xl"
                            />
                            <h2 className="text-xl font-bold text-center">{admin.name}</h2>
                            <h3 className="text-black font-bold text-center">{admin.cargo}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modais */}
            {adm.map((admin) => (
                modalAberto === admin.id && (
                    <ModalWrapper key={admin.id}>
                        <div
                            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-[1000] modal"
                            onClick={(e) => {
                                if ((e.target as HTMLElement).classList.contains("modal")) {
                                    fecharModal();
                                }
                            }}
                        >
                            <div className="bg-zinc-900 p-6 rounded-lg flex flex-col md:flex-row items-center justify-center relative w-full max-w-[300px] md:max-w-[60%]">
                                <Image
                                    src={admin.img}
                                    width={300}
                                    height={300}
                                    alt={admin.alt}
                                    className="rounded-md shadow-2xl"
                                />
                                <div className="flex flex-col justify-center p-4 gap-4 w-full">
                                    <div className="flex flex-col justify-center gap-2">
                                        <h2 className="text-xl font-bold mt-4 text-center md:text-left">{admin.name}</h2>
                                        <h3 className="text-lg font-bold text-center md:text-left">{admin.cargo}</h3>
                                    </div>
                                    <p className="text-sm mt-4 text-center md:text-left">{admin.bio}</p>
                                    <p className="text-center md:text-left">
                                        <strong>Email:</strong> <a href={`mailto:${admin.email}`} className="transition-all duration-300 hover:text-osg-orange underline">{admin.email}</a>
                                    </p>
                                    <div className="flex items-center justify-center md:justify-evenly gap-4 mt-4">
                                        {admin.social.facebook && (
                                            <a href={admin.social.facebook} target="_blank" rel="noopener noreferrer">
                                                <Image
                                                    src="/Facebook-logo.png"
                                                    alt="Facebook"
                                                    width={30}
                                                    height={30}
                                                    className="transition-all duration-300 hover:scale-125"
                                                />
                                            </a>
                                        )}
                                        {admin.social.instagram && (
                                            <a href={admin.social.instagram} target="_blank" rel="noopener noreferrer">
                                                <Image
                                                    src="/Instagram-logo.png"
                                                    alt="Instagram"
                                                    width={30}
                                                    height={30}
                                                    className="transition-all duration-300 hover:scale-125"
                                                />
                                            </a>
                                        )}
                                        {admin.social.twitter && (
                                            <a href={admin.social.twitter} target="_blank" rel="noopener noreferrer">
                                                <Image
                                                    src="/Twitter-logo.png"
                                                    alt="Twitter"
                                                    width={30}
                                                    height={30}
                                                    className="transition-all duration-300 hover:scale-125"
                                                />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <button
                                    onClick={fecharModal}
                                    className="absolute top-2 right-2 p-2 transition-all duration-300 hover:scale-125 hover:cursor-pointer"
                                >
                                    <Image
                                        src="/ico-fechar.webp"
                                        alt="Fechar"
                                        objectFit="contain"
                                        width={30}
                                        height={30}
                                    />
                                </button>
                            </div>
                        </div>
                    </ModalWrapper>
                )
            ))}
        </>
    );
}