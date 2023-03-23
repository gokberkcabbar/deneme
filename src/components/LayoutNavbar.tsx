/* eslint-disable @typescript-eslint/no-misused-promises */
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
  Container,
  Button,
  rem,
} from '@mantine/core';
import Image from 'next/image';
import { ThemeChanger } from './ThemeChanger';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import {Dancing_Script} from "next/font/google"

const ds = Dancing_Script({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cursive",
  display: "swap"
})

export const LayoutNavbar = ({children}:{children:React.ReactNode}) => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const {data: session} = useSession()
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
            <div className='flex flex-col w-48 items-start text-3xl' style={ds.style}>
              {session?.user.name}
            </div>
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
                    <div className='flex flex-row gap-8 items-center justify-center'>
                    <ThemeChanger />
                    <Button onClick={()=>signOut({callbackUrl: "http://localhost:3000/"})} radius='lg' color='red'>
                      Çıkış Yap
                    </Button>
                    </div>              
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
