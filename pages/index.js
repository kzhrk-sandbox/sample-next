import Link from 'next/link'
import Layout from '../layout'
import fetch from 'isomorphic-unfetch'

const Index = props => (
  <Layout>
    <h1>Users</h1>
    <ul>
      {props.data.map(todo => (
        <li key={todo.id}>
          <Link href={`/todo/${todo.id}`}>
            <a>{todo.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()

  return {
    data
  }
}

export default Index