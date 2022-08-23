import headerPicture from '@upstyled/assets/header_picture.webp'
import { Logo } from '@upstyled/components'
import { Col, Row } from 'antd'

const DesignerProfile = () => (
  <Row>
    <Col
      span={24}
    >
      <Logo />
    </Col>
    <Col
      span={24}
    >
      <img
        src={headerPicture}
        alt="designer profile"
      />
      designer profile
    </Col>

  </Row>
)
export default DesignerProfile
