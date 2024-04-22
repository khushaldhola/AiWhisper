import React, { useContext, useState } from 'react'
import Image from 'next/image'
import moment from 'moment'
import { UserDetailContext } from '../../../_context/UserDetailContext';
import GlobalApi from '../../../_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import { Send } from 'lucide-react';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../../../components/ui/alert-dialog"
import { useToast } from '../../../../components/ui/use-toast';
import { Button } from '../../../../components/ui/button';
import CommentList from './CommentList';
// } from "@/components/ui/alert-dialog"


function PostItem({ post, updatePostList }) {

    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    const { user } = useUser();
    const { toast } = useToast();

    const [userInputComment, setUserInputComment] = useState();

    const chceckIsUserLike = (postLikes) => {
        return postLikes.find(item => item?._id == userDetail?._id)
    }
    // const chceckIsUserLike = (postLikes) => {
    //     return postLikes.find(item => {
    //         item?._id == userDetail?._id
    //         // console.log("item?._id", item?._id)
    //         // console.log("userDetail?._id", userDetail?._id)

    //     })
    // }
    const onLikeClick = (isLike, postId) => {
        const data = {
            userId: userDetail?._id,
            isLike: isLike
        }
        GlobalApi.onPostLike(postId, data).then(resp => {
            console.log(resp);
            updatePostList()
        })
    }

    const addComment = (postId) => {
        const data = {
            commentText: userInputComment,
            createdBy: userDetail._id,
            post: postId,
            createdAt: Date.now().toString()
        }
        GlobalApi.addComment(data).then(resp => {
            if (resp) {
                toast({
                    title: "Awesome!",
                    description: "Your Comment added succesasfully",
                    variant: "success"
                })
                updatePostList();
            }
        })
        setUserInputComment('')
    }

    return (
        <div className='p-5 border rounded-lg my-5'>
            <div className='flex gap-2 items-center'>
                <Image src={post?.createdBy?.image}
                    alt="user-image"
                    width={35}
                    height={35}
                    className='rounded-full'
                />
                <div>
                    <h2 className='font-bold'>{post?.createdBy?.name}</h2>
                    <h2 className='text-[12px] text-gray-500'>{moment(Number(post?.createdAt)).format('DD MMM | hh:mm A')}</h2>
                </div>
            </div>
            <div className='bg-slate-100 p-3 mt-4 rounded-lg'>
                <h2 className=''>{post.postText}</h2>
            </div>
            <div className='flex items-center text-gray-500 justify-between mt-3'>
                <div className='flex gap-1 items-center text-gray-500 hover:cursor-pointer'>
                    {!chceckIsUserLike(post?.likes) ?
                        <svg xmlns="http://www.w3.org/2000/svg"
                            onClick={() => onLikeClick(true, post._id)}
                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" fill="currentColor"
                            onClick={() => onLikeClick(false, post._id)}
                            className="w-6 h-6 text-green-500">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>

                    }
                    <h2>{post?.likes?.length} Likes</h2>
                </div>


                <AlertDialog>
                    <AlertDialogTrigger>
                        <div className='flex gap-1 items-center hover:text-gray-800 mr-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>

                            <h2>{post.comments?.length} Comments</h2>
                            {/* <h2>{post.comments?.length} Comments</h2> */}
                        </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle className="flex justify-between items-center">Comments... <AlertDialogCancel>X</AlertDialogCancel></AlertDialogTitle>
                            <AlertDialogDescription>
                                {/* <CommentList commentList={post?.comments} /> */}
                                <CommentList commentList={post?.comments}
                                    userDetail={userDetail}
                                    updatePostList={() => updatePostList()} />
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                    </AlertDialogContent>
                </AlertDialog>

            </div>
            {/* Cmnts  */}
            {user && <div className='mt-5'>
                <hr className='mb-5'></hr>
                <div className='flex gap-4 items-center mt-5'>
                    <Image src={user?.imageUrl}
                        width={30}
                        height={30}
                        alt='user-image'
                        className='rounded-full'
                    />
                    <input type='text'
                        value={userInputComment}
                        onChange={(e) => setUserInputComment(e.target.value)}
                        placeholder='Write a comment'
                        className='w-full bg-slate-100 p-2 rounded-full 
            px-5 outline-blue-300
            '
                    />
                    <Button
                        disabled={!userInputComment}
                        onClick={() => addComment(post._id)}
                        className="bg-blue-400
            text-white p-2 h-8 w-8 rounded-xl hover:bg-blue-600"><Send /> </Button>
                </div>
            </div>}
        </div>
    )
}

export default PostItem
{/* <div className='flex gap-2 items-center'>
                <Image src={post?.createdBy?.image} width={35} height={35} className='rounded-full' alt="user-image" />
                <div>
                    <h2 className='font-bold'
                    >{post?.createdBy?.name}</h2>

                    <p className='text-[12px] text-gray-500'
                    >{moment(Number(post?.createdAt)).format('DD MMM | hh:mm A')}</p>

                    {/* <h2 className=''>{post.postText}</h2> 
                </div>
            </div>
            <div className='bg-slate-100 p-3 rounded-lg mt-3'>
                <h2 className=''>{post.postText}</h2>
            </div>

            <div className='flex items-center text-gray-500 justify-between mt-3'>
                <div className='flex gap-1 items-center hover:text-gray-800 ml-5'>
                    {!chceckIsUserLike(post?.likes) 
                    ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"
                        onClick={(() => onLikeClick(true, post._id))} >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-700"
                        onClick={(() => onLikeClick(false, post._id))} >
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                    </svg> }

                    <h2>{post?.likes?.length} Up Votes</h2>
                </div>

                <div className='flex gap-1 items-center hover:text-gray-800 mr-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                    <h2>96 Comments</h2>
                </div>
            </div>
        </div> */}