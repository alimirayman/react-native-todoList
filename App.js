import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = enteredGoal => {
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ])
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddAction={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem content={itemData.item.value} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})
