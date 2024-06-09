"use client"
import React from 'react'
import action from './actions'
import { revalidateTag } from 'next/cache'

export default function Bottone() {
  return (
    <button onClick={() => action()}>Revalidate</button>
  )
}
