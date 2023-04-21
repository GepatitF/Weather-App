import { FlatList, StyleSheet, View } from 'react-native';

import MainWeather from './components/main-weather-component/MainWeather'
import ConditionWeather from './components/condition-weather-component/ConditionWeather';
import Forecast from './components/forecast-weather-component/ForecastWeather';
import AirQuality from './components/air-quality-component/AirQuality';
import Precipitation from './components/precipitation-component/Precipitation';
import InfoPanel from './components/info-panel-component/InfoPanel';

export default function App() {

  const weatherData = [
    {
      city: 'Saint-Petersburg',
      celcium: '18°C',
      condition: 'Partly cloudy',
      conditionExpected: 'Cloudy',
      time: 'Now',
      minCelcium: '14°C',
      maxCelcium: '21°C'
    },
  ]
  
  return (
    <View style={styles.container}>
      <FlatList style={styles.flatListContainer} data={weatherData} renderItem={({ item }) => (
        <View style={styles.container}>
          <MainWeather city={item.city} weatherCondition={item.condition} celcium={item.celcium} />
          <ConditionWeather time={item.time} conditionExpected={item.conditionExpected} celcium={item.celcium} />
          <Forecast minCelcium={item.minCelcium} maxCelcium={item.maxCelcium}/>
          <AirQuality/>
          <Precipitation/>
          <InfoPanel/>
          <InfoPanel/>
          <InfoPanel/>
          <InfoPanel/>
        </View>
      )} > 
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 40
  },
  flatListContainer: {
    width: '100%',
  },
  PlaceInfoStyle: {
    fontSize: 20,
    marginTop: 60,
  },
  celciumPlaceInfo: {
    fontSize: 35,
  },
  weatherCondition: {
    fontSize: 15,
  },
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
  weekWeatherContainer: {
    marginTop: 5,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#C7C7CC',
    borderRadius: 20,
    width: '95%',
    flexDirection: 'column'
  },
  weekWeatherInfo: {
    borderBottomColor: '#8E8E93',
    borderBottomWidth: 2,
    paddingBottom: 2,
    textAlign: 'left'
  },
  weekWeatherStatusContainer: {
    marginTop: 7,
    borderRadius: 5,
    backgroundColor: '#BDBEC2',
    paddingLeft: 10,
    paddingBottom: 5,
  },
  weekWeatherStatus: {
    marginTop: 5,
  },
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
  airQualityStatusBar: {
    paddingTop: 25,
  },
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
  airRatingQualityText: {
    fontSize: 20
  },
  panelContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '95%',
  },
  panel: {
    marginTop: 5,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    width: '49%',
    backgroundColor: '#C7C7CC',
    borderRadius: 20,
  },
  panelFirstChild: {
    marginRight: 5
  },
});
