import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Button,
  CardHeader,
  CardGroup,
  CardFooter
} from 'reactstrap';

const MerchantCard = (props) => {
  console.log(props)
  return (
    <>
      {
        props.merchants.map((row) => {
          return (
            <>
              <MerchantCardSection
                key={`${row.merchantId}` + `${row.productId}`}
                merchantData={row.merchantData}
                productData={row.productData}
                handleAddToCart={props.handleAddToCart}
              />
            </>
          )
        })
      }
    </>
  )
}

const MerchantCardSection = (props) => {
  const {
    merchantData,
    productData,
    handleAddToCart,
  } = props

  return (
    <>
      <div>
        <Col xs="auto">
          <Card sm="6" style={{ maxWidth: '500px', margin: '20px 0' }}>
            <CardImg top width="100%" src={merchantData.logo} alt={merchantData.merchant} />
            <CardBody>
              <CardTitle tag="h5">{merchantData.merchant}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{merchantData.commissionFee}</CardSubtitle>
              <CardText>{merchantData.companyDescription}</CardText>
              <CardSubtitle tag="h4">{productData.name}</CardSubtitle>
              <CardText tag="h6" className="mb-2 text-muted">{productData.description}</CardText>
              <CardText tag="h6" className="mb-2 text-muted">Price: {productData.price}</CardText>
              <CardText tag="h6" className="mb-2 text-muted">Quantity: {productData.quantity}</CardText>
              <Button onClick={() => handleAddToCart({ ...merchantData, ...productData })}>Add to Cart</Button>
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  )
}

export default MerchantCard;