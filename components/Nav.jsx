"use client"

import Link from "next/link"
import Image from "next/image"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { useState, useEffect } from "react"

const Nav = () => {
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
        </nav>
    )
}

export default Nav