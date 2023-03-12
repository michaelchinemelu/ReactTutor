import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ContextB extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
        {
          (username) => {
            return <div>Hello {username}</div>
          }
        }
        </UserConsumer>
      </div>
    )
  }
}

export default ContextB