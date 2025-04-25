"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function Servidores() {
    const [modalAberto, setModalAberto] = useState<number | null>(null);

    function abrirModal(id: number) {
        setModalAberto(id);
    }

    function fecharModal() {
        setModalAberto(null);
    }

    return (
        <>
            <div className="min-h-screen flex flex-col items-center p-8 gap-4" id='servidores-de-games'>
            <h1 className='text-osg-orange font-bold text-3xl'>Servidores de Games</h1>
            <h3 className='italic underline'>Oferecimento Host Havoc</h3>
            <div className="flex justify-between items-center gap-4 m-auto max-w-[70%] flex-col md:flex-row">
                <div className="flex flex-col gap-6 max-w-[75%]">
                <h3 className='text-osg-orange font-bold text-xl'>Servidores otimizados para streamers</h3>
                <p>Então, galera, estamos convidando todos os fãs de jogos para se juntarem a nós em nossos servidores! Não importa se você é um veterano dos games ou um novato, temos algo especial para você! </p>
                <ul className='flex flex-col justify-center gap-2 p-4 list-disc'>
                    <li><strong>Explore um universo de possibilidades:</strong> Oferecemos uma variedade de jogos e modos para todos os gostos.</li>
                    <li><strong>Servidores Otimizados:</strong> Nossos servidores são otimizados para streamers.</li>
                    <li><strong>Servidores confiáveis e sem atrasos:</strong> Estabilidade é crucial para uma experiência de jogo perfeita. Os servidores da HostHavoc são super confiáveis e têm a melhor tecnologia para garantir uma conexão suave e sem atrasos. Assim, você pode se concentrar no que realmente importa.</li>
                </ul>
                <h3 className='text-osg-orange font-bold text-xl'>Como jogar</h3>
                <p>Para jogar em nossos servidores é muito simples, basta entrar no Discord, conferir a categoria &apos;Servidores&apos;. Lá você vai encontrar tudo o que precisa para jogar com a gente.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                <h2 className='font-bold text-xl'>Nossos Servidores</h2>
                <button className='font-bold bg-osg-orange rounded-xl p-2 w-full transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:bg-osg-orange/70' onClick={() => abrirModal(1)}>Euro Truck Simulator 2</button>
                <button className='font-bold bg-osg-orange rounded-xl p-2 w-full transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:bg-osg-orange/70' onClick={() => abrirModal(2)}>ARK: Survival Envolved</button>
                <button className='font-bold bg-osg-orange rounded-xl p-2 w-full transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:bg-osg-orange/70' onClick={() => abrirModal(3)}>Minecraft 1.20.1 (Java Edition)</button>
                <button className='font-bold bg-osg-orange rounded-xl p-2 w-full transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:bg-osg-orange/70' onClick={() => abrirModal(4)}>Valheim</button>
                </div>
            </div>
            <h2 className='font-bold'>Chame seus amigos e embarque nessa jornada. Estamos esperando por você! Nos vemos lá! Prepare-se para a ação!</h2>
            </div>

            {/* Modais */}
            {modalAberto === 1 && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center list-none">
                <div className="bg-zinc-900 p-8 rounded-lg flex flex-col md:flex-row items-center justify-center relative">
                <div className="flex flex-col gap-2 max-w-[400px]">
                    <li><strong className="text-osg-orange">Game:</strong> Euro Truck Simulator 2</li>
                    <li><strong className="text-osg-orange">Mapa:</strong> EAA (mapa da américa do sul)</li>
                    <li><strong className="text-osg-orange">Mods:</strong> https://osg.cx/mods-ets-2</li>
                    <li><strong className="text-osg-orange">Regras:</strong> https://osg.cx/regras-ets2</li>
                    <li><strong className="text-osg-orange">Entrada:</strong> Livre</li>
                    <li><strong className="text-osg-orange">Nome do servidor, ID ou IP:</strong> EAA com mods 24h osg.cx/discord by hosthavoc – 90178824165100574/111</li> 
                </div>
                <button onClick={fecharModal} className="absolute top-2 right-2 p-2 transition-all duration-300 hover:scale-125 hover:cursor-pointer">
                    <Image
                    src="/ico-fechar.webp"
                    alt="Fechar"
                    objectFit="contain"
                    width={30}
                    height={30}
                    />
                </button>
                <Image
                    src="/server-ets.webp"
                    alt="Euro Truck Simulator 2"
                    width={300}
                    height={200}
                    className=""
                />
                </div>
            </div>
            )}
            {modalAberto === 2 && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center list-none">
                <div className="bg-zinc-900 p-8 rounded-lg flex flex-col md:flex-row items-center justify-center relative">
                <div className="flex flex-col gap-2 max-w-[400px]">
                    <li><strong className="text-osg-orange">Game:</strong> ARK: Survival Evolved</li>
                    <li><strong className="text-osg-orange">Mapa:</strong> The Volcano</li>
                    <li><strong className="text-osg-orange">Mods:</strong> https://osg.cx/mods-ark</li>
                    <li><strong className="text-osg-orange">Regras:</strong> https://osg.cx/regras-ark</li>
                    <li><strong className="text-osg-orange">Entrada:</strong> Livre, mas com AllowList, faça em nosso Discord.</li>
                    <li><strong className="text-osg-orange">Nome do servidor, ID ou IP:</strong> 64.94.95.61:27055</li>
                </div>
                <button onClick={fecharModal} className="absolute top-2 right-2 p-2 transition-all duration-300 hover:scale-125 hover:cursor-pointer">
                    <Image
                    src="/ico-fechar.webp"
                    alt="Fechar"
                    objectFit="contain"
                    width={30}
                    height={30}
                    />
                </button>
                <Image
                    src="/server-ark.webp"
                    alt="ARK: Survival Evolved"
                    width={300}
                    height={200}
                    className=""
                />
                </div>
            </div>
            )}
            {modalAberto === 3 && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center list-none">
                <div className="bg-zinc-900 p-8 rounded-lg flex flex-col md:flex-row items-center justify-center relative">
                <div className="flex flex-col gap-2 max-w-[400px]">
                    <li><strong className="text-osg-orange">Game:</strong> Minecraft 1.20.1 (Java Edition)</li>
                    <li><strong className="text-osg-orange">Mods:</strong> Nenhum</li>
                    <li><strong className="text-osg-orange">Regras:</strong> https://osg.cx/regras-minecraft</li>
                    <li><strong className="text-osg-orange">Entrada:</strong> Membros, Aliados, Convidados, Booster e Premium</li>
                    <li><strong className="text-osg-orange">Nome do servidor, ID ou IP:</strong> 54.39.243.223:25634</li>
                </div>
                <button onClick={fecharModal} className="absolute top-2 right-2 p-2 transition-all duration-300 hover:scale-125 hover:cursor-pointer">
                    <Image
                    src="/ico-fechar.webp"
                    alt="Fechar"
                    objectFit="contain"
                    width={30}
                    height={30}
                    />
                </button>
                <Image
                    src="/server-minecraft.webp"
                    alt="Minecraft"
                    width={300}
                    height={200}
                    className=""
                />
                </div>
            </div>
            )}
            {modalAberto === 4 && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center list-none">
                <div className="bg-zinc-900 p-8 rounded-lg flex flex-col md:flex-row items-center justify-center relative">
                <div className="flex flex-col gap-2 max-w-[400px]">
                    <li><strong className="text-osg-orange">Game:</strong> Valheim</li>
                    <li><strong className="text-osg-orange">Mods:</strong> Nenhum</li>
                    <li><strong className="text-osg-orange">Regras:</strong> https://osg.cx/regras-valheim</li>
                    <li><strong className="text-osg-orange">Entrada:</strong> Membros, Aliados, Convidados, Booster e Premium</li>
                    <li><strong className="text-osg-orange">Nome do servidor, ID ou IP:</strong> 64.94.95.61:27030</li>
                </div>
                <button onClick={fecharModal} className="absolute top-2 right-2 p-2 transition-all duration-300 hover:scale-125 hover:cursor-pointer">
                    <Image
                    src="/ico-fechar.webp"
                    alt="Fechar"
                    objectFit="contain"
                    width={30}
                    height={30}
                    />
                </button>
                <Image
                    src="/server-valhein.webp"
                    alt="Valheim"
                    width={300}
                    height={200}
                    className=""
                />
                </div>
            </div>
            )}
        </>
    );
}