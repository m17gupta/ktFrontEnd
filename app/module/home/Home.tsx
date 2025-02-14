import { View, Text, Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Seal_of_Uttar_Pradesh.svg/200px-Seal_of_Uttar_Pradesh.svg.png' }}
        style={{ width: 200, height: 200, alignSelf: "center", marginTop: 16 }}
      />
      <Text 
       style={{ fontSize: 15, fontWeight: "bold", textAlign: "center", marginBottom: 16, marginTop: 20 }}
      >Up State Employer Personal Details</Text>
    </View>
  )
}

export default Home