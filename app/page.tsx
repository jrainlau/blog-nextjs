import ListItem from '../components/ListItem'
import InitStore from '../components/InitStore'

async function getData() {
  const res = await fetch('https://api.github.com/repos/jrainlau/blog-articles/issues', {
    headers: {
      authorization: `Bearer ${process.env.PERSONAL_GITHUB_ACCESS_TOKEN}`,
    }
  })

  return {
    status: res.status,
    articles: res.ok ? (await res.json()) : []
  }
}

export default async function Home() {
  const { status, articles } = await getData()

  return (
    <main className="w-full max-w-[1200px] mx-auto h-screen overflow-y-scroll overflow-x-hidden p-16 no-scrollbar">
      <h1 className='text-7xl font-bold mb-0'>Jrain&apos;s</h1>
      <h1 className='text-7xl font-bold mb-6'>精神时光屋</h1>
      <section className='mb-6'>
        <a href="https://github.com/jrainlau" target='__blank' className='icon bg-[url(/github.svg)]'></a>
        <a href="mailto:jrainlau@gmail.com" target='__blank' className='icon bg-[url(/gmail.svg)]'></a>
        <a href="https://www.xiaohongshu.com/user/profile/5cf4ff44000000001200c082" target='__blank' className='icon bg-[url(/xiaohongshu.svg)]'></a>
      </section>
      <InitStore articles={articles} />
      {/* <p>Status: {status}</p>
      <p>token: {process.env.PERSONAL_GITHUB_ACCESS_TOKEN?.substring(0, 8)}</p> */}

      <ul>
        {articles.map((item: any) => {
          return <ListItem key={item.id} issue={item} />
        })}
      </ul>
    </main>
  )
}
