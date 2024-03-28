import ListItem from '../components/ListItem'
import Buttons from '../components/Buttons'

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Status: {status}</p>
      <p>token: {process.env.PERSONAL_GITHUB_ACCESS_TOKEN?.substring(0, 8)}</p>
      <Buttons />
      <ul>
        {articles.map((item: any) => {
          return <ListItem key={item.id} issue={item} />
        })}
      </ul>
    </main>
  )
}
