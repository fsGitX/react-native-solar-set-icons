import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneInboxArchive = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z" fill={color} opacity="0.5"/>
	<Path d="M5 8.49982V7.5C5 6.67157 5.67157 6 6.5 6H17.5C18.3284 6 19 6.67157 19 7.5V8.49982C18.5822 8.18597 18.0628 8 17.5 8H6.5C5.9372 8 5.41783 8.18597 5 8.49982Z" fill={color}/>
	<Path d="M5 11.4998V10.5C5 9.67157 5.67157 9 6.5 9H17.5C18.3284 9 19 9.67157 19 10.5V11.4998C18.5822 11.186 18.0628 11 17.5 11H6.5C5.9372 11 5.41783 11.186 5 11.4998Z" fill={color}/>
	<Path d="M20.75 15C20.75 14.5858 20.4142 14.25 20 14.25H18.9793V13.2503C18.8604 12.5407 18.2434 12 17.5 12H6.5C5.75663 12 5.13956 12.5407 5.02068 13.2503V14.25H4C3.58579 14.25 3.25 14.5858 3.25 15C3.25 15.4142 3.58579 15.75 4 15.75H6.30147C7.17044 15.75 7.39887 15.7629 7.59386 15.8423C7.6145 15.8507 7.63492 15.8597 7.65508 15.8692C7.84554 15.9589 8.00971 16.1183 8.59805 16.7578L8.63351 16.7963L8.70937 16.8789C9.14654 17.3549 9.49191 17.731 9.94463 17.9581C10.0289 18.0004 10.1153 18.0383 10.2035 18.0717C10.6771 18.2511 11.1877 18.2506 11.834 18.2501L11.9462 18.25L12.052 18.2501C12.6634 18.2506 13.1464 18.251 13.5987 18.089C13.683 18.0588 13.7658 18.0245 13.8467 17.9863C14.2811 17.781 14.6223 17.4392 15.0543 17.0065L15.1291 16.9316L15.3588 16.7019C15.9801 16.0806 16.1524 15.927 16.3501 15.8452C16.5477 15.7633 16.7782 15.75 17.6569 15.75H20C20.4142 15.75 20.75 15.4142 20.75 15Z" fill={color}/>
</Svg>;

export default BoldDuotoneInboxArchive;
