import type { NextPage } from 'next'
import { trpc } from '../lib/trpc'

const Home: NextPage = () => {

  const { data } = trpc.hello.hello.useQuery();

  return (
    <div>
      <span>Welcome</span>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}

export default Home
