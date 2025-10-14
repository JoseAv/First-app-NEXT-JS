import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function CardPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {'123456789'.split('').map((ele) => (
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                        <CardAction>Card Action</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant='outline'>Info</Button>
                        <Button>Mas</Button>
                    </CardFooter>

                </Card>
            ))}
        </div>
    )
}