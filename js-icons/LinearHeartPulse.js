import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearHeartPulse = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18 12H17.1986C16.3689 12 15.9541 12 15.6102 12.1947C15.2664 12.3894 15.0529 12.7451 14.6261 13.4565L14.5952 13.508C14.1976 14.1707 13.9987 14.5021 13.7095 14.4967C13.4202 14.4912 13.2339 14.1526 12.8615 13.4754L11.1742 10.4076C10.8269 9.77618 10.6533 9.46046 10.3759 9.44549C10.0986 9.43052 9.892 9.7257 9.47875 10.3161L9.19573 10.7204C8.75681 11.3474 8.53734 11.6609 8.21173 11.8305C7.88612 12 7.50342 12 6.73803 12H6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8.96173 19.3707L9.43571 18.7895L9.43571 18.7895L8.96173 19.3707ZM12 5.49877L11.4509 6.00966C11.5928 6.16215 11.7917 6.24877 12 6.24877C12.2083 6.24877 12.4072 6.16215 12.5491 6.00966L12 5.49877ZM15.0383 19.3707L15.5123 19.952L15.5123 19.952L15.0383 19.3707ZM9.43571 18.7895C7.98585 17.6072 6.29293 16.0568 4.96881 14.3598C3.63045 12.6445 2.75 10.8821 2.75 9.26044H1.25C1.25 11.3862 2.37926 13.4793 3.7862 15.2825C5.20736 17.1039 6.99531 18.7349 8.48775 19.952L9.43571 18.7895ZM2.75 9.26044C2.75 6.53057 4.0079 4.70454 5.60065 4.04191C7.17297 3.38778 9.35285 3.75479 11.4509 6.00966L12.5491 4.98787C10.1473 2.40661 7.32719 1.69899 5.02447 2.65699C2.74218 3.60649 1.25 6.07936 1.25 9.26044H2.75ZM15.5123 19.952C17.0047 18.735 18.7926 17.1039 20.2138 15.2825C21.6207 13.4794 22.75 11.3862 22.75 9.2604H21.25C21.25 10.8821 20.3695 12.6445 19.0312 14.3598C17.7071 16.0568 16.0142 17.6072 14.5643 18.7895L15.5123 19.952ZM22.75 9.2604C22.75 6.07926 21.2578 3.60639 18.9755 2.65691C16.6728 1.69894 13.8527 2.40662 11.4509 4.98787L12.5491 6.00966C14.6472 3.75479 16.827 3.38774 18.3994 4.04184C19.9921 4.70444 21.25 6.53045 21.25 9.2604H22.75ZM8.48775 19.952C9.7587 20.9884 10.641 21.75 12 21.75L12 20.25C11.2785 20.25 10.8287 19.9254 9.43571 18.7895L8.48775 19.952ZM14.5643 18.7895C13.1713 19.9254 12.7216 20.25 12 20.25L12 21.75C13.359 21.75 14.2413 20.9884 15.5123 19.952L14.5643 18.7895Z" fill={color}/>
</Svg>;

export default LinearHeartPulse;
