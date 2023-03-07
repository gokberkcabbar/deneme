import React from 'react'
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  ActionIcon,
  rem,
  Container,
  Title,
} from '@mantine/core';
import { IconBrandGoogle, IconBrandDiscord } from '@tabler/icons-react';
import Image from 'next/image';

const Login = () => {
  
    return (
      <Container>
        <Paper p='xl' withBorder shadow='md' style={{maxWidth : rem('600px'), marginTop: '10vh', overflowY: 'hidden'}}>
            <div className='flex flex-col w-full'>
                <div className='flex justify-center items-center'>
                <Text weight={'bold'} size='xl'>Welcome To KamTo App</Text>
                </div>
                <div className='flex justify-center mt-7 w-full'>
                    <div className='w-32 h-32 relative'>
                        <Image src='https://svgshare.com/i/qwa.svg' alt='logo' fill />
                    </div>
                </div>
                <div className='flex flex-row mt-7 w-full justify-center items-center'>
                    <div className='flex justify-center items-center w-[70%] gap-8'>
                    <Button leftIcon={<IconBrandGoogle size={20}/>} variant='default'>Google</Button>
                    <Button leftIcon={<IconBrandDiscord size={20}/>} variant='default'>Discord</Button>
                    </div>
                </div>
            </div>
        </Paper>
      </Container>
    );
}
export default Login
