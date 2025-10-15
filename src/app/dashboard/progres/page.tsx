'use client'
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function PageProgres() {
    const [value, setValue] = useState<number>(0)
    useEffect(() => {
        const Interval = setInterval(() => {
            setValue((value) => value + 1)
        }, 100);
        return () => clearInterval(Interval)
    }, [])


    return (
        <Progress value={value} indicatorColor={cn({
            "bg-red-500": value < 50,
            "bg-blue-500": value > 50
        })} />
    )


}