import {
  createContext, useContext, useReducer, useMemo,
} from 'react'

import PropTypes from 'prop-types'

const UIContext = createContext(null)

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER': {
      return { ...state, miniSidenav: action.value }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const UIControllerProvider = ({ children }) => {
  const initialState = {
    isDrawerOpen: true,
  }

  const [controller, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(() => [controller, dispatch], [controller, dispatch])

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

UIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

const useUIController = () => {
  const context = useContext(UIContext)

  if (!context) {
    throw new Error('useUIController should be used inside the UIControllerProvider.')
  }

  return context
}

const toggleDrawer = (dispatch, value) => dispatch({ type: 'TOGGLE_DRAWER', value })

export {
  UIControllerProvider,
  useUIController,
  toggleDrawer,
}
