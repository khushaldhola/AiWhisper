"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../_utils/GlobalApi'
import { Button } from '../../../components/ui/button';
import Link from 'next/link'

function page() {

  const [communityList, setCommunityList] = useState([])

  useEffect(() => {
    getAllCommunities()
  }, [])

  const getAllCommunities = () => {
    GlobalApi.getAllCommunities().then(resp => {
      setCommunityList(resp.data)
    })
  }

  return (
    <div className='p-5 px-10'>

      <div>
        <Button className='flex justify-between'> Create New Community </Button>
      </div>
      
      {communityList ? communityList.map((item, index) => (
        <Link href={`community/${item._id}`}>
          <div key={index} className='flex h-[30px] w-full bg-slate-200 my-5 rounded-lg hover:cursor-pointer'>
            <div className='flex ml-5 items-center'>{item.name}</div>
          </div>
        </Link>
      ))
        // skeleten eff
        : <div>
          {[1, 2, 3].map((item, index) => (
            <div className='h-[30px] w-full bg-slate-200 animate-pulse my-5 rounded-lg'> </div>
          ))}
        </div>
      }
    </div>
  )
}

export default page