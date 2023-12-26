import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotonePower = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.7919 5.14693C9.17345 4.98572 9.35208 4.54573 9.19087 4.16417C9.02966 3.78262 8.58966 3.60399 8.2081 3.7652C4.70832 5.24388 2.25 8.70906 2.25 12.7502C2.25 18.1349 6.61522 22.5002 12 22.5002C17.3848 22.5002 21.75 18.1349 21.75 12.7502C21.75 8.70906 19.2917 5.24388 15.7919 3.7652C15.4103 3.60399 14.9703 3.78262 14.8091 4.16417C14.6479 4.54573 14.8265 4.98572 15.2081 5.14693C18.1722 6.39928 20.25 9.33294 20.25 12.7502C20.25 17.3065 16.5563 21.0002 12 21.0002C7.44365 21.0002 3.75 17.3065 3.75 12.7502C3.75 9.33294 5.82779 6.39928 8.7919 5.14693Z" fill={color} opacity="0.5"/>
	<Path d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V6.75C11.25 7.16421 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.16421 12.75 6.75V2.75Z" fill={color}/>
</Svg>;

export default BoldDuotonePower;
