import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldVideoVolume = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5.00304 11.7155C5.04093 9.87326 5.05988 8.95215 5.68099 8.16363C5.79436 8.0197 5.9607 7.8487 6.10011 7.73274C6.86393 7.09741 7.8724 7.09741 9.88932 7.09741C10.6099 7.09741 10.9702 7.09741 11.3137 7.00452C11.385 6.98522 11.4556 6.96296 11.5253 6.93781C11.8608 6.81674 12.1616 6.60837 12.7632 6.19161C15.137 4.54738 16.3239 3.72527 17.3201 4.08241C17.5111 4.15088 17.6959 4.24972 17.8611 4.37162C18.7222 5.00744 18.7877 6.48675 18.9185 9.44538C18.967 10.5409 19 11.4785 19 12C19 12.5215 18.967 13.4591 18.9185 14.5546C18.7877 17.5132 18.7222 18.9926 17.8611 19.6284C17.6959 19.7503 17.5111 19.8491 17.3201 19.9176C16.3239 20.2747 15.137 19.4526 12.7632 17.8084C12.1616 17.3916 11.8608 17.1833 11.5253 17.0622C11.4556 17.037 11.385 17.0148 11.3137 16.9955C10.9702 16.9026 10.6099 16.9026 9.88932 16.9026C7.8724 16.9026 6.86393 16.9026 6.10011 16.2673C5.9607 16.1513 5.79436 15.9803 5.68099 15.8364C5.05988 15.0478 5.04093 14.1267 5.00304 12.2845C5.00104 12.1878 5 12.0928 5 12C5 11.9072 5.00104 11.8122 5.00304 11.7155Z" fill={color}/>
</Svg>;

export default BoldVideoVolume;