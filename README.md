# Indonesia Fintech

## How to Install the Project

 1. Download the latest stable version of [Node](https://nodejs.org/en/).  *If in the future a library becomes incompatible, then you can downgrate to anything <= 14.x.x*
 2. `cd` to the `/mobile` directory
 3. run `npm install`

### Additional steps for iOS
*You require xCode installed with Pods.*

 1. `cd` into the `/mobile/ios` directory.
 2. run `pod install`

*Apple updates their Pods and xCode versions quite a bit, so if there is an issue with the `pod install`, you can remove the `/mobile/ios/pods` directory as well as the `Podfile.lock` file. Then re-run the pod install*

## How to Run the Project

### iOS
 1. `cd` to the `/mobile` directory
 2. run `npm start`
 3. open up `IndoFintech.xcworkspace` project in the `/mobile/ios`  directory in xCode.
 4. select a device or simulator in xCode
 5. press the run button

### android
 1. `cd` to the `/mobile` directory
 2. run `npm start`
 3. connect an android device or run an android emulator
 4. in another terminal, `cd` to the `/mobile` directory
 5. run `react-native run-android`
