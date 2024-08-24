import { Heading, Stack } from "@chakra-ui/react";

import { Button, Input } from "@rotate/ui";

const FormPage = () => {
  return (
    <Stack
      as="main"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Heading as="h1" mb={6}>
        Form Page
      </Heading>
      <Stack direction="column" gap={6}>
        <Input label="Name" />
        <Input label="Email address" type="email" />
        <Input label="Password" type="password" />
        <Input label="Confirm password" type="password" />
        <Button>Submit</Button>
      </Stack>
    </Stack>
  );
};

export default FormPage;
