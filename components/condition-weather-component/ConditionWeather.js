import { Text, View, ScrollView, StyleSheet } from 'react-native';

const ConditionWeather = ({time, celcium, conditionExpected}) => (
  <View style={styles.conditionExpectedInfoContainer}>
    <Text style={styles.conditionInfoText}>Sunny conditions expected around 13:00</Text>
    <ScrollView horizontal={true}>
      <View style={styles.rightNowWeatherContainer}>
        <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo]}>
          <Text style={styles.infoTimeWeatherContainer}>{time}</Text>
          <Text style={styles.cloudy}>{conditionExpected}</Text>
          <Text style={styles.infoTimeWeatherContainer}>{celcium}</Text>
        </View>
        <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo]}>
          <Text style={styles.infoTimeWeatherContainer}>{time}</Text>
          <Text style={styles.cloudy}>{conditionExpected}</Text>
          <Text style={styles.infoTimeWeatherContainer}>{celcium}</Text>
        </View>
        <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo]}>
          <Text style={styles.infoTimeWeatherContainer}>{time}</Text>
          <Text style={styles.cloudy}>{conditionExpected}</Text>
          <Text style={styles.infoTimeWeatherContainer}>{celcium}</Text>
        </View>
        <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo]}>
          <Text style={styles.infoTimeWeatherContainer}>{time}</Text>
          <Text style={styles.cloudy}>{conditionExpected}</Text>
          <Text style={styles.infoTimeWeatherContainer}>{celcium}</Text>
        </View>
        <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo]}>
          <Text style={styles.infoTimeWeatherContainer}>{time}</Text>
          <Text style={styles.cloudy}>{conditionExpected}</Text>
          <Text style={styles.infoTimeWeatherContainer}>{celcium}</Text>
        </View>
        <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo]}>
          <Text style={styles.infoTimeWeatherContainer}>{time}</Text>
          <Text style={styles.cloudy}>{conditionExpected}</Text>
          <Text style={styles.infoTimeWeatherContainer}>{celcium}</Text>
        </View>
        <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo]}>
          <Text style={styles.infoTimeWeatherContainer}>{time}</Text>
          <Text style={styles.cloudy}>{conditionExpected}</Text>
          <Text style={styles.infoTimeWeatherContainer}>{celcium}</Text>
        </View>
        <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo]}>
          <Text style={styles.infoTimeWeatherContainer}>{time}</Text>
          <Text style={styles.cloudy}>{conditionExpected}</Text>
          <Text style={styles.infoTimeWeatherContainer}>{celcium}</Text>
        </View>
        <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo]}>
          <Text style={styles.infoTimeWeatherContainer}>{time}</Text>
          <Text style={styles.cloudy}>{conditionExpected}</Text>
          <Text style={styles.infoTimeWeatherContainer}>{celcium}</Text>
        </View>
        <View style={[styles.timeWeatherContainer, styles.timeWeatherInfo]}>
          <Text style={styles.infoTimeWeatherContainer}>{time}</Text>
          <Text style={styles.cloudy}>{conditionExpected}</Text>
          <Text style={styles.infoTimeWeatherContainer}>{celcium}</Text>
        </View>
      </View>
    </ScrollView>
  </View>
  )

const styles = StyleSheet.create({
  conditionExpectedInfoContainer: {
    marginTop: 40,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#C7C7CC',
    borderRadius: 20,
    width: '95%'
  },
  cloudy: {
    fontSize: 12
  },
  conditionInfoText: {
    borderBottomColor: '#8E8E93',
    borderBottomWidth: 2,
    paddingBottom: 2,
    textAlign: 'center'
  },
  rightNowWeatherContainer: {
    flexDirection: 'row',
  },
  timeWeatherInfo: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#BDBEC2',
    padding: 5,
  },
  timeWeatherInfoLastChild: {
    marginRight: 0,
  },
  timeWeatherContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '15%',
    marginLeft: 3
  },
  infoTimeWeatherContainer: {
    textAlign: 'center'
  },
})

  export default ConditionWeather;

