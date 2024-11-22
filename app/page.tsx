"use client"
import Image from "next/image";
import ProductsPage from "./products/page";
import Navbar from "./navbar/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold text-blue-600">Welcome!</h1>
                <p className="mt-4 text-gray-600">
                    Discover the best industrial tools and equipment.
                </p>
      </main>
      <ProductsPage />
    </div>
  );
}
