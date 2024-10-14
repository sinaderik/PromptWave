"use client"

import Link from "next/link"
import Image from "next/image"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { useState, useEffect } from "react"

const Nav = () => {
    const isUserLoggedIn = true
    const [providers, setProviders] = useState(null)
    useEffect(() => {
        const setProvider = async () => {
            const response = await getProviders()
            setProviders(response)
        }
        setProvider()
    }, [])
    return (
        <nav className="flex-between mb-16 pt-3 w-full">
            <Link href="/" className="flex flex-center gap-2">
                <Image
                    className="object-contain"
                    src="/assets/images/logo.svg"
                    height={30}
                    width={30}
                    alt="logo"
                />
                <p className="logo_text">PromptWave</p>
            </Link>

            {/* Desktop Navigation */}
            <div className="sm:flex hidden">
                {isUserLoggedIn
                    ? (
                        <div className="flex gap-3 md:gap-5">
                            <Link className="black_btn" href="/create-prompt">
                                Create Post
                            </Link>
                            <button className="outline_btn" onClick={signOut} >Sign out</button>
                            <Link href="/profile">
                                <Image
                                    className="rounded-full"
                                    src="/assets/images/logo.svg"
                                    width={37}
                                    height={37}
                                    alt="profile-image"
                                />
                            </Link>
                        </div>
                    ) : (
                        <>
                            {providers && Object.values(providers).map(provider => (
                                <button
                                    className="black_btn"
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}

                                >
                                    Sign In
                                </button>
                            ))}
                        </>
                    )
                }
            </div>
        </nav>
    )
}

export default Nav