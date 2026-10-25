"use client"

import { Cover } from '@/components/cover'
import dynamic from "next/dynamic"
import { useParams } from "next/navigation"
import { useMemo } from 'react'
import { Toolbar } from '@/components/toolbar'
import { Skeleton } from '@/components/ui/skeleton'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useMutation, useQuery } from 'convex/react'
import React from 'react'

// Next.js 15 passes `params` to pages as a Promise; read them with useParams() in this client component.
const DocumentIdPage = () => {
    const params = useParams<{ documentId: Id<"documents"> }>()

    const Editor = useMemo(() => dynamic(() => import("@/components/editor"), { ssr: false }), [])

    const update = useMutation(api.documents.update)
    const document = useQuery(api.documents.getById, { documentId: params.documentId });

    const onChange = (content: string) => {
        update({
            id: params.documentId,
            content
        })
    }

    if (document === undefined) {
        return (
            <div>
                <Cover.Skeleton />
                <div className='md:max-w-3xl lg:max-w-4xl mx-auto mt-10'>
                    <div className='space-y-4 pl-8 pt-4'>
                        <Skeleton className='h-14 w-[50%]' />
                        <Skeleton className='h-4 w-[80%]' />
                        <Skeleton className='h-4 w-[50%]' />
                        <Skeleton className='h-4 w-[60%]' />
                    </div>
                </div>
            </div>
        )
    }

    if (document === null) {
        return <div>Not found</div>
    }

    return (
        <div className='pb-40'>
            <Cover url={document.coverImage} />
            <div className='md:max-w-4xl lg:max-w-4xl mx-auto'>
                <Toolbar initialData={document} />
                <Editor onChange={onChange}
                    initialContent={document.content}
                />
            </div>
        </div>
    )
}

export default DocumentIdPage