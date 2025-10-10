import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
    {
        id: 'item-1',
        question: 'Product Information',
        answer: `
        Our flagship product combines cutting-edge technology with sleek
        design. Built with premium materials, it offers unparalleled
        performance and reliability.
        `
    },
    {
        id: 'item-2',
        question: 'Shipping Details',
        answer: `
        Our flagship product combines cutting-edge technology with sleek
        design. Built with premium materials, it offers unparalleled
        performance and reliability.
        `
    },
    {
        id: 'item-3',
        question: 'Return Policy',
        answer: `
        Our flagship product combines cutting-edge technology with sleek
        design. Built with premium materials, it offers unparalleled
        performance and reliability.
        `
    }


]



export default function Accordiones() {

    return (
        <Accordion
            type="multiple"
            className="w-full"
            defaultValue={["item-1", "item-2", "item-3"]}
        >
            {items.map((ele) => {
                return (
                    <AccordionItem value={`${ele.id}`}>
                        <AccordionTrigger>{ele.question}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                {ele.answer}
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                )
            })}
        </Accordion>
    )
}