import React from 'react'
import { Text, View, TouchableOpacity, Button, ImageBackground, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

const { height } = Dimensions.get("window");

const width = height * 3/4

import Axios from 'axios';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    on: true,
    uri: undefined,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({
        quality: 0.5,
        base64: true
      });
      this.setState({on: false, uri: photo.uri})
      console.log(photo.base64.length)

      const image = photo.base64
      const data = new FormData();
      data.append("image_data", image);

      Axios({
        method: 'post',
        url: 'https://split-awesome.herokuapp.com/snap',
        data: data,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(resp => {
            console.log('success')
            console.log(resp.data);
        })
        .catch(resp => {
            console.log(resp.data);
        });
    }
  };

  takeAnother = () => {
    this.setState({on: true, uri: undefined})
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>

          {this.state.on && (
            <Camera 
              style={{ flex: 1, width: width, height: height }} 
              type={this.state.type}
              ref={ref => {
                this.camera = ref;
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type:
                        this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                </TouchableOpacity>
                <View style={{flex: 0.6, alignSelf: 'flex-end'}}>
                  <View style={{width: '20%', alignSelf: 'center'}}>
                    <Button title="Snap" onPress={this.snap} />

                  </View>
                </View>
              </View>
            </Camera>
          )}

          {this.state.uri && (
              <ImageBackground 
              style={{ flex: 1, width: width, height: height }} 
              source={{uri: this.state.uri}}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                    style={{
                      width:125,
                      height:30,
                      backgroundColor:'blue',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      borderRadius: 5,
                      position:'absolute',
                      bottom:20,
                    }}
                    onPress={this.takeAnother}
                >
                  <Text style={{ fontSize: 18, color: 'white' }}> Take Another </Text>
                </TouchableOpacity>
                
              </View>
            </ImageBackground>    
          )}

        </View>
      );
    }
  }
}