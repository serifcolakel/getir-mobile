import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
  TextInputEndEditingEventData,
} from 'react-native';
import React from 'react';
import Row from '../Row';
import { theme } from '../../utils/theme';
import CustomText from './CustomText';

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
  leftIcon?: React.ReactNode;
  titleInfoButton?: React.ReactNode;
  editable?: boolean;
  isError?: boolean;
  onEditingEnd?: (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => void;
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
  leftIcon,
  titleInfoButton,
  editable = true,
  isError = false,
  errorMessage = '',
  placeholder = '',
  width = '100%',
  keyboardType = 'default',
  onEditingEnd = () => {},
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
        onEndEditing={onEditingEnd}
        placeholder={placeholder}
        style={{
          borderWidth: 1,
          borderRadius: 5,
          borderColor: theme.colors.gray4,
          backgroundColor: theme.colors.white,
          paddingLeft: leftIcon === undefined ? 20 : 45,
          paddingRight:
            prefix === undefined && rightIcon === undefined ? 20 : 30,
          color: editable ? theme.colors.black : theme.colors.gray,
          marginVertical: 10,
          height: 45,
          fontFamily: theme.fonts.regular,
        }}
        value={value}
        textAlign={textAlign}
        keyboardType={keyboardType}
      />
      {prefix !== undefined && (
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
      )}
      <View
        style={{
          position: 'absolute',
          top: title === undefined ? 20 : 40,
          right: 10,
        }}>
        {rightIcon}
      </View>
      <View
        style={{
          position: 'absolute',
          top: title === undefined ? 20 : 40,
          left: 10,
        }}>
        {leftIcon}
      </View>
      {isError && errorMessage !== null && (
        <CustomText
          label={errorMessage}
          style={{
            color: theme.colors.red,
            // fontFamily: theme.fonts.regular,
            fontSize: 13,

            textAlign: 'center',
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default Input;
