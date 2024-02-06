import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProfileArray from "./ProfileArray";

export default function Contact({ color }) {
  const profile = ProfileArray();
  const linkedin = () => {
    window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
  };
  const github = () => {
    window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
  };
  const email = () => {
    window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
  };
  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
            {/* <Text color={"gray.600"} fontSize={"xl"} px={4}>
              {profile.contact}
            </Text>
            <Text color={`${color}.500`} fontWeight={600} fontSize={"lg"} px={4}>
              {profile.email}
            </Text> */}
            <Center>
              <HStack pt={4} spacing={6}>
                <IconButton
                  aria-label="Linkedin"
                  icon={<FaLinkedin size={45} />}
                  onClick={linkedin}
                  variant="ghost"
                  _hover={{
                    color: `${color}.400`,
                    transform: "scale(1.2)",
                  }}
                />
                <IconButton
                  aria-label="Github"
                  icon={<FaGithub size={45} />}
                  onClick={github}
                  variant="ghost"
                  _hover={{ color: `${color}.400`, transform: "scale(1.2)" }}
                />
                <IconButton
                  aria-label="Email"
                  icon={<FaEnvelope size={45} />}
                  onClick={email}
                  variant="ghost"
                  _hover={{ color: `${color}.400`, transform: "scale(1.2)" }}
                />
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
