import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldFacesEmojiFunnySquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.47995 6.50359C1.53691 8.13698 2.09246 10.2103 3.20356 14.357C4.31466 18.5037 4.87021 20.577 6.50359 21.5201C8.13698 22.4631 10.2103 21.9075 14.357 20.7964C18.5037 19.6853 20.577 19.1298 21.5201 17.4964C22.4631 15.863 21.9075 13.7897 20.7964 9.643C19.6853 5.49632 19.1298 3.42298 17.4964 2.47995C15.863 1.53691 13.7897 2.09246 9.643 3.20356C5.49632 4.31466 3.42298 4.87021 2.47995 6.50359ZM8.18526 15.7507C8.28596 15.3489 8.69331 15.1049 9.09509 15.2056C10.2254 15.4889 11.5234 15.4924 12.8412 15.1393C14.1589 14.7862 15.2813 14.1341 16.1185 13.3236C16.4161 13.0355 16.8909 13.0432 17.179 13.3408C17.4671 13.6384 17.4594 14.1133 17.1618 14.4014C16.8143 14.7378 16.4298 15.0492 16.0128 15.3302L16.1708 15.6519C16.5395 16.403 16.2223 17.3105 15.4661 17.6684C14.7249 18.0193 13.8393 17.7099 13.478 16.9737L13.2818 16.574L13.2294 16.5881C11.674 17.0049 10.1168 17.008 8.73041 16.6606C8.32863 16.5598 8.08455 16.1525 8.18526 15.7507ZM15.4755 9.51583C15.6899 10.316 15.4312 11.0806 14.8978 11.2235C14.3643 11.3665 13.758 10.8337 13.5436 10.0335C13.3292 9.23327 13.5879 8.46871 14.1213 8.32577C14.6548 8.18282 15.2611 8.71564 15.4755 9.51583ZM9.10222 12.7765C9.63569 12.6335 9.89433 11.8689 9.67992 11.0687C9.46551 10.2686 8.85923 9.73574 8.32577 9.87868C7.7923 10.0216 7.53366 10.7862 7.74807 11.5864C7.96248 12.3866 8.56876 12.9194 9.10222 12.7765Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldFacesEmojiFunnySquare;
