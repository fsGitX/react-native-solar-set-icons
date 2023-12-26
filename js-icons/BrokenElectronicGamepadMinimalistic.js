import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenElectronicGamepadMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.5 11V14M7 12.5L10 12.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2.62271 15.1185L2.08029 17.3766C1.69894 18.9643 2.71265 20.552 4.34414 20.9225C5.71996 21.2349 7.1352 20.5814 7.75663 19.3466L7.88464 19.0923C8.45521 17.9586 9.63921 17.2399 10.9364 17.2399H13.0636C14.3608 17.2399 15.5448 17.9586 16.1154 19.0923L16.2434 19.3466C16.8648 20.5814 18.28 21.2349 19.6559 20.9225C21.2873 20.552 22.3011 18.9643 21.9197 17.3766L20.8349 12.8603C20.2217 10.3074 19.915 9.03089 19.0453 8.19371C18.8251 7.98184 18.5819 7.79404 18.3198 7.63367C17.2841 7 15.9371 7 13.2432 7H10.7568C8.06287 7 6.71588 7 5.68024 7.63367C5.41814 7.79404 5.17486 7.98184 4.95474 8.19371C4.32815 8.79682 3.99384 9.62792 3.6266 11" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 7V6C12 5.44772 12.4477 5 13 5H14C14.5523 5 15 4.55228 15 4V3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16 11C16 11.5523 15.5523 12 15 12C14.4477 12 14 11.5523 14 11C14 10.4477 14.4477 10 15 10C15.5523 10 16 10.4477 16 11Z" fill={color}/>
	<Path d="M18 14C18 14.5523 17.5523 15 17 15C16.4477 15 16 14.5523 16 14C16 13.4477 16.4477 13 17 13C17.5523 13 18 13.4477 18 14Z" fill={color}/>
</Svg>;

export default BrokenElectronicGamepadMinimalistic;
