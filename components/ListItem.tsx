'use client'

import { RootState } from '@/lib/store'
import { useSelector } from 'react-redux'

export default function ListItem({ issue }: { issue: any}) {
  const log = () => {
    console.log('xxxx: ', issue.title)
  }

  const count = useSelector((state: RootState) => state.counter.value)

  return (
    <li onClick={log}>
      <span className='mr-2'>Store state: {count}</span>
      <span>{issue.title}</span> 
    </li>
  )
}
