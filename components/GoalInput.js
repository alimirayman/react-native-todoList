import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

const GoalInput = ({ onAddAction }) => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        title="Add"
        onPress={() => onAddAction(enteredGoal, setEnteredGoal)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    paddingVertical: 4,
    borderRadius: 4
  }
})

export default GoalInput
