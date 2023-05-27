import { Text, View, StyleSheet } from "react-native"

const Header = ({ name, temp, minTemp, maxTemp, condition }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.textLocation}>{name}</Text>
      
      <View style={styles.degreeContainer}>
        <Text style={styles.degreeContainer.text}>{temp}</Text>
        <Text style={[styles.degreeContainer.text, styles.degreeContainer.degree]}>&deg;</Text>
      </View>
      
      <Text style={styles.textCondition}>{condition}</Text>

      <View style={styles.tempRange}>
        <View style={styles.degreeContainer}>
          <Text style={styles.tempRange.text}>L: {minTemp}</Text>
          <Text style={styles.tempRange.degree}>&deg;</Text>
        </View>
        <View style={styles.degreeContainer}>
          <Text style={styles.tempRange.text}>H: {maxTemp}</Text>
          <Text style={[styles.tempRange.degree]}>&deg;</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  textLocation: {
    fontSize: 24,
    textTransform: 'capitalize',
  },
  degreeContainer: {
    position: 'relative',
    text: {
      fontSize: 64,
      fontWeight: '300'
    },
    degree: {
      position: 'absolute',
      right: -20,
      top: -7,
    }
  },
  textCondition: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16
  },
  tempRange: {
    flexDirection: 'row',
    gap: 10,
    text: {
      fontWeight: 'bold'
    },
    degree: {
      position: 'absolute',
      right: -5
    }
  }
})

export default Header