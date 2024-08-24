"use client";

import { Link } from "@chakra-ui/next-js";
import { Stack } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <Stack
        direction="row"
        gap="12"
        justifyContent="center"
        alignItems="center"
        py="32"
      >
        <Link href="/">Home</Link>
        <Link href="/form">Form</Link>
        <Link href="/table">Table</Link>
      </Stack>
    </header>
  );
};

export default Header;
