import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { GroupCardComponent } from "./GroupCardComponent";
import { ScrollArea }from "@/components/ui/scroll-area";

export const JoinGroupSearchComponent = () => {

    return(
        <div className=" flex flex-col h-[80vh] gap-6 max-w-160 min-w-80 w-[90%] md:w-[60%] lg:w-[40%]">
            <div className=" flex flex-col gap-2">
                <div>
                    <h1 className=" text-2xl font-bold">Join Group</h1>
                    <p className="text-sm text-muted-foreground">Search for an existing group that you want to join.</p>
                </div>
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        className="pl-9"
                    />
                </div>
            </div>
            <h2 className=" text-sm text-muted-foreground">Search Results...</h2>
            <ScrollArea className=" flex-1 w-full rounded-md border overflow-hidden">
                <div className=" flex flex-col gap-4 p-3">
                    <GroupCardComponent/>
                    <GroupCardComponent/>
                    <GroupCardComponent/>
                    <GroupCardComponent/>
                    <GroupCardComponent/>
                    <GroupCardComponent/>
                </div>
            </ScrollArea>

        </div>
    )
}