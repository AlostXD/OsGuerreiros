import React from 'react'
import Image from 'next/image';


export default function Patrocinadores() {
    
    const patrocinadores = [
        'creators',
        'dogmil',
        'hosthavoc',
        'nerdordie',
        'overclock',
    ];

  return (
    <>
        <div className="md:absolute md:right-0 md:top-0 md:m-12 bg-osg-orange/90 md:rounded-4xl flex md:flex-col p-2 gap-4 mt-4">
            {patrocinadores.map((patrocinador) => (
                <div key={patrocinador} className="">
                    <Image
                        src={`/patroci-${patrocinador}.webp`}
                        alt={`${patrocinador}`}
                        width={100}
                        height={100}
                    />
                </div>
            ))}
        </div>
    </>
  )
}