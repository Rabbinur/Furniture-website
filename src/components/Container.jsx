import React from 'react'

const Container = ({children}) => {
  return (
    <div className="container mx-auto lg:px-5 md:px-0 sm:px-2 px-5">
        {children}
    </div>
  )
}

export default Container