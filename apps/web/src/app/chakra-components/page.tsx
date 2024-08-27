import { Box, Heading, Stack } from "@chakra-ui/react";
import { Button } from "@rotate/ui";

const buttonsCount = Array.from({ length: 5000 }, (_, i) => i + 1);

export default function Home() {
  return (
    <Stack as="main" direction="column">
      <Heading as="h1" mb={6} textAlign="center">
        Chakra Buttons
      </Heading>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={12}>
        {buttonsCount.map((i) => (
          <Box key={i} width="12rem">
            <Button>Chakra Button {i}</Button>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
