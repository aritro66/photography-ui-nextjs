'use client'
import Image from 'next/image'
import React, { Key, useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
interface SliderInfo {
    image: string,
}

interface Props {
    slides: SliderInfo[]
}

export default function Slider({ slides }: Props) {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(curr => (curr === (length - 1) ? 0 : curr + 1))
    }

    const prevSlide = () => {
        setCurrent(curr => (curr === 0 ? length - 1 : curr - 1))
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <div id='gallery' className='mx-w-[1240px] mx-auto'>
            <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>

            <div className="relative flex justify-center p-4">
                {slides.map((slide: SliderInfo, index: Key) => {
                    return (

                        <div key={index} className={index == current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>

                            <FaArrowCircleLeft onClick={prevSlide} className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
                                size={50}
                            />
                            {index === current && (
                                <Image
                                    src={slide.image}
                                    alt='/'
                                    width='1440'
                                    height='600'
                                    objectFit='cover'
                                    style={{ width: "100%", height: "100%" }}
                                />
                            )}
                            <FaArrowCircleRight
                                onClick={nextSlide}
                                className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                                size={50}
                            />

                        </div>

                    )
                })}
            </div>

        </div>
    )
}
