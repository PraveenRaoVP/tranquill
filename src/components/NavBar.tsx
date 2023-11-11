import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'

const NavBar = () => {

    return (
        <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href="/" className='flex z-40 font-semibold'>
                        <span>tranquill.</span>
                    </Link>
                    {/* Add Mobile NavBar */}
                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })} href="/pricing">Pricing</Link>
                            <LoginLink className={buttonVariants({
                                variant: "ghost",
                                className: "border border-green-600 hover:border-green-700",
                                size: "sm",
                            })}>Sign In</LoginLink>
                            <RegisterLink className={buttonVariants({
                                className: "ml-2 bg-green-600 hover:bg-green-700",
                                size: "sm",
                            })}>Sign Up</RegisterLink>
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default NavBar