import styled from 'styled-components'

const Wrap = styled('div')`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  font-size: 16px;
  color: rgba(85, 85, 85, 1);
  border: 1px solid rgba(85, 85, 85, 1);
  borer-width: 1px 0;

  dl {
    dt {
      font-size: 18px;
      padding-bottom: 8px;
    }
    dd {
      line-height: 28px;
    }
  }
`

export default () => (
  <Wrap>
    <dl>
      <dt>Shop</dt>
      <dd>New</dd>
      <dd>Woman</dd>
      <dd>Man</dd>
    </dl>
    <dl>
      <dt>Our Store</dt>
      <dd>About Us</dd>
      <dd>Subscribe</dd>
      <dd>FAQ</dd>
    </dl>
    <dl>
      <dt>Terms & Conditions</dt>
      <dd>Store Policy</dd>
      <dd>Shipping & Returns</dd>
      <dd>Payment Methods </dd>
    </dl>
  </Wrap>
)
