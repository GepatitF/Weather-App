import { Text, View, StyleSheet } from 'react-native';

const InfoPanel = () => (
  <View style={styles.panelContainer}>
    <View style={[styles.panel, styles.panelFirstChild]}>
      <Text>Index</Text>
      <Text>1</Text>
      <Text>Low</Text>
      <Text>'StatusBar'</Text>
      <Text>Use sun protection</Text>
      <Text>unilt 18:00</Text>
    </View>
    <View style={styles.panel}>
      <Text>Sunrise</Text>
      <Text>5:46 AM</Text>
      <Text>'StatusBar'</Text>
      <Text>Sunrise: 07:32</Text>
    </View>
 </View>
)

const styles = StyleSheet.styles ({
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
})

export default InfoPanel;