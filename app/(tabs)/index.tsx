import { StyleSheet } from 'react-native';

import { WebView } from '@/components/Bridge';

export default function GuidesScreen() {
  return (
    <WebView
      source={{
        uri: 'http://localhost:5173/tab1web'
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
