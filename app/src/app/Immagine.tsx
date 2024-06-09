"use client"
import React, { Suspense } from 'react'

export default function Immagine({ imageUrl }: any) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <img src={imageUrl} alt="" />
        </Suspense>
    )
}
