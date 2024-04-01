'use client'

import { RootState } from '@/lib/store'
import { useSelector } from 'react-redux'
import Image from "next/legacy/image"

export default function ListItem({ issue }: { issue: any}) {
  const log = () => {
    console.log('xxxx: ', issue)
  }

  const count = useSelector((state: RootState) => state.counter.value)
  const createTime = (new Date(issue.created_at).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })).replaceAll(',', '' )
  const coverImage = extractImageFromMarkdown(issue.body)

  function extractImageFromMarkdown(markdownText: string) {
    const regex = /!\[.*?\]\((.*?)\)/
    const match = markdownText.match(regex)
    if (match && match[1]) {
      return match[1]
    } else {
      return '' // 如果没有匹配到图片链接，则返回 null
    }
  }

  return (
    <li className='mb-8 flex justify-between items-center' onClick={log}>
      <div className='mr-32 flex-1'>
        <h1 className='text-3xl font-bold mb-3'>{issue.title}</h1>
        <span className='text-gray-500'>{createTime}</span>
      </div>

      <div className='w-[400px] h-[200px] relative'>
        <Image src={coverImage} alt='' layout='fill' objectFit='cover' />
      </div>
    </li>
  )
}
