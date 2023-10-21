"use client"

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { MenuIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { Title } from "./title";
<<<<<<< HEAD
import { Banner } from "./banner";
import { Menu } from "./menu";
=======
import Banner from "./banner";
>>>>>>> 32e7801282c5211aa60e63e21a022ee1ff7b2275

interface NavbarProps {
    isCollapsed: boolean;
    onResetWidth: () => void
}


export const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
    const params = useParams();

    const document = useQuery(api.documents.getById, {
        documentId: params.documentId as Id<"documents">
    })

    if (document === undefined) {
        return (
            <nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center justify-between">
                <Title.Skeleton />
                <div className="flex items-center gap-x-2">
                    <Menu.Skeleton />
                </div>
            </nav>
        )
    }

    if (document === null) {
        return null
    }

    return (
        <>
            <nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4">
                {isCollapsed && (
                    <MenuIcon
                        role="button"
                        onClick={onResetWidth}
                        className="h-6 w-6 text-muted-foreground"
                    />)}

                <div className="flex items-center justify-between w-full">
                    <Title initialData={document} />
                    <div className="flex items-center gap-x-2">
                        <Menu documentId={document._id} />
                    </div>
                </div>
            </nav>
            {document.isArchived && (
<<<<<<< HEAD
                <Banner documentId={document._id} />
=======
                <Banner documentId={document._id}/>
>>>>>>> 32e7801282c5211aa60e63e21a022ee1ff7b2275
            )}
        </>
    )
}