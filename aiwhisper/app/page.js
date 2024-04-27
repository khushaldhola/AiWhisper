"use client"
import Image from 'next/image'
import { useEffect } from 'react';
import GlobalApi from './_utils/GlobalApi';
import { UserButton, useUser } from '@clerk/nextjs';
import { Button } from '../components/ui/button';
import Link from 'next/link'

export default function Home() {

  const {user} = useUser()

  useEffect(() => {
    user && createUserProfile()
  }, [user])

  const createUserProfile=()=>{
    if(!localStorage.getItem('isLogin')){

      const data = {
        name: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        image: user.imageUrl
      }
      GlobalApi.createUser(data).then(resp => {
        console.log(resp.data)
        localStorage.setItem('isLogin', true)
      })
    }
  }

  return (
  <div className=''>
    <UserButton/>
    <div className='flex items-center'>
      <Link href="/home">
        <Button className='gap-2 cursor-pointer mt-10 ml-5'> Go to Home Page of Web Service</Button>
      </Link>

      <Link href="/pass-gen">
        <Button className=' gap-2 cursor-pointer mt-10 ml-5'> Password Gen </Button>
      </Link>
    </div>
  </div>
  )
}
