import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldSuspension = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3 6.5V4.5C3 4.03534 3 3.80302 3.03843 3.60982C3.19624 2.81644 3.81644 2.19624 4.60982 2.03843C4.80302 2 5.03534 2 5.5 2C5.96466 2 6.19698 2 6.39018 2.03843C7.18356 2.19624 7.80376 2.81644 7.96157 3.60982C8 3.80302 8 4.03534 8 4.5V4.75H16V4.5C16 4.03534 16 3.80302 16.0384 3.60982C16.1962 2.81644 16.8164 2.19624 17.6098 2.03843C17.803 2 18.0353 2 18.5 2C18.9647 2 19.197 2 19.3902 2.03843C20.1836 2.19624 20.8038 2.81644 20.9616 3.60982C21 3.80302 21 4.03534 21 4.5V6.5C21 6.96466 21 7.19698 20.9616 7.39018C20.8038 8.18356 20.1836 8.80376 19.3902 8.96157C19.197 9 18.9647 9 18.5 9C18.0353 9 17.803 9 17.6098 8.96157C16.8164 8.80376 16.1962 8.18356 16.0384 7.39018C16 7.19698 16 6.96466 16 6.5V6.25H12.75V17.75H16V17.5C16 17.0353 16 16.803 16.0384 16.6098C16.1962 15.8164 16.8164 15.1962 17.6098 15.0384C17.803 15 18.0353 15 18.5 15C18.9647 15 19.197 15 19.3902 15.0384C20.1836 15.1962 20.8038 15.8164 20.9616 16.6098C21 16.803 21 17.0353 21 17.5V19.5C21 19.9647 21 20.197 20.9616 20.3902C20.8038 21.1836 20.1836 21.8038 19.3902 21.9616C19.197 22 18.9647 22 18.5 22C18.0353 22 17.803 22 17.6098 21.9616C16.8164 21.8038 16.1962 21.1836 16.0384 20.3902C16 20.197 16 19.9647 16 19.5V19.25H8V19.5C8 19.9647 8 20.197 7.96157 20.3902C7.80376 21.1836 7.18356 21.8038 6.39018 21.9616C6.19698 22 5.96466 22 5.5 22C5.03534 22 4.80302 22 4.60982 21.9616C3.81644 21.8038 3.19624 21.1836 3.03843 20.3902C3 20.197 3 19.9647 3 19.5V17.5C3 17.0353 3 16.803 3.03843 16.6098C3.19624 15.8164 3.81644 15.1962 4.60982 15.0384C4.80302 15 5.03534 15 5.5 15C5.96466 15 6.19698 15 6.39018 15.0384C7.18356 15.1962 7.80376 15.8164 7.96157 16.6098C8 16.803 8 17.0353 8 17.5V17.75H11.25V6.25H8V6.5C8 6.96466 8 7.19698 7.96157 7.39018C7.80376 8.18356 7.18356 8.80376 6.39018 8.96157C6.19698 9 5.96466 9 5.5 9C5.03534 9 4.80302 9 4.60982 8.96157C3.81644 8.80376 3.19624 8.18356 3.03843 7.39018C3 7.19698 3 6.96466 3 6.5Z" fill="#1C274C"/>
</Svg>;

export default BoldSuspension;
