"use client"

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { ArrowUpIcon } from "lucide-react"

export default function ButtonShad() {

    return (
        <div className="grid grid-cols-5 gap-2">
            {/* <Button>Default</Button>
            <Button variant={'destructive'}>destructive</Button>
            <Button variant={'ghost'}>ghost</Button>
            <Button variant={`link`}>link</Button>
            <Button variant={`outline`}>outline</Button>
            <Button variant={'secondary'}>secondary</Button>
            <Button disabled>Disable</Button>
            <Button variant={'succes'} onClick={() => console.log('Hola Mundo')}>Click me</Button>1
            <Button capitalize={false} disabled>capitalizeCc false</Button> */}

            <Button size="sm" variant="outline" disabled>
                <Spinner />
                Submit
            </Button>

            <div className="flex flex-col gap-8">
                <Button variant="outline" size="icon" className="rounded-full">
                    <ArrowUpIcon />
                </Button>
            </div>

            <Button variant="outline" size="sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-git-branch-deleted"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M7 8v8" /><path d="M9 18h6a2 2 0 0 0 2 -2v-5" /><path d="M14 14l3 -3l3 3" /><path d="M15 4l4 4" /><path d="M15 8l4 -4" /></svg> New Branch
            </Button>
        </div>
    )

}