import Link from 'next/link'
import Layout from '../layout'
import fetch from 'isomorphic-unfetch'

const Employee = props => (
  <Layout>
    <h1>{props.data.title}</h1>
  </Layout>
)

Employee.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  const data = await res.json()

  return {
    data
  }
}

export default Employee