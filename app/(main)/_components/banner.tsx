"use client"

<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useMutation } from 'convex/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';
import { ConfirmModal } from '@/components/modals/confirm-modal';
=======
import { Id } from '@/convex/_generated/dataModel';
import { useRouter } from 'next/navigation';
import React from 'react'
>>>>>>> 32e7801282c5211aa60e63e21a022ee1ff7b2275

interface BannerProps {
    documentId: Id<"documents">;
};

export const Banner = ({
    documentId
}: BannerProps) => {

    const router = useRouter()
<<<<<<< HEAD
    const remove = useMutation(api.documents.remove)
    const restore = useMutation(api.documents.restore)

    const onRemove = () => {
        const promise = remove({ id: documentId })
        toast.promise(promise, {
            loading: "Deleting note...",
            success: "Note Removed",
            error: "Failed to Remove"
        })
        router.push("/documents")
    }

    const onRestore = () => {
        const promise = restore({ id: documentId })
        toast.promise(promise, {
            loading: "Restoring note...",
            success: "Note Restored",
            error: "Failed to Restore"
        })
    }

    return (
        <div className='w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center'>
            <p>This page is in the thrash</p>
            <Button size='sm' onClick={onRestore} variant="outline" className='border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal'>
                Restore Page
            </Button>
            <ConfirmModal onConfirm={onRemove}>
                <Button size='sm' variant="outline" className='border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal'>
                    Permanently Delete
                </Button>
            </ConfirmModal>
=======

    return (
        <div>
            hel
>>>>>>> 32e7801282c5211aa60e63e21a022ee1ff7b2275
        </div>
    )
}
