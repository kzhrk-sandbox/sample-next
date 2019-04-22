import { withRouter } from 'next/router'
import Layout from '../layout'

const Work = withRouter(props => (
  <Layout>
    <h1>Work</h1>
    <p>id: {props.router.query.id}</p>
  </Layout>
))

export default Work
