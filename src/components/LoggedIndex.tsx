import { Container } from 'postcss'
import React from 'react'
import { LayoutNavbar } from './LayoutNavbar'
import { api } from '~/utils/api'
import {Text, TextInput} from '@mantine/core'
import { Dancing_Script } from 'next/font/google'
import {useMantineTheme, Grid, rem} from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import { DndPlane } from './dndComponents/DndPlane'
import { AddToDo } from './AddToDo'


const ds = Dancing_Script({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cursive",
  display: "swap"
})

export const LoggedIndex = () => {
  const {data, isFetched} = api.todo.all.useQuery({})
  const theme = useMantineTheme()
  const [filter, setFilter] = useState("")
  
  return (
    <>
    <LayoutNavbar>
    <div style={{backgroundColor: theme.colorScheme === "dark" ? "rgba(71,37,37,0.5)" : "rgb(226 232 240)", height: 'calc(100vh - 8rem)', borderRadius: 20}}>
        <div style={{display: "flex", flexDirection: "column", padding: rem('24px')}}>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: '100%'}}>
            <Text className='text-2xl' style={ds.style}>Total: {isFetched ? data.length : 0}</Text>
            <div style={{width: rem('256px'), padding: rem('8px')}}>
              <TextInput label="Search Title" icon={<IconSearch size={12} />} value={filter} onChange={(e)=>setFilter(e.currentTarget.value)}/>
            </div>
          </div>
          <div style={{marginTop: rem('30px'), display: 'flex', flexDirection: 'row', gap: rem('48px'), width: '100%', height: 'calc(100vh - 8rem - 10rem'}}>
            <div style={{width: '33.33%', height: '100%'}}>
              <AddToDo />
            </div>
            <div style={{width: '66.66%', height:'100%', overflowY: 'auto', overflowX: 'hidden'}}>
              <DndPlane search={filter} />
            </div>
          </div>
        </div>
       </div>

    </LayoutNavbar>
    </>
  )
}



