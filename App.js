import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, FlatList, ScrollView } from 'react-native';
import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function App() {
  const [Medicine, setMedicine] = useState(
    [
      {id:1, name :'Amoxicillin',price : "$199.99" ,start : 4.9, description: "Used to treat infection such as respiratory tract infections , ear ...",image: require("./assets/data/anh04.png")},
      {id:2, name :'Paracetamol',price : "$199.99" ,start : 4.9, description: "Used to treat infection such as respiratory tract infections , ear ...",image: require("./assets/data/anh04.png")},
      {id:3, name :'',price : "" ,start : "", description: "",image: require("./assets/data/anh04.png")},
      {id:4, name :'',price : "" ,start : "", description: "",image: require("./assets/data/anh04.png")}
    ]);
    
    const [medicineAPI, setMedicineAPI] =useState([]);
  
    useEffect(() => {
      getMedicine();
    },[]);
  
    const getMedicine = async () =>{
      console.log("getMedicine function called");
      try{
        const res = await axios.get("https://6459b10395624ceb21ed9e1c.mockapi.io/medicine");
        console.log("Data fetched:", res.data);
        if(Array.isArray(res.data)){
          setMedicineAPI(res.data);
        }else{
          console.log("Du lieu ko phai la mang:", res.data);
        }
      }catch(error){
        console.log("API fetch error:", error);
      }
    };
  }
  
  return(
    <SafeAreaView  style={{flex : 1}}>
    <ScrollView>
    <View >
      <View style ={{ flexDirection: 'row'}}>
        
        <View
        style ={{
          flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 10,
                marginLeft: 5,
                justifyContent: 'space-between',
                flex:1
        }}
        >
        <TextInput placeholder="Medicine, Hospital, Doctor, etc" style={{ paddingLeft: 20, color: 'gray', flex: 1, height: '100%' }} />
        <Image source = {require("./assets/data/anh01.png")} style ={{ borderRadius: 20}}/>
        </View>

        <Image
       style={{ width: 40, height: 40, borderRadius: 20 , backgroundColor:"blue"}}
              source={require("./assets/data/anh02.png")}
            />

      </View>

      {/* <View style = {{ flexDirection: "row", justifyContent: 'space-between' }}>
        <View style = {{ flexDirection: "row"}}>
          <Image source ={require("./assets/baiTH4/personicon.png")} style={{ width: 40, height: 40, borderRadius: 20 }} />
          <View>
            <Text style ={{ fontWeight: 'bold', color: 'white' }}>WelCome</Text>
            <Text style={{ color: 'white' }}>Donna Stroupe</Text>
          </View>
        </View>
        <View>
        <Image source= {require("./assets/baiTH4/ringicon.png")} style={{ width: 40, height: 40 }} />
        </View>
      </View> */}
    </View>
    </ScrollView>
    </SafeAreaView>
  )

    

























