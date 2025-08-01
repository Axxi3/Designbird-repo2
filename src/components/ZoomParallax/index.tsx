'use client'
import React, { useRef } from 'react';
import './zoom.css'
import One from "../../../public/1.jpg"
import two from "../../../public/2.jpeg"
import three from "../../../public/3.jpg"
import four from "../../../public/4.jpg"
import five from "../../../public/5.jpg"
import dix from "../../../public/6.jpg"
import seven from "../../../public/7.jpeg"
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function index() {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']


    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

     const pictures = [
        {
            src: One,
            scale: scale4
        },
        {
            src: two,
            scale: scale5
        },
        {
            src: three,
            scale: scale6
        },
        {
            src: four,
            scale: scale5
        },
        {
            src: five,
            scale: scale6
        },
        {
            src: dix,
            scale: scale8
        },
        {
            src: seven,
            scale: scale9
        }
    ]

    return (
        <div ref={container} className='h-[300vh] w-full mt-[90px]  relative'>
            <div className="sticky overflow-hidden top-[90px] w-full h-[100vh] ">

                {
                    pictures.map((pic, index) => {
                        return (
                            <motion.div style={{ scale: pic.scale}} key={index} className="el w-[100%] h-[100%] absolute top-0 flex items-center justify-center">
                                <div  className="imageContainer  relative">
                                    <Image className='object-cover' src={pic.src} fill alt='image' />
                                </div>
                            </motion.div>
                        )
                    })
                }

            </div>
        </div>
    )
}
