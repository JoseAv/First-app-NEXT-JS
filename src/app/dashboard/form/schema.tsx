import z from 'zod'

export const formSchema = z.object({
    title: z.string().min(3).max(20),
    description: z.string().min(10).max(20),
    language: z.enum(['auto', 'en', 'es']),
    twoFactor: z.boolean()
}).refine((data) => data.language !== 'auto', {
    message: 'You must select language',
    path: ['language']
}).refine((data) => data.twoFactor === true, {
    message: 'You must accept auth',
    path: ['twoFactor']
})