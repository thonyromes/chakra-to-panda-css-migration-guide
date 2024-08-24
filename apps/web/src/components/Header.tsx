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
        <Link
          _hover={{
            textDecoration: "underline",
          }}
          href="/"
        >
          Home
        </Link>
        <Link
          _hover={{
            textDecoration: "underline",
          }}
          href="/form"
        >
          Form
        </Link>
        <Link
          _hover={{
            textDecoration: "underline",
          }}
          href="/table"
        >
          Table
        </Link>
      </Stack>
    </header>
  );
};

export default Header;
