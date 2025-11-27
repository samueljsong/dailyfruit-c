import { ProgressComponent } from "./ProgressComponent"

export const GroupComponent = () => {
    return(
        <div className=" pt-4 flex flex-col gap-2 max-w-160 min-w-80 w-[80%] md:w-[60%] lg:w-[40%]">
            <ProgressComponent/>
        </div>
    )
}