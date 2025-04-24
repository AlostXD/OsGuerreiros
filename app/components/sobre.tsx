import React from 'react'
import Image from 'next/image'

export default function Sobre() {
  return (
    <>
      <div className="bg-[url(/bg-sobre.webp)] bg-cover bg-center bg-local flex flex-col items-center justify-center min-h-screen" id='sobre'>
        <div className="w-fit max-w-[800px] p-6 relative">
          <h1 className='text-2xl text-osg-orange font-extrabold'>Quem são os Guerreiros?</h1>
          <p>
            A proposta da nossa equipe, &quot;Os Guerreiros&quot;, é unir criadores de conteúdo, espectadores e patrocinadores em um ambiente colaborativo e de crescimento conjunto.
          </p>
          <p>
            Inicialmente, éramos apenas um grupo de amigos apaixonados por criação de conteúdo. Contudo, com o passar do tempo, evoluímos e nos tornamos uma equipe dedicada a auxiliar nossos membros no desenvolvimento de suas próprias comunidades.
          </p>
        </div>
        <div className="w-fit max-w-[800px] p-6">
          <h1 className='text-2xl text-osg-orange font-extrabold'>Qual o objetivo da equipe?</h1>
          <p>
            Nosso objetivo é que &quot;Os Guerreiros&quot; seja um espaço onde criadores de conteúdo possam se conectar e ampliar seu alcance. Acreditamos que essa conexão é fundamental para o crescimento coletivo, seja por meio de projetos colaborativos, divulgação mútua ou troca de experiências.
          </p>
          <p>
            Nossa missão é criar um ambiente inclusivo e colaborativo. Almejamos que os criadores se apoiem, aprendam juntos e formem parcerias sólidas. Nosso intuito é oferecer recursos e ferramentas que ajudem nossos membros a expandir sua presença online, alcançar novos públicos e aprimorar suas habilidades de criação de conteúdo.
          </p>
          <p>
            Além disso, buscamos facilitar a conexão com espectadores engajados e patrocinadores dispostos a apoiar o talento e o crescimento dos nossos criadores. Para nós, a colaboração é essencial, pois acreditamos que juntos podemos alcançar resultados extraordinários, beneficiando a todos.
          </p>
        </div>
        <Image
          src="/logo.webp"
          width={300}
          height={300}
          alt="Logo"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-6"
        />
      </div>
    </>
  )
}
