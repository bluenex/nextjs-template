import React from "react";
import { Box, Button, Container, Text } from "@chakra-ui/react";

const Footer = () => {
  // const router = useRouter();

  return (
    <Box w="100%" p={4} bg="blue.100">
      <Container textAlign="center">
        <Text mb={2} fontSize="sm">
          จัดทำโดยความร่วมมือระหว่าง สถาบัน 1 และ สถาบัน 2
        </Text>
        <Button
          variant="link"
          colorScheme="blue"
          fontSize="sm"
          onClick={() => {
            console.log("click on button");
            // router.push("/privacy-policy");
          }}
        >
          นโยบายความเป็นส่วนตัว
        </Button>
      </Container>
    </Box>
  );
};

export default Footer;
