'use client'

import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { formSchema } from './schema'
import { zodResolver } from "@hookform/resolvers/zod"
import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'


export default function Home() {
    const titleForm = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: 'onBlur',
        defaultValues: {
            title: "",
            description: "",
            language: "en",
            twoFactor: false
        }
    })

    const onSubmit2 = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }

    return (
        <>
            <form
                onSubmit={titleForm.handleSubmit(onSubmit2)}
                className='grid grid-cols-1 sm:grid-cols-2 gap-4'
                id="form-rhf-textarea"
            >
                <Controller
                    name='title'
                    control={titleForm.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                            <Input
                                {...field}
                                id={field.name}
                                type='text'
                                aria-invalid={fieldState.invalid}
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}

                />

                <Controller
                    name='description'
                    control={titleForm.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                            <Input
                                {...field}
                                id={field.name}
                                type='text'
                                aria-invalid={fieldState.invalid}
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>

                    )}
                />

                <Controller
                    name="language"
                    control={titleForm.control}
                    render={({ field, fieldState }) => (
                        <Field orientation="responsive" data-invalid={fieldState.invalid}>
                            <FieldContent>
                                <FieldLabel htmlFor="form-rhf-select-language">
                                    Spoken Language
                                </FieldLabel>
                                <FieldDescription>
                                    For best results, select the language you speak.
                                </FieldDescription>
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </FieldContent>
                            <Select
                                name={field.name}
                                value={field.value}
                                onValueChange={field.onChange}
                            >
                                <SelectTrigger
                                    id="form-rhf-select-language"
                                    aria-invalid={fieldState.invalid}
                                    className="min-w-[120px]"
                                >
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="item-aligned">
                                    <SelectItem value="auto">Auto</SelectItem>
                                    <SelectItem value="en">English</SelectItem>
                                    <SelectItem value="es">Espaniol</SelectItem>

                                </SelectContent>
                            </Select>
                        </Field>
                    )}
                />

                <Controller
                    name="twoFactor"
                    control={titleForm.control}
                    render={({ field, fieldState }) => (
                        <Field
                            orientation="horizontal"
                            data-invalid={fieldState.invalid}
                        >
                            <FieldContent>
                                <FieldLabel htmlFor="form-rhf-switch-twoFactor">
                                    Multi-factor authentication
                                </FieldLabel>
                                <FieldDescription>
                                    Enable multi-factor authentication to secure your account.
                                </FieldDescription>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </FieldContent>
                            <Switch
                                id="form-rhf-switch-twoFactor"
                                name={field.name}
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                aria-invalid={fieldState.invalid}
                            />

                        </Field>
                    )}
                />


            </form>


            <Field orientation="horizontal">
                <Button type="button" variant="outline" onClick={() => titleForm.reset()}>
                    Reset
                </Button>
                <Button type="submit" form="form-rhf-textarea">
                    Save
                </Button>
            </Field>


        </>

    )
}