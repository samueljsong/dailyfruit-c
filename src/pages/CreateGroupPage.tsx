// Components Import
import { CreateGroupForm } from "@/components/CreateGroupForm"
import { NavMenu }         from "@/components/NavMenu"

export const CreateGroupPage = () => {
    
    return(
        <div className=" flex flex-col items-center min-h-screen">
            <NavMenu/>
            <CreateGroupForm/>
        </div>
    )
}