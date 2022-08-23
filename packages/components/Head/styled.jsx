import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Top = styled('div')(({ theme }) => ({
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
}))

export const TopNav = styled('div')(({ theme }) => ({
  height: 70,
  display: 'flex',
}))

export const Logo = styled(Link)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
  color: 'rgba(85, 85, 85, 1)',
  width: 250,
  flexShrink: 0,
  fontWeight: 700,
}))

export const Nav = styled('div')(({ theme }) => ({
  height: '100%',
  flex: 1,
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'flex-end',
}))

export const FullLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0 20px;
  min-width: 190px;
  transition: .3s;
  color: rgba(85, 85, 85, 1);
  font-size: 16px;
  border-right: 1px solid rgba(85, 85, 85, 1);

  &:last-of-type {
    border-right: none;
  }

  &:hover {
    color: rgba(170, 148, 130, 1);
    background-color: rgba(85, 85, 85, 1);
  }
`
