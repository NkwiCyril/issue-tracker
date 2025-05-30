import { Box, Button, Flex, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <Flex direction="column" gap="3" className="max-w-xl p-5">
      <Box maxWidth="700px">
        <TextField.Root placeholder="Title" />
      </Box>
      <Box maxWidth="700px">
        <TextArea placeholder="Describe the issue..." />
      </Box>
      <Box>
        <Button className="hover:cursor-pointer">Submit New Issue</Button>
      </Box>
    </Flex>
  );
};

export default NewIssuePage;
