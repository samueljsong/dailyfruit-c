import { NoGroupComponent } from "@/components/NoGroupComponent";
import { NavMenu } from "@/components/NavMenu";


export const HomePage = () => {
    return (
        <div className=" flex flex-col items-center min-h-screen">
            <NavMenu/>
            <NoGroupComponent />
        </div>
    )
};
