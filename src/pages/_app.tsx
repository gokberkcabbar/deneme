import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useState } from "react";
import { ColorScheme } from "@mantine/styles";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
      </MantineProvider>
    </ColorSchemeProvider>
    
  );
};

export default api.withTRPC(MyApp);
