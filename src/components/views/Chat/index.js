import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground,FlatList , AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ChatLineHolder } from './ChatLineHolder';

export default class Chat extends Component {
  render() {
    return (
      <View>
          <View >
              <ImageBackground  source={require('../../../img/background.jpg')}
                               style={{ width: '100%', height: '100%',justifyContent: 'space-around'}} >
                  <FlatList />

              </ImageBackground>
              <View style={{ flex: 1 / 10 }} >
                  <View style={{
                      flexDirection: 'row', backgroundColor: '#FFF',
                      width: '100%', height: '100%', justifyContent: 'space-around', alignItems: 'center', marginLeft: 2
                  }}  >
                      <View style={{flex : 9/10}} >
                          <TextInput placeholder="Nhập nội dung chat"
                                     style={{ height: 100, fontSize: 18 }} />
                      </View>
                      <View style={{flex : 1/10}} >
                          <TouchableOpacity >
                              <Text style={{ color: '#0099ff', fontSize: 14, marginRight: 15 }} >
                                  Gửi
                              </Text>
                          </TouchableOpacity>
                      </View>
                  </View>
              </View>
          </View>
      </View>
    )
  }
}