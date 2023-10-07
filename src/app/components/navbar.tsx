'use client'

import { useCartStore } from '@/store/store'
import { useStore } from '@/store/store2'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { memo, useState } from 'react'
import { Signin } from './signin'
import { AnimatePresence } from 'framer-motion'

export function Nav() {
  const cart = useCartStore((state) => state.cart)
  const totalItems = cart.length
  const route = useRouter()
  const { totalPrice } = useCartStore()
  const session = useSession()
  const [isSearching, setIsSearching] = useState<boolean>()
  const { signInWindow } = useStore()

  return (
    <nav className="bg-white glasss z-[2] sticky top-0">
      <div className="navbar  ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/'}>Trending</Link>
            </li>
            <li>
              <Link href={'/'}>About</Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 ">
          <Link href={'/'} className="btn btn-ghost normal-case text-xl">
            Store
          </Link>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Products</summary>
                <ul className="p-2">
                  <li>
                    <Link href={'/electronics'}>Electronics</Link>
                  </li>
                  <li>
                    <Link href={'/jewelery'}>Jewelery</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Trending</a>
            </li>
          </ul>
        </div>
        <div className="form-control mr-2 max-sm:hidden ">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-80 max-sm:w-40 "
          />
        </div>
        <button
          onClick={() => setIsSearching(!isSearching)}
          className="btn btn-ghost btn-circle hidden max-sm:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div className="flex-none mr-2 ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {totalItems >= 1 && (
                  <span className="badge badge-sm indicator-item">
                    {totalItems}
                  </span>
                )}
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{totalItems} Items</span>
                <span className="text-info">
                  Subtotal: ${totalPrice.toFixed(2)}
                </span>
                <div className="card-actions">
                  <button
                    onClick={() => route.push('/cart')}
                    className="btn btn-primary btn-block"
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {session?.data?.user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={session.data.user.image!} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={() => signOut()}>
                    <a>Logout</a>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <button
              onClick={() => useStore.setState({ signInWindow: true })}
              className="bg-black ml-3  p-2 rounded-lg  text-white"
            >
              Login
            </button>
          )}
        </div>
      </div>
      {/* put flex in search classname */}
      <div
        className={`form-control  hidden items-center ${
          isSearching && 'max-sm:flex'
        } `}
      >
        <input
          type="text"
          placeholder="Search"
          className="input border border-slate-300 w-11/12 mt-1"
        />
      </div>
      <AnimatePresence>
        {signInWindow && (
          <Signin onClick={() => useStore.setState({ signInWindow: false })} />
        )}
      </AnimatePresence>
    </nav>
  )
}

export const Navbar = memo(Nav)
