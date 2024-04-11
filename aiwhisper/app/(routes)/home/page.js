"use client"
import React from 'react'
import Banner from './_components/Banner'
import WritePost from '../_components/WritePost'
import { useUser } from '@clerk/nextjs';

function Home() {
  const {user} = useUser();
  return (
    <div className='p-5'>
      { !user ? <Banner/> : <WritePost />}
    </div>
  )
}

export default Home