import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  Card,
  CardBody,
  Image,
  Heading,
  Badge,
  Center,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";

export default function Projects({ color }) {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProjects = async () => {
    const response = await fetch(
      "https://api.github.com/users/waizbart/repos?sort=created&per_page=100"
    );
    const data = await response.json();
    setProjects(
      data
        .filter((project) => project.stargazers_count > 0)
        .map((project) => ({
          name: project.name,
          description: project.description,
          image: project.homepage,
          buttons: [
            {
              text: "View Code",
              href: project.html_url,
            },
          ],
          badges: [
            {
              text: project.language,
              colorScheme: "gray",
            },
          ],
        }))
    );
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Container maxW={"3xl"} id="projects">
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
            <Text fontWeight={800}>Projects</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Text color={"gray.500"} fontSize={"xl"} px={4}>
          Some of the side projects I've worked on in my free time.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} px={4}>
          {projects.slice(0, page * 6).map((project) => (
            <Fade bottom key={project.name}>
              <Card height="100%">
                <Image objectFit="cover" src={project.image} />

                <Flex direction="column" height="100%">
                  <CardBody align="left" flex="1">
                    <Heading size="md">{project.name}</Heading>

                    <Text py={2}>{project.description}</Text>
                  </CardBody>
                  <Flex direction="column" justifyContent="flex-end" p={4}>
                    <HStack py={2}>
                      {project.buttons.map((button) => (
                        <a key={button.text} href={button.href}>
                          <Button color={`${color}.400`}>{button.text}</Button>
                        </a>
                      ))}
                    </HStack>
                    <HStack pt={4} spacing={2}>
                      {project.badges.map((badge) => (
                        <Badge key={badge.text} colorScheme={badge.colorScheme}>
                          {badge.text}
                        </Badge>
                      ))}
                    </HStack>
                  </Flex>
                </Flex>
              </Card>
            </Fade>
          ))}
        </SimpleGrid>
        {projects.length > page * 6 && (
          <Center>
            <Button onClick={() => setPage(page + 1)}>Load More</Button>
          </Center>
        )}
      </Stack>
    </Container>
  );
}
