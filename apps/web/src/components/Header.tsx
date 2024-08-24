import { Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

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
        <Link as={NextLink} href="/">
          Home
        </Link>
        <Link as={NextLink} href="/form">
          Form
        </Link>
        <Link as={NextLink} href="/table">
          Table
        </Link>
      </Stack>
    </header>
  );
};

export default Header;
