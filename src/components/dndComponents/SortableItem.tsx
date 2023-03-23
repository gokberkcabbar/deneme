
import React from 'react'
import {Paper} from '@mantine/core'
import {useSortable} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'
type propType = {
    id: string,
    [rest: string]: any
}

export const SortableItem = (props:propType) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id: props.id})
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <Paper shadow='sm' radius='lg' p='lg' style={{backgroundColor: "rgb(55 65 81)"}}>{props.id}</Paper>
    </div>
  )
}
