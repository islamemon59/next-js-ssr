import React from 'react';

const ProductAddForm = () => {

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const payload = {productName}
        const res = await fetch("http://localhost:3000/api/item", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const result = await res.json();
        form.reset()
        alert("Data Added")
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