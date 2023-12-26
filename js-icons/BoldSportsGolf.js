import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldSportsGolf = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.0002 1.25C12.4144 1.25 12.7502 1.58579 12.7502 2V3.03647L17.7579 5.54032L17.8119 5.56731C18.5464 5.93447 19.1724 6.24743 19.608 6.55149C20.0498 6.85982 20.5142 7.3075 20.5142 8C20.5142 8.6925 20.0498 9.14018 19.608 9.44851C19.1724 9.75257 18.5464 10.0655 17.8119 10.4327L12.7502 12.9635V18C12.7502 18.4142 12.4144 18.75 12.0002 18.75C11.586 18.75 11.2502 18.4142 11.2502 18V12.5162C11.2499 12.5058 11.2499 12.4953 11.2502 12.4849V3.51509C11.2499 3.50466 11.2499 3.49421 11.2502 3.48375V2C11.2502 1.58579 11.586 1.25 12.0002 1.25Z" fill={color}/>
	<Path d="M12 22C17.5228 22 22 20.433 22 18.5C22 16.8378 18.6894 15.4462 14.2502 15.089V18C14.2502 19.2426 13.2428 20.25 12.0002 20.25C10.7575 20.25 9.75016 19.2426 9.75016 18V15.0889C5.31073 15.4462 2 16.8378 2 18.5C2 20.433 6.47715 22 12 22Z" fill={color}/>
	<Path d="M12.0002 1.25C11.586 1.25 11.2502 1.58579 11.2502 2V3.48375C11.2499 3.49421 11.2499 3.50466 11.2502 3.51509V12.4849C11.2499 12.4953 11.2499 12.5058 11.2502 12.5162V15.0097V18C11.2502 18.4142 11.586 18.75 12.0002 18.75C12.4144 18.75 12.7502 18.4142 12.7502 18V15.0097V12.9635L17.8119 10.4327C18.5464 10.0655 19.1724 9.75257 19.608 9.44851C20.0498 9.14018 20.5142 8.6925 20.5142 8C20.5142 7.3075 20.0498 6.85982 19.608 6.55149C19.1724 6.24743 18.5464 5.93447 17.8119 5.56731L12.7502 3.03647V2C12.7502 1.58579 12.4144 1.25 12.0002 1.25Z" fill={color}/>
</Svg>;

export default BoldSportsGolf;
