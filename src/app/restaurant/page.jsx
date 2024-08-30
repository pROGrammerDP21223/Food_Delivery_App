'use client'
import React from 'react'
import { useState } from 'react'
import ResaturantLogin from '../_components/ResaturantLogin'
import RestaurantSignUp from '../_components/RestaurantSignUp'
import RestauratHeader from '../_components/RestauratHeader'
import RestuarantFooter from '../_components/RestuarantFooter'

const Restuarant=()=> {
    const [Login, setLogin] = useState(true)
  return (
    <>

    <RestauratHeader />
    {
        Login ? <ResaturantLogin />: <RestaurantSignUp />
    }
    <div className="flex justify-center">

       
   
    <button className="text-center  text-sm text-gray-500 pb-16" onClick={()=>setLogin(!Login)}>
        {Login ?  "No account?Sign up" : "Already Have account? Sign in" }
       
      </button>
      </div>
    <RestuarantFooter />
    </>
  )
}

export default Restuarant