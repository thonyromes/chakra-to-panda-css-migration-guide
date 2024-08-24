import { Heading, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack as="main" direction="column" justifyContent="flex-end">
      <Stack direction="row" justifyContent="center" gap={12}>
        <Heading as="h1" mb={6}>
          Dashboard
        </Heading>
      </Stack>
    </Stack>
  );
}
