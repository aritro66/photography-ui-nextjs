import Hero from '@/components/Hero'
import React from 'react'
import ContactDetail from '@/components/Contact'

export default function Contact() {
    return (
        <div>
            <Hero heading='Contact' message='Submit the form below for more work and quotes.' />
            <ContactDetail />
        </div>
    )
}
