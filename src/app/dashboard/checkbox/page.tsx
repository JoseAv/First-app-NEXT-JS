'use client'

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function Page() {
    const [value, setValue] = useState<boolean>(false)

    return (
        <div className="flex items-start gap-3">
            <Checkbox checked={value} onCheckedChange={(val) => setValue(!!val)} id="terms-2" defaultChecked />
            <div className="grid gap-2">
                <Label htmlFor="terms-2">Accept terms and conditions</Label>
                <p className="text-muted-foreground text-sm">
                    By clicking this checkbox, you agree to the terms and conditions.
                </p>
            </div>

            {value ?
                <Badge variant='succes'>Succes</Badge>
                :
                <Badge variant='destructive'>Error</Badge>

            }


        </div>
    )

}