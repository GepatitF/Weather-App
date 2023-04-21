import { Text, View, Image, StyleSheet } from 'react-native';

const Precipitation = () => (
  <View style={styles.precipitationContainer}>
    <Text>Precipitation</Text>
    <View style={styles.precipitationImageContainer}>
      <Image style={styles.precipitationImage} source={require('../images/location.png')} />
    </View>
  </View>
)

const styles = StyleSheet.create ({
  precipitationContainer: {
    marginTop: 5,
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: '#C7C7CC',
    borderRadius: 20,
    width: '95%',
  },
  precipitationImageContainer: {
    alignItems: 'center'
  },
  precipitationImage: {
    borderRadius: 20,
    marginTop: 10,
  },
})

export default Precipitation;