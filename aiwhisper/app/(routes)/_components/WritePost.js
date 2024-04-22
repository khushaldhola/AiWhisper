// supposed to be with banner files
"use client"
import { UserDetailContext } from '../../_context/UserDetailContext';
// import { UserDetailContext } from '/app/_context/UserDetailContext';
import React from 'react'
import { useUser, UserButton } from '@clerk/nextjs';
import { Image, Send, Video } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { useContext, useState } from 'react'
import { useToast } from '../../../components/ui/use-toast';
import GlobalApi from '../../_utils/GlobalApi';

function WritePost({getAllPost}) {
  const { user } = useUser();
  const [userInputPost, setUserInputPost] = useState();

  // Somethings wrong with my toast.
  const {toast}=useToast();
  const {userDetail,setUserDetail}=useContext(UserDetailContext);

  // console.log('user Details, ', userDetail);
  // console.log('user Details --> id, ', userDetail._id)

  const onCreatePost = () => {

    const data = {
      postText: userInputPost,
      createdAt: Date.now().toString(),
      createdBy: userDetail,
    }

    GlobalApi.createPost(data).then(resp => {
      console.log(resp);
      setUserInputPost('');
      if (resp) {
        getAllPost()
        toast({
          title: "Awesome!",
          description: "Your Post Publish successfully",
          variant: "success"
        })
      }
    }, (error) => {
      toast({
        title: "Opps!!!",
        description: "Some Server Side Error!",
        variant: "destructive"
      })
    })
  }

  const toastToMe = (message) => {
    toast({
      title: "Awesome!",
      description: "Your Post Publish successfully",
      variant: "success"
    })
  }

  return (
    <div>
      <h2 className='text-[30px] font-medium text-gray-700'>Hi, <strong>{user.firstName}</strong> {user.lastName}</h2>
      <h2 className='text-gray-600'>Share some insights from you so others can stalk In this community.</h2>

      <div className='p-3 border rounded-lg mt-5 bg-slate-200'>
        <h2>Create Post</h2>
        <div className='p-4 rounded-lg mt-1'>
          <textarea placeholder="What's New"
            className='outline-none w-full rounded pl-1'
            value={userInputPost}
            onChange={(e) => setUserInputPost(e.target.value)}
          />
        </div>

        <div className='mt-2 flex justify-between'>
          <div className='flex gap-5'>
            <h2 className='flex gap-2 items-center cursor-pointer
                    hover:bg-slate-300 p-2  rounded-lg'><Image className='h-5 w-5' /> Image </h2>
            <h2 className='flex gap-2 items-center cursor-pointer
                    hover:bg-slate-300 p-2 rounded-lg'><Video className='h-5 w-5' /> Video </h2>
          </div>
          <Button
            className="bg-zinc-600 rounded-xl gap-2 transition-all duration-500 ease-in-out 
                hover:bg-zinc-800 hover:shadow-lg active:shadow-none"
          disabled={!userInputPost?.length}
          onClick={()=>onCreatePost()}
          >
            <Send className='h-4 w-4' /> Publish</Button>

          {/* <Button variant="outline" onClick={()=>toastToMe() }> for toast </Button> */}
        </div>
      </div>
    </div>

  )
}

export default WritePost