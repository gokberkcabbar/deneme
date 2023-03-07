import React from 'react'
import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
  em,
  ActionIcon,
  Container
} from '@mantine/core';
import { IconSunHigh } from '@tabler/icons-react';
import Image from 'next/image';
import { ThemeChanger } from './ThemeChanger';

export const LayoutNavbar = ({children}:{children:React.ReactNode}) => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
            <Text>Application navbar</Text>
          </Navbar>
        }

        header={
          <Header height={{ base: 50, md: 70 }} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
  
                <div className='flex flex-row w-full items-center justify-between'>
                    <div className='flex flex-row gap-4 items-center'>
                        <div style={{width: em('50px'), height: em('50px'), position: 'relative'}}>
                            <Image src="https://svgshare.com/i/qwa.svg" alt='logo' fill />
                        </div>
                        <Text className='font-mono text-xl'>KamTo</Text>
                    </div>
                    <ThemeChanger />                 
                </div>
            </div>
          </Header>
        }
      >
        <Container>
            {children}
        </Container>
      </AppShell>
    );
}
