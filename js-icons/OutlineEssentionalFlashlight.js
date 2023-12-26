import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineEssentionalFlashlight = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 12.25C12.4142 12.25 12.75 12.5858 12.75 13V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V13C11.25 12.5858 11.5858 12.25 12 12.25Z" fill={color}/>
	<Path d="M5.95526 1.25C5.52244 1.24995 5.12561 1.24991 4.8028 1.29331C4.44732 1.3411 4.07159 1.45355 3.76257 1.76257C3.45355 2.07159 3.3411 2.44732 3.29331 2.8028C3.24991 3.12561 3.24995 3.52244 3.25 3.95526L3.25001 4.17158L3.24985 4.25163C3.24891 4.5773 3.2479 4.92879 3.38322 5.25549C3.51854 5.58218 3.7678 5.83001 3.99875 6.05963L4.05546 6.11612L7.29811 9.35877C7.91944 9.9801 8.07298 10.1524 8.15486 10.3501C8.23673 10.5477 8.25001 10.7782 8.25001 11.6569V19.0253C8.25 19.4697 8.24999 19.8408 8.27078 20.1454C8.29241 20.4625 8.33906 20.762 8.45934 21.0524C8.73845 21.7262 9.2738 22.2616 9.94763 22.5407C10.238 22.661 10.5375 22.7076 10.8546 22.7292C11.1593 22.75 11.5303 22.75 11.9747 22.75H12.0253C12.4697 22.75 12.8408 22.75 13.1454 22.7292C13.4625 22.7076 13.762 22.661 14.0524 22.5407C14.7262 22.2616 15.2616 21.7262 15.5407 21.0524C15.661 20.762 15.7076 20.4625 15.7292 20.1454C15.75 19.8408 15.75 19.4697 15.75 19.0253V11.6569C15.75 10.7782 15.7633 10.5477 15.8452 10.3501C15.927 10.1524 16.0806 9.9801 16.7019 9.35876L19.9446 6.11612L20.0013 6.05963C20.2322 5.83001 20.4815 5.58218 20.6168 5.25549C20.7521 4.92879 20.7511 4.5773 20.7502 4.25163L20.75 4.17158L20.75 3.95526C20.7501 3.52244 20.7501 3.12561 20.7067 2.8028C20.6589 2.44732 20.5465 2.07159 20.2374 1.76257C19.9284 1.45355 19.5527 1.3411 19.1972 1.29331C18.8744 1.24991 18.4776 1.24995 18.0448 1.25H5.95526ZM4.82568 2.82187L4.82324 2.82324L4.82187 2.82568C4.82086 2.82761 4.81924 2.83093 4.81717 2.83597C4.80821 2.85775 4.79291 2.90611 4.77993 3.00267C4.7516 3.21339 4.75001 3.5074 4.75001 4.00001V4.17158C4.75001 4.19924 4.75002 4.22534 4.75004 4.25H19.25C19.25 4.22534 19.25 4.19924 19.25 4.17158V4.00001C19.25 3.5074 19.2484 3.21339 19.2201 3.00267C19.2071 2.90611 19.1918 2.85775 19.1828 2.83597C19.1808 2.83093 19.1792 2.82761 19.1781 2.82568L19.1768 2.82324L19.1743 2.82187C19.1724 2.82086 19.1691 2.81924 19.164 2.81717C19.1423 2.80821 19.0939 2.79291 18.9973 2.77993C18.7866 2.7516 18.4926 2.75001 18 2.75001H6.00001C5.5074 2.75001 5.21339 2.7516 5.00267 2.77993C4.90611 2.79291 4.85775 2.80821 4.83597 2.81717C4.83093 2.81924 4.82761 2.82086 4.82568 2.82187ZM18.1894 5.75H5.81066L8.44428 8.38351C8.75619 8.69482 9.02706 8.96518 9.23742 9.25H14.7626C14.9729 8.96519 15.2438 8.69485 15.5557 8.38355L18.1894 5.75ZM14.2633 10.75H9.73669C9.7506 10.9925 9.75036 11.2522 9.75008 11.536L9.75001 19C9.75001 19.4762 9.75041 19.7958 9.7673 20.0433C9.78372 20.284 9.8132 20.4012 9.84516 20.4784C9.97203 20.7846 10.2154 21.028 10.5217 21.1549C10.5988 21.1868 10.716 21.2163 10.9567 21.2327C11.2042 21.2496 11.5238 21.25 12 21.25C12.4762 21.25 12.7958 21.2496 13.0433 21.2327C13.284 21.2163 13.4012 21.1868 13.4784 21.1549C13.7846 21.028 14.028 20.7846 14.1549 20.4784C14.1868 20.4012 14.2163 20.284 14.2327 20.0433C14.2496 19.7958 14.25 19.4762 14.25 19L14.2499 11.536C14.2497 11.2522 14.2494 10.9925 14.2633 10.75Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineEssentionalFlashlight;
