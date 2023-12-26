import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenFolderPathConnect = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.5 7.5L13.5 7.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 20H14M2 20H10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 18V15" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 5.21734C5 4.64369 5 4.35687 5.04855 4.11795C5.26225 3.0662 6.14822 2.24352 7.28087 2.04508C7.53817 2 7.84705 2 8.46482 2C8.7355 2 8.87083 2 9.0009 2.01129C9.56166 2.05999 10.0936 2.26457 10.5272 2.59833C10.6277 2.67575 10.7234 2.76461 10.9148 2.94234L11.3 3.3C11.871 3.83026 12.1566 4.09538 12.4985 4.27203C12.6863 4.36906 12.8855 4.44569 13.0922 4.5004C13.4685 4.6 13.8723 4.6 14.6799 4.6H14.9415C16.7841 4.6 17.7055 4.6 18.3043 5.10015C18.3594 5.14616 18.4118 5.19484 18.4614 5.24599C18.8999 5.69877 18.9814 6.35005 18.9965 7.5M18.9939 11.1C18.9688 12.7117 18.8401 13.6255 18.1799 14.2385C17.3598 15 16.0399 15 13.4 15H10.6C7.96013 15 6.6402 15 5.8201 14.2385C5 13.477 5 12.2513 5 9.8V8.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="12" cy="20" r="2" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default BrokenFolderPathConnect;
