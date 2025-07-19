import Link from 'next/link';
import React from 'react';

const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data
}

const page = async () => {

    const posts = await fetchData()

    return (
        <div className='space-y-6'>
            {
                posts.map(singleData => {
                    return (
                        <div key={singleData.id} className='border-2 border-emerald-500 max-w-2xl mx-auto p-4 rounded'>
                            <p>{singleData.title}</p>
                            <p>{singleData.body}</p>
                            <Link href={`/posts/${singleData.id}`}>Details</Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default page;