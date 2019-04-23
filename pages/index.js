import Link from 'next/link'
import Layout from '../layout'
import fetch from 'isomorphic-unfetch'

const Index = props => (
  <Layout>
    <h1>Users</h1>
    <ul>
      {props.data.map(employee => (
        <li key={employee.id}>
          <Link href={`/employee/${employee.id}`}>
            <a>{employee.employee_name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('http://dummy.restapiexample.com/api/v1/employees')
  const data = await res.json()

  return {
    data
  }
}

export default Index