import { postSingleProduct } from '@/app/actions/products/postSingleProduct';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProductAddForm = () => {
    const router = useRouter()

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const payload = {productName}
        // const {NEXT_PUBLIC_SERVER_ADDRESS} = process.env
        // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}api/item`, {
        //     method: "POST",
        //     body: JSON.stringify(payload),
        //     headers: {
        //         "Content-Type": "application/json",
        //     }
        // })
        // const result = await res.json();
        const result = await postSingleProduct(payload)
        form.reset()
        // alert("Data Added")
        router.push("/products")
        console.log(result);
    }

    return (
        <div>
            <form onSubmit={handleAddProduct}>
                <input name='productName' type="text" placeholder='Add Product' className='border p-2 rounded-2xl' />
                <button className='px-3 py-1 border rounded-2xl bg-black text-white' type='submit'>Add</button>
            </form>
        </div>
    );
};

export default ProductAddForm;