import { Heading, Stack } from "@chakra-ui/react";
import { Button } from "@rotate/ui";
import { Button as PandaButton } from "@rotate/ui/pandacss";
import { css } from "@styled-system/css";

export default function Home() {
  return (
    <Stack as="main" direction="column">
      <Heading as="h1" mb={6} textAlign="center">
        Dashboard
      </Heading>
      <Stack direction="row" justifyContent="center" gap={12}>
        <Button>Chakra Button</Button>
        <PandaButton>Panda CSS Button</PandaButton>
        <div className={css({ bg: "blackAlpha.400", rounded: "lg" })}>
          Hello world
        </div>
      </Stack>
    </Stack>
  );
}
