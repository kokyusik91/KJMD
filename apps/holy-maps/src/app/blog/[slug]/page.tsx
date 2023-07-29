import { cookies, headers } from 'next/headers'

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

// 서버에서 실행이 됨;;
export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).then((res) => res.json())

  return posts.map((post: any) => ({
    slug: post.slug
  }))
}

export async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function BlogPage({ params }: any) {
  const cookieStore = cookies()
  const headersList = headers()
  const referer = headersList.get('referer')
  console.log('referer', referer)

  const posts: Post[] = await getPosts()
  // console.log(posts)
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.id}</li>
      ))}
    </ul>
  )
}

export default BlogPage
