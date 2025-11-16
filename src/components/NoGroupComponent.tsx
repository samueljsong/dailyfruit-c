import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

import { useLanguage } from "@/context/LanguageContext"

import missing from '../assets/missing.png'
import { useNavigate } from "react-router-dom"

export const NoGroupComponent = () => {

    const lang     = useLanguage();
    const navigate = useNavigate();

    const onJoinGroupButtonClickHandler   = () => navigate("/joinGroup");
    const onCreateGroupButtonClickHandler = () => navigate("/createGroup");
    

    return (
        <Empty className=" mb-[15%]">
            <EmptyHeader>
                <EmptyMedia className=" bg-transparent" variant="icon">
                    <img src={missing} alt="" />
                </EmptyMedia>
                <EmptyTitle>{lang.noGroupComponent.emptyTitle}</EmptyTitle>
                <EmptyDescription>
                    {lang.noGroupComponent.emptyDescription}
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <div className="flex gap-2">
                    <Button className=" cursor-pointer" onClick={onCreateGroupButtonClickHandler}>
                        {lang.noGroupComponent.createGroupButton}
                    </Button>
                    <Button className=" cursor-pointer" onClick={onJoinGroupButtonClickHandler} variant="outline">
                        {lang.noGroupComponent.joinGroupButton}
                    </Button>
                </div>
            </EmptyContent>
        </Empty>
    )
}
