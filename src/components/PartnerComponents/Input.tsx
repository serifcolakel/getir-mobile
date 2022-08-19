import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Row from '../Row';
import { theme } from '../../utils/theme';

type Props = {
  title?: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  textAlign?: 'left' | 'right' | 'center';
  prefix?: string;
  rightIcon?: React.ReactNode;
  titleInfoButton?: React.ReactNode;
  editable?: boolean;
  isError?: boolean;
  errorMessage?: string | null;
  width?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
};

const Input = ({
  title,
  maxLength = 45,
  value,
  textAlign = 'center',
  onChange,
  onChangeText,
  onPress,
  prefix,
  rightIcon,
  titleInfoButton,
  editable = true,
  isError = false,
  errorMessage = '',
  placeholder = '',
  width = '100%',
  keyboardType = 'numeric',
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        width: width,
        paddingBottom: title === undefined ? 0 : 10,

        position: 'relative',
      }}>
      <Row alignItems="center">
        {/* {title && (
            <CustomText
              label={title}
              style={{
                fontSize: 14,
                color: theme.colors.gray,
                paddingHorizontal: 5,
                fontFamily: theme.fonts.bold,
              }}
            />
          )} */}
        {titleInfoButton}
      </Row>
      <TextInput
        onChangeText={onChangeText}
        editable={editable}
        maxLength={maxLength}
        onChange={onChange}
        onEndEditing={() => {
          console.log('onEndEditing');
        }}
        placeholder={placeholder}
        style={{
          borderWidth: 1,
          borderRadius: 5,
          borderColor: theme.colors.getirPrimary500,
          backgroundColor: theme.colors.white,
          paddingLeft: 20,
          paddingRight:
            prefix === undefined && rightIcon === undefined ? 20 : 30,
          color: editable ? theme.colors.black : theme.colors.gray,
          marginVertical: 10,
          height: 45,
          // fontFamily: theme.fonts.regular,
        }}
        value={value}
        textAlign={textAlign}
        keyboardType={keyboardType}
      />
      {/* {prefix !== undefined && (
        <CustomText
          label={prefix}
          style={{
            position: 'absolute',
            top: title === undefined ? 24 : 41,
            fontSize: 14,
            //fontFamily: theme.fonts.regular,
            right: prefix === undefined ? 0 : 10,
            color: editable ? theme.colors.black : theme.colors.gray,
          }}
        />
      )} */}
      <View
        style={{
          position: 'absolute',
          top: title === undefined ? 20 : 40,
          right: 10,
        }}>
        {rightIcon}
      </View>
      {/* {isError && errorMessage !== null && (
        <CustomText
          label={errorMessage}
          style={{
            color: theme.colors.red,
            // fontFamily: theme.fonts.regular,
            fontSize: 13,

            textAlign: 'center',
          }}
        />
      )} */}
    </TouchableOpacity>
  );
};

export default Input;
