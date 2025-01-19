import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Link as ChakraLink,
  Flex,
} from "@chakra-ui/react";

import { useState } from "react";
import { useAuth } from "../context/useAuth";

import { Link as ReactRouterLink } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login_user } = useAuth();

  const handleLogin = () => {
    login_user(username, password);
  };

  return (
    <Flex height="100vh" alignItems="center" justify="center">
      <VStack minH="500px" w="70%" maxW="400px">
        <Text mb="20px" color="gray.700" fontSize="44px" fontWeight="bold">
          Login
        </Text>
        <FormControl mb="20px">
          <FormLabel>Username</FormLabel>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Username"
          />
        </FormControl>
        <FormControl mb="20px">
          <FormLabel>Password</FormLabel>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </FormControl>
        <Button
          onClick={handleLogin}
          mb="10px"
          colorScheme="blue"
          mt="20px"
          w="100%"
        >
          Login
        </Button>
        <Text>
          Don't have an account?{" "}
          <ChakraLink as={ReactRouterLink} to="/register">
            Sign up
          </ChakraLink>
        </Text>
      </VStack>
    </Flex>
  );
};

export default Login;
