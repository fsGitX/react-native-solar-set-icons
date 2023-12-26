import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearAstronomyRocket = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.5798 15.0077L8.10934 14.4766L8.10934 14.4766L7.5798 15.0077ZM7.57981 9.53078L7.05027 8.99965L7.05027 8.99965L7.57981 9.53078ZM14.4466 16.3769L13.917 15.8458L13.917 15.8458L14.4466 16.3769ZM8.95316 16.3769L8.42362 16.9081L8.42362 16.9081L8.95316 16.3769ZM11.6999 18.3133L11.6999 19.0633L11.6999 18.3133ZM20.2934 10.5476L20.823 11.0788L20.2934 10.5476ZM13.4267 3.70146L13.9562 4.23259L13.9562 4.23259L13.4267 3.70146ZM10.856 14.1696C11.1494 13.8771 11.1501 13.4023 10.8576 13.1089C10.5652 12.8156 10.0903 12.8149 9.79698 13.1073L10.856 14.1696ZM5.57332 11.5312L6.10365 11.0009L6.10286 11.0001L5.57332 11.5312ZM9.91958 7.42196C10.2679 7.64613 10.732 7.5455 10.9561 7.1972C11.1803 6.84889 11.0797 6.3848 10.7314 6.16062L9.91958 7.42196ZM9.69627 6.38632L10.1022 5.75565L10.1022 5.75565L9.69627 6.38632ZM7.12664 5.0678L7.23629 4.32586L7.12664 5.0678ZM2.22514 8.02324L2.75467 8.55437L2.75467 8.55437L2.22514 8.02324ZM5.33941 5.29621L5.62684 5.98894L5.62684 5.98894L5.33941 5.29621ZM2.86314 9.42603L2.58685 10.1233L2.58686 10.1233L2.86314 9.42603ZM2.98636 9.47534L3.27206 8.78189L3.27206 8.78189L2.98636 9.47534ZM4.61259 10.5734L5.14212 10.0423L5.14212 10.0423L4.61259 10.5734ZM4.51839 10.4801L3.99611 11.0184L4.51839 10.4801ZM2.48449 9.276L2.76078 8.57874L2.76078 8.57874L2.48449 9.276ZM12.5 18.5L11.9697 19.0303C11.9813 19.0419 11.9932 19.0531 12.0056 19.0639L12.5 18.5ZM17.8238 13.2319C17.5987 12.8842 17.1344 12.7848 16.7867 13.0099C16.439 13.2351 16.3396 13.6994 16.5647 14.0471L17.8238 13.2319ZM17.6005 14.2668L16.9709 14.6745L16.9709 14.6745L17.6005 14.2668ZM18.923 16.8287L19.6648 16.7184L19.6648 16.7184L18.923 16.8287ZM15.9586 21.7155L16.4882 22.2467L16.4882 22.2467L15.9586 21.7155ZM18.6939 18.6106L19.386 18.8995L18.6939 18.6106ZM14.749 21.5747L15.4457 21.2969L15.4457 21.2969L14.749 21.5747ZM14.2748 20.4828L14.9324 20.1221L14.2748 20.4828ZM13.0229 18.9584L13.5524 18.4273L13.5354 18.4104L13.5173 18.3945L13.0229 18.9584ZM13.8408 19.8249L14.4311 19.3623L13.8408 19.8249ZM15.8746 21.7993L15.3451 21.2682L15.3451 21.2682L15.8746 21.7993ZM5.74956 11.7075L6.44541 11.9873L5.74956 11.7075ZM19.7639 10.0165L13.917 15.8458L14.9761 16.9081L20.823 11.0788L19.7639 10.0165ZM9.48269 15.8458L8.10934 14.4766L7.05027 15.5388L8.42362 16.9081L9.48269 15.8458ZM8.10934 10.0619L13.9562 4.23259L12.8971 3.17034L7.05027 8.99965L8.10934 10.0619ZM17.5467 2.75H18.1156V1.25H17.5467V2.75ZM21.25 5.87277V6.43993H22.75V5.87277H21.25ZM18.1156 2.75C19.0523 2.75 19.6796 2.75158 20.1471 2.81425C20.5932 2.87405 20.7798 2.97688 20.9016 3.09828L21.9607 2.03603C21.5136 1.59027 20.958 1.40953 20.3464 1.32754C19.7561 1.24842 19.01 1.25 18.1156 1.25V2.75ZM22.75 5.87277C22.75 4.98122 22.7516 4.23688 22.6722 3.6478C22.5898 3.03692 22.4081 2.48209 21.9607 2.03603L20.9016 3.09828C21.0231 3.21937 21.1258 3.40453 21.1856 3.84826C21.2484 4.3138 21.25 4.93869 21.25 5.87277H22.75ZM8.10934 14.4766C7.4469 13.8161 7.00467 13.373 6.71875 12.9994C6.44601 12.643 6.38759 12.4397 6.38759 12.2692H4.88759C4.88759 12.9009 5.15288 13.4214 5.52754 13.911C5.88903 14.3833 6.4179 14.9084 7.05027 15.5388L8.10934 14.4766ZM8.42362 16.9081C9.05603 17.5386 9.5826 18.0658 10.0563 18.4262C10.5474 18.7997 11.0684 19.0633 11.6999 19.0633L11.6999 17.5633C11.5268 17.5633 11.3219 17.5042 10.9644 17.2323C10.5896 16.9472 10.1451 16.5062 9.48269 15.8458L8.42362 16.9081ZM20.823 11.0788C21.6215 10.2826 22.1784 9.74613 22.4708 9.04233L21.0856 8.46683C20.9345 8.83059 20.6494 9.13365 19.7639 10.0165L20.823 11.0788ZM21.25 6.43993C21.25 7.68852 21.2367 8.10332 21.0856 8.46683L22.4708 9.04233C22.7633 8.33828 22.75 7.56584 22.75 6.43993H21.25ZM13.9562 4.23259C14.8414 3.35 15.1457 3.06532 15.5114 2.91431L14.9388 1.52788C14.2337 1.81908 13.696 2.3739 12.8971 3.17034L13.9562 4.23259ZM17.5467 1.25C16.4169 1.25 15.6437 1.23679 14.9388 1.52788L15.5114 2.91431C15.8773 2.76321 16.2948 2.75 17.5467 2.75V1.25ZM8.79601 16.2234L10.856 14.1696L9.79698 13.1073L7.73695 15.1612L8.79601 16.2234ZM10.7314 6.16062L10.1022 5.75565L9.29036 7.01699L9.91958 7.42196L10.7314 6.16062ZM10.1022 5.75565C9.48075 5.3557 8.97919 5.03226 8.54751 4.79965C8.1064 4.56196 7.69319 4.39338 7.23629 4.32586L7.017 5.80974C7.2364 5.84217 7.47689 5.92666 7.83597 6.12014C8.20447 6.31871 8.64957 6.60456 9.29036 7.01699L10.1022 5.75565ZM2.75467 8.55437C3.31773 7.99301 3.92167 7.3911 4.46441 6.89598C4.73558 6.64861 4.98252 6.43616 5.19434 6.2729C5.41778 6.10069 5.55951 6.01688 5.62684 5.98894L5.05198 4.60347C4.79474 4.7102 4.52494 4.895 4.27863 5.08484C4.02071 5.28364 3.73971 5.52671 3.45348 5.78782C2.88143 6.30967 2.2528 6.93661 1.69562 7.4921L2.75467 8.55437ZM7.23629 4.32586C6.50162 4.21729 5.7462 4.31543 5.05198 4.60347L5.62684 5.98894C6.07751 5.80195 6.55885 5.74204 7.017 5.80974L7.23629 4.32586ZM2.20821 9.97325L2.58685 10.1233L3.13942 8.72878L2.76078 8.57874L2.20821 9.97325ZM4.08306 11.1045L5.04379 12.0624L6.10286 11.0001L5.14212 10.0423L4.08306 11.1045ZM2.58686 10.1233C2.65049 10.1485 2.67596 10.1586 2.70065 10.1688L3.27206 8.78189C3.23583 8.76696 3.19947 8.75257 3.13942 8.72878L2.58686 10.1233ZM5.14212 10.0423C5.09644 9.99671 5.06877 9.96911 5.04066 9.94183L3.99611 11.0184C4.01525 11.0369 4.03463 11.0562 4.08306 11.1045L5.14212 10.0423ZM2.70065 10.1688C3.18281 10.3674 3.62245 10.6558 3.99611 11.0184L5.04066 9.94183C4.53026 9.4466 3.93001 9.05297 3.27206 8.78189L2.70065 10.1688ZM1.69562 7.4921C0.921826 8.26355 1.19466 9.57164 2.20821 9.97325L2.76078 8.57874C2.75633 8.57698 2.75452 8.57565 2.75424 8.57544C2.75386 8.57517 2.75375 8.57504 2.75362 8.57488C2.75315 8.57431 2.75145 8.57182 2.75051 8.56728C2.74957 8.56274 2.75019 8.55998 2.75028 8.55964C2.75029 8.55962 2.75026 8.55965 2.75038 8.55945C2.75044 8.55935 2.75143 8.5576 2.75467 8.55437L1.69562 7.4921ZM16.5647 14.0471L16.9709 14.6745L18.23 13.8592L17.8238 13.2319L16.5647 14.0471ZM15.4291 21.1844L15.3451 21.2682L16.4041 22.3304L16.4882 22.2467L15.4291 21.1844ZM16.9709 14.6745C17.3846 15.3134 17.6713 15.757 17.8703 16.1243C18.0643 16.4821 18.1488 16.7213 18.1811 16.939L19.6648 16.7184C19.5969 16.2619 19.4275 15.8493 19.189 15.4094C18.9557 14.9789 18.6312 14.4787 18.23 13.8592L16.9709 14.6745ZM16.4882 22.2467C17.0453 21.6912 17.6742 21.0644 18.1976 20.4941C18.4595 20.2087 18.7033 19.9285 18.9028 19.6713C19.0931 19.4258 19.2787 19.1565 19.386 18.8995L18.0018 18.3217C17.974 18.3883 17.8901 18.5293 17.7174 18.7521C17.5536 18.9633 17.3406 19.2095 17.0925 19.4798C16.5959 20.0209 15.9922 20.623 15.4291 21.1844L16.4882 22.2467ZM18.1811 16.939C18.2488 17.3945 18.189 17.8732 18.0018 18.3217L19.386 18.8995C19.6753 18.2065 19.7739 17.4522 19.6648 16.7184L18.1811 16.939ZM13.5173 18.3945L12.9944 17.9361L12.0056 19.0639L12.5284 19.5224L13.5173 18.3945ZM15.4457 21.2969C15.231 20.7584 15.102 20.4313 14.9324 20.1221L13.6173 20.8435C13.7326 21.0537 13.8247 21.2813 14.0523 21.8524L15.4457 21.2969ZM12.4933 19.4896C12.9291 19.9241 13.1025 20.0987 13.2505 20.2875L14.4311 19.3623C14.2136 19.0847 13.9635 18.8371 13.5524 18.4273L12.4933 19.4896ZM14.9324 20.1221C14.7863 19.8556 14.6186 19.6015 14.4311 19.3623L13.2505 20.2875C13.3877 20.4626 13.5104 20.6485 13.6173 20.8435L14.9324 20.1221ZM16.6637 8.99965C16.198 9.46403 15.4419 9.46403 14.9761 8.99965L13.917 10.0619C14.9682 11.1099 16.6716 11.1099 17.7228 10.0619L16.6637 8.99965ZM14.9761 8.99965C14.5116 8.53652 14.5116 7.78657 14.9761 7.32344L13.917 6.26119C12.8646 7.31047 12.8646 9.01262 13.917 10.0619L14.9761 8.99965ZM14.9761 7.32344C15.4419 6.85907 16.198 6.85907 16.6637 7.32344L17.7228 6.26119C16.6716 5.21315 14.9682 5.21315 13.917 6.26119L14.9761 7.32344ZM16.6637 7.32344C17.1283 7.78657 17.1283 8.53652 16.6637 8.99965L17.7228 10.0619C18.7752 9.01262 18.7752 7.31047 17.7228 6.26119L16.6637 7.32344ZM15.3451 21.2682C15.3514 21.2619 15.3619 21.2554 15.3735 21.2522C15.3833 21.2494 15.3907 21.2497 15.3959 21.2508C15.401 21.2518 15.4096 21.2546 15.4199 21.2628C15.4316 21.2722 15.441 21.2852 15.4457 21.2969L14.0523 21.8524C14.4363 22.8155 15.6842 23.0482 16.4041 22.3304L15.3451 21.2682ZM13.917 15.8458C13.4057 16.3556 13.021 16.7386 12.6904 17.0241C12.3586 17.3106 12.135 17.4504 11.9596 17.515L12.478 18.9226C12.9059 18.765 13.2918 18.4867 13.6708 18.1593C14.0512 17.8308 14.4787 17.404 14.9761 16.9081L13.917 15.8458ZM11.9596 17.515C11.8672 17.5491 11.7847 17.5633 11.6999 17.5633L11.6999 19.0633C11.9706 19.0633 12.2282 19.0146 12.478 18.9226L11.9596 17.515ZM13.0303 17.9697L12.7491 17.6885L11.6885 18.7491L11.9697 19.0303L13.0303 17.9697ZM7.05027 8.99965C6.56479 9.48367 6.14564 9.90103 5.82022 10.2724C5.49615 10.6423 5.21898 11.0167 5.05372 11.4277L6.44541 11.9873C6.51639 11.8108 6.66238 11.5874 6.94839 11.261C7.23305 10.9361 7.6109 10.5588 8.10934 10.0619L7.05027 8.99965ZM5.05372 11.4277C4.94582 11.696 4.88759 11.9743 4.88759 12.2692H6.38759C6.38759 12.1791 6.40401 12.0902 6.44541 11.9873L5.05372 11.4277ZM5.04299 12.0616L5.21923 12.2378L6.27989 11.1771L6.10365 11.0009L5.04299 12.0616Z" fill={color}/>
</Svg>;

export default LinearAstronomyRocket;
