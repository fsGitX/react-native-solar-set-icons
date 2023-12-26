import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldWeatherCloudStorm = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.8539 14.5104C11.1243 14.8242 11.0891 15.2978 10.7753 15.5682L8.01947 17.9426H10.2857C10.5992 17.9426 10.8797 18.1376 10.9888 18.4315C11.0979 18.7254 11.0128 19.0562 10.7752 19.2608L6.48953 22.9531C6.17572 23.2235 5.70215 23.1883 5.43179 22.8744C5.16143 22.5606 5.19666 22.0871 5.51047 21.8167L8.26612 19.4426H6C5.6865 19.4426 5.40607 19.2476 5.29692 18.9537C5.18777 18.6598 5.27294 18.3291 5.51044 18.1244L9.79616 14.4318C10.11 14.1614 10.5835 14.1966 10.8539 14.5104ZM15.5303 14.9697C15.8232 15.2626 15.8232 15.7374 15.5303 16.0303L13.5303 18.0303C13.2374 18.3232 12.7626 18.3232 12.4697 18.0303C12.1768 17.7374 12.1768 17.2626 12.4697 16.9697L14.4697 14.9697C14.7626 14.6768 15.2374 14.6768 15.5303 14.9697ZM17.5303 18.4697C17.8232 18.7626 17.8232 19.2374 17.5303 19.5303L15.5303 21.5303C15.2374 21.8232 14.7626 21.8232 14.4697 21.5303C14.1768 21.2374 14.1768 20.7626 14.4697 20.4697L16.4697 18.4697C16.7626 18.1768 17.2374 18.1768 17.5303 18.4697ZM13.5303 19.4697C13.8232 19.7626 13.8232 20.2374 13.5303 20.5303L11.5303 22.5303C11.2374 22.8232 10.7626 22.8232 10.4697 22.5303C10.1768 22.2374 10.1768 21.7626 10.4697 21.4697L12.4697 19.4697C12.7626 19.1768 13.2374 19.1768 13.5303 19.4697Z" fill={color} fillRule="evenodd"/>
	<Path d="M19.1238 18.2553C19.0157 17.9463 18.8381 17.6561 18.5911 17.409C18.1184 16.9363 17.4876 16.7179 16.8689 16.7538C17.4572 15.8791 17.3646 14.6825 16.5911 13.909C15.7124 13.0304 14.2878 13.0304 13.4091 13.909L12.5263 14.7918C12.4849 14.3418 12.3079 13.8999 11.9904 13.5314C11.1793 12.59 9.75856 12.4844 8.81715 13.2955L4.53144 16.9881C4.15224 17.3148 3.90249 17.7487 3.80116 18.2161C2.71094 17.4482 2 16.1885 2 14.7647C2 12.4256 3.91878 10.5294 6.28571 10.5294C6.56983 10.5294 6.8475 10.5567 7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498C20.393 8.78024 22 10.8811 22 13.3529C22 15.4509 20.8423 17.2816 19.1238 18.2553Z" fill={color}/>
</Svg>;

export default BoldWeatherCloudStorm;
