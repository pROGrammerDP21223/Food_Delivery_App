import React from 'react'
import { useState } from 'react'

function RestaurantSignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [c_Password, setC_Password] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const handleSignup = async () => {
        event.preventDefault();
        console.log(email, password, c_Password, name, city, address, contact);
        let result = await fetch("http://localhost:3000/api/restaurants", {
            method: "POST",
            body: JSON.stringify({ email, password, name, city, address, contact })
        });
        result = await result.json();
        console.log(result);
        if(result.success){
            alert("Restaurant Added Sucessfully!!");
        }
    }
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8  sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Resturant Sign-up</h1>



                    <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                        <p className="text-center text-lg font-medium">Sign Up to your account</p>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />


                            </div>
                        </div>
                        <div>
                            <label htmlFor="telNO" className="sr-only">Contact Number</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Contact Number" value={contact} onChange={(event) => setContact(event.target.value)} />


                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />


                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirm_password" className="sr-only">Confirm Password</label>

                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Confirm password" value={c_Password} onChange={(event) => setC_Password(event.target.value)}
                                />


                            </div>
                        </div>
                        <div>
                            <label htmlFor="resto_name" className="sr-only">Restuarnt Name</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Resturant Name" value={name} onChange={(event) => setName(event.target.value)} />


                            </div>
                        </div>
                        <div>
                            <label htmlFor="address" className="sr-only">Address</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Full Address" value={address} onChange={(event) => setAddress(event.target.value)} />


                            </div>
                        </div>
                        <div>
                            <label htmlFor="city" className="sr-only">City</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter City" value={city} onChange={(event) => setCity(event.target.value)} />


                            </div>
                        </div>

                        <button onClick={handleSignup}
                            type="submit"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>


                    </form>
                </div>
            </div>
        </>
    )
}

export default RestaurantSignUp