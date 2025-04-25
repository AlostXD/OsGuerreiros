import React from 'react'
import Link from 'next/link'

export default function Contato() {
  return (
    <>
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 gap-4 m-auto" id='contato'>
            <div className="max-w-[80%] flex flex-col gap-4 justify-center p-4 m-auto">
                <div className="flex flex-col gap-4 items-center justify-center bg-osg-orange/45 rounded-lg p-4 w-full md:w-1/2">
                    <h1 className='text-3xl font-bold'>Contato</h1>
                    <p>Para qualquer dúvida, utilize os canais abaixo para saná-las:</p>
                    <p><strong>Discord:</strong> Abra um ticket em nosso Discord <Link href="https://osg.cx/discord" className='text-osg-orange underline'>https://osg.cx/discord.</Link> ficaremos felizes em atende-los de segunda a sexta em horário comercial.</p>
                    <p><strong>E-mail:</strong> Envie suas perguntas para os e-mails abaixo que responderemos o mais rápido possível de <strong className='underline'>segunda a sexta em horário comercial.</strong></p>
                    <ul className='list-disc'>
                        <li><strong>Diretoria:</strong> diretoria@osguerreiros.com</li>
                        <li><strong>RH:</strong> rh@osguerreiros.com</li>
                        <li><strong>Comercial:</strong> comercial@osguerreiros.com</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 items-center justify-center bg-osg-orange/45 rounded-lg p-4 w-full md:w-1/2">
                    <h1 className='text-3xl font-bold'>Administração</h1>
                    <ul className='flex flex-col justify-center'>
                        <h2 className='text-xl font-bold text-center'>Direção</h2>
                        <li><strong>CEO:</strong> Bruno Felipe</li>
                        <li><strong>Discord:</strong> osg_bfshow</li>
                        <li><strong>E-mail:</strong> bfshow@osguerreiros.com</li>
                    </ul>
                    <ul className='flex flex-col justify-center'>
                        <h2 className='text-xl font-bold text-center'>HeadStaff</h2>
                        <li><strong>CCO & CTO:</strong> Vanderlei Ribeiro</li>
                        <li><strong>Discord:</strong> alost</li>
                        <li><strong>E-mail:</strong> alost@osguerreiros.com</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-8 items-center justify-between w-full max-w-[40%] m-auto">
                <iframe src="https://discord.com/widget?id=352329060598284288&theme=dark"
                    frameBorder="0"
                    sandbox="allow-popups
                    allow-popups-to-escape-sandbox
                    allow-same-origin allow-scripts"
                    className="w-[350px] h-[400px] md:w-[60%] md:h-[500px] rounded-lg"
                    title="Discord Widget"
                >
                </iframe>
                <div className="flex flex-col bg-osg-orange/45 rounded-lg p-4 gap-4 w-[350px]">
                    <h2 className='text-xl font-bold text-center'>Demais Links</h2>
                    <p><strong>Hub de Links:</strong> <Link href="https://osg.cx" target='_blank' className='underline'>https://osg.cx</Link></p>
                </div>
            </div>
        </div>
    </>
  )
}