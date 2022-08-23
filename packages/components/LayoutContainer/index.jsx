import PropTypes from 'prop-types'
import { Layout } from 'antd'
import Head from '../Head'
import Foot from '../Foot'
import SideNav from './SideNav'
import styles from './layout.module.less'

const {
  Header, Footer, Sider, Content,
} = Layout

const LayoutContainer = ({ children }) => (
  <Layout>
    <Header theme="light">
      <Head />
    </Header>
    <Layout>
      <Sider className={styles.aside}>
        <SideNav />
      </Sider>
      <Content>{ children }</Content>
    </Layout>
    <Footer>
      <Foot />
    </Footer>
  </Layout>
)

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutContainer
