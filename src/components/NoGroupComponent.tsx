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

export const NoGroupComponent = () => {

    const lang = useLanguage();

    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    {/* have an actual icon here */}
                </EmptyMedia>
                <EmptyTitle>{lang.noGroupComponent.emptyTitle}</EmptyTitle>
                <EmptyDescription>
                    {lang.noGroupComponent.emptyDescription}
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <div className="flex gap-2">
                    <Button>{lang.noGroupComponent.createGroupButton}</Button>
                    <Button variant="outline">{lang.noGroupComponent.joinGroupButton}</Button>
                </div>
            </EmptyContent>
        </Empty>
    )
}
