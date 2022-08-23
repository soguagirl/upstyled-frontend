import {
  Route,
  Routes
} from 'react-router-dom'

import { LayoutContainer } from '@upstyled/components'

import routes from './routes'

function App() {
  return (
    <LayoutContainer>
      <Routes>
        {
          routes.map(({ key, path, element: Element }) => (
            <Route
              key={key}
              path={path}
              element={<Element />}
            />
          ))
        }
      </Routes>
    </LayoutContainer>
  )
}

export default App
