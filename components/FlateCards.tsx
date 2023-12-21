import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

export default function FlateCards() {
    return (
      <View>
        <View >
          <Text style={styles.heading}>Flat Cards</Text>
        </View>
        <View style={styles.container}>
          <View style={[styles.cardOne, styles.card]}>
            <Text style={styles.cardText}>Red</Text>
          </View>
          <View style={[styles.cardTwo, styles.card]}>
            <Text style={styles.cardText}>Blue</Text>
          </View>
          <View style={[styles.cardThree, styles.card]}>
            <Text style={styles.cardText}>Green</Text>
          </View>
          <View style={[styles.cardThree, styles.card]}>
            <Text style={styles.cardText}>Green</Text>
          </View>        
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 8,
    color: "black",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  card: {
    width: 90,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    borderRadius: 10,
  },
  cardText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  cardOne: {
    backgroundColor: "red",
  },
  cardTwo: {
    backgroundColor: "blue",
  },
  cardThree: {
    backgroundColor: "green",
  },
})