import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Patrocinadores from './adds/patrocinadores';

export default function Home() {
  return (
    <>
      <Patrocinadores />
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg-home.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="flex flex-col items-center justify-center m-auto min-h-screen" id='home'>
        <Image
          src="/logo.webp"
          width={300}
          height={300}
          alt="Logo"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          <Link href="https://osg.cx/equipe-osguerreiros" target="_blank">
        <Image
          src="/btn-team-osguerreiros.gif"
          width={250}
          height={150}
          alt="Team Os Guerreiros"
          className="w-full max-w-xs"
          unoptimized
        />
          </Link>
          <Link href="https://osg.cx/equipe-academia" target="_blank">
        <Image
          src="/btn-team-academia.gif"
          width={250}
          height={150}
          alt="Team Academia"
          className="w-full max-w-xs"
          unoptimized
        />
          </Link>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <span>
        <Image
          src="/ico-scroll.webp"
          width={50}
          height={50}
          alt="scroll"
          className="w-max opacity-35"
        />
          </span>
          <span>
        <Image
          src="/ico-scroll.webp"
          width={50}
          height={50}
          alt="scroll"
          className="w-max opacity-35"
        />
          </span>
          <span>
        <Image
          src="/ico-scroll.webp"
          width={50}
          height={50}
          alt="scroll"
          className="w-max opacity-35"
        />
          </span>
        </div>
      </div>
    </>
  );
}
