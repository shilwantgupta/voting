import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-500">404</h1>
        <p className="text-2xl md:text-3xl font-light text-gray-800 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Go back home
        </Link>
      </div>
    </div>
  )
}

export default NotFound