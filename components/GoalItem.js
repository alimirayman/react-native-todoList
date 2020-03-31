import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ListItem = ({ id, content, deleteItem }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => deleteItem(id)}>
      <View style={styles.listItem}>
        <Text>{content}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderColor: '#222',
    borderWidth: 1,
    marginTop: 12,
    borderRadius: 4
  }
})

export default ListItem
