import React from 'react'

const UserContext = React.createContext("Michaell0111")

const UserProvider =  UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}