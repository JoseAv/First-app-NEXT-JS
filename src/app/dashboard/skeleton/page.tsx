import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Data = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return '123456789'.split('')
}


export default async function Home() {

    const data = await Data()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {data.map((ele) => (
                <Card key={ele} className="p-2 flex justify-center items-center">
                    <CardHeader>
                        <Avatar className=" h-20 w-20 p-0 m-0">
                            <AvatarImage className=" h-20 w-20 p-0 m-0" src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </CardHeader>

                    <CardTitle>Card</CardTitle>
                    <CardDescription>Descripion</CardDescription>

                    <CardFooter className="flex justify-center ">
                        <Button>Mas</Button>
                    </CardFooter>

                </Card>
            ))}

        </div>
    )
}