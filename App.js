import React, {Component} from 'react';
import {
  Platform,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  findNodeHandle,
  NativeEventEmitter,
  NativeModules,
  UIManager,
  DeviceEventEmitter
} from 'react-native';
import AgoraRtcEngine from './components/AgoraRtcEngine';
import AgoraViewRenderer from './components/AgoraViewRenderer';

const agoraKitEmitter = new NativeEventEmitter(AgoraRtcEngine);


export default class App extends Component {

  _joinChannel() {
    AgoraRtcEngine.setLocalVideoView(this._localView, AgoraRtcEngine.AgoraVideoRenderModeFit);
    AgoraRtcEngine.setVideoProfile(AgoraRtcEngine.AgoraVideoProfileDEFAULT, false);
    AgoraRtcEngine.startPreview();
    AgoraRtcEngine.joinChannel(null, "rnchannel01", "React Native for Agora RTC SDK", 0);
  }

  leaveCall() {
    AgoraRtcEngine.stopPreview();
    AgoraRtcEngine.leaveChannel();
  }

  disableVideo() {
    AgoraRtcEngine.disableVideo();
  }

  toggleAudio() {
    AgoraRtcEngine.muteLocalAudioStream(muted);
  }

  render() {

    AgoraRtcEngine.createEngine('2169366d339f4a2a82f225fe80b5d602');
    AgoraRtcEngine.enableVideo();
    AgoraRtcEngine.enableAudio();
    AgoraRtcEngine.setVideoProfileDetail(360, 640, 15, 300);
    AgoraRtcEngine.setChannelProfile(AgoraRtcEngine.AgoraChannelProfileCommunication);

    return (
      <View style={styles.container}>
        <AgoraViewRenderer
          ref={component => this._localView = component}
          style = {{width: 360, height: 240}}
        />

        <AgoraViewRenderer
          ref={component => this._remoteView = component}
          style = {{width: 360, height: 240}}
        />

        <View style={{flexDirection: 'row'}}>
          <Button style = {{flex: 1}}
            onPress={this.joinChannel.bind(this)}
            title="Join Channel"
            style={{width:180, float:"left", backgroundColor:"rgb(0,0,0)"}}
            color="#FF0000"
          />
          <Button
            onPress={this.toggleAudio.bind(this)}
            title="Mute"
            color="#FF0000"
          />
          <Button
            onPress={this.disableVideo.bind(this)}
            title="Turn off Camera"
            color="#FF0000"
          />
          <Button
            onPress={this.leaveCalll.bind(this)}
            title="Leave Call"
            color="#FF0000"
          />
        </View>
      </View>
    );
  }

// Aogra CallBack
  remoteDidJoineChannelNoti = agoraKitEmitter.addListener(
    'RemoteDidJoinedChannel',
    (notify) => {
      AgoraRtcEngine.setRemoteVideoView(this._remoteView, notify.uid, AgoraRtcEngine.AgoraVideoRenderModeFit);
    }
  );

  componentWillUnmount() {
    remoteDidJoineChannelNoti.remove()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
