import dbConnect from '@/lib/dbConnect';
import React from 'react';
import { getProducts } from '../actions/products/getProducts';

export const dynamic = "force-dynamic"

const Products = async () => {
    // const {NEXT_PUBLIC_SERVER_ADDRESS} = process.env
    // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}api/item`, {
    //     cache: "force-cache"
    // })
    // const data = await res.json()
    // console.log(data);

const data = await getProducts()

    return (
        <div>
            {data.map(d => {
                return(
                    <div key={d._id}>
                        <p>{d.productName}</p>
                        <p>{d.title}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Products;