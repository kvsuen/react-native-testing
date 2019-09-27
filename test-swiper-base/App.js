import React from 'react';
import { AppLoading } from 'expo';

import {
  Container,
  Text,
  Header,
  Content,
  Card,
  CardItem,
  Body
} from 'native-base';

import { StyleSheet } from 'react-native'

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import Swiper from 'react-native-swiper';

import CameraExample from './CameraExample';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Swiper style={styles.wrapper} loop={false} index={1}>
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>Dashboard/Profile</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      <Container>
        <Header />
        <Content>
          <CameraExample />
        </Content>
      </Container>
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>Find Room</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})