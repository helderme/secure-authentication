import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Text,
  Link as ChakraLink,
  Spinner,
} from "@chakra-ui/react";

import { useState } from "react";
import { useAuth } from "../context/useAuth.jsx";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";

import { Link as ReactRouterLink } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [result, setResult] = useState(null);
  const [validation, setValidation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { register_user } = useAuth();

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      const reg_result = await register_user(username, email, password, cPassword);
      if (reg_result === 'passwords dont match') {
        setValidation('Passwords dont match')
      }
      else if ('error' in reg_result) {
        setValidation(reg_result['error'])
      }
      else {
        setResult(reg_result);
      }
    } catch (error) {
      setResult(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justify="center">
      {!result && (
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
          {validation && (
          <Text mb="20px" fontSize="18px" color="red.500">
            <CloseIcon boxSize={3} color="red.500" mr="5px" />
            {validation}
          </Text>
          )}
          <Button
            mb="10px"
            colorScheme="green"
            mt="20px"
            w="100%"
            onClick={handleRegister}
            isDisabled={isLoading}
          >
            {isLoading ? <Spinner size="sm" /> : "Register"}
          </Button>
          <Text>
            Already have an account?{" "}
            <ChakraLink as={ReactRouterLink} to="/login" color="teal.500" fontWeight="bold">
              Sign in
            </ChakraLink>
          </Text>
        </VStack>
      )}

      {result !== null && (
        <VStack minH="500px" w="70%" maxW="400px">
          <Text mb="20px" color="green.700" fontSize="44px" fontWeight="bold">
            Register
          </Text>
          {result ? (
            <Flex direction="column" alignItems="center" justifyContent="center" textAlign="center">
              <CheckCircleIcon boxSize={8} color="green.500" />
              <Text mb="20px" fontSize="22px" color="green.500">
                Account successfully created.
              </Text>
            </Flex>
          ) : (
            <Flex direction="column" alignItems="center" justifyContent="center" textAlign="center">
              <CloseIcon boxSize={6} color="red.500" />
              <Text mb="20px" fontSize="18px" color="red.500">
                An error occurred.
              </Text>
            </Flex>
          )}
          <ChakraLink as={ReactRouterLink} to="/login">
            <Button
              mb="10px"
              colorScheme="green"
              mt="20px"
              w="100%"
              onClick={() => setResult(null)}
            >
              Return to login
            </Button>
          </ChakraLink>
        </VStack>
      )}
    </Flex>
  );
};

export default Register;
