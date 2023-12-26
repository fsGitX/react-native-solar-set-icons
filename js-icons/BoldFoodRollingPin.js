import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldFoodRollingPin = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.1568 17.0123L17.0126 13.1565C18.4667 11.7024 19.1937 10.9754 19.1937 10.0719C19.1937 9.46661 18.8673 8.94048 18.2146 8.22183C17.8931 7.86785 17.4924 7.46717 17.0126 6.98731C16.5327 6.50746 16.132 6.10675 15.778 5.78525C15.0594 5.13252 14.5333 4.80615 13.9279 4.80615C13.0245 4.80615 12.2974 5.5332 10.8433 6.98731L6.98755 10.8431C5.53345 12.2972 4.8064 13.0242 4.8064 13.9277C4.8064 14.533 5.13276 15.0591 5.7855 15.7778C6.10699 16.1318 6.5077 16.5325 6.98755 17.0123C7.46741 17.4922 7.8681 17.8929 8.22207 18.2144C8.94073 18.8671 9.46685 19.1935 10.0722 19.1935C10.9756 19.1935 11.7027 18.4664 13.1568 17.0123Z" fill={color}/>
	<Path d="M21.0658 2.56209C21.1072 2.59946 21.1561 2.64836 21.2539 2.74615C21.3515 2.84379 21.4006 2.89287 21.4379 2.93424C22.2812 3.86848 22.161 5.32058 21.1756 6.10347C21.132 6.13817 21.0757 6.17836 20.9631 6.25875L19.4427 7.34478C19.4034 7.30043 19.3641 7.25662 19.3247 7.21332C18.9788 6.83251 18.5568 6.41043 18.0935 5.94721L18.0526 5.90624C17.5893 5.44296 17.1671 5.0208 16.7863 4.67489C16.7431 4.63568 16.6995 4.59643 16.6552 4.55727L17.7413 3.03686C17.8215 2.92445 17.8619 2.86803 17.8965 2.82438C18.6794 1.83899 20.1315 1.71881 21.0658 2.56209Z" fill={color}/>
	<Path d="M4.55727 16.6552C4.59643 16.6995 4.63568 16.7431 4.67489 16.7863C5.0208 17.1671 5.44296 17.5893 5.90624 18.0526L5.94714 18.0935C6.41037 18.5567 6.83251 18.9788 7.21332 19.3247C7.25662 19.3641 7.30043 19.4034 7.34478 19.4427L6.25875 20.9631C6.17836 21.0757 6.13817 21.132 6.10347 21.1756C5.32058 22.161 3.86848 22.2812 2.93424 21.4379C2.89287 21.4006 2.84388 21.3516 2.74624 21.2539C2.64845 21.1561 2.59946 21.1072 2.56209 21.0658C1.71881 20.1315 1.83899 18.6794 2.82438 17.8965C2.86803 17.8619 2.92445 17.8215 3.03686 17.7413L4.55727 16.6552Z" fill={color}/>
</Svg>;

export default BoldFoodRollingPin;
