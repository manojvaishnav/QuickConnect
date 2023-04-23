import React from 'react'

import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div className="container my-3 mx-auto w-50 bg-primary d-flex align-items-center justify-content-center flex-column">
        
        <img src="/images/error.avif" alt="error" className="w-75" />
       
       <Link to={'/'}> <button className="btn btn-primary my-3 mx-auto">Go Home</button></Link>
      </div>
    </>
  )
}

export default Error
