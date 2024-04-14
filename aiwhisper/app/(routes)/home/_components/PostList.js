import GlobalApi from './../../../_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';

function PostList({ postList }) {



    return (
        <div>
            {postList ? postList.map((item, index) => (
                <div key={index}>
                    {/* item - {item} */}
                    <PostItem post={item} updatePostList={() => updatePostList()} />
                    {/* {item.postText} */}
                </div>
            ))
            // skeleten eff
                : <div>
                    {[1, 2, 3].map((item, index) => (
                        <div className='h-[200px] w-full bg-slate-200 animate-pulse my-5 rounded-lg'> </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default PostList