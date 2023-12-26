import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneCrown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.6872 14.0931L19.8706 12.3884C19.9684 11.4789 20.033 10.8783 19.9823 10.4999C19.5357 10.4947 19.1359 10.2944 18.8645 9.98013C18.5384 10.1814 18.1122 10.606 17.4705 11.2452C16.9762 11.7375 16.729 11.9837 16.4533 12.0219C16.3005 12.043 16.1449 12.0213 16.0038 11.9592C15.7492 11.847 15.5794 11.5427 15.2399 10.934L13.4505 7.7254C13.241 7.34984 13.0657 7.03559 12.9077 6.78265C12.6353 6.92163 12.3268 7 12 7C11.6732 7 11.3647 6.92163 11.0923 6.78265C10.9343 7.03559 10.759 7.34984 10.5495 7.7254L8.76006 10.934C8.42056 11.5427 8.25081 11.847 7.99621 11.9592C7.85514 12.0213 7.69947 12.043 7.5467 12.0219C7.27097 11.9837 7.02381 11.7375 6.5295 11.2452C5.88785 10.606 5.46157 10.1814 5.13553 9.98013C4.86406 10.2944 4.46434 10.4947 4.01771 10.4999C3.96702 10.8783 4.03162 11.4789 4.12945 12.3884L4.3128 14.0931C4.34376 14.3809 4.37312 14.6644 4.40192 14.9425C4.65422 17.3783 4.86292 19.3931 5.71208 20.1532C6.65817 21 8.07613 21 10.9121 21H13.0879C15.9239 21 17.3418 21 18.2879 20.1532C19.1371 19.3931 19.3458 17.3783 19.5981 14.9425C19.6269 14.6644 19.6562 14.3809 19.6872 14.0931Z" fill={color} fillRule="evenodd" opacity="0.5"/>
	<Path d="M20 10.5C20.8284 10.5 21.5 9.82843 21.5 9C21.5 8.17157 20.8284 7.5 20 7.5C19.1716 7.5 18.5 8.17157 18.5 9C18.5 9.37466 18.6374 9.71724 18.8645 9.98013C19.1359 10.2944 19.5357 10.4947 19.9823 10.4999L20 10.5Z" fill={color}/>
	<Path d="M12 3C10.8954 3 10 3.89543 10 5C10 5.77778 10.444 6.45187 11.0923 6.78265C11.3647 6.92163 11.6732 7 12 7C12.3268 7 12.6353 6.92163 12.9077 6.78265C13.556 6.45187 14 5.77778 14 5C14 3.89543 13.1046 3 12 3Z" fill={color}/>
	<Path d="M2.5 9C2.5 9.82843 3.17157 10.5 4 10.5L4.01771 10.4999C4.46434 10.4947 4.86406 10.2944 5.13553 9.98012C5.36264 9.71724 5.5 9.37466 5.5 9C5.5 8.17157 4.82843 7.5 4 7.5C3.17157 7.5 2.5 8.17157 2.5 9Z" fill={color}/>
	<Path d="M4.84887 18.25C4.75088 17.7997 4.67253 17.2952 4.60278 16.75H19.397C19.3273 17.2952 19.2489 17.7997 19.151 18.25H4.84887Z" fill={color}/>
</Svg>;

export default BoldDuotoneCrown;