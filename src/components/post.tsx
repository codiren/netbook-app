import React from 'react'
import {postdto} from "../dto/post.tsx";

interface PostProps {
  data: postdto
}
export const Post: React.FC<PostProps> = ({data}) => {
  return (
    <div className="w-[75%] rounded border-2 text-xs">
      <div className="flex justify-between">
        <div className="m-0.5 ml-1.5 rounded bg-gray-200 p-0.5 pr-2">{`Author: ` + data.creator}</div>
        <div className="m-0.5 p-0.5 mr-1.5 rounded bg-gray-200 pl-2">{data.created_at}</div>
      </div>
      <div className="m-1 h-10 border-[1px]">
        <div className="h-auto">{data.content}</div>
      </div>
    </div>
  )
}

