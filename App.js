import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  ScrollView, SafeAreaView } from 'react-native';
import Topbar from './component/topbar/Topbar';
import Intro from './component/intro/Intro';
import Header from './component/header/Header';
import Contact from './component/contact/Contact';
import Portfolio from './component/portfolio/Portfolio';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
    <View style={styles.container}>
      <Header></Header>
      <Topbar></Topbar>
  <Intro></Intro>
<Portfolio></Portfolio>
      <Contact></Contact>
      <StatusBar />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});
