import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'

const GoalInput = ({ onAddAction, isVisible = false, changeVisibility }) => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.actionsStacck}>
          <View style={styles.actionButtons}>
            <Button
              title="Cancel"
              color="red"
              onPress={() => changeVisibility(false)}
            />
          </View>
          <View style={styles.actionButtons}>
            <Button
              title="Add"
              onPress={() => onAddAction(enteredGoal, setEnteredGoal)}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4
  },
  actionsStacck: {
    paddingTop: 12,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  actionButtons: {
    width: '40%',
    backgroundColor: '#f6f6f6'
  }
})

export default GoalInput
