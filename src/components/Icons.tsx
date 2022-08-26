import React from 'react';
import {
  Animated,
  Easing,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Svg, Path, G, Circle, Rect } from 'react-native-svg';
import { theme } from '../utils/theme';
export type IconProps = {
  color?: string;
  size?: number;
  onPress?: () => void;
  rotate?: number;
  time?: number;
  stopAnimation?: boolean;
  style?: StyleProp<ViewStyle>;
};
export const HomeIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 35,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      {/* <Svg width={size} height={size} viewBox="0 1 511 511.999" fill={color}>
        <Path d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 01-12.117 5.024H442.62c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 00-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 01256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0" />
      </Svg> */}
      <Svg
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <Path
          fill={color}
          d="m2 13l9.293-9.293a1 1 0 0 1 1.414 0L22 13h-2v8a1 1 0 0 1-1 1h-5v-7h-4v7H5a1 1 0 0 1-1-1v-8H2Z"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export const CalendarIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 35,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Svg
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <G
          //fill={color}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2">
          <Rect width="20" height="18" x="2" y="4" rx="4" />
          <Path d="M8 2v4m8-4v4M2 10h20" />
        </G>
      </Svg>
      {/* <Svg
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <Path
          fill={color}
          d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V2.975q0-.425.287-.7Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V2.975q0-.425.288-.7Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10Z"
        />
      </Svg> */}
    </TouchableOpacity>
  );
};
export const RightArrowIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 35,
  onPress,
  rotate = 0,
}) => {
  return (
    <TouchableOpacity
      style={{
        transform: [{ rotate: `${rotate}deg` }],
      }}
      activeOpacity={0.8}
      onPress={onPress}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">
        <G
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none">
          <Path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164 -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978 c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168 -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193 1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173 -1230 1193 -72 26 -136 26 -207 -1z" />
        </G>
      </Svg>
    </TouchableOpacity>
  );
};
export const SpeedIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 35,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Svg
        aria-hidden="true"
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <Path
          fill={color}
          d="M19.46 10a1 1 0 0 0-.07 1a7.55 7.55 0 0 1 .52 1.81a8 8 0 0 1-.69 4.73a1 1 0 0 1-.89.53H5.68a1 1 0 0 1-.89-.54A8 8 0 0 1 13 6.06a7.69 7.69 0 0 1 2.11.56a1 1 0 0 0 1-.07a1 1 0 0 0-.17-1.76A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1a10 10 0 0 0 .55-8.89a1 1 0 0 0-1.75-.11z"
        />
        <Path fill={color} d="M10.59 12.59a2 2 0 0 0 2.83 2.83l5.66-8.49z" />
      </Svg>
    </TouchableOpacity>
  );
};
export const InfoIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 12,
  onPress,
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      onPress={onPress}>
      <Circle cx="6" cy="6" r="5.5" stroke={color} />
      <Path
        d="M5.00889 3.917C5.00889 4.05138 5.54222 4.083 5.73778 4.083C5.88889 4.083 6.01333 4.01186 6.01333 3.86957V3.21344C6.01333 3.07115 5.88889 3 5.73778 3C5.54222 3 5.00889 3.03162 5.00889 3.16601V3.917ZM6.78667 8.11462C6.63556 8.13834 6.49333 8.16996 6.36889 8.16996C6.05778 8.16996 6.00444 8.01186 6.00444 7.71937V4.83399C6.00444 4.70751 5.88 4.64427 5.73778 4.64427C5.56889 4.64427 5 4.66008 5 4.79447V7.88538C5 8.71542 5.42667 9 6.11111 9C6.36889 9 7 8.99209 7 8.64427C7 8.50988 6.91111 8.11462 6.78667 8.11462Z"
        fill={color}
      />
    </Svg>
  );
};
export const LocationIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 24,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Svg
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <Path
          fill={color}
          d="M12 21a29.776 29.776 0 0 1-3.5-3.531C6.9 15.558 5 12.712 5 10a7 7 0 0 1 11.952-4.951A6.955 6.955 0 0 1 19 10c0 2.712-1.9 5.558-3.5 7.469A29.777 29.777 0 0 1 12 21Zm0-16a5.006 5.006 0 0 0-5 5c0 1.166.527 3.185 3.035 6.186A27.93 27.93 0 0 0 12 18.3a28.121 28.121 0 0 0 1.966-2.111C16.473 13.184 17 11.165 17 10a5.006 5.006 0 0 0-5-5Zm0 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"
        />
      </Svg>
    </TouchableOpacity>
  );
};
export const LoadingIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 24,
  onPress,
  time = 100,
  stopAnimation,
}) => {
  const spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      //easing: Easing.inOut(Easing.ease),
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();
  if (stopAnimation) {
    setTimeout(() => {
      spinValue.stopAnimation();
    }, time);
  }
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <Animated.View
      style={{
        transform: [{ rotate: spin }],
      }}>
      <Svg
        onPress={onPress}
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1024 1024">
        <Path
          fill={color}
          d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
        />
      </Svg>
    </Animated.View>
  );
};
export const CloseIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 24,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Svg
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1024 1024">
        <Path
          fill={color}
          d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512L353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336L616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512L670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
        />
      </Svg>
    </TouchableOpacity>
  );
};
export const QuestionIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 24,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Svg
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1024 1024">
        <Path
          fill={color}
          d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512.017-229.216 512.017-512C1024.017 229.232 794.785 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448.017 200.977 448.017 448S759.025 961.009 512 961.009zm-47.056-160.529h80.512v-81.248h-80.512zm46.112-576.944c-46.88 0-85.503 12.64-115.839 37.889c-30.336 25.263-45.088 75.855-44.336 117.775l1.184 2.336h73.44c0-25.008 8.336-60.944 25.008-73.84c16.656-12.88 36.848-19.328 60.56-19.328c27.328 0 48.336 7.424 63.073 22.271c14.72 14.848 22.063 36.08 22.063 63.664c0 23.184-5.44 42.976-16.368 59.376c-10.96 16.4-29.328 39.841-55.088 70.322c-26.576 23.967-42.992 43.231-49.232 57.807c-6.256 14.592-9.504 40.768-9.744 78.512h76.96c0-23.68 1.503-41.136 4.496-52.336c2.975-11.184 11.504-23.823 25.568-37.888c30.224-29.152 54.496-57.664 72.88-85.551c18.336-27.857 27.52-58.593 27.52-92.193c0-46.88-14.176-83.408-42.577-109.568c-28.416-26.176-68.272-39.248-119.568-39.248z"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export const SearchIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 24,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Svg
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <Path
          fill={color}
          d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6z"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export const CameraIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 24,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Svg
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 16 16">
        <G fill={color}>
          <Path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
          <Path d="M8 11a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0z" />
        </G>
      </Svg>
    </TouchableOpacity>
  );
};

export const CalculatorIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 24,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Svg width={size} height={size} viewBox="0 0 14 16" fill="none">
        <Path
          d="M12.8089 3.77515C13.1564 3.77515 13.4381 4.05684 13.4381 4.40434C13.4381 4.72701 13.1952 4.99295 12.8823 5.02929L12.8089 5.03353H1.19071C0.843221 5.03353 0.561523 4.75183 0.561523 4.40434C0.561523 4.08167 0.804416 3.81572 1.11734 3.77938L1.19071 3.77515H12.8089Z"
          fill={color}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.89362 0H12.1064C13.1512 0 14 0.844775 14 1.88757V13.213C14 14.2558 13.1512 15.1006 12.1064 15.1006H1.89362C0.848836 15.1006 0 14.2558 0 13.213V1.88757C0 0.844775 0.848836 0 1.89362 0ZM12.1064 1.25837H1.89367C1.54253 1.25837 1.25843 1.54111 1.25843 1.88756V13.213C1.25843 13.5594 1.54253 13.8422 1.89367 13.8422H12.1064C12.4576 13.8422 12.7417 13.5594 12.7417 13.213V1.88756C12.7417 1.54111 12.4576 1.25837 12.1064 1.25837Z"
          fill={color}
        />
        <Path
          d="M7.00028 6.28561C7.32295 6.28561 7.5889 6.52851 7.62524 6.84143L7.62947 6.9211C7.62947 7.26859 7.34778 7.55029 7.00028 7.55029C6.67761 7.55029 6.41167 7.30739 6.37533 6.99447L6.37109 6.9148C6.37109 6.56731 6.65279 6.28561 7.00028 6.28561Z"
          fill={color}
        />
        <Path
          d="M7.00028 11.3253C7.32295 11.3253 7.5889 11.5682 7.62524 11.8811L7.62947 11.9608C7.62947 12.3083 7.34778 12.59 7.00028 12.59C6.67761 12.59 6.41167 12.3471 6.37533 12.0341L6.37109 11.9545C6.37109 11.607 6.65279 11.3253 7.00028 11.3253Z"
          fill={color}
        />
        <Path
          d="M7.00028 8.80853C7.32295 8.80853 7.5889 9.05143 7.62524 9.36435L7.62947 9.44401C7.62947 9.79151 7.34778 10.0732 7.00028 10.0732C6.67761 10.0732 6.41167 9.83031 6.37533 9.51739L6.37109 9.43772C6.37109 9.09023 6.65279 8.80853 7.00028 8.80853Z"
          fill={color}
        />
        <Path
          d="M3.81474 6.28561C4.13741 6.28561 4.40335 6.52851 4.43969 6.84143L4.44393 6.9211C4.44393 7.26859 4.16223 7.55029 3.81474 7.55029C3.49207 7.55029 3.22613 7.30739 3.18978 6.99447L3.18555 6.9148C3.18555 6.56731 3.46724 6.28561 3.81474 6.28561Z"
          fill={color}
        />
        <Path
          d="M3.81474 11.3253C4.13741 11.3253 4.40335 11.5682 4.43969 11.8811L4.44393 11.9608C4.44393 12.3083 4.16223 12.59 3.81474 12.59C3.49207 12.59 3.22613 12.3471 3.18978 12.0341L3.18555 11.9545C3.18555 11.607 3.46724 11.3253 3.81474 11.3253Z"
          fill={color}
        />
        <Path
          d="M3.81474 8.80853C4.13741 8.80853 4.40335 9.05143 4.43969 9.36435L4.44393 9.44401C4.44393 9.79151 4.16223 10.0732 3.81474 10.0732C3.49207 10.0732 3.22613 9.83031 3.18978 9.51739L3.18555 9.43772C3.18555 9.09023 3.46724 8.80853 3.81474 8.80853Z"
          fill={color}
        />
        <Path
          d="M10.1853 6.28561C10.508 6.28561 10.774 6.52851 10.8103 6.84143L10.8145 6.9211C10.8145 7.26859 10.5328 7.55029 10.1853 7.55029C9.86267 7.55029 9.59673 7.30739 9.56039 6.99447L9.55615 6.9148C9.55615 6.56731 9.83785 6.28561 10.1853 6.28561Z"
          fill={color}
        />
        <Path
          d="M10.1853 11.3253C10.508 11.3253 10.774 11.5682 10.8103 11.8811L10.8145 11.9608C10.8145 12.3083 10.5328 12.59 10.1853 12.59C9.86267 12.59 9.59673 12.3471 9.56039 12.0341L9.55615 11.9545C9.55615 11.607 9.83785 11.3253 10.1853 11.3253Z"
          fill={color}
        />
        <Path
          d="M10.1853 8.80853C10.508 8.80853 10.774 9.05143 10.8103 9.36435L10.8145 9.44401C10.8145 9.79151 10.5328 10.0732 10.1853 10.0732C9.86267 10.0732 9.59673 9.83031 9.56039 9.51739L9.55615 9.43772C9.55615 9.09023 9.83785 8.80853 10.1853 8.80853Z"
          fill={color}
        />
      </Svg>
    </TouchableOpacity>
  );
};
export const GiftIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 24,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Svg
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 64 64">
        <Path
          fill={color}
          d="M51.429 15.856c4.558-4.299-.715-9.875-10.687-6.421c-.587.204-1.133.419-1.648.642c.977-1.876 2.42-3.924 4.58-5.885c0 0-4.034 1.449-5.898 1.082C35.464 4.819 34.739 2 34.739 2s-2.405 5.238-3.63 9.349c-1.754-3.532-3.697-6.969-3.697-6.969s-1.037 2.404-2.936 3.318c-1.531.74-7.829 1.378-7.829 1.378c2.1 1.074 3.903 2.401 5.433 3.774c-1.609-.426-3.446-.746-5.547-.898c-8.344-.605-11.621 2.372-10.505 5.313L2 17.394l2.192 8.219L5.554 26c3.232 10.949 2.45 23.098 2.44 23.235l-.055.792l.754.222C20.766 53.805 31.735 62 31.735 62s14.222-9.412 22.042-11.753l.684-.205l.014-.72c.004-.17.346-15.334 4.271-25.218c.276-.039.536-.07.759-.084l.827-.05l.083-.832c.003-.033.341-4.796 1.586-6.739l-10.572-.543M4.587 19.7l6.483 1.759v4.063l-5.381-1.528L4.587 19.7m10.074 30.512a70.37 70.37 0 0 0-4.681-1.63c.128-2.822.313-12.549-2.233-21.96l4.71 1.338c.912 4.023 2.426 12.311 2.204 22.252m7.893-35.169c8.094.586 9.517 4.764 9.517 4.764s-4.931 1.803-7.978 1.803c-9.942 0-11.378-7.28-1.539-6.567m9.988 5.379l8.126.921l-10.13 2.451l-5.786-1.293l7.79-2.079m-9.729 3.661l6.76 1.51v5.184l-6.979-1.947l.219-4.747m8.041 34.937c-1.476-1.096-3.936-2.787-7.202-4.6c.259-4.777.29-17.541.291-23.198l6.911 1.963V59.02m9.046-4.356a138.415 138.415 0 0 0-7.1 4.496V32.29a510.721 510.721 0 0 1 8.162-2.917c-.587 5.658-.954 20.424-1.062 25.291m3.28-27.832s-9.738 3.125-11.659 3.834V25.58l11.811-2.858l-.152 4.11m-1.2-7.461c-4.559 1.168-9.408.344-9.408.344s-.909-4.465 6.451-7.014c8.946-3.099 12.483 4.229 2.957 6.67m6.711-1.699l5.796.326l-3.481.843l-4.157-.41c.673-.234 1.284-.49 1.842-.759m3.856 30.9c-1.447.473-2.973 1.092-4.511 1.793c.011-4.684.297-15.066 2.467-24.145c2.231-.688 4.299-1.275 5.987-1.672c-3.227 8.986-3.838 20.96-3.943 24.024m6.038-26.431s-3.201.938-5.245 1.502l.514-3.468l5.565-1.346c-.456 1.255-.834 3.312-.834 3.312"
        />
      </Svg>
    </TouchableOpacity>
  );
};
export const UserIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 24,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Svg
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <Path
          fill={color}
          d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"
        />
      </Svg>
    </TouchableOpacity>
  );
};
export const PlusIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 24,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity style={style} activeOpacity={0.8} onPress={onPress}>
      <Svg
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <Path
          fill={color}
          stroke={color}
          strokeLinecap={'round'}
          strokeWidth={3}
          d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
        />
      </Svg>
    </TouchableOpacity>
  );
};
export const TrashIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 24,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity style={style} activeOpacity={0.8} onPress={onPress}>
      <Svg
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 512 512">
        <Path
          fill={color}
          d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8Z"
        />
        <Path
          fill={color}
          d="M292 64h-72a4 4 0 0 0-4 4v28h80V68a4 4 0 0 0-4-4Z"
        />
        <Path
          fill={color}
          d="M447.55 96H336V48a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v48H64.45L64 136h33l20.09 314A32 32 0 0 0 149 480h214a32 32 0 0 0 31.93-29.95L415 136h33ZM176 416l-9-256h33l9 256Zm96 0h-32V160h32Zm24-320h-80V68a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4Zm40 320h-33l9-256h33Z"
        />
      </Svg>
    </TouchableOpacity>
  );
};
export const CurrenLocationIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 28,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Svg
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <Circle cx="12" cy="12" r="3.5" fill={color} />
        <Path
          fill={color}
          d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6s6 2.691 6 6s-2.691 6-6 6z"
        />
      </Svg>
    </TouchableOpacity>
  );
};
export const LayoutIcon: React.FC<IconProps> = ({
  color = theme.colors.getirPrimary500,
  size = 24,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        transform: [{ rotate: '90deg' }],
      }}
      activeOpacity={0.8}
      onPress={onPress}>
      {/* <Svg
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 20 20">
        <Path
          fill={color}
          d="M2 2h5v11H2V2zm6 0h5v5H8V2zm6 0h4v16h-4V2zM8 8h5v5H8V8zm-6 6h11v4H2v-4z"
        />
      </Svg> */}

      <Svg
        width={size}
        height={size}
        viewBox="0 0 344.000000 344.000000"
        preserveAspectRatio="xMidYMid meet">
        <G
          transform="translate(0.000000,344.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none">
          <Path
            d="M421 3087 c-19 -7 -44 -25 -55 -40 -21 -28 -21 -36 -24 -731 -3 -776
-4 -762 58 -804 34 -23 34 -23 337 -20 l303 3 32 33 33 32 3 723 2 723 -23 35
c-36 54 -61 58 -362 58 -183 0 -281 -4 -304 -12z"
          />
          <Path
            d="M1425 3092 c-31 -11 -50 -25 -68 -52 -15 -22 -17 -64 -17 -407 l0
-383 29 -32 29 -33 322 0 322 0 29 33 29 32 0 381 c0 333 -2 384 -16 408 -33
55 -36 56 -349 58 -159 1 -299 -1 -310 -5z"
          />
          <Path
            d="M2410 3087 c-19 -7 -44 -27 -57 -46 l-23 -35 2 -723 3 -723 33 -32
32 -33 314 0 314 0 26 24 c14 14 30 41 36 60 15 55 12 1396 -3 1440 -7 19 -25
44 -40 55 -27 20 -42 21 -315 23 -206 2 -297 -1 -322 -10z"
          />
          <Path
            d="M1398 1934 c-60 -32 -58 -6 -58 -789 0 -785 -2 -754 58 -787 36 -19
608 -19 644 0 60 33 58 2 58 787 0 786 2 758 -60 790 -43 22 -601 22 -642 -1z"
          />
          <Path
            d="M395 1238 c-53 -42 -55 -57 -54 -435 0 -376 3 -401 52 -437 27 -20
42 -21 310 -24 318 -4 346 1 384 57 23 34 23 35 23 398 0 400 -2 418 -59 447
-25 14 -77 16 -329 16 -292 0 -300 -1 -327 -22z"
          />
          <Path
            d="M2384 1241 c-17 -11 -36 -34 -43 -52 -7 -21 -11 -151 -11 -394 0
-361 0 -362 23 -396 38 -56 66 -61 384 -57 268 3 283 4 310 24 49 36 52 61 52
437 1 378 -1 393 -54 435 -27 21 -35 22 -329 22 -278 0 -303 -2 -332 -19z"
          />
        </G>
      </Svg>
    </TouchableOpacity>
  );
};
