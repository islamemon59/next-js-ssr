import React from 'react';

export const fetchSingleData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

export async function generateMetadata({ params }) {
  const p = await params
 
  // fetch post information
  const singlePost = await fetchSingleData(p.id)
 
  return {
    title: singlePost.title,
    description: singlePost.body,
  }
}

const SinglePost = async ({params}) => {
    const p = await params
    const singleData = await fetchSingleData(p.id)
    return (
        <div className='border-2 border-emerald-500 w-2xs rounded-2xl p-6'>
            <h1 className='p-4'>{singleData.title}</h1>
            <h1>{singleData.body}</h1>
        </div>
    );
};

export default SinglePost;