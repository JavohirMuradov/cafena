import React, { useEffect, useState } from 'react'
import logo from "./images/logo.png";
import kid from "./images/kid.jpg";
import coin from "./images/coin.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export const Login = () => {
    var navigate = useNavigate()
    var [email, setEmail] = useState(" ");
    var [password, setPassword] = useState("");
    var verify = localStorage.getItem('verify')
    useEffect(() => {
        if (verify) {
            navigate("/")
        }
    })
    var Submit = async (e) => {
        e.preventDefault()
        var backend = await axios.get("https://crudcrud.com/api/b6cb70ee12144bc1bd992bbbcdb97953/unicorns")
        for (let i = 0; i < backend.length; i++) {
            if (email !== backend[i].email && email !== backend[i].password) {
                return toast.error("incorrect email or password!")
            }
        }
        localStorage.setItem("verify", "true")
        navigate("/")
    }
    return (
        <div className="bg-white font-assistant h-screen overflow-hidden">
            <div className="w-full flex flex-wrap">
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                        <img
                            className="bg-transparent text-white font-bold text-xl p-4"
                            src={logo}
                            alt="logo"
                        />
                    </div>
                    <div className="flex flex-col justify-center md:justify-start my-auto md:my-36 pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <h1 className="animate-text bg-gradient-to-r from-black via-gray-400 to-orange bg-clip-text text-transparent text-3xl sm:text-5xl font-black text-center">
                            Welcome.
                        </h1>
                        <form
                            onSubmit={(e) => Submit(e)}
                            className="flex flex-col pt-3 md:pt-8">
                            <div className="flex flex-col pt-4">
                                <label htmlFor="email" className="text-lg font-bold">
                                    Email
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    id="email"
                                    autoComplete="true"
                                    placeholder="your@email.com"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-orange focus:shadow-outline"
                                />
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="password" className="text-lg font-bold">
                                    Password
                                </label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    id="password"
                                    autoComplete="true"
                                    placeholder="Password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-orange focus:shadow-outline"
                                />
                            </div>
                            <button
                                type={"submit"}
                                className="relative border border-orange1 mt-8 rounded px-5 py-2.5 overflow-hidden group bg-white hover:bg-gradient-to-r hover:from-white hover:to-orange1 text-black hover:text-gray-900 hover:ring-2 hover:ring-offset-2 hover:ring-orange1 active:ring-orange1 transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-96 ease"></span>
                                <span className="relative text-xl font-bold">
                                    Log In
                                </span>
                            </button>
                        </form>
                        <div className="text-center pt-5 pb-12 flex flex-col items-center">
                            <Link to={"/Register"} className='text-orange1 mt-1 w-full flex justify-center'>Don't have an account &#8594;</Link>
                            <p className="font-bold text-yellow-800 flex flex-row gap-1 items-center justify-center pl-3">
                                Enjoy Your Coins{" "}
                                <img
                                    src={coin}
                                    className="w-10 h-10 animate-rotate-y animate-infinite animate-ease-out animate-delay-700"
                                    alt="coin"
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 shadow-2xl">
                    <img
                        className="object-cover w-full h-screen hidden md:block"
                        src={kid}
                        alt="kid"
                    />
                </div>
            </div>
        </div>
    )
}
