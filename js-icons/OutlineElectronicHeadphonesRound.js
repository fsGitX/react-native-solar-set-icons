import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineElectronicHeadphonesRound = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12V14.7927C21.8282 14.765 21.9123 14.75 22 14.75C22.4142 14.75 22.75 15.0858 22.75 15.5V17.5C22.75 17.9142 22.4142 18.25 22 18.25C21.9094 18.25 21.8225 18.2339 21.742 18.2045C21.7365 18.4049 21.7272 18.5895 21.7116 18.7587C21.6712 19.194 21.5841 19.5954 21.3689 19.9712C21.2257 20.2213 21.0455 20.448 20.8341 20.6429C20.5137 20.9382 20.1423 21.106 19.7312 21.2306C19.3426 21.3484 18.86 21.4436 18.2884 21.5563L18.2142 21.5709C17.8239 21.6479 17.4695 21.7178 17.1745 21.7411C16.8571 21.7661 16.4993 21.7486 16.1565 21.5557C15.9536 21.4415 15.7762 21.288 15.6334 21.1053C15.3961 20.8017 15.3167 20.4552 15.2824 20.1362C15.2499 19.8354 15.25 19.4644 15.25 19.0479V13.8117C15.25 13.4578 15.25 13.1398 15.2754 12.8788C15.3025 12.6002 15.3647 12.2991 15.5481 12.0202C15.6991 11.7905 15.9016 11.5978 16.1411 11.4597C16.4362 11.2896 16.7438 11.252 17.0215 11.2501C17.2782 11.2483 17.5863 11.2787 17.9223 11.3119L17.9923 11.3188C18.578 11.3765 19.0707 11.4251 19.47 11.5042C19.7437 11.5584 20.0031 11.632 20.2462 11.7485C20.1133 7.30853 16.4722 3.75 12 3.75C7.52777 3.75 3.88668 7.30853 3.75376 11.7485C3.99693 11.632 4.25631 11.5584 4.52996 11.5042C4.92926 11.4251 5.42201 11.3765 6.00766 11.3188L6.07774 11.3119C6.41372 11.2787 6.7218 11.2483 6.97846 11.2501C7.25619 11.252 7.56376 11.2896 7.85887 11.4597C8.09845 11.5978 8.30087 11.7905 8.45194 12.0202C8.63531 12.2991 8.6975 12.6002 8.72463 12.8788C8.75005 13.1398 8.75003 13.4578 8.75 13.8117V19.0479C8.75003 19.4644 8.75006 19.8354 8.71765 20.1362C8.68328 20.4552 8.60391 20.8017 8.36662 21.1053C8.22384 21.288 8.04645 21.4415 7.84347 21.5557C7.50067 21.7486 7.14291 21.7661 6.82548 21.7411C6.53055 21.7178 6.17612 21.6479 5.78584 21.5709L5.71157 21.5563C5.13998 21.4436 4.65744 21.3484 4.26885 21.2306C3.85769 21.106 3.48634 20.9382 3.1659 20.6429C2.95448 20.448 2.77432 20.2213 2.63113 19.9712C2.41589 19.5954 2.32879 19.194 2.28845 18.7587C2.27277 18.5895 2.26348 18.4049 2.25798 18.2045C2.17754 18.2339 2.09065 18.25 2 18.25C1.58579 18.25 1.25 17.9142 1.25 17.5V15.5C1.25 15.0858 1.58579 14.75 2 14.75C2.08766 14.75 2.17181 14.765 2.25 14.7927V12ZM3.75 17.1933C3.75 17.8449 3.75075 18.2825 3.78205 18.6203C3.8122 18.9456 3.86609 19.1093 3.93282 19.2259C4.00072 19.3444 4.08514 19.4502 4.18242 19.5398C4.27434 19.6245 4.41013 19.7061 4.70398 19.7951C5.01235 19.8886 5.42073 19.97 6.03738 20.0916C6.47899 20.1787 6.74625 20.2302 6.94334 20.2457C7.04961 20.2541 7.09804 20.2481 7.11422 20.2448C7.13915 20.2297 7.16292 20.2092 7.18363 20.183C7.1898 20.1709 7.21084 20.1188 7.22628 19.9755C7.24897 19.7649 7.25 19.476 7.25 19.0104V13.8446C7.25 13.4474 7.24917 13.2036 7.23169 13.0241C7.21948 12.8988 7.2026 12.8534 7.19802 12.8434C7.17461 12.8081 7.1457 12.7811 7.11498 12.7623C7.10182 12.7588 7.06058 12.7507 6.96825 12.75C6.80038 12.7489 6.57237 12.7704 6.19054 12.808C5.55982 12.8702 5.14042 12.9124 4.8214 12.9756C4.51569 13.0362 4.37392 13.1037 4.27863 13.1755C4.1388 13.2808 4.01933 13.4167 3.92927 13.5759C3.86481 13.6899 3.81135 13.8541 3.78152 14.1848C3.75071 14.5264 3.75 14.9699 3.75 15.6276V17.1933ZM20.25 15.6276C20.25 14.9699 20.2493 14.5264 20.2185 14.1848C20.1886 13.8541 20.1352 13.6899 20.0707 13.5759C19.9807 13.4167 19.8612 13.2808 19.7214 13.1755C19.6261 13.1037 19.4843 13.0362 19.1786 12.9756C18.8596 12.9124 18.4402 12.8702 17.8095 12.808C17.4276 12.7704 17.1996 12.7489 17.0318 12.75C16.9394 12.7507 16.8982 12.7588 16.885 12.7623C16.8543 12.7811 16.8254 12.8081 16.802 12.8434C16.7974 12.8534 16.7805 12.8988 16.7683 13.0241C16.7508 13.2036 16.75 13.4474 16.75 13.8446V19.0104C16.75 19.476 16.751 19.7649 16.7737 19.9755C16.7892 20.1188 16.8102 20.1709 16.8164 20.183C16.8371 20.2092 16.8609 20.2297 16.8858 20.2448C16.902 20.2481 16.9504 20.2541 17.0567 20.2457C17.2538 20.2302 17.521 20.1787 17.9626 20.0916C18.5793 19.97 18.9876 19.8886 19.296 19.7951C19.5899 19.7061 19.7257 19.6245 19.8176 19.5398C19.9149 19.4502 19.9993 19.3444 20.0672 19.2259C20.1339 19.1093 20.1878 18.9456 20.218 18.6203C20.2493 18.2825 20.25 17.8449 20.25 17.1933V15.6276Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineElectronicHeadphonesRound;
