"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [multiplyDate, setMultiplyDate] = React.useState<Date[] | undefined>([])


    // Crea la fecha de ahora y la coloca con una vista mostrada aqui
    const smallDate = date?.toLocaleDateString("es-ES", {
        weekday: "short",
        day: "numeric",
        month: "short"
    })

    return (
        <div className="flex flex-wrap gap-y-4 justify-between">

            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-sm"
                captionLayout="dropdown"
                // aqui llegara la fecha del calendar los dias y voy a marcar el dia 0 y el dia 6 serian domingo y sabado 
                disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
            />

            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-sm"
                captionLayout="dropdown"
                disabled={(date) => date > new Date()}
            />

            <Calendar
                mode="multiple"
                selected={multiplyDate}
                onSelect={setMultiplyDate}
                className="rounded-md border shadow-sm"
                captionLayout="dropdown"
            />

            <div>
                <h1 className=" text-3xl">Information</h1>
                <div className=" border-b">
                    <p>{smallDate}</p>
                </div>
                <div className="flex gap-4">
                    {multiplyDate?.map((date) => (
                        <p>{date.toLocaleDateString()}</p>
                    ))}
                </div>

            </div>


        </div>
    )
}
