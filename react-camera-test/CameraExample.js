import React from 'react'
import { Text, View, TouchableOpacity, Button, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

import Axios from 'axios';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    on: true,
    uri: undefined
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
      await data.append("image_data", image);
      console.log(data)

      Axios({
        method: 'post',
        url: 'https://1b4acb65.ngrok.io/image',
        data: data,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
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
            style={{ flex: 1 }} 
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
            ratio={"4:3"}
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
                  <Button title="Snap" onPress={this.snap} />
                </TouchableOpacity>
              </View>
            </Camera>
          )}

          {this.state.uri && (
            <View style= {{flex: 1}}>
              <Image style={{flex: 1}} source={{uri: this.state.uri}}/>
              <Button title="Take Another" onPress={this.takeAnother} />
            </View>      
          )}

        </View>
      );
    }
  }
}