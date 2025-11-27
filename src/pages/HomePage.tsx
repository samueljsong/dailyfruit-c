// Import Libraries
import { useState } from "react";

// Import Components
import { GroupComponent }   from "@/components/GroupComponent";
import { NavMenu }          from "@/components/NavMenu";
import { NoGroupComponent } from "@/components/NoGroupComponent";

export const HomePage = () => {

    const [hasGroup, setHasGroup] = useState(true);

    return (
        <div className=" flex flex-col items-center min-h-screen">
            <NavMenu/>
            { hasGroup ? <GroupComponent/> : <NoGroupComponent/> }
        </div>
    )
};
