import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Page() {


    return (
        <div className="w-40 flex justify-center items-center">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="m-2">@shadcn</p>
        </div>

    )


}