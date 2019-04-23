import Link from 'next/link'
import Layout from '../layout'
import fetch from 'isomorphic-unfetch'

const Employee = props => (
  <Layout>
    <h1>{props.data.employee_name}</h1>
    <dl>
      <dt>id</dt>
      <dd>{props.data.id}</dd>
      <dt>age</dt>
      <dd>{props.data.employee_age}</dd>
    </dl>
  </Layout>
)

Employee.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
  const data = await res.json()

  return {
    data
  }
}

export default Employee