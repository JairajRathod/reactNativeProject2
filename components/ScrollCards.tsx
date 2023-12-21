import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ScrollCards() {
  return (
    <View>
        <View >
          <Text style={styles.heading}>Scroll Cards</Text>
        </View>
        <ScrollView horizontal>
            <View style={styles.container}>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text style={styles.cardText}>Box 1</Text>
                </View>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text style={styles.cardText}>Box 2</Text>
                </View>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text style={styles.cardText}>Box 3</Text>
                </View>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text style={styles.cardText}>Box 4</Text>
                </View>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text style={styles.cardText}>Box 5</Text>
                </View>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text style={styles.cardText}>Box 6</Text>
                </View>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text style={styles.cardText}>Box 7</Text>
                </View>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text style={styles.cardText}>Box 8</Text>
                </View>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text style={styles.cardText}>Box 9</Text>
                </View>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text style={styles.cardText}>Box 10</Text>
                </View>
            </View>
        </ScrollView>
        
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
        margin: 8,
        display: "flex",
        flexDirection: "row"
    },
    card: {
        width: 100,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 4,
    },
    elevatedCards: {
        backgroundColor: "gray",
        elevation: 5,
        shadowColor: "black",
        shadowOffset: {
            width: 5,
            height: 5,
        }
    },
    cardText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },

})