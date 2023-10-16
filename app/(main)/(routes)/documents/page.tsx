"use client"
import Image from 'next/image'
import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import { useMutation } from 'convex/react'
import { api } from "@/convex/_generated/api"
import { toast } from "sonner"

export default function DocumentsPage() {

    const create = useMutation(api.documents.create)
    const { user } = useUser()

    const onCreate = () => {
        const promise = create({
            title: "Untitled"
        })
        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create a new note"
        })
    }

    return (
        <div className='h-full flex flex-col items-center justify-center'>
            <Image
                className='dark:hidden'
                src="/work_human.svg"
                height="300"
                width="300"
                alt="empty"
            />
            <Image
                className='hidden dark:block'
                src="/work_human.svg"
                height="300"
                width="300"
                alt="empty"
            />
            <h2 className='text-lg font-medium p-5'>
                Welcome to {user?.firstName}&apos;s Yestion
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className='h-4 w-4 mr-2' />
                Create a note
            </Button>
        </div>
    )
}
