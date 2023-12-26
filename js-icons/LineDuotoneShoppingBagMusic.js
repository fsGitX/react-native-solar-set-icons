import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneShoppingBagMusic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.74169 20.5545C4.94131 22 7.17402 22 11.6394 22H12.3606C16.826 22 19.0587 22 20.2584 20.5545M3.74169 20.5545C2.54207 19.1091 2.95353 16.9146 3.77645 12.5257C4.36167 9.40452 4.65428 7.84393 5.76518 6.92196M3.74169 20.5545V20.5545ZM20.2584 20.5545C21.458 19.1091 21.0465 16.9146 20.2236 12.5257C19.6384 9.40452 19.3458 7.84393 18.2349 6.92196M20.2584 20.5545V20.5545ZM18.2349 6.92196C17.124 6 15.5362 6 12.3606 6H11.6394C8.46386 6 6.87608 6 5.76518 6.92196M18.2349 6.92196V6.92196ZM5.76518 6.92196V6.92196Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12.7416 10.6294L12.4062 9.95854L12.4062 9.95854L12.7416 10.6294ZM14.0584 9.971L13.7229 9.30018L13.7229 9.30018L14.0584 9.971ZM13.9416 13.0294L13.6062 12.3585L13.6062 12.3585L13.9416 13.0294ZM12.0598 12.7227L12.7649 12.4673L12.7649 12.4673L12.0598 12.7227ZM13.1159 13.3754L13.029 12.6305L13.029 12.6305L13.1159 13.3754ZM15.9822 11.5701L16.7188 11.7111L16.7188 11.7111L15.9822 11.5701ZM15.6074 12.1765L16.0629 12.7723L16.0629 12.7723L15.6074 12.1765ZM14.8841 9.62495L14.971 10.3699L14.971 10.3699L14.8841 9.62495ZM15.9402 10.2776L15.2351 10.5331L15.2351 10.5331L15.9402 10.2776ZM12.3926 10.8238L12.8482 11.4196L12.8482 11.4196L12.3926 10.8238ZM12.0178 11.4302L11.2812 11.2892L11.2812 11.2892L12.0178 11.4302ZM11.25 17.0002C11.25 17.6905 10.6904 18.2502 10 18.2502V19.7502C11.5188 19.7502 12.75 18.519 12.75 17.0002H11.25ZM10 18.2502C9.30964 18.2502 8.75 17.6905 8.75 17.0002H7.25C7.25 18.519 8.48122 19.7502 10 19.7502V18.2502ZM8.75 17.0002C8.75 16.3098 9.30964 15.7502 10 15.7502V14.2502C8.48122 14.2502 7.25 15.4814 7.25 17.0002H8.75ZM10 15.7502C10.6904 15.7502 11.25 16.3098 11.25 17.0002H12.75C12.75 15.4814 11.5188 14.2502 10 14.2502V15.7502ZM12.75 17.0002V12.0002H11.25V17.0002H12.75ZM13.0771 11.3002L14.3938 10.6418L13.7229 9.30018L12.4062 9.95854L13.0771 11.3002ZM14.9229 11.7002L13.6062 12.3585L14.2771 13.7002L15.5938 13.0418L14.9229 11.7002ZM11.25 11.8294C11.25 12.0639 11.2498 12.2693 11.2585 12.4356C11.2672 12.6 11.2866 12.7903 11.3546 12.9781L12.7649 12.4673C12.7732 12.4901 12.7627 12.4765 12.7564 12.3568C12.7502 12.2392 12.75 12.0804 12.75 11.8294H11.25ZM13.6062 12.3585C13.3817 12.4708 13.2396 12.5416 13.1316 12.5887C13.0217 12.6366 13.0049 12.6333 13.029 12.6305L13.2028 14.1204C13.4012 14.0972 13.5801 14.0295 13.731 13.9637C13.8837 13.8971 14.0673 13.8051 14.2771 13.7002L13.6062 12.3585ZM11.3546 12.9781C11.6311 13.7415 12.3963 14.2144 13.2028 14.1204L13.029 12.6305C12.9138 12.6439 12.8044 12.5763 12.7649 12.4673L11.3546 12.9781ZM15.25 11.171C15.25 11.2781 15.2499 11.3392 15.2482 11.3855C15.2468 11.427 15.2446 11.4341 15.2455 11.4291L16.7188 11.7111C16.7532 11.5314 16.75 11.3447 16.75 11.171H15.25ZM15.5938 13.0418C15.7491 12.9642 15.9176 12.8835 16.0629 12.7723L15.1518 11.5807C15.1559 11.5777 15.1505 11.5828 15.114 11.6027C15.0734 11.6249 15.0188 11.6523 14.9229 11.7002L15.5938 13.0418ZM15.2455 11.4291C15.234 11.4895 15.2006 11.5434 15.1518 11.5807L16.0629 12.7723C16.4045 12.5112 16.638 12.1334 16.7188 11.7111L15.2455 11.4291ZM14.3938 10.6418C14.6183 10.5296 14.7604 10.4588 14.8684 10.4117C14.9783 10.3638 14.9951 10.3671 14.971 10.3699L14.7972 8.88C14.5988 8.90314 14.4199 8.97089 14.269 9.03665C14.1163 9.10323 13.9327 9.19529 13.7229 9.30018L14.3938 10.6418ZM16.75 11.171C16.75 10.9365 16.7502 10.7311 16.7415 10.5647C16.7328 10.4004 16.7134 10.21 16.6454 10.0222L15.2351 10.5331C15.2268 10.5103 15.2373 10.5239 15.2436 10.6435C15.2498 10.7612 15.25 10.92 15.25 11.171H16.75ZM14.971 10.3699C15.0862 10.3565 15.1956 10.424 15.2351 10.5331L16.6454 10.0222C16.3689 9.25886 15.6037 8.78593 14.7972 8.88L14.971 10.3699ZM12.4062 9.95854C12.2509 10.0362 12.0824 10.1169 11.9371 10.228L12.8482 11.4196C12.8441 11.4227 12.8495 11.4176 12.886 11.3977C12.9266 11.3755 12.9812 11.3481 13.0771 11.3002L12.4062 9.95854ZM12.75 11.8294C12.75 11.7222 12.7501 11.6611 12.7518 11.6149C12.7532 11.5734 12.7554 11.5662 12.7545 11.5712L11.2812 11.2892C11.2468 11.4689 11.25 11.6557 11.25 11.8294H12.75ZM11.9371 10.228C11.5955 10.4892 11.362 10.8669 11.2812 11.2892L12.7545 11.5712C12.766 11.5109 12.7994 11.4569 12.8482 11.4196L11.9371 10.228Z" fill={color} opacity="0.5"/>
</Svg>;

export default LineDuotoneShoppingBagMusic;