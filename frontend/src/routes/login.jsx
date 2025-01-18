//https://v2.chakra-ui.com/docs/components/form-control/usage
import { VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

import { useState } from "react";
import { useAuth } from "../contexts/userAuth";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login_user } = useAuth();

    const handleLogin = () => {
        login_user(username, password)
    }

    return (
        <VStack>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input onChange={(e) => setUsername(e.target.value)} value={username} type="text" />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input onChange={(e) => setPassword(e.target.value)} value={password} type="password" />
            </FormControl>
            <Button onClick={handleLogin}>Login</Button>
        </VStack>
    );
};

export default Login;
