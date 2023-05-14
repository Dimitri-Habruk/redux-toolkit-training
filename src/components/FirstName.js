import React from 'react'
import { useSelector } from 'react-redux'

const FirstName = () => {
    const firstName = useSelector(({user})=>user.firstName)
    return <div className='font-bold'>{firstName} </div>
}

export default FirstName
