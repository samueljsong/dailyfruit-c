import { type NavigateFunction } from "react-router-dom";

const createUser = async(userData: any, navigate: NavigateFunction, toast: any) => {

    fetch("https://localhost:7264/User/CreateUser", {
        method: "POST",
        mode: "cors",
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(json => {
        if (json.success)
        {
            toast.success(json.message);
            navigate("/login");
        }
        else
        {
            toast.error(json.message);
        }
    });
}

const loginUser = async(userData: any, navigate: NavigateFunction, toast: any) => {

    fetch("https://localhost:7264/User/Login", {
        method: "POST",
        mode: "cors",
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(json => {

        console.log(json);

        if (json.success)
        {
            toast.success(json.message);
            navigate("/");
        }
        else
        {
            toast.error(json.message);
        }
    });
}

export const UserService = {
    createUser, loginUser
}