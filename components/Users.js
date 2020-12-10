import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, StyleSheet, Text, ScrollView, Button } from 'react-native'
import { getUserList } from '../store/actions/userActions'
import UsersCard from './UsersCard'
import FilterButtons from './FilterButtons'

export default function Users() {
  const [type, setType] = useState(null)
  const [filterByType, setFilterByType] = useState(null)
  const dispatch = useDispatch()
  const listUser = useSelector((state) => state.listUser)
  const { loading, error, users } = listUser
  const items = users && users.items
  console.log(filterByType)
  useEffect(() => {
    dispatch(getUserList())
  }, [dispatch])

  return (
    <ScrollView>
      <Text style={styles.heading}>Welcome!!</Text>
      <FilterButtons
        items={items}
        setType={setType}
        setFilter={setFilterByType}
      />
      <View style={styles.body}>
        {loading ? (
          <Text>Loading...</Text>
        ) : type ? (
          filterByType.map((item) => {
            return <UsersCard key={item.index} item={item} />
          })
        ) : items ? (
          items.map((item) => {
            return <UsersCard key={item.index} item={item} />
          })
        ) : (
          <Text></Text>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0394fc',
    padding: '30px',
    color: '#ffffff',
    marginBottom: 20,
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10px',
  },
  singleButton: {
    margin: 20,
  },
})
