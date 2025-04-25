"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Patrocinios() {
    const [modalAberto, setModalAberto] = useState<number | null>(null);

    const patrocinadores = [
        {
            id: 1,
            nome: "Host Havoc",
            bio: "Somos uma empresa onde todos somos gamers, adoramos os jogos que hospedamos. Com nossa experiência nesse tipo de plataformas por entretenimento garantimos um nível de paixão e qualidade que você não encontrará em nenhum outro lugar, estamos no mercado de host desde 2013 e oferecemos suporte 24/7.",
            link: "https://osg.cx/hosthavoc",
            img: "/patroci-hosthavoc.webp",
        },
        {
            id: 2,
            nome: "Creators by Husky",
            bio: "Aqui, você recebe seus ganhos das plataformas como Twitch e YouTube pagando uma taxa muito menor e com total segurança. Todos os produtos by Husky são garantidos pelo Banco Central do Brasil, e o melhor de tudo, o atendimento é 100% em português.",
            link: "https://osg.cx/creators",
            img: "/patroci-creators.webp",
        },
        {
            id: 3,
            nome: "Nerd Or Die",
            bio: "Aqui você encontra todas as artes que precisa para sua transmissão, como sobreposições, alertas, etc, tudo compatíveis com Twitch, YouTube. Começamos como um site de tutorial e evoluímos para uma marca que cria designs personalizados e tutoriais.",
            link: "https://osg.cx/nerdordie",
            img: "/patroci-nerdordie.webp",
        },
        {
            id: 4,
            nome: "Overclock",
            bio: "Melhore o desempenho da peça mais importante de qualquer setup: o próprio player! Uma bebida energética que aumenta o desempenho de todas as atividades que exijam muito foco e concentração.",
            link: "https://osg.cx/overclock",
            img: "/patroci-overclock.webp",
        },
        {
            id: 5,
            nome: "Dogmil & Kettymil",
            bio: "Alimento premium completo de alta qualidade para cães e gatos adultos de todas as raças, elaborado com ingredientes selecionados, cuidadosamente balanceados e processados de forma a obter alta digestibilidade.",
            link: "https://imbramil.com.br/",
            img: "/patroci-dogmil.webp",
        },
    ];

    function abrirModal(id: number) {
        setModalAberto(id);
    }

    function fecharModal() {
        setModalAberto(null);
    }

    return (
        <>
            <div
                className="bg-[url(/bg-patrocinador.webp)] bg-cover bg-center bg-local min-h-screen flex flex-col justify-center items-center gap-8 p-4"
                id="patrocinadores"
            >
                <h1 className="text-osg-orange text-3xl font-bold">
                    Empresas que confiam no nosso projeto!
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {patrocinadores.map((patrocinador) => (
                        <div
                            key={patrocinador.id}
                            className="bg-zinc-700 p-4 rounded-lg shadow-md flex flex-col items-center justify-between cursor-pointer"
                            onClick={() => abrirModal(patrocinador.id)}
                        >
                            <Image
                                src={patrocinador.img}
                                alt={`${patrocinador.nome} logo`}
                                width={150}
                                height={150}
                                className="mb-4"
                            />
                            <h2 className="text-xl font-bold text-osg-orange mb-2">
                                {patrocinador.nome}
                            </h2>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        className="bg-osg-orange rounded-md font-bold transition-all duration-300 hover:scale-105 hover:cursor-pointer p-2"
                        onClick={() => abrirModal(100)}
                    >
                        Por que ser um patrocinador?
                    </button>
                    <button
                        className="bg-osg-orange rounded-md font-bold transition-all duration-300 hover:scale-105 hover:cursor-pointer p-2"
                        onClick={() => abrirModal(101)}
                    >
                        Como apoiar a equipe?
                    </button>
                </div>
                <p>
                    Para mais informações, esclarecimento ou solicitações, envie um e-mail para{" "}
                    <Link href="mailto:comercial@osguerreiros.com" className="text-osg-orange underline">
                        comercial@osguerreiros.com
                    </Link>.
                </p>
            </div>

            {/* Modais de patrocinadores */}
            {patrocinadores.map((patrocinador) => (
                modalAberto === patrocinador.id && (
                    <div key={patrocinador.id} className="fixed inset-0 bg-black/90 flex items-center justify-center">
                        <div className="bg-zinc-900 p-4 gap-4 rounded-lg flex flex-col md:flex-row items-center justify-center relative max-w-[90%] md:max-w-[70%]">
                            <Image
                                src={patrocinador.img}
                                alt={`${patrocinador.nome} logo`}
                                width={200}
                                height={200}
                                className="mb-4"
                            />
                            <div className="flex flex-col items-center justify-center max-w-[50%]">
                                <h2 className="text-xl font-bold text-osg-orange">{patrocinador.nome}</h2>
                                <p className="text-gray-300 mt-4">{patrocinador.bio}</p>
                                <a
                                    href={patrocinador.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-osg-orange text-white font-bold py-2 px-4 rounded-md mt-4 transition-transform duration-300 hover:scale-105"
                                >
                                    Saiba mais
                                </a>
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
                )
            ))}

            {/* Modal: Por que ser um patrocinador? */}
            {modalAberto === 100 && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center">
                    <div className="bg-zinc-900 p-8 rounded-lg flex flex-col items-center justify-center relative max-w-full md:max-w-[50%]">
                        <h2 className="text-xl font-bold text-osg-orange mb-4">Por que ser um patrocinador?</h2>
                        <ol className="list-decimal flex flex-col gap-2">
                            <li>Alcançar novos clientes e lançar novos produtos e/ou serviços;</li>
                            <li>Obtenção de vantagem competitiva e alcance de mercado;</li>
                            <li>Aproximação com um público;</li>
                            <li>Fidelização;</li>
                            <li>Endomarketing;</li>
                            <li>Divulgação da marca da empresa em nossas redes sociais, site e página da equipe na Twitch;</li>
                            <li>Fazer utilização do potencial do Cobranding, alinhando valores de sua empresa aos valores da equipe Os Guerreiros.</li>
                            <li>Aumentar o reconhecimento de marca de maneira orgânica através da exposição midiática;</li>
                        </ol>
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
            )}

            {/* Modal: Como apoiar a equipe? */}
            {modalAberto === 101 && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center">
                    <div className="bg-zinc-900 p-8 rounded-lg flex flex-col items-center justify-center relative max-w-full md:max-w-[50%] gap-6">
                        <h2 className="text-xl font-bold text-osg-orange">Como apoiar a equipe?</h2>
                        <ol className="list-decimal flex flex-col gap-2">
                            <li>Ajuda financeira, que pode ser feita por meio de doação (caso de quantias pequenas) ou patrocínio financeiro (quantias grandes);</li>
                            <li>Fornecimento de produtos ou serviços;</li>
                        </ol>
                        <p>Para informações, esclarecimento ou solicitações de parceria envie um e-mail para <Link href="mailto:comercial@osguerreiros.com" className="text-osg-orange underline">comercial@osguerreiros.com</Link>.</p>
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
            )}
        </>
    );
}