import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineSportsWalking = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.5 2.75C11.5335 2.75 10.75 3.5335 10.75 4.5C10.75 5.4665 11.5335 6.25 12.5 6.25C13.4665 6.25 14.25 5.4665 14.25 4.5C14.25 3.5335 13.4665 2.75 12.5 2.75ZM9.24998 4.5C9.24998 2.70507 10.7051 1.25 12.5 1.25C14.2949 1.25 15.75 2.70507 15.75 4.5C15.75 6.29493 14.2949 7.75 12.5 7.75C10.7051 7.75 9.24998 6.29493 9.24998 4.5ZM13.5278 10.7532C13.4897 10.7505 13.442 10.75 13.2698 10.75H12.1787L12.0876 11.6615C11.9135 13.4019 11.853 14.1013 12.0085 14.7631C12.164 15.4248 12.5296 16.024 13.4605 17.5048L16.0353 21.6008C16.2558 21.9515 16.1502 22.4145 15.7995 22.635C15.4488 22.8554 14.9859 22.7498 14.7654 22.3992L12.1905 18.3031C12.166 18.2642 12.1418 18.2256 12.1178 18.1875C11.283 16.8599 10.7678 16.0407 10.5482 15.1061C10.3287 14.1715 10.4251 13.2086 10.5814 11.6482C10.5859 11.6034 10.5904 11.5581 10.595 11.5123L10.6711 10.7509C10.17 10.7535 9.79923 10.7632 9.49993 10.7995C9.12271 10.8453 8.94678 10.925 8.82216 11.0249C8.69754 11.1249 8.5816 11.2794 8.45508 11.6377C8.32176 12.0153 8.20694 12.526 8.03606 13.295L7.73212 14.6627C7.64226 15.067 7.24163 15.322 6.83728 15.2321C6.43293 15.1423 6.17798 14.7417 6.26784 14.3373L6.58154 12.9256C6.74004 12.2123 6.87346 11.6118 7.04067 11.1382C7.2181 10.6357 7.45978 10.1948 7.88357 9.85489C8.30736 9.51494 8.7902 9.37465 9.31921 9.31045C9.81773 9.24995 10.4329 9.24997 11.1637 9.25L13.2698 9.25C13.2781 9.25 13.2864 9.25 13.2945 9.25C13.4305 9.24997 13.5362 9.24995 13.6351 9.25704C14.7491 9.33691 15.7041 10.0826 16.0518 11.1439C16.0826 11.2381 16.1083 11.3407 16.1412 11.4726L16.1472 11.4966C16.2033 11.7211 16.22 11.7848 16.2355 11.8293C16.4457 12.4354 17.0806 12.7839 17.7048 12.6359C17.7507 12.6251 17.8134 12.6049 18.033 12.5318L18.7628 12.2885C19.1558 12.1575 19.5805 12.3699 19.7115 12.7628C19.8425 13.1558 19.6301 13.5805 19.2371 13.7115L18.5073 13.9548C18.4963 13.9584 18.4855 13.9621 18.4749 13.9656C18.3029 14.023 18.1708 14.067 18.0509 14.0955C16.6777 14.4211 15.2809 13.6543 14.8183 12.321C14.7779 12.2045 14.7442 12.0695 14.7003 11.8935C14.6976 11.8827 14.6948 11.8716 14.692 11.8604C14.6502 11.6934 14.6382 11.6472 14.6263 11.6109C14.4683 11.1285 14.0342 10.7895 13.5278 10.7532ZM10.416 16.876C10.7606 17.1057 10.8538 17.5714 10.624 17.916L7.62402 22.416C7.39425 22.7607 6.9286 22.8538 6.58395 22.624C6.23931 22.3943 6.14618 21.9286 6.37594 21.584L9.37594 17.084C9.6057 16.7393 10.0714 16.6462 10.416 16.876Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineSportsWalking;
