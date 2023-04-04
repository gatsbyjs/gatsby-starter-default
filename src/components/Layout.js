import * as React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <div className="grid min-h-[100dvh] grid-rows-[auto_1fr]">{children}</div>
    </>
  )
}

export default Layout
