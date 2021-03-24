# indonesia-fintech

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

## Redux Explanation
[redux](https://redux.js.org/) is a libary that allows a persisted state around the application. There are many plugins that work with it that you may want to use in the future such as [redux-form](https://redux-form.com/8.3.0/). But for the purpose of this prototype we implemented a simple store to keep track of loading.

### Loading Manager
There exists two function called `incrementLoading()` and `decrementLoading()` in `/mobile/src/redux/meta/MetaActions.ts`. These two function are used to keep track of asyncronous actions. If when working in the project in the future you need the user to wait for an API or anything else that takes time you can call `props.dispatch(incrementLoading())` or `props.dispatch(decrementLoading())` to control the loading manager in `mobile/src/components/LoadingManager.tsx`. The best practice is before an async action to call the `incrementLoading()` and after that action is finished to call `decrementLoading()`.

An example of this would be...
```typescript
async function apiCall() {
  props.dispatch(incrementLoading());
  try {
    await asyncApiCall();
  catch (err) {
    // handle error
  }
  props.dispatch(decrementLoading());
}
```

### Connecting
An important concept of redux is connecting. In order to get access to the `props.dispatch` function you must connect your component using redux. An example of this is below...

```typescript
const testComponent: React.FC = (props) => {

  async function apiCall() {
    props.dispatch(incrementLoading());
    try {
      await asyncApiCall();
    catch (err) {
      // handle error
    }
    props.dispatch(decrementLoading());
  }

  return (
    // write your tsx
   )
}

// this is the important part here, this will wrap you component and pass in the
// dispatch to the props. Further documentation on the connect function can be
// found a thttps://react-redux.js.org/api/connect 
export default connect()(testComponent)
```
