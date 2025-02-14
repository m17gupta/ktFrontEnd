import { View, Text } from 'react-native'
import React from 'react'
import LoginHome from '../module/login/LoginHome'

export default function login () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <LoginHome/>
    </View>
  )
}

