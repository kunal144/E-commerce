import { motion } from 'framer-motion'
import OnServerButton from './onServerButton'
import { useStore } from '@/store/store2'
import { memo } from 'react'
import { signIn } from 'next-auth/react'

export function Signin({ onClick }: { onClick?: () => void }) {
  const login = useStore.getState().logIn
  const { setLogIn: handleLogIn } = useStore.getState()

  function LogIn() {
    return (
      <>
        <motion.div
          key="login"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'fade',
            duration: 1,
            delay: 0.5,
            staggerChildren: 1,
          }}
          exit={{
            opacity: 0,
            transition: {
              type: 'fade',
              duration: 0.2,
              delay: 0,
              staggerChildren: 1,
            },
          }}
          className="flex items-center gap-4 flex-col"
        >
          <h1 className="text-[2em] font-serif">Welcome Back</h1>

          <label className="flex flex-col mt-10" htmlFor="Email">
            <p className="font-bold">Email or username</p>
            <input
              className="rounded outline-black w-64 px-2 h-8 lg:hover:border-slate-400 lg:hover:border-2 duration-100"
              type="email"
            />
          </label>

          <label className="flex flex-col" htmlFor="password">
            <p className="font-bold">Password</p>
            <input
              className="rounded outline-black w-64 px-2 h-8 lg:hover:border-slate-400 lg:hover:border-2 duration-100"
              type="password"
            />
          </label>

          <p>
            Don't have an account?
            <span
              onClick={() => handleLogIn()}
              className="font-bold underline p-1 cursor-pointer "
            >
              Sign up
            </span>
          </p>
          <OnServerButton
            className="bg-black text-white text-center rounded-md w-64 h-10 hover:shadow-lg hover:scale-105 hover:shadow-slate-400 duration-150"
            name="Log In"
          />
          <div className="divider w-64 self-center font-bold">OR</div>
          <button onClick={() => signIn('google')} className="google w-64">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 262"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              ></path>
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              ></path>
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              ></path>
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              ></path>
            </svg>
            Continue with Google
          </button>
          <button onClick={() => signIn('discord')} className="w-64 discord ">
            <svg
              viewBox="0 0 16 16"
              className="bi bi-discord"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
            </svg>
            <span>Continue With Discord</span>
          </button>
        </motion.div>
      </>
    )
  }

  function SignUp() {
    return (
      <>
        <motion.div
          key="signup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'fade',
            duration: 1,
            delay: 0.5,
            staggerChildren: 1,
          }}
          exit={{
            opacity: 0,
            transition: {
              type: 'fade',
              duration: 0.2,
              delay: 0,
              staggerChildren: 1,
            },
          }}
          className="flex items-center gap-4 flex-col"
        >
          <h1 className="text-[2em] font-serif">Sign Up</h1>
          <label className="flex flex-col  " htmlFor="text">
            <p className="font-bold">Name</p>

            <input
              type="text"
              className="rounded lg:hover:border-slate-400 lg:hover:border-2  outline-black w-64 px-2 h-8 duration-100"
            />
          </label>
          <label className="flex flex-col" htmlFor="Email">
            <p className="font-bold">Email Address</p>
            <input
              className="rounded outline-black w-64 px-2 h-8 lg:hover:border-slate-400 lg:hover:border-2 duration-100"
              type="email"
            />
          </label>
          <label className="flex flex-col" htmlFor="username">
            <p className="font-bold">Username</p>
            <input
              className="rounded outline-black w-64 px-2 h-8 lg:hover:border-slate-400 lg:hover:border-2 duration-100"
              type="text"
            />
          </label>
          <label className="flex flex-col" htmlFor="password">
            <p className="font-bold">Password</p>
            <input
              className="rounded outline-black w-64 px-2 h-8 lg:hover:border-slate-400 lg:hover:border-2 duration-100"
              type="password"
            />
          </label>
          <label className="flex flex-col" htmlFor="password">
            <p className="font-bold">Confirm Password</p>
            <input
              className="rounded outline-black w-64 px-2 h-8 lg:hover:border-slate-400 lg:hover:border-2 duration-100"
              type="password"
            />
          </label>
          <p>
            Already have an account?
            <span
              onClick={() => handleLogIn()}
              className="font-bold underline p-1 cursor-pointer "
            >
              Login
            </span>
          </p>
          <OnServerButton
            className="bg-black text-white text-center rounded-md w-64 h-10 hover:shadow-lg hover:scale-105 hover:shadow-slate-400 duration-150"
            name="Create Account"
          />
        </motion.div>
      </>
    )
  }

  return (
    <>
      <motion.div
        key="sign"
        initial={{ visibility: 'hidden' }}
        animate={{ visibility: 'visible' }}
        exit={{ visibility: 'hidden', transition: { delay: 1 } }}
      >
        <motion.div
          key="signin"
          layout
          initial={{ y: 800, height: 0 }}
          animate={{
            y: 0,
            height: '100vh',
          }}
          transition={{ duration: 1, when: 'afterChildren' }}
          exit={{
            y: 800,
            height: 0,
          }}
          className="w-full h-screen  mt-6 max-sm:mt-12  rounded-xl absolute  glass"
        >
          <div className="flex items-start justify-end">
            <OnServerButton className="  p-2" name="X" onClick={onClick} />
          </div>
          {login ? <LogIn /> : <SignUp />}
        </motion.div>
      </motion.div>
    </>
  )
}

export const SignIn = memo(Signin)
