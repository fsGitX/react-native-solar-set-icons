import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldMoneyCard2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2.32803 6.01511 2.09185 7.22882 2.02572 9.25H21.9743C21.9082 7.22882 21.672 6.01511 20.8284 5.17157C19.6569 4 17.7712 4 14 4Z" fill={color}/>
	<Path d="M14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 11.5581 2 11.142 2.00189 10.75H21.9981C22 11.142 22 11.5581 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20ZM16.0447 12.25C16.4776 12.2499 16.8744 12.2499 17.1972 12.2933C17.5527 12.3411 17.9284 12.4535 18.2374 12.7626C18.5465 13.0716 18.6589 13.4473 18.7067 13.8028C18.7501 14.1256 18.7501 14.5224 18.75 14.9553V15.0447C18.7501 15.4776 18.7501 15.8744 18.7067 16.1972C18.6589 16.5527 18.5465 16.9284 18.2374 17.2374C17.9284 17.5465 17.5527 17.6589 17.1972 17.7067C16.8744 17.7501 16.4776 17.7501 16.0447 17.75L16 17.75L15.9553 17.75C15.5224 17.7501 15.1256 17.7501 14.8028 17.7067C14.4473 17.6589 14.0716 17.5465 13.7626 17.2374C13.4535 16.9284 13.3411 16.5527 13.2933 16.1972C13.2499 15.8744 13.2499 15.4776 13.25 15.0447L13.25 15L13.25 14.9553C13.2499 14.5224 13.2499 14.1256 13.2933 13.8028C13.3411 13.4473 13.4535 13.0716 13.7626 12.7626C14.0716 12.4535 14.4473 12.3411 14.8028 12.2933C15.1256 12.2499 15.5224 12.2499 15.9553 12.25H16.0447ZM5.25 13.5C5.25 13.0858 5.58579 12.75 6 12.75H8C8.41421 12.75 8.75 13.0858 8.75 13.5C8.75 13.9142 8.41421 14.25 8 14.25H6C5.58579 14.25 5.25 13.9142 5.25 13.5ZM5.25 16.5C5.25 16.0858 5.58579 15.75 6 15.75H10C10.4142 15.75 10.75 16.0858 10.75 16.5C10.75 16.9142 10.4142 17.25 10 17.25H6C5.58579 17.25 5.25 16.9142 5.25 16.5Z" fill={color} fillRule="evenodd"/>
	<Path d="M14.8233 13.8232L14.8257 13.8219C14.8276 13.8209 14.8309 13.8192 14.836 13.8172C14.8577 13.8082 14.9061 13.7929 15.0027 13.7799C15.2134 13.7516 15.5074 13.75 16 13.75C16.4926 13.75 16.7866 13.7516 16.9973 13.7799C17.0939 13.7929 17.1423 13.8082 17.164 13.8172C17.1691 13.8192 17.1724 13.8209 17.1743 13.8219L17.1768 13.8232L17.1781 13.8257C17.1791 13.8276 17.1808 13.8309 17.1828 13.836C17.1918 13.8577 17.2071 13.9061 17.2201 14.0027C17.2484 14.2134 17.25 14.5074 17.25 15C17.25 15.4926 17.2484 15.7866 17.2201 15.9973C17.2071 16.0939 17.1918 16.1423 17.1828 16.164C17.1808 16.1691 17.1791 16.1724 17.1781 16.1743L17.1768 16.1768L17.1743 16.1781C17.1724 16.1791 17.1691 16.1808 17.164 16.1828C17.1423 16.1918 17.0939 16.2071 16.9973 16.2201C16.7866 16.2484 16.4926 16.25 16 16.25C15.5074 16.25 15.2134 16.2484 15.0027 16.2201C14.9061 16.2071 14.8577 16.1918 14.836 16.1828C14.8309 16.1808 14.8276 16.1791 14.8257 16.1781L14.8232 16.1768L14.8219 16.1743C14.8209 16.1724 14.8192 16.1691 14.8172 16.164C14.8082 16.1423 14.7929 16.0939 14.7799 15.9973C14.7516 15.7866 14.75 15.4926 14.75 15C14.75 14.5074 14.7516 14.2134 14.7799 14.0027C14.7929 13.9061 14.8082 13.8577 14.8172 13.836C14.8192 13.8309 14.8209 13.8276 14.8219 13.8257L14.8233 13.8232Z" fill={color}/>
</Svg>;

export default BoldMoneyCard2;
