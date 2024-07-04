import React from 'react'
import { Link } from 'react-router-dom'

const Forbiden = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">403</h1>
        <p className="text-2xl md:text-3xl font-light text-gray-800 mb-8">
          Sorry, you don't have access to this page.
        </p>
        <Link to="/" className="text-red-500 hover:text-red-700">
          Go back home
        </Link>
      </div>
    </div>
  )
}

export default Forbiden