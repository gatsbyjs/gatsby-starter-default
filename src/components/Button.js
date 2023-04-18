import cn from "classnames"
import React from "react"

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "rounded-xl py-2.5 bg-secondary px-3.5 font-heading w-full text-white font-semibold uppercase tracking-widest mt-5 transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
