// import React, { Component } from "react";
// import {
//   Button,
//   View,
//   Text,
//   ScrollView,
//   FlatList,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
//   Image,
//   TextInput,
// } from "react-native";


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       myArray:[],
//     };
//   }

//   componentDidMount() {
//     return fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((responsejson) => {
//       console.log('Response is = ',json.locations);

//       this.setState({myArray: responsejson});
//     })
//     // .catch((error) => {
//     //   console.error(error);
//     // });
//   }

//   actSearch(text) {}

//   actionTextBlur() {}

//   render() {
    
//     return (
      
      
      
      
//         <FlatList
//           data={this.state.myArray}
//           renderItem={({ item }) => (
//             <View
//               // style={{
//               //   flex: 1,
//               //   borderRadius: 20,
//               //   paddingRight: 6,
//               //   paddingLeft: 6,
//               //   paddingBottom: 0,
//               //   paddingTop: 3,
//               //   margin: 4,
//               //   backgroundColor: "blue",
//               //   justifyContent: 'center'
//               // }}
//             >
//               <Text
//                 style={{
//                   // color: "white",
//                   // borderTopRightRadius: 20,
//                   // borderTopLeftRadius: 20,
//                   // borderBottomEndRadius: 0,
//                   // borderBottomWidth: 3,

//                   // fontSize: 20,
//                   // padding: 5,
//                   // paddingLeft:10,
//                   // paddingRight: 10,
//                   // margin: 5,
//                   // fontStyle: "italic",
//                 }}
//               >
//                 {this.state.myArray[0].name} is my name.
//               </Text>
              
//             </View>
//           )}
//         />
      
//     );
//   }
// }

// export default App;



import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
// import {Header} from 'react-native-elements';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myArray:[],
    };
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
      console.log('JsonPlaceHolder locations is = ',json);
      this.setState({myArray :json});
    });
    // .catch((error) => {
    //   console.error(error);
    // });
  }

  actSearch(text) {}

  actionTextBlur() {}

  render() {

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "dodgerblue",
          justifyContent: "center",
        }}
      >
      
        <FlatList
          data={this.state.myArray}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                borderRadius: 20,
                paddingRight: 6,
                paddingLeft: 6,
                paddingBottom: 0,
                paddingTop: 3,
                margin: 4,
                backgroundColor: "white",
                fontSize: 20,
                justifyContent: 'center'
              }}
            >
              <View style = {{
                flexDirection:"row",
              }}>
                <View
                style = {{
                  flex: 6,
                }}>
                
                    <Text
                      style={{
                              color: "black",
                              
                              fontSize: 25,
                              padding: 5,
                              paddingLeft:10,
                              paddingRight: 10,
                              
                              fontStyle: "italic",
                            }}
                      >
                        {item.name}
                    </Text>

                    


                    
                    <Text
                    style={{
                      color: "black",
                      fontSize: 20,

                      paddingLeft:10,
                      paddingRight: 10,
                      margin: 2,
                      fontStyle: "italic",
                    }}
                    >
                      {item.username}
                    </Text>

                  </View>

                  <View 
                  style = {{
                    flex: 3,
                    
                    // alignContent: right,
                  }}>
                    <Text  style = {{
                    flex: 2,
                    fontSize: 18,
                    // alignContent: right,
                  }}> Lat : {item.address.geo.lat}</Text>
                    <Text
                    style = {{
                      flex: 2,
                      fontSize: 18,
                      // alignContent: right,
                    }}
                    > Long : {item.address.geo.lng}</Text>
                     <Text
                    style = {{
                      flex: 2,
                      fontSize: 18,
                      // alignContent: right,
                    }}
                    > </Text>
                  </View>


              </View>
                <View 
                  style= {{
                    flexDirection: "row",
                  }}>
                      <Image
                      style = {{
                        flex: 2,
                        height:50,
                        width:50,
                        borderRadius:360,
                      }}
                      source ={{ 
                        uri: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY'
                      }} />

                  <View style= {{
                    flex: 8,
                    flexDirection: "column",
                  }}> 
                  <Text
                  style = {{
                    flex: 2,
                    fontSize: 17,
                    // height:50,
                    // width:50,
                  }}
                  >
                    {item.address.street}
                  </Text>
                  <Text
                  style = {{
                    flex: 2,
                    fontSize: 17,
                    // height:50,
                    // width:50,
                  }}
                  >
                    {item.address.city}
                  </Text>
                  </View>

                  <View>
                      <Text  style = {{
                        flex: 2,
                        fontSize:17,
                      }}>
                          {item.company.name}
                      </Text>
                      
                      <Text  style = {{
                        flex: 2,
                        fontSize:17,
                      }}>
                          {item.website}
                      </Text>
                  </View>
                </View>

              </View>
          )}
        />
      </View>
    );
  }
}

export default App;