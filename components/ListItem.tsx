'use client'

import { RootState } from '@/lib/store'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import Image from 'next/legacy/image'

export default function ListItem({ issue }: { issue: any}) {
  // const count = useSelector((state: RootState) => state.counter.value)
  const router = useRouter()
  const createTime = (new Date(issue.created_at).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })).replaceAll(',', '' )
  const coverImage = extractImageFromMarkdown(issue.body)

  function toArticle() {
    router.push(`/article?id=${issue.id}`)
  }

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
    <li className='mb-8 flex justify-between items-center'>
      <div className='flex-1 mr-32 max-lg:mr-4'>
        <h1 className='font-bold mb-3 text-3xl max-lg:text-lg max-lg:mb-1' onClick={toArticle}>{issue.title}</h1>
        <span className='text-gray-500 max-lg:text-sm'>{createTime}</span>
      </div>

      <div className='w-[400px] h-[200px] relative max-lg:w-[100px] max-lg:h-[75px]'>
        <Image src={coverImage} alt='' layout='fill' objectFit='cover' />
      </div>
    </li>
  )
}
