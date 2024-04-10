"use client"
import Image from 'next/image'
import { useEffect } from 'react';
import GlobalApi from './_utils/GlobalApi';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  
  return (
  <div>
    <UserButton/>
  </div>
  )
}
