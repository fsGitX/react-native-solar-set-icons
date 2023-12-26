import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenRocket = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.57991 15.0077L8.10944 14.4766L8.10944 14.4766L7.57991 15.0077ZM7.57991 9.53078L7.05038 8.99965L7.05037 8.99965L7.57991 9.53078ZM14.4467 16.3769L14.9762 16.9081L14.9762 16.9081L14.4467 16.3769ZM8.95326 16.3769L8.42373 16.9081L8.42373 16.9081L8.95326 16.3769ZM11.7 18.3133L11.7 19.0633L11.7 18.3133ZM20.2935 10.5476L19.764 10.0165L19.764 10.0165L20.2935 10.5476ZM14.9389 1.52788C14.5561 1.68599 14.3739 2.12452 14.532 2.50738C14.6901 2.89023 15.1286 3.07242 15.5115 2.91431L14.9389 1.52788ZM7.73705 15.1612C7.44372 15.4536 7.443 15.9285 7.73546 16.2219C8.02791 16.5152 8.50278 16.5159 8.79612 16.2234L7.73705 15.1612ZM10.8561 14.1696C11.1495 13.8771 11.1502 13.4023 10.8577 13.1089C10.5653 12.8156 10.0904 12.8149 9.79708 13.1073L10.8561 14.1696ZM12.2189 18.2188L12.4781 18.9226L12.4781 18.9226L12.2189 18.2188ZM5.74966 11.7075L5.05382 11.4277L5.74966 11.7075ZM13.0296 5.15647C13.323 4.86402 13.3237 4.38914 13.0312 4.09581C12.7388 3.80248 12.2639 3.80176 11.9706 4.09422L13.0296 5.15647ZM19.764 10.0165L13.9171 15.8458L14.9762 16.9081L20.8231 11.0788L19.764 10.0165ZM9.48279 15.8458L8.10944 14.4766L7.05037 15.5388L8.42373 16.9081L9.48279 15.8458ZM17.5468 2.75H18.1157V1.25H17.5468V2.75ZM21.2501 5.87277V6.43993H22.7501V5.87277H21.2501ZM18.1157 2.75C19.0524 2.75 19.6797 2.75158 20.1472 2.81425C20.5933 2.87405 20.7799 2.97688 20.9017 3.09828L21.9608 2.03603C21.5137 1.59028 20.9581 1.40953 20.3465 1.32754C19.7562 1.24842 19.0101 1.25 18.1157 1.25V2.75ZM22.7501 5.87277C22.7501 4.98122 22.7517 4.23688 22.6723 3.6478C22.5899 3.03692 22.4082 2.48209 21.9608 2.03603L20.9017 3.09828C21.0232 3.21937 21.1259 3.40454 21.1857 3.84826C21.2485 4.3138 21.2501 4.93869 21.2501 5.87277H22.7501ZM8.10944 14.4766C7.44701 13.8161 7.00477 13.373 6.71885 12.9994C6.44611 12.643 6.3877 12.4397 6.3877 12.2692H4.8877C4.8877 12.9009 5.15298 13.4214 5.52764 13.911C5.88913 14.3833 6.418 14.9084 7.05037 15.5388L8.10944 14.4766ZM8.42373 16.9081C9.05613 17.5386 9.58271 18.0658 10.0564 18.4262C10.5475 18.7997 11.0685 19.0633 11.7 19.0633L11.7 17.5633C11.5269 17.5633 11.322 17.5042 10.9646 17.2323C10.5897 16.9472 10.1452 16.5062 9.48279 15.8458L8.42373 16.9081ZM20.8231 11.0788C21.6216 10.2826 22.1785 9.74613 22.4709 9.04233L21.0857 8.46683C20.9346 8.83059 20.6495 9.13365 19.764 10.0165L20.8231 11.0788ZM21.2501 6.43993C21.2501 7.68852 21.2368 8.10332 21.0857 8.46683L22.4709 9.04233C22.7634 8.33828 22.7501 7.56584 22.7501 6.43993H21.2501ZM17.5468 1.25C16.417 1.25 15.6438 1.23679 14.9389 1.52788L15.5115 2.91431C15.8774 2.76321 16.2949 2.75 17.5468 2.75V1.25ZM8.79612 16.2234L10.8561 14.1696L9.79708 13.1073L7.73705 15.1612L8.79612 16.2234ZM13.9171 15.8458C13.4058 16.3556 13.0211 16.7386 12.6905 17.0241C12.3587 17.3106 12.1351 17.4504 11.9597 17.515L12.4781 18.9226C12.906 18.765 13.2919 18.4867 13.6709 18.1593C14.0513 17.8308 14.4788 17.404 14.9762 16.9081L13.9171 15.8458ZM11.9597 17.515C11.8673 17.5491 11.7848 17.5633 11.7 17.5633L11.7 19.0633C11.9707 19.0633 12.2283 19.0146 12.4781 18.9226L11.9597 17.515ZM7.05037 8.99965C6.5649 9.48367 6.14575 9.90103 5.82033 10.2724C5.49625 10.6422 5.21908 11.0167 5.05382 11.4277L6.44551 11.9873C6.51649 11.8108 6.66249 11.5874 6.94849 11.261C7.23315 10.9361 7.611 10.5588 8.10944 10.0619L7.05037 8.99965ZM5.05382 11.4277C4.94592 11.696 4.8877 11.9743 4.8877 12.2692H6.3877C6.3877 12.1791 6.40412 12.0902 6.44551 11.9873L5.05382 11.4277ZM8.10944 10.0619L13.0296 5.15647L11.9706 4.09422L7.05038 8.99965L8.10944 10.0619Z" fill={color}/>
	<Path d="M5.57332 11.5317L6.10365 11.0013L6.10286 11.0005L5.57332 11.5317ZM9.91957 7.42237C10.2679 7.64655 10.732 7.54592 10.9561 7.19761C11.1803 6.84931 11.0797 6.38522 10.7314 6.16104L9.91957 7.42237ZM9.69627 6.38673L10.1022 5.75607L10.1022 5.75607L9.69627 6.38673ZM7.12664 5.06822L7.23629 4.32628L7.12664 5.06822ZM2.22514 8.02365L2.75467 8.55479L2.75467 8.55479L2.22514 8.02365ZM5.33941 5.29662L5.62683 5.98936L5.62683 5.98936L5.33941 5.29662ZM2.86314 9.42645L2.58685 10.1237L2.58686 10.1237L2.86314 9.42645ZM2.70065 10.1692C3.08364 10.327 3.52202 10.1444 3.67981 9.76146C3.8376 9.37848 3.65504 8.94009 3.27206 8.7823L2.70065 10.1692ZM2.48449 9.27641L2.76078 8.57916L2.76078 8.57916L2.48449 9.27641ZM5.21923 12.2382C5.51212 12.5311 5.987 12.5311 6.27989 12.2382C6.57278 11.9453 6.57278 11.4705 6.27989 11.1776L5.21923 12.2382ZM5.62249 10.5216C5.32916 10.2291 4.85428 10.2299 4.56183 10.5232C4.26938 10.8165 4.27009 11.2914 4.56342 11.5839L5.62249 10.5216ZM10.7314 6.16104L10.1022 5.75607L9.29036 7.0174L9.91957 7.42237L10.7314 6.16104ZM10.1022 5.75607C9.48075 5.35611 8.97919 5.03268 8.54751 4.80007C8.1064 4.56238 7.69319 4.3938 7.23629 4.32628L7.017 5.81016C7.2364 5.84258 7.47689 5.92707 7.83597 6.12056C8.20447 6.31913 8.64957 6.60498 9.29036 7.0174L10.1022 5.75607ZM2.75467 8.55479C3.31773 7.99343 3.92167 7.39151 4.46441 6.8964C4.73558 6.64902 4.98252 6.43658 5.19434 6.27332C5.41778 6.1011 5.55951 6.01729 5.62683 5.98936L5.05198 4.60388C4.79474 4.71062 4.52494 4.89541 4.27863 5.08526C4.02071 5.28406 3.73971 5.52712 3.45348 5.78823C2.88143 6.31009 2.2528 6.93703 1.69562 7.49252L2.75467 8.55479ZM7.23629 4.32628C6.50161 4.2177 5.7462 4.31584 5.05198 4.60388L5.62683 5.98936C6.0775 5.80237 6.55885 5.74245 7.017 5.81016L7.23629 4.32628ZM2.20821 9.97367L2.58685 10.1237L3.13942 8.72919L2.76078 8.57916L2.20821 9.97367ZM2.58686 10.1237C2.65048 10.1489 2.67596 10.159 2.70065 10.1692L3.27206 8.7823C3.23583 8.76738 3.19947 8.75298 3.13942 8.72919L2.58686 10.1237ZM1.69562 7.49252C0.921827 8.26397 1.19466 9.57205 2.20821 9.97367L2.76078 8.57916C2.75633 8.57739 2.75452 8.57606 2.75424 8.57586C2.75386 8.57558 2.75375 8.57546 2.75362 8.57529C2.75315 8.57473 2.75145 8.57223 2.75051 8.56769C2.74957 8.56316 2.75019 8.5604 2.75028 8.56006C2.75029 8.56003 2.75026 8.56007 2.75038 8.55986C2.75044 8.55976 2.75143 8.55801 2.75467 8.55479L1.69562 7.49252ZM5.04299 12.062L5.21923 12.2382L6.27989 11.1776L6.10365 11.0013L5.04299 12.062ZM4.56342 11.5839L5.04379 12.0628L6.10286 11.0005L5.62249 10.5216L4.56342 11.5839Z" fill={color}/>
	<Path d="M12.4995 18.5001L11.9691 19.0305C11.9807 19.0421 11.9927 19.0533 12.005 19.0641L12.4995 18.5001ZM17.8233 13.232C17.5982 12.8843 17.1338 12.785 16.7861 13.0101C16.4384 13.2352 16.3391 13.6996 16.5642 14.0473L17.8233 13.232ZM17.6 14.267L16.9704 14.6746L16.9704 14.6746L17.6 14.267ZM18.9224 16.8289L19.6643 16.7186L18.9224 16.8289ZM15.9581 21.7157L15.4286 21.1846L15.4286 21.1846L15.9581 21.7157ZM18.6933 18.6108L18.0012 18.3219L18.0012 18.3219L18.6933 18.6108ZM15.4452 21.2971C15.2918 20.9123 14.8555 20.7247 14.4708 20.8781C14.086 21.0315 13.8984 21.4678 14.0518 21.8525L15.4452 21.2971ZM12.5279 19.5225C12.8394 19.7956 13.3132 19.7645 13.5863 19.453C13.8594 19.1416 13.8282 18.6677 13.5168 18.3947L12.5279 19.5225ZM15.8741 21.7995L16.4036 22.3306L16.4036 22.3306L15.8741 21.7995ZM12.7486 17.6886C12.4557 17.3957 11.9808 17.3957 11.6879 17.6886C11.395 17.9815 11.395 18.4564 11.6879 18.7493L12.7486 17.6886ZM16.5642 14.0473L16.9704 14.6746L18.2295 13.8593L17.8233 13.232L16.5642 14.0473ZM15.4286 21.1846L15.3445 21.2684L16.4036 22.3306L16.4877 22.2468L15.4286 21.1846ZM16.9704 14.6746C17.3841 15.3135 17.6707 15.7572 17.8698 16.1244C18.0638 16.4823 18.1482 16.7214 18.1806 16.9392L19.6643 16.7186C19.5964 16.2621 19.427 15.8495 19.1885 15.4096C18.9551 14.979 18.6306 14.4789 18.2295 13.8593L16.9704 14.6746ZM16.4877 22.2468C17.0448 21.6913 17.6736 21.0645 18.1971 20.4942C18.459 20.2088 18.7028 19.9287 18.9022 19.6715C19.0926 19.4259 19.2782 19.1567 19.3855 18.8997L18.0012 18.3219C17.9734 18.3884 17.8896 18.5295 17.7168 18.7523C17.5531 18.9634 17.3401 19.2096 17.0919 19.48C16.5953 20.0211 15.9916 20.6232 15.4286 21.1846L16.4877 22.2468ZM18.1806 16.9392C18.2483 17.3947 18.1884 17.8734 18.0012 18.3219L19.3855 18.8997C19.6747 18.2067 19.7734 17.4524 19.6643 16.7186L18.1806 16.9392ZM13.5168 18.3947L12.9939 17.9362L12.005 19.0641L12.5279 19.5225L13.5168 18.3947ZM15.3445 21.2684C15.3509 21.2621 15.3614 21.2556 15.3729 21.2523C15.3827 21.2495 15.3901 21.2499 15.3953 21.2509C15.4005 21.2519 15.4091 21.2548 15.4193 21.263C15.4311 21.2724 15.4405 21.2853 15.4452 21.2971L14.0518 21.8525C14.4357 22.8156 15.6837 23.0484 16.4036 22.3306L15.3445 21.2684ZM13.0298 17.9698L12.7486 17.6886L11.6879 18.7493L11.9691 19.0305L13.0298 17.9698Z" fill={color}/>
	<Path d="M13.917 10.6287C14.2103 10.9212 14.6852 10.9205 14.9777 10.6271C15.2701 10.3338 15.2694 9.85894 14.9761 9.56648L13.917 10.6287ZM16.6637 9.56648C16.3704 9.85894 16.3697 10.3338 16.6621 10.6271C16.9546 10.9205 17.4294 10.9212 17.7228 10.6287L16.6637 9.56648ZM17.7228 6.82802C16.6716 5.77998 14.9682 5.77998 13.917 6.82802L14.9761 7.89027C15.4419 7.4259 16.1979 7.4259 16.6637 7.89027L17.7228 6.82802ZM13.917 6.82802C12.8646 7.8773 12.8646 9.57946 13.917 10.6287L14.9761 9.56648C14.5116 9.10335 14.5116 8.3534 14.9761 7.89027L13.917 6.82802ZM17.7228 10.6287C18.7752 9.57946 18.7752 7.8773 17.7228 6.82802L16.6637 7.89027C17.1282 8.3534 17.1282 9.10335 16.6637 9.56648L17.7228 10.6287Z" fill={color}/>
</Svg>;

export default BrokenRocket;