import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearWaterdrop = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3 13.1928C3 18.0569 6.85549 22 11.6115 22H12.3885C17.1445 22 21 18.0569 21 13.1928V12.9281C21 8.31651 18.2715 4.16347 14.0967 2.42077C12.7527 1.85974 11.2473 1.85974 9.90329 2.42077C5.72854 4.16347 3 8.31651 3 12.9281V13.1928Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M7.61475 10.7237C8.2495 8.71826 9.63062 7.08805 11.3858 6.27637" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearWaterdrop;
