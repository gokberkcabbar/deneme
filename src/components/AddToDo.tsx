import React from 'react'
import { Card, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

export const AddToDo = () => {
    const form = useForm({
        initialValues: {
            title: "",
            content: "",
        }
    })
  return (
    <Card withBorder padding='lg' radius='md' style={{height: '100%', width: '100%'}}>
        <TextInput {...form.getInputProps} radius='md' label='Liste Adı'/>
    </Card>
  )
}
