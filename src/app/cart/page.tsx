'use client'

import { useCartStore } from '@/store/store'
import Image from 'next/image'
import { Product } from '@/store/store'
import Link from 'next/link'

export default function Cart() {
  const { cart } = useCartStore()
  const { addQuantity } = useCartStore()
  const { removeQuantity } = useCartStore()
  const { removeFromCart } = useCartStore()
  const { totalItems } = useCartStore()
  const { totalPrice } = useCartStore()

  const deleteQuantity = (product: Product) => {
    if (product.quantity === 1) {
      removeFromCart(product)
    } else removeQuantity(product)
  }

  return (
    <section className=" ">
      <div className=""></div>
      <div className="h-full">
        <h1 className="font-bold text-2xl  text-center mt-8  divider">
          Shopping Cart
        </h1>
      </div>
      <div className="flex mx-4  justify-center">
        <div className=" flex flex-col-reverse gap-6 w-full  my-8   rounded ">
          <div className="bg-slate-200 h-full w-full flex-col  items-center rounded-md  justify-center">
            {cart.map((product) => {
              return (
                <div
                  key={product.id}
                  className="mx-4 flex flex-grow flex-wrap m-2  h-48 max-md:h-80 rounded-md justify-around items-center bg-white right-"
                >
                  <div className="w-24    bg-white">
                    <Image
                      className="object-cover"
                      width={1000}
                      height={200}
                      alt="product"
                      src={product.image}
                    />
                  </div>
                  <div className=" ">
                    <p className="text-ellipsis line-clamp-1  w-[25em] max-sm:w-[17em]">
                      {product.title}
                    </p>
                  </div>
                  <div className="flex  justify-around   ">
                    <button
                      onClick={() => deleteQuantity(product)}
                      className="font-bold text-xl lg:p-2 max-sm:px-2  sm:px-2 bg-black text-white active:scale-95"
                    >
                      -
                    </button>
                    <p className="font-bold lg:pt-2 px-1 text-center ">
                      Qty:{product.quantity}
                    </p>
                    <button
                      onClick={() => addQuantity(product)}
                      className="font-bold text-xl max-sm:px-2 sm:px-2 lg:p-2  bg-black text-white active:scale-95"
                    >
                      +
                    </button>
                  </div>
                  <div className="  font-bold">
                    ${(product.quantity! * product.price).toFixed(2)}
                  </div>
                  <div className="  ">
                    <button
                      onClick={() => removeFromCart(product)}
                      className="btn btn-outline btn-error "
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className=" md:w-96 rounded-lg bg-slate-100 text-black">
            <div className="stat">
              <div className="stat-title font-bold ">Items</div>
              <div className="stat-value ">{totalItems}</div>
            </div>

            <div className="stat">
              <div className="stat-title font-bold break-words">
                Delivery Charges
              </div>
              <div className="state-value font-bold">Free</div>
            </div>

            <div className="stat">
              <div className="stat-title font-bold ">Subtotal</div>
              <div className="stat-value ">${totalPrice.toFixed(2)}</div>
              <div className="stat-actions">
                <button className="btn btn-md bg-black text-white">
                  <Link href={'cart/checkout'}>Checkout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
