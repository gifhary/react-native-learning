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
// found at https://react-redux.js.org/api/connect 
export default connect()(testComponent);
```

### Navigation
This project uses the [react-navigation](https://reactnavigation.org/docs/getting-started) library (as well as required dependencies) for handling all in-app navigation.

The navigation system is made up of Navigators & Screens. Screens should always appear inside a Navigator, and Navigators can be treated as screens for nesting purposes.

In the example below, `RootNavigatorStack` is the name of our navigator, and we declare the navigator with the `<RootNavigatorStack.Navigator>` tag.

```JSX
<RootNavigatorStack.Navigator
    headerMode="none"
    initialRouteName="SplashScreen"
>
    <RootNavigatorStack.Screen
        name="SplashScreen"
        component={SplashScreen}
    />

    <RootNavigatorStack.Screen
        name="AuthenticationNavigator"
        component={AuthenticationNavigator}
    />
</RootNavigatorStack.Navigator>
```

To add Screens to the Navigator, we use the `<RootNavigatorStack.Screen>` tag. In this example the first Screen has the name `SplashScreen`, and the component it renders is of the same name. The name given to a Screen does not need to match the component it renders, but we prefer to keep them matching to avoid confusion.

The second Screen in the Navigator is called `AuthenticationNavigator`, as you can tell by the name, this Screen is actually a nested Navigator. If you were to take a look at what that component looked like, you would find another very similar setup to the example below; it is simply a nested Navigator.

Navigators can be [nested](https://reactnavigation.org/docs/nesting-navigators) as many times as needed, but we try to limit to only 2 or 3 levels deep if necessary as to make logic for navigating between screens easy. If you find yourself needing more than 3 levels of nested Navigators, stop and ask yourself if you can reorganize the hierarchy to make it simpler first.

Below is a typical use case for navigating forward to a new screen, when this component exists as a Screen present in a Navigator (will gain access to `props.navigation`). `NewScreen` is the name of the Screen we want to navigate to, and the second argument is an optional object of paramters that the new Screen will have access to via `props.route.params`.
```typescript
props.navigation.push("NewScreen", {foo: "bar"})
```

Alternatively, if a component that is not a direct Screen of a Navigator is responsible for navigating the user, you can gain access to the navigation api with `useNavigation()`:
```typescript
const navigation = useNavigation();
navigation.push("NewScreen", {foo: "bar"})
```

Take a look [here]() for the documentation on the available navigation actions.
