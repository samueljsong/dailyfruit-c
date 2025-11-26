import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import {   
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle, 
} from "./ui/card"

import { Button } from "./ui/button"
import { Progress } from "./ui/progress"
import { Separator } from "./ui/separator"
import { CalendarBoxComponent } from "./CalendarBoxComponent"

export const ProgressComponent = () => {

    return (
        <Card className=" w-full">
            <CardHeader>
                <CardTitle>Today's Progress</CardTitle>
                <CardDescription>
                    3/5 tasks completed
                    <Progress value={66}/>
                </CardDescription>
                <CardAction>
                    <Button>Complete Task</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <Separator/>
                <Accordion 
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Morning Devotion</AccordionTrigger>
                        <AccordionContent className=" flex flex-col">
                            <CalendarBoxComponent/>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}