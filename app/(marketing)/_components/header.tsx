"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react"
import { Spinner } from "@/components/spinner";
import { SignInButton } from "@clerk/clerk-react"
import Link from "next/link";
// client component 

export const Header = () => {
    const { isAuthenticated, isLoading } = useConvexAuth()
    return (
        <div className="max-w-3xl space-y-4">
            <p className="text-sm font-thin">
                A Notion clone for educational purposes.
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Welcome to <span className="underline">Yestion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Yestion is the best note taking application where <br />
                knowledge comes true.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <Button asChild>
                    <Link href="/documents">
                        Enter Yestion
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Get Yestion free
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </SignInButton>
            )}
        </div>
    )
}