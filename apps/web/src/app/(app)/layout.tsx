import { Providers } from "@rotate/web/components/providers";
import React from "react";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Providers>{children}</Providers>;
};

export default AppLayout;
