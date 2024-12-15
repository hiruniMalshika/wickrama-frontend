
'use client'
import React, { useEffect, useState } from "react";
import api from '../utils/api';


interface Product {
    id: number;
    name: string;
    description:string;
    price: number;
    stock: number;
}

export default function ProductsPage () {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await api.get<Product[]>('/products');
                console.log(response.data)
                setProducts(response.data);
            } catch(error){
                console.error('Error fetching products: , error');
            }
        };

        fetchProducts();
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    )

}