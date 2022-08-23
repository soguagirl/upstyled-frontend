import {
  DashboardFilled,
} from '@ant-design/icons'
import {
  AddProduct,
  Collections,
  CreateCollection,
  DesignerProfile,
  Upboard,
  WhoWeAre,
} from './pages'

const routes = [{
  label: 'Designer Profile',
  key: 'designer-profile',
  path: '/designer-profile',
  icon: <DashboardFilled />,
  element: DesignerProfile,
}, {
  label: 'Collections',
  key: 'Collections',
  path: '/collections',
  icon: <DashboardFilled />,
  element: Collections,
}, {
  label: 'Add Product',
  key: 'AddProduct',
  path: '/add-new-product',
  icon: <DashboardFilled />,
  element: AddProduct,
}, {
  label: 'Create Collection',
  key: 'CreateCollection',
  path: '/create-new-collection',
  icon: <DashboardFilled />,
  element: CreateCollection,
}, {
  label: 'Upboard',
  key: 'Upboard',
  path: '/upboard',
  icon: <DashboardFilled />,
  element: Upboard,
}, {
  label: 'Who We Are',
  key: 'WhoWeAre',
  path: '/who-we-are',
  icon: <DashboardFilled />,
  element: WhoWeAre,
}]

export default routes
export const menuItems = routes.map(({ element, ...rest }) => rest)
