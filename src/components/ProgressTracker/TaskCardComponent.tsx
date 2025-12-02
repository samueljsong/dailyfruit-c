// Import Combonents
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import {   
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle, 
} from "../ui/card"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export const TaskCardComponent = () => {

    const onCardCompleteClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
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
                            <Button className=" w-full cursor-pointer bg-primary/80 hover:bg-[#33cc99]" onClick={onCardCompleteClickHandler}>
                                Complete
                            </Button>
                        </CardAction>
                    </CardContent>
                </Card>
            </DrawerTrigger>
            <DrawerContent>
                <div className=" mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Task name</DrawerTitle>
                        <DrawerDescription className="">
                            Here is a more detailed description of the task. This is where we can provide additional information, instructions, or any other relevant details that might help the user understand and complete the task effectively.
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button className=" cursor-pointer bg-primary/80 hover:bg-[#33cc99]">Complete</Button>
                        <DrawerClose asChild>
                            <Button className=" cursor-pointer bg-primary/80 hover:bg-[#e2cdff]">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}