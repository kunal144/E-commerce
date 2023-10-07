'use client'
import Image from 'next/image'
import Link from 'next/link'
import { products } from './lib/productData'
import { useCartStore } from '@/store/store'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Suspense, useEffect, useState } from 'react'

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

export default function Home() {
  const { addToCart } = useCartStore()
  const [sortBy, setSortBy] = useState<string>('')
  const [sortedProducts, setSortedProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const notify = () => toast.success('Added to cart')

  const handleCart = (product: Product) => {
    addToCart(product)
    notify()
  }

  useEffect(() => {
    // Sort products based on sortBy criteria

    let sorted = [...products]
    if (sortBy === 'highest') {
      sorted = sorted.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'lowest') {
      sorted = sorted.sort((a, b) => a.price - b.price)
    } else if (sortBy === '') {
      sorted = [...products]
    }

    // Filter products based on selected category
    if (selectedCategory) {
      sorted = sorted.filter((product) => product.category === selectedCategory)
    } else if (sortBy === '') sorted = [...products]

    setSortedProducts(sorted)
  }, [sortBy, selectedCategory])

  return (
    <main>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={true}
        rtl={false}
      />
      <div className="carousel mt-4 w-full h-48 rounded-box">
        <div className="flex mx-2">
          <div className="glitch-wrapper">
            <div className="bg-center glitch" data-glitch="New Arrival">
              New Arrival
            </div>
          </div>
          <Image
            className=" object-cover"
            width={1920}
            height={800}
            src={
              'https://png.pngtree.com/background/20230519/original/pngtree-room-in-an-empty-store-full-of-picture-image_2654849.jpg'
            }
            alt="feature"
          />
        </div>
      </div>
      <div className="flex m-4 border-b border-black rounded justify-normal">
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn m-1">
            {sortBy.length > 0 ? sortBy : 'SortBy ↓'}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={() => setSortBy('')}>
                <a>Featured</a>
              </button>
            </li>
            <li>
              <button onClick={() => setSortBy('highest')}>
                <a>Highest To Lowest</a>
              </button>
            </li>
            <li>
              <button onClick={() => setSortBy('lowest')}>
                <a>Lowest To Highest</a>
              </button>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn m-1">
            {selectedCategory.length > 0 ? selectedCategory : 'Category ↓'}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={() => setSelectedCategory('')}>
                <a>All</a>
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategory('electronics')}>
                <a>Electronics</a>
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategory('jewelery')}>
                <a>Jewelery</a>
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategory("men's clothing")}>
                <a>Men's clothing</a>
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategory("women's clothing")}>
                <a>Women's clothing</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* card section */}
      <div className=" flex flex-1 flex-wrap justify-evenly  gap-8  my-4">
        <Suspense fallback={'loading..'}>
          {sortedProducts.map((product) => {
            return (
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
            )
          })}
        </Suspense>
      </div>
    </main>
  )
}
