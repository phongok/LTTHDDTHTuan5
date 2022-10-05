import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content1}>
        <Image style={styles.content11} source={require('./img/img1.jpg')} />
      </View>
      <View style={styles.content2}>
        <Text style={{ fontSize: 18, paddingTop: 30 }}>Điện thoại Vsmart Joy3 - Hàng chính hãng</Text>
      </View>
      <View style={styles.content3}>


        <View style={styles.content31}>
          <Rating style={{ marginLeft: 20, marginTop: 10 }}
            type='custom'
            ratingCount={5}
            imageSize={28}

          />
          <View><Text style={{ paddingTop: 5, paddingLeft: 20, marginTop: 10 }}>(Xem 828 đánh giá)</Text></View>
        </View>
      </View>
      <View style={styles.content4}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 17, marginLeft: 20 }}>1.790.000 đ</Text>
        </View>
        <View>
          <Text style={{ textDecorationLine: 'line-through', marginLeft: 45 }}>1.790.000 đ</Text>
        </View>
      </View>

      <View style={styles.content5}><Text style={{ color: 'red', fontWeight: 'bold' }}>ĐÂU RẺ HƠN HOÀN TIỀN</Text></View>
      <View style={styles.content6}>

        <View>
        <Picker selectedValue={selectedValue} style={{ height: 50, width: '100%' }} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="4 MÀU-CHỌN MÀU" value="title" />
          <Picker.Item label="Bạc" value="bạc" />
          <Picker.Item label="Đỏ" value="đỏ" />
          <Picker.Item label="Đen" value="đen" />
          <Picker.Item label="Xanh" value="xanh" />
        </Picker>

        </View >
        <View>
        <Button
          title="CHỌN MUA"
          color='red'
          onPress={() => navigation.navigate('Screen2')}
        />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
  },
  content1: {
    flex: 6,
    alignItems: 'center'
  },
  content11: {
    width: 300,
    height: 380,
    marginTop: 20
  },
  content2: {
    flex: 1,
    alignItems: 'center'
  },
  content3: {
    flex: 1,
    flexDirection: 'row'
  },
  content31: {
    flexDirection: 'row',
  },

  content4: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  content5: {
    flex: 1
  },
  content6: {
    flex: 2
  },


  btnChonMua: {
    backgroundColor: 'red',
    marginTop: 30
  }
});
