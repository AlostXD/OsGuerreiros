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
        <div className="absolute right-0 top-0 m-12 bg-osg-orange/90 rounded-4xl flex flex-col p-2 gap-4">
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