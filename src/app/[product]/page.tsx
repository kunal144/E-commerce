'use client'
import React, { useEffect, useState } from 'react'
import { products } from '../lib/productData'
import { useAmp } from 'next/amp'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '@/store/store'
import { ToastContainer, toast } from 'react-toastify'

interface Product {
  id: number
  title: string
  description: string
  price: number
  rating: { rate: number; count: number }
  category: string
  image: string
  quantity?: number
}

export default function page() {
  const [filteredProduct, setFilteredProduct] = useState<Product[]>([])
  const param = useParams()
  const notify = () => toast.success('Added to cart')

  const { addToCart } = useCartStore()

  const handleCart = (product: Product) => {
    addToCart(product)
    notify()
  }

  useEffect(() => {
    let sorted = [...products]

    sorted = sorted.filter((product) => String(product.id) === param?.product)

    setFilteredProduct(sorted)
  }, [])

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={true}
        rtl={false}
      />
      <div className="flex justify-center my-8">
        {filteredProduct.map((product) => (
          <div
            key={product.id}
            className=" card object-contain card-compact w-80 bg-base-100 shadow-xl "
          >
            <figure>
              <Image
                src={product.image}
                width={800}
                height={800}
                className="w-full h-48 object-contain duration-150 hover:scale-105"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <Link href={`/${product.id}`}>
                <h2 className="card-title   text-ellipsis  line-clamp-2 overflow-hidden">
                  {product.title}
                </h2>
              </Link>
              <p className="w-[15em] overflow-hidden text-ellipsis whitespace-nowrap">
                {product.description}
              </p>

              <div className="card-actions justify-end">
                <div>
                  <button
                    onClick={() => handleCart(product)}
                    className="btn btn-primary"
                  >
                    Add to cart
                  </button>
                </div>
                <p className="text-center font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <span className="badge badge-accent badge-outline ml-36">
                {product.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
