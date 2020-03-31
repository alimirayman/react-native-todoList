import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = (enteredGoal, setEnteredGoal) => {
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ])
    setEnteredGoal('')
  }

  const deleteGoal = id => {
    setCourseGoals(courseGoals.filter(item => item.id != id))
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddAction={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            content={itemData.item.value}
            deleteItem={deleteGoal}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})
