import React from 'react';
import {SafeAreaView, View} from 'react-native';

import Button from '@atoms/Button';
import Text from '@atoms/Text';

import styles from './styles';
const Categories = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text size="large">Categories</Text>
        <Button
          onPress={() => {
            navigation.navigate('Products');
          }}>
          <Text weight="bold">IR A PRODUCTOS</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Categories;
