import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const FilterButtons = ({ items, setType, setFilter }) => {
  const filterTypes = (type) => {
    setType(type)
    const filteredItems = items.filter((item) => item.type == type)
    setFilter(filteredItems)
  }
  return (
    <View style={styles.buttons}>
      <Button
        style={styles.singleButton}
        title='Type 0'
        color='#841584'
        onPress={() => filterTypes('0')}
      />
      <Button
        style={styles.singleButton}
        title='Type 1'
        color='#841584'
        onPress={() => filterTypes('1')}
      />
      <Button
        style={styles.singleButton}
        title='Type 2'
        color='#841584'
        onPress={() => filterTypes('2')}
      />
      <Button
        style={styles.singleButton}
        title='Type 3'
        color='#841584'
        onPress={() => filterTypes('3')}
      />
      <Button
        style={styles.singleButton}
        title='Type 4'
        color='#841584'
        onPress={() => filterTypes('4')}
      />
    </View>
  )
}

export default FilterButtons

const styles = StyleSheet.create({
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10px',
  },
  singleButton: {
    margin: '20px',
  },
})
