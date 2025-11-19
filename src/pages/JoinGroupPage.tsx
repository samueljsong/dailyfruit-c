import { NavMenu } from "@/components/NavMenu"
import { JoinGroupSearchComponent } from "@/components/JoinGroupSearchComponent"

export const JoinGroupPage = () => {
    
    return(
        <div className=" flex flex-col items-center min-h-screen">
            <NavMenu/>
            <div className=" flex flex-col items-center justify-center w-full mt-[2%] mb-[2%] h-full">
                <JoinGroupSearchComponent/>
            </div>
        </div>
    )
}