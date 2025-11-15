// Component Imports
import { Button } from "./ui/button"
import { Input }  from "./ui/input"
import { Textarea } from "./ui/textarea";

import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";

export const CreateGroupForm = () => {

    return(
        <form action="" className=" max-w-160 min-w-80 w-[80%] md:w-[60%] lg:w-[40%]">
            <FieldGroup>
                <div>
                    <h1>Create Group</h1>
                </div>
                <Field>
                    <FieldLabel htmlFor="groupName">Group Name</FieldLabel>
                        <FieldDescription>
                            This is what everyone will see
                        </FieldDescription>
                    <Input 
                        id="groupName"
                        type="text"
                        placeholder="The Best Group"
                        required
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="groupPassword">Group Password</FieldLabel>
                        <FieldDescription>
                            This is what people will have to enter to join your group
                        </FieldDescription>
                    <Input 
                        id="groupPassword"
                        type="password"
                        placeholder="**********"
                        required
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="groupDescription">Description</FieldLabel>
                        <FieldDescription>
                            Create a short description regarding what this group is about
                        </FieldDescription>
                    <Textarea className=" h-30" required id="groupDescription" placeholder="This group "/>
                </Field>
            </FieldGroup>
            <Button>Create Group</Button>
        </form>
    )
}