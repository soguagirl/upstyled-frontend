import styled from 'styled-components'

import Contact from './Contact'
import FooterNav from './FooterNav'

const Wrap = styled('div')`
  display: flex;
`

export default () => (
  <Wrap>
    <Contact />
    <FooterNav />
  </Wrap>
)
