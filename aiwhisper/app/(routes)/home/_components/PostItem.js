import React from 'react'
import Image from 'next/image'
import moment from 'moment'

function PostItem({ post }) {
    return (
        <div className='p-5 border rounded-lg my-5'>
            <div className='flex gap-2 items-center'>
                <Image src={post?.createdBy?.image} width={35} height={35} className='rounded-full' alt="user-image" />
                <div>
                    <h2 className='font-bold'
                    >{post?.createdBy?.name}</h2>

                    <p className='text-[12px] text-gray-500'
                    >{moment(Number(post?.createdAt)).format('DD MMM | hh:mm A')}</p>

                    {/* <h2 className=''>{post.postText}</h2> */}
                </div>
            </div>
            <div className='bg-slate-100 p-3 rounded-lg mt-3'>
                <h2 className=''>{post.postText}</h2>
            </div>

            <div className='flex items-center text-gray-500 justify-between mt-3'>
                <div className='flex gap-1 items-center hover:text-gray-800 cursor-pointer ml-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h2>69 Up Votes</h2>
                </div>

                <div className='flex gap-1 items-center hover:text-gray-800 cursor-pointer mr-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                    <h2>96 Comments</h2>
                </div>
            </div>
        </div>
    )
}

export default PostItem