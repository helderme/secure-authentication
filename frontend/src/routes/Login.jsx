import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Link as ChakraLink,
  Flex,
  Spinner,
} from "@chakra-ui/react";

import { useState } from "react";
import { useAuth } from "../context/useAuth.jsx";

import { Link as ReactRouterLink } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login_user } = useAuth();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await login_user(username, password);
    } catch (error) {
      setValidation(error.message)
    } finally {
      setIsLoading(false);
    }
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
        {validation && (
          <Text mb="20px" fontSize="18px" color="red.500">
            Invalid username/password.
          </Text>
        )}
        <Button
          onClick={handleLogin}
          mb="10px"
          colorScheme="blue"
          mt="20px"
          w="100%"
          isDisabled={isLoading}
        >
          {isLoading ? <Spinner size="sm" /> : "Login"}
        </Button>
        <Text>
          Don't have an account?{" "}
          <ChakraLink as={ReactRouterLink} to="/register" color="teal.500" fontWeight="bold">
            Sign up
          </ChakraLink>
        </Text>

      </VStack>
    </Flex>
  );
};

export default Login;
