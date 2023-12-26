import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneSecurityBomb = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.5 22C13.6421 22 17 18.6421 17 14.5C17 10.3579 13.6421 7 9.5 7C5.35786 7 2 10.3579 2 14.5C2 18.6421 5.35786 22 9.5 22Z" fill={color} opacity="0.5"/>
	<Path d="M17.9811 2.35316C18.1668 1.88228 18.8332 1.88228 19.0189 2.35316L19.6733 4.01242C19.73 4.15618 19.8438 4.26998 19.9876 4.32668L21.6468 4.98108C22.1177 5.16679 22.1177 5.83321 21.6468 6.01892L19.9876 6.67332C19.8438 6.73002 19.73 6.84382 19.6733 6.98758L19.0189 8.64684C18.8332 9.11772 18.1668 9.11772 17.9811 8.64684L17.3267 6.98758C17.27 6.84382 17.1562 6.73002 17.0124 6.67332L15.3532 6.01892C14.8823 5.83321 14.8823 5.16679 15.3532 4.98108L17.0124 4.32668C17.1562 4.26998 17.27 4.15618 17.3267 4.01242L17.9811 2.35316Z" fill={color}/>
	<Path d="M16.4772 6.46216L14.2466 8.69281C14.6344 9.01019 14.9899 9.36566 15.3072 9.7535L17.5378 7.52284L17.3267 6.98752C17.27 6.84375 17.1562 6.72995 17.0124 6.67325L16.4772 6.46216Z" fill={color} opacity="0.7"/>
</Svg>;

export default BoldDuotoneSecurityBomb;
