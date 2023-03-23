import React from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useState } from 'react'
import { Title, Card, Paper } from '@mantine/core'
import { SortableItem } from './SortableItem'



export const DndPlane = ({search}:{search:string}) => {

    const [todoList, setTodoList] = useState(["Todo 12", "Todo 2", "Todo 3", "Todo 22", "Todo 31", "Todo 41", "Todo 56", "Todo 78"])

    const handleDragEnd = (event) => {
        console.log("Drag End")
        const {active, over} = event
        console.log(active)
        
        if(active.id !== over.id) {
            setTodoList((todos)=>{
                const activeIndex = todos.indexOf(active.id)
                const overIndex = todos.indexOf(over.id)
                return arrayMove(todoList, activeIndex, overIndex)
            })

            
        }
    }

  return (
   <div className='h-[100vh]'> 
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <Card withBorder padding='lg' radius='md' style={{height: '100%', width: '100%'}}>
            <SortableContext items={todoList} strategy={verticalListSortingStrategy}>
                <div className='flex flex-col gap-4 overflow-y-auto'>
                {todoList.filter((todo)=>todo.includes(search)).map((todo)=> {
                    return (
                        <SortableItem id={todo} key={todo} />
                    )
                })}
                </div>
            </SortableContext>
        </Card>
    </DndContext>
    </div>
  )
}
