import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Crown, Users }             from "lucide-react"
import { JoinGroupDialogComponent } from "./JoinGroupDialogComponent"

export const GroupCardComponent = () => {

    const onJoinGroupClickHandler = () => {

    }

    return(
        <Card className="w-full min-h-">
            <CardHeader>
                <CardTitle>벤쿠버 세우신교회 청년</CardTitle>
                <CardDescription>
                    안녕하세요! 벤쿠버 세우신교회 청년들이 하루하루 살아갈때 하나님과 동행하기 위해 만든 그룹입니다.
                </CardDescription>
                <CardAction>
                    <JoinGroupDialogComponent></JoinGroupDialogComponent>
                </CardAction>
            </CardHeader>
            <CardContent className=" text-sm text-muted-foreground">
                <div className=" flex flex-row justify-between">
                    <div className=" flex gap-1 items-center">
                        <Crown/>
                        <p>Samuel</p>
                    </div>
                    <div className=" flex gap-1 items-center">
                        <Users/>
                        <p>5</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}