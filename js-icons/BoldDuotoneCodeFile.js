import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneCodeFile = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V13.5629C22 12.6901 22 12.0344 21.9574 11.5001H18L17.9051 11.5001C16.808 11.5002 15.8385 11.5003 15.0569 11.3952C14.2098 11.2813 13.3628 11.0198 12.6716 10.3285C11.9803 9.63726 11.7188 8.79028 11.6049 7.94316C11.4998 7.16164 11.4999 6.19207 11.5 5.09497L11.5092 2.26057C11.5095 2.17813 11.5166 2.09659 11.53 2.01666C11.1214 2 10.6358 2 10.0298 2C6.23869 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22Z" fill={color} fillRule="evenodd" opacity="0.5"/>
	<Path d="M10.7022 14.2635C10.8477 13.8757 10.6512 13.4434 10.2633 13.298C9.8755 13.1525 9.44319 13.349 9.29775 13.7369L7.79775 17.7369C7.65231 18.1247 7.84882 18.557 8.23666 18.7024C8.6245 18.8479 9.05681 18.6514 9.20225 18.2635L10.7022 14.2635Z" fill={color}/>
	<Path d="M7.53033 14.5305C7.82322 14.2376 7.82322 13.7628 7.53033 13.4699C7.23744 13.177 6.76256 13.177 6.46967 13.4699L5.46967 14.4699C5.17678 14.7628 5.17678 15.2376 5.46967 15.5305L6.46967 16.5305C6.76256 16.8234 7.23744 16.8234 7.53033 16.5305C7.82322 16.2376 7.82322 15.7628 7.53033 15.4699L7.06066 15.0002L7.53033 14.5305Z" fill={color}/>
	<Path d="M12.0303 15.4699C11.7374 15.177 11.2626 15.177 10.9697 15.4699C10.6768 15.7628 10.6768 16.2376 10.9697 16.5305L11.4393 17.0002L10.9697 17.4699C10.6768 17.7628 10.6768 18.2376 10.9697 18.5305C11.2626 18.8234 11.7374 18.8234 12.0303 18.5305L13.0303 17.5305C13.3232 17.2376 13.3232 16.7628 13.0303 16.4699L12.0303 15.4699Z" fill={color}/>
	<Path d="M11.5092 2.2601L11.5 5.0945C11.4999 6.1916 11.4998 7.16117 11.6049 7.94269C11.7188 8.78981 11.9803 9.6368 12.6716 10.3281C13.3629 11.0193 14.2098 11.2808 15.057 11.3947C15.8385 11.4998 16.808 11.4997 17.9051 11.4996L21.9574 11.4996C21.9698 11.6552 21.9786 11.821 21.9848 11.9995H22C22 11.732 22 11.5983 21.9901 11.4408C21.9335 10.5463 21.5617 9.52125 21.0315 8.79853C20.9382 8.6713 20.8743 8.59493 20.7467 8.44218C19.9542 7.49359 18.911 6.31193 18 5.49953C17.1892 4.77645 16.0787 3.98536 15.1101 3.3385C14.2781 2.78275 13.862 2.50487 13.2915 2.29834C13.1403 2.24359 12.9408 2.18311 12.7846 2.14466C12.4006 2.05013 12.0268 2.01725 11.5 2.00586L11.5092 2.2601Z" fill={color}/>
</Svg>;

export default BoldDuotoneCodeFile;
