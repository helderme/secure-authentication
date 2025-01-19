import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { useState } from "react";
import { useAuth } from "../context/useAuth.jsx";

import { Link as ReactRouterLink } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const { register_user } = useAuth();

  const handleRegister = () => {
    register_user(username, email, password, cPassword);
  };

  return (
    <Flex height="100vh" alignItems="center" justify="center">
      <VStack minH="500px" w="70%" maxW="400px">
        <Text mb="20px" color="gray.700" fontSize="44px" fontWeight="bold">
          Register
        </Text>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Username"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            onChange={(e) => setCPassword(e.target.value)}
            value={cPassword}
            type="password"
            placeholder="Confirm Password"
          />
        </FormControl>
        <Button
          mb="10px"
          colorScheme="green"
          mt="20px"
          w="100%"
          onClick={handleRegister}
        >
          Register
        </Button>
        <Text>
            Already have an account?{" "}
          <ChakraLink as={ReactRouterLink} to="/login">
            Sign in
          </ChakraLink>
        </Text>
      </VStack>
    </Flex>
  );
};

export default Register;
