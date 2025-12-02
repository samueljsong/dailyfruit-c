// Import Combonents
import { Badge } from "../ui/badge"

import {   
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle, 
} from "../ui/card"

import { Button } from "../ui/button"

export const TaskCardComponent = () => {

    return (
        <Card className=" flex flex-col w-full cursor-pointer aspect-square">
            <CardHeader>
                <CardTitle>Task Name</CardTitle>
                <CardAction>
                    <Badge className=" bg-[#e2cdff]">Incomplete</Badge>
                </CardAction>
            </CardHeader>
            <CardContent className=" flex flex-col grow justify-between">  
                <CardDescription>
                    Task Description. This is where we will write down a brief explanation on what the task is about.
                </CardDescription>
                <CardAction className=" flex w-full">
                    <Button className=" w-full cursor-pointer bg-primary/80 hover:bg-[#33cc99]">Complete</Button>
                </CardAction>
            </CardContent>
        </Card>
    )
}