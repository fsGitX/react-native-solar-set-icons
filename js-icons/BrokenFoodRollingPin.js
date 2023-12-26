import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenFoodRollingPin = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17.0125 13.1567C18.4666 11.7026 19.1937 10.9756 19.1937 10.0721C19.1937 9.4668 18.8673 8.94068 18.2146 8.22202M8.22202 18.2146L6.25875 20.9631C6.17836 21.0757 6.13817 21.132 6.10347 21.1756C5.32058 22.161 3.86848 22.2812 2.93424 21.4379C2.89286 21.4006 2.84385 21.3516 2.74615 21.2539C2.64836 21.1561 2.59946 21.1072 2.56209 21.0658C2.03579 20.4827 1.88477 19.6979 2.08515 19M8.22202 18.2146C7.86805 17.8931 7.46736 17.4924 6.9875 17.0125C6.50765 16.5327 6.10694 16.1319 5.78545 15.778M8.22202 18.2146C8.94068 18.8673 9.4668 19.1937 10.0721 19.1937C10.9756 19.1937 11.7026 18.4666 13.1567 17.0125L14 16.1692M5.78545 15.778C5.13271 15.0593 4.80634 14.5332 4.80634 13.9279C4.80634 13.0244 5.5334 12.2974 6.9875 10.8433L10.8433 6.9875C12.2974 5.5334 13.0244 4.80634 13.9279 4.80634C14.5332 4.80634 15.0593 5.13271 15.778 5.78545M5.78545 15.778L4.41115 16.7596M18.2146 8.22202L20.9631 6.25875C21.0757 6.17836 21.132 6.13817 21.1756 6.10347C22.161 5.32058 22.2812 3.86848 21.4379 2.93424C21.4006 2.89286 21.3516 2.84385 21.2539 2.74615C21.1561 2.64836 21.1072 2.59946 21.0658 2.56209C20.1315 1.71881 18.6794 1.83899 17.8965 2.82438C17.8619 2.86803 17.8215 2.92445 17.7413 3.03686L15.778 5.78545M18.2146 8.22202C17.8931 7.86805 17.4924 7.46736 17.0125 6.9875C16.5327 6.50765 16.1319 6.10694 15.778 5.78545" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenFoodRollingPin;
