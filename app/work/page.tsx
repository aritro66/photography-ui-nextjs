import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import React from 'react'

export default function Work() {
    return (
        <div>
            <Hero heading='My Work' message='This is some of my recent work traveling the world.' />
            <Portfolio />
        </div>
    )
}
