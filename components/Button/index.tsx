import React from 'react'

interface ButtonProps {
  text: string
}

const Button = ({ text }: ButtonProps) => {
  return (
    <>
      <button className="root">{text}</button>
      <style jsx>{`
        .root {
          color: blue;
        }
      `}</style>
    </>
  )
}

export default Button
