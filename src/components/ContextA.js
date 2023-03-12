import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ContextA extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {
            (username) => {
              return(
                <div>
                  Hello this {username}, hp you are still riding on?
                </div>
              )
            }
          }
        </UserConsumer>
      </div>
    )
  }
}

export default ContextA