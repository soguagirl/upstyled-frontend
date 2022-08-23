import styled from 'styled-components'

const Wrap = styled('div')`
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: rgba(85, 85, 85, 1);
  font-size: 16px;
  width: 30%;
  flex-shrink: 0;

  dl {
    dt {
      padding-bottom: 8px;
      font-size: 24px;
      font-weight: 700;
    }
    dd {
      line-height: 28px;
    }
  }
`

export default () => (
  <Wrap>
    <dl>
      <dt>UpStyled</dt>
      <dd>Email: info@mysite.com</dd>
      <dd>Tel: 123-456-7890</dd>
    </dl>
  </Wrap>
)
