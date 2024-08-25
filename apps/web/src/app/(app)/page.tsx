import { Heading, Stack } from "@chakra-ui/react";
import { Button } from "@rotate/ui";

import { css } from "@rotate/panda-preset/styled-system/css";
import { Button as PandaButton } from "@rotate/panda-ui";

export default function Home() {
  return (
    <Stack as="main" direction="column">
      <Heading as="h1" mb={6} textAlign="center">
        Dashboard
      </Heading>
      <Stack direction="row" justifyContent="center" gap={12}>
        <Button>Chakra Button</Button>
        <PandaButton>Panda CSS Button</PandaButton>
        <div
          className={css({
            bg: "cyan.700",
            rounded: "sm",
            px: "8",
          })}
        >
          Hello world
        </div>
      </Stack>
    </Stack>
  );
}
