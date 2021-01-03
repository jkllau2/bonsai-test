import React from 'react'
import { Card, CardTitle, CardText, Col } from 'reactstrap'

const UserProfile = (props) => {
  if (!props.user) {
    return null
  }

  const name = `${props.user.firstname} ${props.user.lastname}` || 'no name provided'
  const email = `${props.user.email}` || 'no email provided'

  return (

    <Col>
      <Card body>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>Email: {email}</CardText>
      </Card>
    </Col>
  )
}

export default UserProfile
