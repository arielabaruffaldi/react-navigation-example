import Button from '@atoms/Button';
import Text from '@atoms/Text';
import React from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './styles';
const Products = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text size="large">Products</Text>
        <Button
          onPress={() => {
            navigation.navigate('ProductDetail');
          }}>
          <Text weight="bold">IR A DETALLE</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Products;
