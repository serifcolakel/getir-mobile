import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Svg, Path, G, Circle } from 'react-native-svg';
import { theme } from '../utils/theme';
type IconProps = {
  color?: string;
  size?: number;
  onPress?: () => void;
  rotate?: number;
};
export const HomeIcon: React.FC<IconProps> = ({
  color = theme.colors.lightBlue,
  size = 35,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Svg width={size} height={size} viewBox="0 1 511 511.999" fill={color}>
        <Path d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 01-12.117 5.024H442.62c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 00-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 01256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0" />
      </Svg>
    </TouchableOpacity>
  );
};

export const CalendarIcon: React.FC<IconProps> = ({
  color = theme.colors.lightBlue,
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
        <Path
          fill={color}
          d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V2.975q0-.425.287-.7Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V2.975q0-.425.288-.7Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10Z"
        />
      </Svg>
    </TouchableOpacity>
  );
};
export const RightArrowIcon: React.FC<IconProps> = ({
  color = theme.colors.lightBlue,
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
  color = theme.colors.lightBlue,
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
  color = theme.colors.lightBlue,
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

export const QuestionIcon: React.FC<IconProps> = ({
  color = theme.colors.lightBlue,
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
