import { useAuth } from "@/app/context/AuthContext";
import Button from '@mui/material/Button';

export default function Home() {
    const { user, login, logout } = useAuth();

    return (
        <div>
            <h1>Hello Context</h1>
            <h2 className="text-3xl">User: {user ? "login" : "logout"}</h2>
            <div>
                <Button variant="contained" onClick={login}>Login</Button>
                {" "}
                <Button variant="contained" onClick={logout}>Logout</Button>
            </div>
        </div>
    );
}