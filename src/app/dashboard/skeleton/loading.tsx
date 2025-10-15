import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {'123456789'.split('').map((ele) => (
                <Card key={ele} className="p-2 flex flex-col justify-center items-center">
                    <CardHeader>
                        <Skeleton className="h-20 w-20 rounded-full" />
                    </CardHeader>

                    <Skeleton className=" w-3 h-4" />
                    <Skeleton className=" w-5 h-3" />

                    <CardFooter className="flex justify-center ">
                        <Skeleton className=" w-2 h-5" />
                    </CardFooter>

                </Card>
            ))}

        </div>
    )
}