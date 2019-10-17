
import { Layout, Menu } from 'antd'
import { Link } from 'umi'

import styles from './index.css'

const { Header, Content, Footer } = Layout;


export default function (props) {

  const { pathname } = props.location

  const menus = [
    { path: '/', name: '商品' },
    { path: '/users', name: '用户' },
    { path: '/about', name: '关于' },
  ]

  const selectedKeys = menus.filter(menu => {
    if (menu.path === '/') {
      return pathname === '/'
    } else {
      return pathname.startsWith(menu.path)
    }
  }).map(menu => {
    menu.path
  })

  return (
    <Layout>

      <Header className={styles.header}>
        {/* log */}

        {/* <img
          className={styles.logo}
          alt='logo'
        /> */}

        {/* nav */}
        
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={selectedKeys}
          style={{ lineHeight: "64px", float: "left" }}  >


          <Menu.Item key="/">
            <Link to="/">商品</Link>
          </Menu.Item>
          <Menu.Item key="users">
            <Link to="/users">用户</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">关于</Link>
          </Menu.Item>
        </Menu>
      </Header>


      <Content className={styles.content}>
        <div className={styles.main}> {props.children}</div>
      </Content>
      <Footer className={styles.footer}>@co-shane</Footer>
    </Layout>
  )
}
