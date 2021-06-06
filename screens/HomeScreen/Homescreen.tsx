import * as React from 'react';
import { StyleSheet,Text, View,SafeAreaView ,FlatList} from 'react-native';
import {  } from 'react-native-safe-area-context';
import styles from './styles'
import EditScreenInfo from '../../components/EditScreenInfo';
import {  } from '../../components/Themed';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory'
const firstCategory = categories.items[2];
const HomeScreen=()=> {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
      data={categories.items}
      renderItem={({item})=>
      <HomeCategory category={item}/>
    }
      />
    </SafeAreaView>
  );
}


export default HomeScreen;
