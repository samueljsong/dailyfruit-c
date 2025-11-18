// Component Imports
import { useState } from "react";
import { Button } from "./ui/button"
import { Input }  from "./ui/input"
import { Textarea } from "./ui/textarea";

import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";

import { util } from '../utils/UtilFunctions'
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export const CreateGroupForm = () => {

    const navigate = useNavigate();
    const lang     = useLanguage();

    const groupNameLimit        = 50;
    const groupPasswordLimit    = 30;
    const groupDescriptionLimit = 500;

    const [groupName, setGroupName]               = useState("");
    const [groupPassword, setGroupPassword]       = useState("");
    const [groupDescription, setGroupDescription] = useState("");

    const onGroupNameInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (util.isWordWithinLimit(e.currentTarget.value, groupNameLimit))
            setGroupName(e.currentTarget.value);
    }

    const onGroupPasswordInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (util.isWordWithinLimit(e.currentTarget.value, groupPasswordLimit))
            setGroupPassword(e.currentTarget.value);
    }

    const onDescriptionInputHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (util.isWordWithinLimit(e.currentTarget.value, groupDescriptionLimit))
            setGroupDescription(e.currentTarget.value);
    }

    const onCreateGroupButtonClickHandler = () => {
        if (util.isWordWithinLimit(groupName, groupNameLimit) && util.isWordWithinLimit(groupPassword, groupPasswordLimit) && util.isWordWithinLimit(groupDescription, groupDescriptionLimit))
        {
            //API call here and navigate
            //Alert that the group has been made successfully
            navigate("/") // temporary
        }
        else
        {
            // Alert one of the field is too long.
        }
    }

    return(
        <form action="" className=" flex flex-col gap-4 max-w-160 min-w-80 w-[80%] md:w-[60%] lg:w-[40%]">
            <FieldGroup>
                <div>
                    <h1 className=" text-2xl font-bold">{lang.createGroupForm.title}</h1>
                    <FieldDescription>
                        {lang.createGroupForm.notice}
                    </FieldDescription>
                </div>
                <Field>
                    <FieldLabel htmlFor="groupName">{lang.createGroupForm.groupName} *</FieldLabel>
                        <FieldDescription>
                            {lang.createGroupForm.groupNameDescription}
                        </FieldDescription>
                    <Input 
                        id="groupName"
                        type="text"
                        required
                        onInput={onGroupNameInputHandler}
                    />
                    <FieldDescription className={groupName.length >= groupNameLimit ? " text-red-500" : ""}>
                        {groupName.length} / {groupNameLimit}
                    </FieldDescription>
                </Field>
                <Field>
                    <FieldLabel htmlFor="groupPassword">{lang.createGroupForm.groupPassword} *</FieldLabel>
                        <FieldDescription>
                            {lang.createGroupForm.groupPasswordDescription}
                        </FieldDescription>
                    <Input 
                        id="groupPassword"
                        type="password"
                        required
                        onInput={onGroupPasswordInputHandler}
                    />
                    <FieldDescription className={groupPassword.length >= groupPasswordLimit ? " text-red-500" : ""}>
                        {groupPassword.length} / {groupPasswordLimit}
                    </FieldDescription>
                </Field>
                <Field>
                    <FieldLabel htmlFor="groupDescription">{lang.createGroupForm.groupDescription}</FieldLabel>
                        <FieldDescription>
                            {lang.createGroupForm.description}
                        </FieldDescription>
                    <Textarea 
                        className=" h-30 resize-none" 
                        id="groupDescription" 
                        onInput={onDescriptionInputHandler}
                    />
                    <FieldDescription className={groupDescription.length >= groupDescriptionLimit ? " text-red-500" : ""}>
                        {groupDescription.length} / {groupDescriptionLimit}
                    </FieldDescription>
                </Field>
            </FieldGroup>
            <Button onClick={onCreateGroupButtonClickHandler} className=" cursor-pointer">{lang.createGroupForm.title}</Button>
        </form>
    )
}