import React from 'react'
import Link from 'next/link'

export default function Contato() {
  return (
    <>
        <div className="md:max-w-[60%] max-w-full flex justify-center m-auto p-4 min-h-screen" id='contato'> {/* Reduzido gap-4 para gap-2 */}
            <div className="flex flex-col lg:flex-row justify-center gap-2 items-center m-auto">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 items-center justify-center bg-osg-orange/45 rounded-lg p-4 w-full md:w-[80%] flex-grow-0 flex-shrink-0 min-h-[300px] max-h-[350px]"> {/* Ajustado gap interno */}
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
                    <div className="flex flex-col gap-2 items-center justify-center bg-osg-orange/45 rounded-lg p-4 w-full md:w-[80%] flex-grow-0 flex-shrink-0 basis-[45%] min-h-[300px] max-h-[350px]"> {/* Ajustado gap interno */}
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
                <iframe src="https://discord.com/widget?id=352329060598284288&theme=dark"
                    frameBorder="0"
                    sandbox="allow-popups
                    allow-popups-to-escape-sandbox
                    allow-same-origin allow-scripts"
                    className="w-[100%] h-[550px] md:w-[45%] md:h-[650px] rounded-lg" /* Tamanhos consistentes */
                    title="Discord Widget"
                >
                </iframe>
            </div>
        </div>
    </>
  )
}