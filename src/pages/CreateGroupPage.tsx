// Components Import
import { CreateGroupForm } from "@/components/CreateGroupForm"
import { NavMenu }         from "@/components/NavMenu"

export const CreateGroupPage = () => {
    
    return(
        <div className=" flex flex-col items-center justify-center min-h-screen">
            <NavMenu/>
            <div className=" flex flex-1 items-center justify-center w-full mb-[5%]">
                <CreateGroupForm/>
            </div>
        </div>
    )
}