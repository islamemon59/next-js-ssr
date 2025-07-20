import React from 'react';

const Products = async () => {
    const res = await fetch("http://localhost:3000/api/item")
    const data = await res.json()
    console.log(data);
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