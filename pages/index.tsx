import { trpc } from '../lib/trpc'
import { Page } from '../types/Page';

const Home: Page = () => {

  const { data } = trpc.hello.me.useQuery({ name: "next" });

  return (
    <>
      <span>Welcome</span>
      <pre>{JSON.stringify(data)}</pre>
    </>
  )
}

// this is how to set the layout
// but this is useless as it uses default automatically
Home.layout = "default"

export default Home
