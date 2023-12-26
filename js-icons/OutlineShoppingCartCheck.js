import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineShoppingCartCheck = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15.5433 9.51745C15.829 9.2175 15.8174 8.74277 15.5174 8.4571C15.2175 8.17144 14.7428 8.18302 14.4571 8.48296L12.1431 10.9127L11.5433 10.283C11.2576 9.98302 10.7829 9.97144 10.483 10.2571C10.183 10.5428 10.1714 11.0175 10.4571 11.3174L11.6 12.5174C11.7415 12.6661 11.9378 12.7502 12.1431 12.7502C12.3483 12.7502 12.5446 12.6661 12.6862 12.5174L15.5433 9.51745Z" fill={color}/>
	<Path d="M1.29266 2.75145C1.43005 2.36068 1.8582 2.15527 2.24896 2.29266L2.55036 2.39862C3.16689 2.61536 3.69052 2.79943 4.10261 3.00163C4.54324 3.21784 4.92109 3.48417 5.20527 3.90003C5.48725 4.31268 5.60367 4.76539 5.6574 5.26177C5.66124 5.29731 5.6648 5.33345 5.66809 5.3702L17.1203 5.3702C17.9389 5.37019 18.7735 5.37018 19.4606 5.44698C19.8103 5.48608 20.1569 5.54838 20.4634 5.65607C20.7639 5.76166 21.0942 5.93456 21.3292 6.23998C21.711 6.73637 21.7777 7.31438 21.7416 7.90058C21.7071 8.4587 21.5686 9.15259 21.4039 9.97747L21.3935 10.0298L21.3925 10.0344L20.8836 12.5036C20.7339 13.23 20.6079 13.8413 20.4455 14.3234C20.2731 14.8349 20.0341 15.2844 19.6076 15.632C19.1811 15.9796 18.6925 16.1229 18.1568 16.1884C17.6518 16.2502 17.0278 16.2502 16.2862 16.2502L10.8804 16.2502C9.53464 16.2502 8.44479 16.2502 7.58656 16.1285C6.69032 16.0015 5.93752 15.7288 5.34366 15.1024C4.79742 14.5263 4.50529 13.9146 4.35897 13.0603C4.22191 12.2601 4.20828 11.2127 4.20828 9.7602V7.03856C4.20828 6.29862 4.20726 5.8034 4.16611 5.42319C4.12678 5.05984 4.05708 4.87842 3.96682 4.74634C3.87876 4.61747 3.74509 4.49704 3.44186 4.34826C3.11902 4.18985 2.68026 4.0343 2.01266 3.79958L1.75145 3.70775C1.36068 3.57036 1.15527 3.14221 1.29266 2.75145ZM5.70828 6.8702L5.70828 9.7602C5.70828 11.2492 5.72628 12.1581 5.83744 12.8071C5.93933 13.402 6.11202 13.7327 6.43219 14.0704C6.70473 14.3578 7.08235 14.542 7.79716 14.6434C8.53783 14.7484 9.5209 14.7502 10.9377 14.7502H16.2406C17.0399 14.7502 17.5714 14.7489 17.9746 14.6996C18.3573 14.6527 18.5348 14.5712 18.66 14.4692C18.7853 14.3672 18.9009 14.2097 19.024 13.8444C19.1537 13.4595 19.2623 12.9391 19.4237 12.1563L19.9225 9.73615L19.9229 9.73393C20.1005 8.844 20.217 8.25174 20.2444 7.80818C20.2704 7.38672 20.2043 7.23952 20.1429 7.15811C20.1367 7.15284 20.0931 7.11589 19.9661 7.07125C19.8107 7.01664 19.5895 6.97074 19.2939 6.9377C18.6991 6.87121 17.9454 6.8702 17.089 6.8702H5.70828Z" fill={color} fillRule="evenodd"/>
	<Path d="M5.2502 19.5002C5.2502 20.7428 6.25756 21.7502 7.5002 21.7502C8.74285 21.7502 9.7502 20.7428 9.7502 19.5002C9.7502 18.2576 8.74285 17.2502 7.5002 17.2502C6.25756 17.2502 5.2502 18.2576 5.2502 19.5002ZM7.5002 20.2502C7.08599 20.2502 6.7502 19.9144 6.7502 19.5002C6.7502 19.086 7.08599 18.7502 7.5002 18.7502C7.91442 18.7502 8.2502 19.086 8.2502 19.5002C8.2502 19.9144 7.91442 20.2502 7.5002 20.2502Z" fill={color} fillRule="evenodd"/>
	<Path d="M14.25 19.5003C14.25 20.743 15.2574 21.7503 16.5 21.7503C17.7426 21.7503 18.75 20.743 18.75 19.5003C18.75 18.2577 17.7426 17.2503 16.5 17.2503C15.2574 17.2503 14.25 18.2577 14.25 19.5003ZM16.5 20.2503C16.0858 20.2503 15.75 19.9145 15.75 19.5003C15.75 19.0861 16.0858 18.7503 16.5 18.7503C16.9142 18.7503 17.25 19.0861 17.25 19.5003C17.25 19.9145 16.9142 20.2503 16.5 20.2503Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineShoppingCartCheck;
