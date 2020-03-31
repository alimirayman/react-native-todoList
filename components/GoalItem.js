import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListItem = ({ content }) => {
  return (
    <View style={styles.listItem}>
      <Text>{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ddd',
    borderColor: '#222',
    borderWidth: 1,
    marginVertical: 10
  }
})

export default ListItem
