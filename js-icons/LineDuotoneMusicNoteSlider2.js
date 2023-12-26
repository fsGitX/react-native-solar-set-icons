import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneMusicNoteSlider2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M19 19.5C19.4645 19.5 19.6968 19.5 19.8911 19.4692C20.9608 19.2998 21.7998 18.4608 21.9692 17.3911C22 17.1968 22 16.9645 22 16.5V7.5C22 7.0355 22 6.80325 21.9692 6.60891C21.7998 5.53918 20.9608 4.70021 19.8911 4.53078C19.6968 4.5 19.4645 4.5 19 4.5" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M5 19.5C4.5355 19.5 4.30325 19.5 4.10891 19.4692C3.03918 19.2998 2.20021 18.4608 2.03078 17.3911C2 17.1968 2 16.9645 2 16.5V7.5C2 7.0355 2 6.80325 2.03078 6.60891C2.20021 5.53918 3.03918 4.70021 4.10891 4.53078C4.30325 4.5 4.5355 4.5 5 4.5" opacity="0.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M12.7416 8.62936L12.4062 7.95854L12.4062 7.95854L12.7416 8.62936ZM14.0584 7.971L13.7229 7.30018L13.7229 7.30018L14.0584 7.971ZM13.9416 11.0294L13.6062 10.3585L13.6062 10.3585L13.9416 11.0294ZM12.0598 10.7227L12.7649 10.4673L12.7649 10.4673L12.0598 10.7227ZM13.1159 11.3754L13.029 10.6305L13.029 10.6305L13.1159 11.3754ZM15.9822 9.57014L16.7188 9.71114L16.7188 9.71114L15.9822 9.57014ZM15.6074 10.1765L16.0629 10.7723L16.0629 10.7723L15.6074 10.1765ZM14.8841 7.62495L14.971 8.36989L14.971 8.36989L14.8841 7.62495ZM15.9402 8.27764L15.2351 8.53307L15.2351 8.53307L15.9402 8.27764ZM12.3926 8.82381L12.8482 9.41961L12.8482 9.41961L12.3926 8.82381ZM12.0178 9.43021L11.2812 9.28921L11.2812 9.28921L12.0178 9.43021ZM11.25 15.0002C11.25 15.6905 10.6904 16.2502 10 16.2502V17.7502C11.5188 17.7502 12.75 16.519 12.75 15.0002H11.25ZM10 16.2502C9.30964 16.2502 8.75 15.6905 8.75 15.0002H7.25C7.25 16.519 8.48122 17.7502 10 17.7502V16.2502ZM8.75 15.0002C8.75 14.3098 9.30964 13.7502 10 13.7502V12.2502C8.48122 12.2502 7.25 13.4814 7.25 15.0002H8.75ZM10 13.7502C10.6904 13.7502 11.25 14.3098 11.25 15.0002H12.75C12.75 13.4814 11.5188 12.2502 10 12.2502V13.7502ZM12.75 15.0002V10.0002H11.25V15.0002H12.75ZM13.0771 9.30018L14.3938 8.64182L13.7229 7.30018L12.4062 7.95854L13.0771 9.30018ZM14.9229 9.70018L13.6062 10.3585L14.2771 11.7002L15.5938 11.0418L14.9229 9.70018ZM11.25 9.82936C11.25 10.0639 11.2498 10.2693 11.2585 10.4356C11.2672 10.6 11.2866 10.7903 11.3546 10.9781L12.7649 10.4673C12.7732 10.4901 12.7627 10.4765 12.7564 10.3568C12.7502 10.2392 12.75 10.0804 12.75 9.82936H11.25ZM13.6062 10.3585C13.3817 10.4708 13.2396 10.5416 13.1316 10.5887C13.0217 10.6366 13.0049 10.6333 13.029 10.6305L13.2028 12.1204C13.4012 12.0972 13.5801 12.0295 13.731 11.9637C13.8837 11.8971 14.0673 11.8051 14.2771 11.7002L13.6062 10.3585ZM11.3546 10.9781C11.6311 11.7415 12.3963 12.2144 13.2028 12.1204L13.029 10.6305C12.9138 10.6439 12.8044 10.5763 12.7649 10.4673L11.3546 10.9781ZM15.25 9.171C15.25 9.27813 15.2499 9.33921 15.2482 9.38547C15.2468 9.427 15.2446 9.43413 15.2455 9.42914L16.7188 9.71114C16.7532 9.53144 16.75 9.34466 16.75 9.171H15.25ZM15.5938 11.0418C15.7491 10.9642 15.9176 10.8835 16.0629 10.7723L15.1518 9.58074C15.1559 9.57766 15.1505 9.5828 15.114 9.60269C15.0734 9.62485 15.0188 9.65227 14.9229 9.70018L15.5938 11.0418ZM15.2455 9.42914C15.234 9.48947 15.2006 9.54344 15.1518 9.58074L16.0629 10.7723C16.4045 10.5112 16.638 10.1334 16.7188 9.71114L15.2455 9.42914ZM14.3938 8.64182C14.6183 8.52957 14.7604 8.45877 14.8684 8.41169C14.9783 8.3638 14.9951 8.36709 14.971 8.36989L14.7972 6.88C14.5988 6.90314 14.4199 6.97089 14.269 7.03665C14.1163 7.10323 13.9327 7.19529 13.7229 7.30018L14.3938 8.64182ZM16.75 9.171C16.75 8.93645 16.7502 8.7311 16.7415 8.56472C16.7328 8.40037 16.7134 8.21003 16.6454 8.02221L15.2351 8.53307C15.2268 8.51028 15.2373 8.52386 15.2436 8.64354C15.2498 8.76119 15.25 8.92 15.25 9.171H16.75ZM14.971 8.36989C15.0862 8.35646 15.1956 8.42402 15.2351 8.53307L16.6454 8.02221C16.3689 7.25886 15.6037 6.78593 14.7972 6.88L14.971 8.36989ZM12.4062 7.95854C12.2509 8.0362 12.0824 8.11688 11.9371 8.228L12.8482 9.41961C12.8441 9.4227 12.8495 9.41756 12.886 9.39766C12.9266 9.3755 12.9812 9.34809 13.0771 9.30018L12.4062 7.95854ZM12.75 9.82936C12.75 9.72223 12.7501 9.66114 12.7518 9.61489C12.7532 9.57336 12.7554 9.56622 12.7545 9.57121L11.2812 9.28921C11.2468 9.46891 11.25 9.6557 11.25 9.82936H12.75ZM11.9371 8.228C11.5955 8.48916 11.362 8.86692 11.2812 9.28921L12.7545 9.57121C12.766 9.51088 12.7994 9.45692 12.8482 9.41961L11.9371 8.228Z" fill={color} opacity="0.5"/>
</Svg>;

export default LineDuotoneMusicNoteSlider2;