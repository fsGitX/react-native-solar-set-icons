import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldVideoMusicNote4 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.8497 4.70046C19.4524 3.57572 18.353 2.87888 17.1944 3.01749C16.9333 3.04872 16.6802 3.14246 16.4231 3.25741C16.1681 3.37141 15.8568 3.531 15.4744 3.7271L12.999 4.9964C12.7146 5.14208 12.4921 5.25604 12.3014 5.40553C11.8107 5.79032 11.4753 6.34693 11.3591 6.96915C11.314 7.21087 11.3141 7.46594 11.3143 7.79201L11.3143 7.8696C11.3143 7.97429 11.3143 8.07432 11.3145 8.16983L11.3143 14.2981C10.5374 13.5504 9.49228 13.0924 8.34284 13.0924C5.94435 13.0924 4 15.0865 4 17.5462C4 20.006 5.94435 22 8.34284 22C10.7413 22 12.6857 20.006 12.6857 17.5462V11.1832C13.1164 11.4088 13.6124 11.5083 14.1199 11.4476C14.381 11.4164 14.6341 11.3227 14.8912 11.2077C15.1462 11.0937 15.4574 10.9341 15.8399 10.738L18.3152 9.46872C18.5997 9.32303 18.8222 9.20907 19.0128 9.05959C19.5036 8.67479 19.839 8.11819 19.9551 7.49596C20.0002 7.25425 20.0001 6.99919 20 6.67313L20 6.5955C20 6.15702 20 5.80015 19.9854 5.51527C19.9706 5.228 19.9392 4.95394 19.8497 4.70046Z" fill={color}/>
</Svg>;

export default BoldVideoMusicNote4;
