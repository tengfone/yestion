"use client"

import { Id } from '@/convex/_generated/dataModel';
import { useRouter } from 'next/navigation';
import React from 'react'

interface BannerProps {
    documentId: Id<"documents">;
};

export const Banner = ({
    documentId
}: BannerProps) => {

    const router = useRouter()

    return (
        <div>
            hel
        </div>
    )
}
