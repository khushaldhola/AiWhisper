"use client"
import MenuList from '/app/_utils/MenuList'
import { Button } from '/components/ui/button'

import { LogIn } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useUser, UserButton } from '@clerk/nextjs';

function SideNav({ toggleSideBar }) {

  const {user} = useUser()

  return (
    <div className=' h-full p-5 border-0'>
      <div className='flex'>
        <Image src='/ear.svg' alt='logo' width={64} height={64} />
        <h1 className='flex justify-center items-center text-3xl'>AI Whisper</h1>
      </div>
      <div className='flex flex-col mt-5'>
        {MenuList.map((item, index) => (
          <Link key={item.id} href={item.path} onClick={() => toggleSideBar(false)}>
            <h2 variant="ghost"
              className="group p-4 flex gap-5 items-center
                justify-start rounded-md cursor-pointer
                 hover:bg-slate-100 text-slate-500">
              <item.icon className='group-hover:animate-bounce' />
              {item.name}</h2>
          </Link>
        ))}
      </div>
      <div className='absolute bottom-10 flex gap-3 items-center'>

          { !user ? <Link href='/sign-in'>
            <Button variant="ghost" className='flex gap-2 items-center cursor-pointer'><LogIn />
              Sign In</Button>
          </ Link> 
          : <div className='flex items-center gap-3'> 
          <UserButton /> Profile </ div>}
      </div>
    </div>
  )
}

export default SideNav