import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneCloudBoltMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.49999 17.9105L6.5 18H6.28571C3.91878 18 2 16.1038 2 13.7647C2 11.4256 3.91878 9.52941 6.28571 9.52941C6.56983 9.52941 6.8475 9.55673 7.11616 9.60887C6.88706 8.9978 6.7619 8.33687 6.7619 7.64706C6.7619 4.52827 9.32028 2 12.4762 2C15.4159 2 17.8371 4.19371 18.1551 7.01498C20.393 7.78024 22 9.88113 22 12.3529C22 15.0599 20.0726 17.3221 17.5 17.8722C17.5001 17.0215 17.4989 16.2417 17.4134 15.6056C17.3178 14.8946 17.0929 14.1432 16.4749 13.5251C15.8568 12.9071 15.1054 12.6822 14.3944 12.5866C13.7488 12.4998 12.9551 12.4999 12.0895 12.5L12 12.5L11.9105 12.5C11.0449 12.4999 10.2512 12.4998 9.60558 12.5866C8.89462 12.6822 8.14317 12.9071 7.52513 13.5251C6.90708 14.1432 6.68219 14.8946 6.5866 15.6056C6.4998 16.2512 6.49989 17.0449 6.49999 17.9105Z" fill={color} opacity="0.5"/>
	<Path d="M12 22C10.1144 22 9.17157 22 8.58579 21.4142C8 20.8284 8 19.8856 8 18C8 16.1144 8 15.1716 8.58579 14.5858C9.17157 14 10.1144 14 12 14C13.8856 14 14.8284 14 15.4142 14.5858C16 15.1716 16 16.1144 16 18C16 19.8856 16 20.8284 15.4142 21.4142C14.8284 22 13.8856 22 12 22ZM12.9159 16.2492C13.1762 15.9888 13.1762 15.5667 12.9159 15.3064C12.6555 15.046 12.2334 15.046 11.9731 15.3064L9.75084 17.5286C9.56017 17.7193 9.50313 18.006 9.60632 18.2551C9.70951 18.5042 9.9526 18.6667 10.2222 18.6667H12.1683L11.0842 19.7508C10.8238 20.0112 10.8238 20.4333 11.0842 20.6936C11.3445 20.954 11.7666 20.954 12.027 20.6936L14.2492 18.4714C14.4399 18.2807 14.4969 17.994 14.3937 17.7449C14.2905 17.4958 14.0474 17.3333 13.7778 17.3333H11.8317L12.9159 16.2492Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneCloudBoltMinimalistic;
