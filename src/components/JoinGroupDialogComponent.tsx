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
import { useLanguage } from "@/context/LanguageContext";

export const JoinGroupDialogComponent = () => {

    const navigate = useNavigate();
    const lang     = useLanguage();

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
        toast.success(lang.joinGroupDialogComponent.success)
        navigate("/");
    }

    const onJoinGroupErrorHandler = () => {
        toast.error(lang.joinGroupDialogComponent.error)
    }

    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button className=" cursor-pointer">{lang.joinGroupDialogComponent.title}</Button>
            </DialogTrigger>
            <form>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>{lang.joinGroupDialogComponent.dialogTitle}</DialogTitle>
                    <DialogDescription>
                        {lang.joinGroupDialogComponent.dialogDescription}
                    </DialogDescription>
                    </DialogHeader>
                     <div className=" flex flex-col gap-4">
                        <Label htmlFor="">{lang.joinGroupDialogComponent.label}</Label>
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
                        {lang.joinGroupDialogComponent.buttonText}
                    </Button>
                </DialogContent>
            </form>
        </Dialog>
    )
}