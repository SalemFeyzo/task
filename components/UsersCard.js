import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const UsersCard = ({ item }) => {
  return (
    <View
      style={[
        styles.card,
        item.type === 0
          ? styles.typeZero
          : item.type === 1
          ? styles.typeOne
          : item.type === 2
          ? styles.typeTwo
          : item.type === 3
          ? styles.typeThree
          : item.type === 4
          ? styles.typeFour
          : 'red',
      ]}
    >
      <Text>{item.type}</Text>
      <Text style={styles.content}>{item.fullName}</Text>
      <Text style={styles.content}>{item.email}</Text>
      <View style={styles.wallet}>
        <View style={styles.budget}>
          <Text style={styles.budgetName}>1</Text>
          <Text>{item.wallet1}</Text>
        </View>
        <View style={styles.budget}>
          <Text style={styles.budgetName}>2</Text>
          <Text>{item.wallet2}</Text>
        </View>
        <View style={styles.budget}>
          <Text style={styles.budgetName}>3</Text>
          <Text>{item.wallet3}</Text>
        </View>
      </View>
    </View>
  )
}

export default UsersCard

const styles = StyleSheet.create({
  typeZero: {
    backgroundColor: '#48BEFF',
  },
  typeOne: {
    backgroundColor: '#3DFAFF',
  },
  typeTwo: {
    backgroundColor: '#43C59E',
  },
  typeThree: {
    backgroundColor: '#3D7068',
  },
  typeFour: {
    backgroundColor: '#14453D',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    width: '80%',
    margin: '10px',
    borderWidth: 1,
    borderColor: '#0579ed',
    borderRadius: 5,
  },
  content: {
    padding: '10px',
  },
  wallet: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  budget: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  budgetName: {
    padding: '10px',
    backgroundColor: '#444085',
    borderRadius: 100,
    color: '#ffffff',
    marginBottom: '10px',
  },
})
