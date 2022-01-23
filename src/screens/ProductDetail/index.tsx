import Button from '@atoms/Button';
import Text from '@atoms/Text';
import React from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './styles';
const ProductDetail = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text size="large">ProductDetail</Text>
        <Button
          onPress={() => {
            navigation.navigate('Products');
          }}>
          <Text weight="bold">IR AL PRODUCTO</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
