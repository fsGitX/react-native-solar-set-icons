import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldBarChair = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.75467 2.30839C6.65212 2.66883 5.20239 4.6158 5.45974 6.73344L5.47666 6.87265C5.53766 7.37459 5.96373 7.75201 6.46936 7.75201H8.2331L5.2668 21.5947C5.18001 21.9997 5.43799 22.3984 5.84301 22.4852C6.24803 22.572 6.64672 22.314 6.73351 21.909L7.6779 17.5019H16.3224L17.2668 21.909C17.3536 22.314 17.7523 22.572 18.1573 22.4852C18.5623 22.3984 18.8203 21.9997 18.7335 21.5947L15.7672 7.75201H17.531C18.0367 7.75201 18.4627 7.37459 18.5237 6.87265L18.5406 6.73344C18.798 4.6158 17.3483 2.66883 15.2457 2.30839L14.8726 2.24442C12.9715 1.91853 11.0289 1.91853 9.12781 2.24442L8.75467 2.30839ZM14.25 7.75201H9.75031C9.75025 7.80379 9.74479 7.85635 9.73351 7.90901L7.99932 16.0019H16.001L14.2668 7.90901C14.2555 7.85635 14.2501 7.80379 14.25 7.75201Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldBarChair;
