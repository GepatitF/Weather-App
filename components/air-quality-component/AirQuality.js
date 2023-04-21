import { Text, View, StyleSheet } from 'react-native';

const AirQuality = () => (
  <View style={styles.airQualityStatusContainer}>
    <View>
      <Text>Air quality</Text>
      <Text style={styles.airRatingQualityText}>Good</Text>
      <Text>Air quality is better than yetserday at about this time</Text>
    </View>
    <View>
      <Text style={styles.airQualityStatusBar}>'StatusBar'</Text>
    </View>
  </View>
  )

const styles = StyleSheet.create ({
  airQualityStatusContainer: {
    marginTop: 5,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: '#C7C7CC',
    borderRadius: 20,
    width: '95%',
  },
  airRatingQualityText: {
    fontSize: 20
  },
  airQualityStatusBar: {
    paddingTop: 25,
  },
})

export default AirQuality;