import React from 'react'
import Image from 'next/image';

interface CardProps {
  imgPath?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export default function Card({ imgPath, children }: CardProps) {
  return (
    <div className='dark:bg-gray-800 border-2 border-danger-700 shadow-lg m-0 h-60 w-60'>
      {imgPath && <Image layout="responsive" width={100} height={100} src={imgPath} />}
        {children}
    </div>
  )
}
