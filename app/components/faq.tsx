"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        {
            title: 'O que é Os Guerreiros',
            content: 'Somos uma stream network formada por influenciadores que produzem conteúdos relacionados ao mundo dos games.',
        },
        {
            title: 'O que são as TAGs, Booster e Premium?',
            content: (
                <>
                    São TAGs dadas a apoiadores da equipe, com ela os apoiadores têm benefícios especiais, saiba como tornar-se um apoiador na sala{' '}
                    <strong className="text-osg-orange font-bold">“lealdade”</strong> em nosso Discord.
                </>
            ),
        },
        {
            title: 'Quais os convites para os Discord?',
            content: (
                <>
                    Para acessar nosso Discord aberto clique no link a seguir{' '}
                    <Link href="https://osg.cx/discord" target="_blank" className="text-osg-orange underline">
                        https://osg.cx/discord
                    </Link>
                    ; já para acessar nosso Discord de recrutamento clique no link a seguir{' '}
                    <Link href="https://osg.cx/discord-recrutamento" target="_blank" className="text-osg-orange underline">
                        https://osg.cx/discord-recrutamento
                    </Link>.
                </>
            ),
        },
        {
            title: 'Quem são os membros e seus canais?',
            content: (
                <>
                    Para conhecer todos os membros da equipe Os Guerreiros, acesse nosso Discord e vá até as salas{' '}
                    <strong className="text-osg-orange font-bold">“criadores-de-conteúdo”</strong> e{' '}
                    <strong className="text-osg-orange font-bold">“adm-staff”</strong>, nessas salas você irá encontrar uma lista com todos os membros da equipe assim como suas redes sociais.
                </>
            ),
        },
        {
            title: 'Posso jogar nos servidores OsG?',
            content: (
                <>
                    A princípio nossos servidores são exclusivos para{' '}
                    <strong className="font-bold">membros</strong>,{' '}
                    <strong className="font-bold">aliados</strong>,{' '}
                    <strong className="font-bold">convidados</strong>,{' '}
                    <strong className="font-bold">booster</strong> e{' '}
                    <strong className="font-bold">premium</strong>, então para jogar em nossos servidores é bem simples basta dar boost em nosso Discord, ou se tornar um membro premium. Mas fique ligado às vezes disponibilizamos servidores, aberto para todos.
                </>
            ),
        },
        {
            title: 'Como ser um membro da equipe?',
            content: (
                <>
                    Ficamos felizes com seu interesse em se juntar a nossa equipe. Para fazer seu recrutamento acesse nosso{' '}
                    <Link href="https://osg.cx/discord-recrutamento" target="_blank" className="text-osg-orange underline">
                        Discord de Recrutamento
                    </Link>
                    , lá você encontrará tudo que precisa saber antes de efetuar seu recrutamento para a nossa equipe.
                </>
            ),
        },
        {
            title: 'Como subir o Tier do meu canal?',
            content:
                'Temos uma meta de seguidores e horas de stream para cada Tier, mas considere que o principal requisito não são os números, nós priorizamos a qualidade, a constância do seu canal e sua interação com os demais membros e com o nosso Discord.',
        },
        {
            title: 'Meu canal ficara um tempo OFF, o que fazer?',
            content:
                'Se você for ficar um tempo off em seu canal e esse tempo não extrapolar a ausência máxima permitida em nosso estatuto, você deve tomar as ações abaixo. Em nosso Discord envie um ticket para o setor comunicado de ausência, nele informe o motivo da ausência, a data de início da ausência e por quanto tempo durará a ausência.',
        },
        {
            title: 'Posso convidar amigos para a equipe?',
            content:
                'Não só pode como deve, quanto mais pessoas fizerem parte da nossa equipe maiores serão as possibilidades como patrocínios e visibilidade que conseguiremos para todos.',
        },
        {
            title: 'Posso convidar amigos para o Discord?',
            content:
                'Não só pode como deve, quanto mais pessoas entrando e usando nosso Discord, mas benefícios conseguiremos para os membros da equipe e para a equipe em si.',
        },
    ];

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-between max-w-[90%] md:max-w-[60%] p-4 m-auto">
            <Image
                src="/mascote.webp"
                width={300}
                height={300}
                alt="Mascote"
                quality={100} // Ensures the highest quality for the image
                priority // Loads the image with higher priority
                className="mb-6 md:mb-0"
            />
            <div className="flex flex-col gap-4 items-center justify-center w-full">
                <h1 className="text-osg-orange font-bold text-2xl md:text-3xl text-center">FAQ</h1>
                <h2 className="font-bold text-lg md:text-xl text-center">Frequently Asked Questions</h2>
                <div className="flex flex-col list-none w-full max-w-xl">
                    {faqItems.map((item, index) => (
                        <li key={index} className="p-4 rounded-lg">
                            <div
                                className="flex items-center justify-between bg-zinc-700 p-2 rounded-lg cursor-pointer"
                                onClick={() => toggleItem(index)}
                            >
                                <h4 className="font-bold text-sm md:text-base">{item.title}</h4>
                                <Image
                                    src="/ico-scroll.webp"
                                    width={30}
                                    height={50}
                                    alt="scroll"
                                    quality={100} // Ensures the highest quality for the icon
                                    className={`transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-180' : 'rotate-0'
                                    }`}
                                />
                            </div>
                            <p
                                className={`mt-2 text-xs md:text-sm transition-all duration-300 overflow-hidden ${
                                    openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                {item.content}
                            </p>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
}
