import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Container, Nav, Row } from 'reactstrap'

import userActions from '../../redux/actions/user.actions.js'

import UserProfile from '../../components/User/UserProfile.js'

class Profile extends Component {

  async componentDidMount() {
    const { getUserProfile } = this.props
    await getUserProfile()
  }

  render() {
    const { user } = this.props
    return (
      <div className="dashboard-page">
        <Helmet>
          <title>Bonsai - User</title>
        </Helmet>
        <Container>
          <h1>User Profile</h1>
          <Row>
            <UserProfile user={user} />
          </Row>
        </Container>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getUserProfile: () => dispatch(userActions.getUserProfile())
})

const mapStateToProps = state => ({
  user: state.userReducer.user,
})


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
