import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineSecurityKeyMinimalisticSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637ZM9.60941 6.81828C11.7004 4.72724 15.0907 4.72724 17.1817 6.81828C19.2728 8.90932 19.2728 12.2996 17.1817 14.3906C15.793 15.7793 13.8316 16.2448 12.0608 15.7906L9.61003 18.2413C9.23699 18.6144 8.71459 18.7976 8.19024 18.7394L6.79785 18.5847C6.48015 18.5494 6.18391 18.407 5.95786 18.1809L5.81906 18.0421C5.59302 17.8161 5.45064 17.5199 5.41534 17.2022L5.26063 15.8098C5.20237 15.2854 5.38562 14.763 5.75867 14.39L8.20942 11.9392C7.7552 10.1684 8.22069 8.207 9.60941 6.81828ZM16.1211 7.87894C14.6158 6.37369 12.1753 6.37369 10.6701 7.87894C9.67123 8.87777 9.33425 10.2888 9.66264 11.5675C9.78213 12.0328 9.68693 12.583 9.29405 12.9759L6.81933 15.4506C6.76849 15.5015 6.74352 15.5727 6.75145 15.6441L6.90259 17.0043L6.99565 17.0974L8.35589 17.2485C8.42735 17.2565 8.49854 17.2315 8.54937 17.1807L8.84305 16.887L8.2132 16.264C7.9187 15.9728 7.91609 15.4979 8.20737 15.2034C8.49865 14.9089 8.97351 14.9063 9.26801 15.1976L9.90373 15.8263L11.0243 14.7058C11.4174 14.3127 11.9675 14.218 12.4325 14.3374C13.7112 14.6657 15.1222 14.3288 16.1211 13.3299C17.6263 11.8247 17.6263 9.38419 16.1211 7.87894ZM11.8602 9.19353C12.6738 8.37994 13.9929 8.37994 14.8065 9.19353C15.6201 10.0071 15.6201 11.3262 14.8065 12.1398C13.9929 12.9534 12.6738 12.9534 11.8602 12.1398C11.0466 11.3262 11.0466 10.0071 11.8602 9.19353ZM13.7458 10.2542C13.518 10.0264 13.1487 10.0264 12.9209 10.2542C12.693 10.482 12.693 10.8513 12.9209 11.0791C13.1487 11.307 13.518 11.307 13.7458 11.0791C13.9736 10.8513 13.9736 10.482 13.7458 10.2542Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineSecurityKeyMinimalisticSquare;
