import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldCallPhoneCalling = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" fill={color}/>
	<Path d="M13.2595 1.88008C13.3257 1.47119 13.7122 1.19381 14.1211 1.26001C14.1464 1.26485 14.2279 1.28007 14.2705 1.28958C14.3559 1.30858 14.4749 1.33784 14.6233 1.38106C14.9201 1.46751 15.3347 1.60991 15.8323 1.83805C16.8286 2.2948 18.1544 3.09381 19.5302 4.46961C20.906 5.84541 21.705 7.17122 22.1617 8.1675C22.3899 8.66511 22.5323 9.07972 22.6187 9.3765C22.6619 9.5249 22.6912 9.64393 22.7102 9.72926C22.7197 9.77193 22.7267 9.80619 22.7315 9.8315L22.7373 9.86269C22.8034 10.2716 22.5286 10.6741 22.1197 10.7403C21.712 10.8063 21.3279 10.5303 21.2601 10.1233C21.258 10.1124 21.2522 10.083 21.2461 10.0553C21.2337 9.99994 21.2124 9.91212 21.1786 9.79597C21.1109 9.56363 20.9934 9.2183 20.7982 8.79262C20.4084 7.94232 19.7074 6.76813 18.4695 5.53027C17.2317 4.2924 16.0575 3.59141 15.2072 3.20158C14.7815 3.00642 14.4362 2.88889 14.2038 2.82122C14.0877 2.78739 13.9417 2.75387 13.8863 2.74154C13.4793 2.67372 13.1935 2.2878 13.2595 1.88008Z" fill={color}/>
	<Path d="M13.4857 5.32954C13.5995 4.93126 14.0146 4.70065 14.4129 4.81444L14.2069 5.53558C14.4129 4.81444 14.4129 4.81444 14.4129 4.81444L14.4144 4.81485L14.4159 4.81529L14.4192 4.81627L14.427 4.81858L14.4468 4.82475C14.4618 4.82957 14.4807 4.83585 14.5031 4.84381C14.548 4.85975 14.6074 4.88242 14.6802 4.91362C14.8259 4.97605 15.0249 5.07248 15.2695 5.21719C15.7589 5.50687 16.4271 5.98805 17.2121 6.77302C17.9971 7.55799 18.4782 8.22618 18.7679 8.71564C18.9126 8.96015 19.009 9.15922 19.0715 9.3049C19.1027 9.37771 19.1254 9.43707 19.1413 9.48198C19.1493 9.50443 19.1555 9.52326 19.1604 9.53834L19.1665 9.55812L19.1688 9.56587L19.1698 9.56921L19.1702 9.57074C19.1702 9.57074 19.1707 9.57218 18.4495 9.77822L19.1707 9.57218C19.2845 9.97046 19.0538 10.3856 18.6556 10.4994C18.2607 10.6122 17.8492 10.3864 17.7313 9.99437L17.7276 9.98359C17.7223 9.96857 17.7113 9.93898 17.6928 9.89578C17.6558 9.80944 17.5887 9.66821 17.4771 9.47962C17.2541 9.10288 16.8514 8.53363 16.1514 7.83368C15.4515 7.13373 14.8822 6.73102 14.5055 6.50805C14.3169 6.39644 14.1757 6.32934 14.0893 6.29234C14.0461 6.27382 14.0165 6.26279 14.0015 6.25746L13.9907 6.25376C13.5987 6.13588 13.3729 5.72443 13.4857 5.32954Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldCallPhoneCalling;
