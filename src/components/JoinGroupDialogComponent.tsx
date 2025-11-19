import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button }      from "./ui/button";
import { Input }       from "./ui/input";
import { Label }       from "./ui/label";
import { toast }       from "sonner";
import { useState }    from "react";
import { useNavigate } from "react-router-dom";

export const JoinGroupDialogComponent = () => {

    const navigate = useNavigate();

    const [password, setPassword] = useState("");

    const onPasswordInputeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }

    const onJoinGroupFormSubmitHandler = () => {
        if (password === "123")
            onJoinGroupSuccessHandler();
        else
            onJoinGroupErrorHandler();
    }

    const onJoinGroupSuccessHandler = () => {
        toast.success("Successfully Joined Group")
        navigate("/");
    }

    const onJoinGroupErrorHandler = () => {
        toast.error("Wrong password... Please try again")
    }

    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button className=" cursor-pointer">Join Group</Button>
            </DialogTrigger>
            <form>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Joining "Enter group name"</DialogTitle>
                    <DialogDescription>
                        Please enter the group password provided by the owner to join.
                    </DialogDescription>
                    </DialogHeader>
                     <div className=" flex flex-col gap-4">
                        <Label htmlFor="">Group Password</Label>
                        <Input
                            type="password"
                            required
                            onChange={onPasswordInputeChangeHandler}
                        />
                    </div>
                    <Button 
                        className=" cursor-pointer" 
                        onClick={onJoinGroupFormSubmitHandler}
                    >
                        Join Group
                    </Button>
                </DialogContent>
            </form>
        </Dialog>
    )
}