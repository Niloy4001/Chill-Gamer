import React from 'react'
import { useLoaderData } from 'react-router-dom'


const ReviewDetails = () => {
    const data = useLoaderData()
    console.log(data);
    
  return (
    <div>review details</div>
  )
}

export default ReviewDetails