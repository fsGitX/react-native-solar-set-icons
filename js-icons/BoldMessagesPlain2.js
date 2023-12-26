import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldMessagesPlain2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17.4975 18.4851L20.6281 9.09378C21.419 6.72107 21.9594 5.1 21.9978 3.97919C22.0108 3.60165 21.5845 3.47624 21.3173 3.74336L6.85855 18.2022C6.62519 18.4355 6.6807 18.8286 6.99826 18.9185C7.02946 18.9273 7.0609 18.9356 7.09257 18.9433C7.59254 19.0657 8.24578 18.977 9.5522 18.7997L9.62363 18.79C9.99191 18.74 10.1761 18.715 10.3529 18.7257C10.6738 18.7451 10.9838 18.8496 11.251 19.0286C11.3981 19.1271 11.5295 19.2586 11.7923 19.5213L12.0436 19.7726C13.5539 21.2828 14.309 22.0379 15.1101 21.9986C15.3309 21.9877 15.5479 21.9365 15.7503 21.8475C16.4844 21.5244 16.8221 20.5113 17.4975 18.4851Z" fill={color}/>
	<Path d="M14.906 3.37194L5.57477 6.48223C3.49295 7.17615 2.45203 7.5231 2.13608 8.28642C2.06182 8.46582 2.01692 8.65601 2.00311 8.84968C1.94433 9.6737 2.72018 10.4495 4.27188 12.0012L4.55451 12.2838C4.80921 12.5385 4.93655 12.6658 5.03282 12.8076C5.22269 13.0871 5.33046 13.4143 5.34393 13.752C5.35076 13.9232 5.32403 14.1013 5.27057 14.4575C5.07488 15.7613 4.97703 16.4131 5.0923 16.9148C5.09632 16.9322 5.1005 16.9497 5.10484 16.967C5.18629 17.292 5.58551 17.3539 5.82242 17.117L20.2567 2.68271C20.5238 2.41559 20.3984 1.9893 20.0209 2.00224C18.9 2.04066 17.2788 2.58102 14.906 3.37194Z" fill={color}/>
</Svg>;

export default BoldMessagesPlain2;
