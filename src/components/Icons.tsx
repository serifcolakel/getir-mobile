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
export const FavoriteIcon: React.FC<IconProps> = ({
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
          d="M61.092 27.057a7.903 7.903 0 0 0-.75.464a19.438 19.438 0 0 1-.98 2.97l-1.121-1.145c-.798.84-1.498 1.758-1.92 2.584c-.896 1.762-3.268.965-5.27-1.768l-.469-.643c-1.2 2.548-2.111 5.934-1.555 9.949l-4.835-4.939l-4.903 4.988s.855-9.002 7.799-17.573c.426.374 1.035.542 1.704.496c-.198 1.555.278 3.454 1.39 4.972l1.6 2.189c.281.385.573.73.873 1.037c1.035 1.059 1.89 1.359 2.345 1.287c.151-.025.557-.008.557-.381c0-4.27-6.229-8.768-6.714-9.111a4.105 4.105 0 0 0 2.125-.848l.131-.102c.105.066.222.141.293.178l.851.447c1.484.784 1.862.317.838-1.031l-.584-.771c-.059-.078-.122-.144-.184-.214l.004-.008l-.008.004l-.012-.015c-.006.012-.016.02-.021.031c-1.272.766-2.799.793-3.57.005c-.771-.79-.746-2.345.004-3.643c.012-.006.02-.019.032-.024l-.015-.013l.004-.007l-.007.004c-.069-.065-.136-.131-.214-.192l-.754-.597c-1.322-1.048-1.778-.659-1.01.856l.436.868c.033.065.098.207.158.335l-.076.103a4.293 4.293 0 0 0-.832 2.169c-.306-.45-4.728-6.862-8.924-6.862c-.367 0-.35.414-.373.569c-.07.465.223 1.339 1.26 2.396c.297.304.639.604 1.014.889l2.145 1.635c1.487 1.136 3.347 1.623 4.871 1.419c-.047.683.117 1.305.482 1.741c-8.395 7.088-17.212 7.958-17.212 7.958l4.889-5l-4.835-4.941c3.933.569 7.248-.361 9.743-1.586l-.629-.48c-2.678-2.044-3.455-4.465-1.732-5.383c.809-.43 1.707-1.144 2.529-1.958l-.74-.751a18.893 18.893 0 0 1 2.062-.738c.335-.439.621-.876.845-1.295c-4.087.978-7.752 3.215-9.885 6.018C28.959 9.75 23.349 7 17.721 7h-.002C10.904 7 5.536 10.957 2.993 17.855c-5.789 15.711 15.23 29.479 24.204 35.357c1.446.946 3.083 2.02 3.405 2.354L31.855 57l1.397-1.291c.232-.205 1.305-.892 2.343-1.556c7.019-4.492 23.51-15.054 26.072-27.57a1.82 1.82 0 0 1-.575.474"
        />
        <Path
          fill={color}
          d="M61.002 17.835c-2.566-6.857-7.942-10.79-14.746-10.79c-.417 0-.833.019-1.249.047c.714.456 1.462 1.17 2.165 2.131l1.6 2.189c1.099 1.505 1.638 3.311 1.606 4.939c.428.125.841.354 1.196.718l.107.109c.355.364.581.786.704 1.222c1.592-.032 3.357.515 4.829 1.637l2.146 1.635c1.406 1.074 2.283 2.25 2.554 3.26a15.459 15.459 0 0 0-.912-7.097"
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
export const MinusIcon: React.FC<IconProps> = ({
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
          d="M20 12H4"
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

export const ChatIcon: React.FC<IconProps> = ({
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
        viewBox="0 0 26 26">
        <Path
          fill={color}
          d="M10 0C4.547 0 0 3.75 0 8.5c0 2.43 1.33 4.548 3.219 6.094a4.778 4.778 0 0 1-.969 2.25a14.4 14.4 0 0 1-.656.781a2.507 2.507 0 0 0-.313.406c-.057.093-.146.197-.187.407c-.042.209.015.553.187.812l.125.219l.25.125c.875.437 1.82.36 2.688.125c.867-.236 1.701-.64 2.5-1.063c.798-.422 1.557-.864 2.156-1.187c.084-.045.138-.056.219-.094C10.796 19.543 13.684 21 16.906 21c.031.004.06 0 .094 0c1.3 0 5.5 4.294 8 2.594c.1-.399-2.198-1.4-2.313-4.375c1.957-1.383 3.22-3.44 3.22-5.719c0-3.372-2.676-6.158-6.25-7.156C18.526 2.664 14.594 0 10 0zm0 2c4.547 0 8 3.05 8 6.5S14.547 15 10 15c-.812 0-1.278.332-1.938.688c-.66.355-1.417.796-2.156 1.187c-.64.338-1.25.598-1.812.781c.547-.79 1.118-1.829 1.218-3.281l.032-.563l-.469-.343C3.093 12.22 2 10.423 2 8.5C2 5.05 5.453 2 10 2z"
        />
      </Svg>
    </TouchableOpacity>
  );
};
export const LocationManIcon: React.FC<IconProps> = ({
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
        viewBox="0 0 100 100">
        <Path
          fill={color}
          d="M49.781 23.592C41.947 23.593 34.184 26.96 35 33.688l2 14.624C37.352 50.886 39.09 55 41.688 55h.185L44 80.53c.092 1.103.892 2 2 2h8c1.108 0 1.908-.897 2-2L58.127 55h.185c2.597 0 4.336-4.115 4.688-6.688l2-14.624c.523-6.734-7.384-10.098-15.219-10.096z"
        />
        <Path
          fill={color}
          d="m50.024 50.908l-.048.126c.016-.038.027-.077.043-.115l.005-.011zM34.006 69.057C19.88 71.053 10 75.828 10 82.857C10 92.325 26.508 100 50 100s40-7.675 40-17.143c0-7.029-9.879-11.804-24.004-13.8l-1.957 3.332C74.685 73.866 82 76.97 82 80.572c0 5.05-14.327 9.143-32 9.143c-17.673 0-32-4.093-32-9.143c-.001-3.59 7.266-6.691 17.945-8.174c-.645-1.114-1.294-2.226-1.94-3.341z"
        />
        <Circle cx="50" cy="10.5" r="10.5" fill={color} />
      </Svg>
    </TouchableOpacity>
  );
};

export const VersionIcon: React.FC<IconProps> = ({
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
          d="M19 21q-.975 0-1.75-.562q-.775-.563-1.075-1.438H11q-1.65 0-2.825-1.175Q7 16.65 7 15q0-1.65 1.175-2.825Q9.35 11 11 11h2q.825 0 1.413-.588Q15 9.825 15 9t-.587-1.413Q13.825 7 13 7H7.825q-.325.875-1.087 1.438Q5.975 9 5 9q-1.25 0-2.125-.875T2 6q0-1.25.875-2.125T5 3q.975 0 1.738.562Q7.5 4.125 7.825 5H13q1.65 0 2.825 1.175Q17 7.35 17 9q0 1.65-1.175 2.825Q14.65 13 13 13h-2q-.825 0-1.412.587Q9 14.175 9 15q0 .825.588 1.413Q10.175 17 11 17h5.175q.325-.875 1.088-1.438Q18.025 15 19 15q1.25 0 2.125.875T22 18q0 1.25-.875 2.125T19 21ZM5 7q.425 0 .713-.287Q6 6.425 6 6t-.287-.713Q5.425 5 5 5t-.713.287Q4 5.575 4 6t.287.713Q4.575 7 5 7Z"
        />
      </Svg>
    </TouchableOpacity>
  );
};
export const LanguageIcon: React.FC<IconProps> = ({
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
        viewBox="0 0 1536 1792">
        <Path
          fill={color}
          d="M654 1078q-1 3-12.5-.5T610 1066l-20-9q-44-20-87-49q-7-5-41-31.5T424 948q-67 103-134 181q-81 95-105 110q-4 2-19.5 4t-18.5 0q6-4 82-92q21-24 85.5-115T393 918q17-30 51-98.5t36-77.5q-8-1-110 33q-8 2-27.5 7.5T308 792t-17 5q-2 2-2 10.5t-1 9.5q-5 10-31 15q-23 7-47 0q-18-4-28-21q-4-6-5-23q6-2 24.5-5t29.5-6q58-16 105-32q100-35 102-35q10-2 43-19.5t44-21.5q9-3 21.5-8t14.5-5.5t6 .5q2 12-1 33q0 2-12.5 27T527 769.5T510 803q-25 50-77 131l64 28q12 6 74.5 32t67.5 28q4 1 10.5 25.5t4.5 30.5zM449 592q3 15-4 28q-12 23-50 38q-30 12-60 12q-26-3-49-26q-14-15-18-41l1-3q3 3 19.5 5t26.5 0t58-16q36-12 55-14q17 0 21 17zm698 129l63 227l-139-42zM39 1521l694-232V257L39 490v1031zm1241-317l102 31l-181-657l-100-31l-216 536l102 31l45-110l211 65zM777 242l573 184V46zm311 1323l158 13l-54 160l-40-66q-130 83-276 108q-58 12-91 12h-84q-79 0-199.5-39T318 1668q-8-7-8-16q0-8 5-13.5t13-5.5q4 0 18 7.5t30.5 16.5t20.5 11q73 37 159.5 61.5T714 1754q95 0 167-14.5t157-50.5q15-7 30.5-15.5t34-19t28.5-16.5zm448-1079v1079l-774-246q-14 6-375 127.5T19 1568q-13 0-18-13q0-1-1-3V474q3-9 4-10q5-6 20-11q107-36 149-50V19l558 198q2 0 160.5-55t316-108.5T1369 0q20 0 20 21v418z"
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
