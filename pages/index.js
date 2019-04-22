import Link from 'next/link'
import Layout from '../layout'

const Index = () => (
  <Layout>
    <ul>
      <li>
        <Link as="/work/1" href="/work?id=1">
          <a>作品1</a>
        </Link>
      </li>
      <li>
        <Link as="/work/2" href="/work?id=2">
          <a>作品2</a>
        </Link>
      </li>
      <li>
        <Link as="/work/3" href="/work?id=3">
          <a>作品3</a>
        </Link>
      </li>
    </ul>
    <p>Hello World</p>
  </Layout>
)

export default Index