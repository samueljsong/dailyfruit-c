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
import { ProgressTrackerComponent } from "./ProgressTracker/ProgressTrackerComponent"
import { TaskCardComponent } from "./ProgressTracker/TaskCardComponent"

export const ProgressComponent = () => {

    return (
        <Card className=" w-full flex flex-col gap-0 border-none shadow-none p-0 m-0">
            <CardHeader className=" px-4 py-3 md:px-5 md:py-3 lg:px-6 lg:py-4 pb-2">
                <CardTitle>Today's Progress</CardTitle>
                <CardDescription>
                    3/5 tasks completed
                    <Progress value={66}/>
                </CardDescription>
                <CardAction>
                    <Button>Complete Task</Button>
                </CardAction>
            </CardHeader>
            <CardContent className=" px-4 py-3 md:px-5 md:py-3 lg:px-6 lg:py-4 pt-2">
                <Separator/>
                <Accordion 
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Progress Tracker</AccordionTrigger>
                        <AccordionContent className=" flex flex-col w-full">
                            <ProgressTrackerComponent/>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Separator/>
                <Accordion 
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Tasks</AccordionTrigger>
                        <AccordionContent className="grid grid-flow-row gap-2 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <TaskCardComponent/>
                            <TaskCardComponent/>
                            <TaskCardComponent/>
                            <TaskCardComponent/>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}