// Import Combonents
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
        <Card className=" w-full">
            <CardHeader>
                <CardTitle>Task Name</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    Task Description
                </CardDescription>
                <CardAction>
                    <Button>Start Task</Button>
                </CardAction>
            </CardContent>
        </Card>
    )
}