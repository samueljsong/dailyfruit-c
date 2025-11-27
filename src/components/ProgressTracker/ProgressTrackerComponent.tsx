// Import Components
import { Day } from "./Day"
import { ScrollBar, ScrollArea } from "../ui/scroll-area"
import { useEffect, useRef } from "react"

export const ProgressTrackerComponent = () => {

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollTo({ left: scrollRef.current.scrollWidth });
    }, []);

    return(
        <div className=" flex w-full">
            <div className="grid grid-rows-7 gap-0.5 text-xs text-muted-foreground mr-2 shrink-0">
                <span className="row-start-2">Mon</span>
                <span className="row-start-4">Wed</span>
                <span className="row-start-6">Fri</span>
            </div>
            <ScrollArea className=" w-full" ref={scrollRef}>
                <div className=" flex gap-1 w-full min-w-max overflow-x-auto">
                    <div className=" flex flex-col">
                        <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>May</span>
                            <span>Jun</span>
                            <span>Jul</span>
                            <span>Aug</span>
                            <span>Sep</span>
                            <span>Oct</span>
                            <span>Nov</span>
                            <span>Dec</span>
                        </div>
                        <div className=" grid grid-flow-col grid-rows-7 gap-0.5 pb-4">
                            {[...Array(365)].map((_, i) => (
                                <Day key={i} />
                            ))}
                        </div>
                    </div>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}