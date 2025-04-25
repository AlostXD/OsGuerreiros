import React from 'react'
import Link from 'next/link'

export default function Juntese() {
  return (
    <>
        <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-7 m-auto" id='junte-se'>
            <h2 className='font-bold text-2xl text-center'>Você é um streamer apaixonado pelo o que faz?</h2>
            <h1 className='font-bold text-3xl text-osg-orange text-center'>Faça parte da equipe Os Guerreiros!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto max-w-full md:max-w-[80%] items-center justify-items-center">
                <li className='flex flex-col gap-4 bg-osg-orange/60 p-4 rounded-lg w-[80%] h-[100%]'>
                    <h3 className='font-bold text-2xl text-center'>Requisitos para entrada</h3>
                    <ul className='flex flex-col justify-center gap-2 p-4 list-disc'>
                        <li>Ser um streamer de frequência casual ou profissional, manter o canal ativo.</li>
                        <li>Ter interesse em crescer o canal e confraternizar com outros streamers da equipe.</li>
                    </ul>
                    <p>Para saber todos os requisitos de cada divisão, consulte nosso estatuto ou vá direto para o nosso discord de recrutamento.</p>
                </li>
                <li className='flex flex-col gap-4 bg-osg-orange/60 p-4 rounded-lg w-[80%] h-[100%]'>
                    <h3 className='font-bold text-2xl text-center'>O que oferecemos?</h3>
                    <ul className='flex flex-col justify-center gap-2 p-4 list-disc'>
                        <li>Plataforma estabelecida com uma comunidade ativa de espectadores.</li>
                        <li>Suporte técnico e orientação profissional para ajudar suas transmissões.</li>
                        <li>Oportunidades para parcerias com marcas.</li>
                        <li>Colaborações com outros streamers talentosos e oportunidades de crescimento na equipe. </li>
                    </ul>
                </li>
                <li className='flex flex-col gap-4 bg-osg-orange/60 p-4 rounded-lg w-[80%] h-[100%]'>
                    <h3 className='font-bold text-2xl text-center'>Divisões</h3>
                    <ul className='flex flex-col justify-center gap-2 p-4 list-disc'>
                        <li><strong>Tier 1:</strong> Nossa academia, se você é iniciante, precisa de ajuda, ou queira somente se divulgar, esse é seu lugar! </li>
                        <li><strong>Tier 2:</strong> Nossa divisão principal, temos inúmeros benefícios assim como alguns deveres, veja em qual modalidade seu canal melhor se encaixa.</li>
                        <li><strong>Tier 3 (Em Breve):</strong> Você é um streamer profissional? Essa divisão é para você, contratos e salário personalizado.</li>
                    </ul>
                </li>
                <li className='flex flex-col gap-4 bg-osg-orange/60 p-4 rounded-lg w-[80%] h-[100%]'>
                    <h3 className='font-bold text-2xl text-center'>Como fazer seu recrutamento!</h3>
                    <ol className='flex flex-col justify-center gap-2 p-4 list-decimal'>
                        <li>Leia nosso <Link href="https://osguerreiros.com/estatuto-academia-a/" target='_blank' className='text-blue-700'>estatuto</Link>, se estiver de acordo prosiga.</li>
                        <li>Acesse nosso Discord de recrutamento <Link href="https://osg.cx/discord-recrutamento" target='_blank' className='text-blue-700'>clicando aqui!</Link></li>
                        <li>Cheque as divisões que estamos com recrutamento aberto.</li>
                        <li>Verifique todos os requisitos de entrada para as divisões.</li>
                        <li>Clique para iniciar o recrutamento e responda todas as perguntas realizadas por nosso bot.</li>
                        <li>Pronto agora é só aguardar a resposta que pode levar entre 3 a 7 dias corridos. </li>
                    </ol>
                </li>
            </div>
            <Link href="https://osg.cx/discord-recrutamento" target='_blank' className='bg-osg-orange font-bold p-2 rounded-xl transition-transform duration-300 hover:scale-105 text-center'>Acesse o Discord de recrutamento </Link>
            <p>Queremos construir uma equipe diversificada e inclusiva, não importa se você é iniciante ou se já tem experiência em streaming, estamos interessados no seu entusiasmo e dedicação!</p>
        </div>
    </>
  )
}