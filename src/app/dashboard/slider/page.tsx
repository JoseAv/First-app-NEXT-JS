'use client'

import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export default function Home() {
    const [value, setValue] = useState<number>(0)
    const [range, setRange] = useState<number[]>([0, 10, 30])
    return (
        <div className="flex gap-10 flex-col">
            <Slider defaultValue={[value]} max={100} step={1} onValueChange={(value) => setValue(value[0])} />
            <Slider defaultValue={range} max={100} step={1} onValueChange={setRange} minStepsBetweenThumbs={1} />
            <p>{value}</p>
            <p>{range.join('')}</p>
        </div>
    )
}