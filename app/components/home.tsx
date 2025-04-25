import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Patrocinadores from './adds/patrocinadores';

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[url(/bg-home.webp)] bg-cover bg-center id='home'">
        <div className="flex flex-col items-center justify-center m-auto static">
          <Image
            src="/logo.webp"
            width={300}
            height={300}
            alt="Logo"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
          <div className="flex flex-wrap gap-4 mt-12 pt-8 justify-center">
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
          <Patrocinadores />
        <div className="flex flex-col gap-2 items-center justify-center pt-40">
            <span>
              <Image
                src="/ico-scroll.webp"
                width={30}
                height={50}
                alt="scroll"
                className="w-max opacity-35"
              />
            </span>
            <span>
              <Image
                src="/ico-scroll.webp"
                width={30}
                height={50}
                alt="scroll"
                className="w-max opacity-35"
              />
            </span>
            <span>
              <Image
                src="/ico-scroll.webp"
                width={30}
                height={50}
                alt="scroll"
                className="w-max opacity-35"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
