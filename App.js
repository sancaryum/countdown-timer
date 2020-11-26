import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';



const App = () => {
  const [count, setCount] = useState(10);
  
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Count: {count}</Text>
      
      <Button
        title="Start"
        onPress={() => {

          setCount(10);
          var newYearCountdown = setInterval(function () {
            console.log("Değer: " + count);
            //SORUN BURADA SET COUNT METODU COUNT'UN DEĞERİNİ AZALTMIYOR
            setCount(count-1);
            if (count === 0) {
              console.log("Finished");
              clearInterval(newYearCountdown);
            }
          }, 1000);

          
          console.log("bitti kankam")
        }}></Button>

      <Button
        title="Reset"
        onPress={() => {
          
        }}
      ></Button>
    </View>
  );


};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 300,
    marginLeft: 65,
  },
  textStyle: {
    color: 'black',
  },

});

export default App;