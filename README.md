# agoraVideoCall

This is a basic VideoCalling App in React-Native using the Agora.IO Video SDK.

### Prerequisites

What things you need to install the software and how to install them
* Node 6.9.1+
* React-Native 0.54.2
* Xcode
* Babel

## Reference Material 
* [AgoraIO/React-Native-SDK](https://github.com/AgoraIO/React-Native-SDK)
* Stack OverfLow
* https://docs.agora.io/en/Video/downloads
* https://github.com/AgoraIO/React-Native-SDK/blob/master/apis.md

## Getting Started
You will need to navigate to [Agora.io.](https://dashboard.agora.io/signin/) to begin.

1. Create a developer account at [Agora.io.](https://dashboard.agora.io/signin/)
2. In the Agora.io Dashboard that appears, click Projects > Project List in the left navigation.
![](https://github.com/nickykwn/agoraVideoCall/blob/master/images/add%20project.png)
3. Copy the App ID from the Dashboard as you will need to use it later

## File Structure
![](https://github.com/nickykwn/agoraVideoCall/blob/master/images/structure.png)

### Build Process
1. First off, to create a react-native application, you will need to open your Command Line/Terminal and type the command
* react-native init "App Name"
This command will create the folder for the application you are about to build. 
2. With the folder created, you will need access the folder you have just created with the command of cd "folder name". Once in the correct directory, you will need to install the node_modules by typing the command of "npm install".
3. Depending on the device you are building on, you will need to choose the correct [Agora Video SDK](https://www.agora.io/en/download/).

#### For Android: 
Un-compress the downloaded SDK package and copy the libs/agora-rtc-sdk.jar file into the android/app/libs folder.
Then copy the libs/arm64-v8a/x86/armeabi-v7a folder into the android/app/src/main/jniLibs folder.
In Android Studio, open the android project folder and connect the Android device.
Sync and run the project.
#### For iOS:
Download the Agora Video SDK.
Un-compress the downloaded SDK package and copy the libs/AograRtcEngineKit.framework file into your ios/"Project Name" folder.
Open RNapi.xcodeproj and connect your iPhone/iPad device.
Apply a valid provisioning profile and run the project.

4. You will need to open your App.js file and place the line AgoraRtcEngine.create('YOUR APP ID') right after the render() to create the Agora Engine with your project ID you have retrieved from your Agora Dashboard. I also declared the line for enabling Audio and Video following the declaration of the Agora Engine. Following these lines, I also have a line of setVideoProfileDetail() which sets the width and height of the video as well as the frameRate and the bitrate. I also set the channel profile after the previous line.
![](https://github.com/nickykwn/agoraVideoCall/blob/master/images/appid.png)

5. I have created a couple of functions before the render section that I will call upon when I create my buttons and the buttons will call upon these functions created when pressed. The functions I have created are leaveCall, disableVideo, JoinChannel, and toggleAudio(). LeaveCall enables user to leave the call they are in. Disablevideo allows the user to turn off their camera. JoinChannel allows user to join a default channel and toggleAudio allows user to mute their microphone. Many of these methods are listed in the Agora React Native documentation and you may call upon them as it fits your desire of use.
![](https://github.com/nickykwn/agoraVideoCall/blob/master/images/methods.png)

6. The AgoraEngine and the AGoraViewRenderer will need to be created as separated components which will be imported in the App.JS file. The AgoraEngine will set the view by calling the AgoraViewRenderer component. Many of these were used as default from the Agora documentation. 

7. While in the App.JS, all the buttons are created and the corresponding functions are connected and called upon with the onPress prop for each button. Each button is also styled within the buttons for React-Native with their colors as well as their style. 
![](https://github.com/nickykwn/agoraVideoCall/blob/master/images/view.png)

## Running on Device
To produce the application an Apple device, the project will need to be opened with Xcode from an Apple computer. When opening xcode, you will need to locate the .xcodeproj file which will be inside the ios folder. While project is opened, you will need to make a few changes to enable the project to be properly installed. A problem I encountered was that there were errors. One error was there was no team chosen in the signing section. I was able to use previous signing certificates for my personal use and chose my name (personal team) which I have used before. Another problem I encountered was an error of "Config.h" was not found. To fix this problem, you can navigate to File>Project Settings>. From there you will see the first subsection allows you to choose the Build System. With much research using google, much of the developer community suggested to change from the default of New Build System (Default) to Legacy Build System. This worked to absolutely perfection and I was able to operate my application on my ipad following the build.
![](https://github.com/nickykwn/agoraVideoCall/blob/master/images/xcode.png)





