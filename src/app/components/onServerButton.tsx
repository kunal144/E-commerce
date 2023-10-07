'use client'

type action = {
  onClick?: () => void
  className?: string
  name?: any
}

export default function OnServerButton({ onClick, className, name }: action) {
  return (
    <>
      <button onClick={onClick} className={className}>
        {name}
      </button>
    </>
  )
}
