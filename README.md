# react-native-gitple-sdk

> React-Native for Gitple

- v1.2 : Using React Native < 0.59
- v2.0 : Using React Native >= 0.60

## Install(v2.0)
- install gitple sdk 
```bash
yarn add react-native-gitple-sdk
```

- install dependencies
```bash
yarn add react-native-webview@10.1.1 @react-native-community/netinfo
```

- linking native code on iOS
```
npx pod-install
```

## Install(v1.2)
- install gitple sdk 
```bash
npm i -S react-native-gitple-sdk
```

- linking library
```bash
react-native link react-native-gitple-sdk
```

## Usage

```javascript
import { Gitple, GitpleView } from 'react-native-gitple-sdk';

class GitpleChat extends React.Component {
  render() {
    let appCode = 'xxxxxxxxxxx';
    let user = { id: 'xxxxxx', email: 'reactnative@gitple.com', name: 'reactnative' };
    let hideHeader = true;

    Gitple.initialize(appCode);   // initialize gitple

    Gitple.setUser(user).then(() => {   // set user info

      Gitple.unreadCount().then((count) => {  // get unread count
        console.info('Gitple get unreadCount:', count);
      }).catch((error) => {
        console.warn('Gitple get unreadCount failed. error:', error);
      });
      
    }).catch((error) => {
      console.warn('Gitple setUser failed. error:', error);
    });    
    
    return (
      <GitpleView 
        hideHeader={hideHeader} />
    );
  }
}
``` 

## Document
[gitple react-native SDK](http://guide.gitple.io/#/react-native-sdk)

------

Powered by [Gitple](https://gitple.io)