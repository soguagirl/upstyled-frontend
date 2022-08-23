import {
  Menu,
} from 'antd'

import { useNavigate } from 'react-router-dom'

import { menuItems } from 'dashboard/src/routes'

import styles from './menu.module.less'

const items = menuItems.map(({ icon, ...rest }) => ({
  icon: <div className={styles.icon}>{icon}</div>,
  ...rest,
}))

const SideNav = () => {
  const navigate = useNavigate()
  const handleItemLink = (item) => {
    const { path } = items.find((k) => k.key === item.key)
    navigate(path)
  }
  return (
    <Menu
      className={styles.nav}
      onClick={handleItemLink}
      items={items}
    />
  )
}

export default SideNav
