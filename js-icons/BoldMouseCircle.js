import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldMouseCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 21.4534C6.77256 21.4534 2.53488 17.1834 2.53488 11.9161C2.53488 7.29856 5.79222 3.44593 10.1182 2.56704C10.6454 2.45995 11.2326 2.90228 11.2326 3.66754V5.72967H12.7674V3.66754C12.7674 2.15503 11.5037 0.707845 9.81487 1.05095C4.78661 2.07251 1 6.54784 1 11.9161C1 18.0375 5.92487 23 12 23C18.0751 23 23 18.0375 23 11.9161C23 7.52765 20.4689 3.73641 16.801 1.94091C16.4197 1.75429 15.9605 1.91442 15.7753 2.29856C15.5901 2.68271 15.749 3.14542 16.1303 3.33204C19.2898 4.87867 21.4651 8.14213 21.4651 11.9161C21.4651 17.1834 17.2274 21.4534 12 21.4534Z" fill={color} fillRule="evenodd"/>
	<Path d="M7.90698 13.9539C7.90698 16.2451 9.73949 18.1024 12 18.1024C14.2605 18.1024 16.093 16.2451 16.093 13.9539V10.5832H7.90698V13.9539Z" fill={color}/>
	<Path d="M12.7674 9.33839H16.0212C15.7091 7.67099 14.4125 6.04596 12.7674 5.72967V9.33839Z" fill={color}/>
	<Path d="M11.2326 9.33839V5.72967C9.58746 6.04596 8.29087 7.67099 7.97881 9.33839H11.2326Z" fill={color}/>
</Svg>;

export default BoldMouseCircle;
