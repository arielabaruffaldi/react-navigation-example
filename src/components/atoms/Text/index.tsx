import React, {ReactNode} from 'react';
import {Text as TextNative, TextStyle} from 'react-native';
import styles from './styles';

interface TextProps {
  style?: TextStyle | TextStyle[];
  size?: 'small' | 'medium' | 'large';
  weight?: 'light' | 'regular' | 'semiBold' | 'bold';
  color?: 'black' | 'white' | 'gray';
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
}

const Text = ({
  style,
  size = 'small',
  weight = 'regular',
  color = 'black',
  align = 'center',
  children,
}: TextProps) => {
  return (
    <TextNative
      style={[
        styles[size],
        styles[weight],
        styles[color],
        styles.default,
        styles[align],
        style,
      ]}>
      {children}
    </TextNative>
  );
};

export default Text;
