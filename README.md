# agoraVideoCall

This is a basic VideoCalling App in React-Native using the Agora.IO Video SDK.

### Prerequisites

What things you need to install the software and how to install them
⋅⋅* Node 6.9.1+
⋅⋅* React-Native 0.54.2
⋅⋅* Xcode
⋅⋅* Babel

## Reference Material 
⋅⋅* [AgoraIO/React-Native-SDK](https://github.com/AgoraIO/React-Native-SDK).
⋅⋅* Stack OverfLow.
⋅⋅* https://docs.agora.io/en/Video/downloads.

## Getting Started
You will need to navigate to [Agora.io.](https://dashboard.agora.io/signin/) to begin.

1. Create a developer account at [Agora.io.](https://dashboard.agora.io/signin/)
2. In the Agora.io Dashboard that appears, click Projects > Project List in the left navigation.
3. Copy the App ID from the Dashboard as you will need to use it later

### Build Process
1. First off, to create a react-native application, you will need to open your Command Line/Terminal and type the command
⋅⋅* react-native init "App Name"
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





