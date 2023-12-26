import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldTennis2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.78 3.08212C13.8125 2.81147 13.8493 2.6006 13.8771 2.46072L13.9316 2.18988C16.6634 2.72893 19.1572 4.39993 20.6588 7.00083C22.1603 9.60148 22.3607 12.5963 21.4619 15.2315L21.3505 15.1926C21.3183 15.1828 21.2673 15.1669 21.1998 15.144C21.0648 15.0982 20.8637 15.0246 20.6131 14.9174C20.2324 14.7544 19.7916 14.9309 19.6287 15.3117C19.4657 15.6924 19.6423 16.1332 20.023 16.2961C20.3122 16.4199 20.5496 16.5071 20.7181 16.5642C20.7781 16.5846 20.8295 16.6012 20.8713 16.6142C20.0228 18.2493 18.7128 19.6694 16.9992 20.6588C15.2855 21.6482 13.4007 22.0726 11.5604 21.9899C11.57 21.9471 11.5813 21.8944 11.5937 21.8322C11.6285 21.6578 11.6717 21.4085 11.7091 21.0962C11.7583 20.685 11.4649 20.3117 11.0537 20.2625C10.6424 20.2132 10.2692 20.5067 10.22 20.9179C10.1875 21.1885 10.1507 21.3994 10.1229 21.5393L10.0533 21.8071C7.3274 21.2649 4.84006 19.5953 3.34119 16.9992C1.83991 14.3989 1.6394 11.4045 2.53776 8.7696C2.57003 8.77934 2.73267 8.83312 2.80017 8.85602C2.93524 8.90184 3.13627 8.97537 3.38686 9.08263C3.7676 9.24559 4.20835 9.06906 4.37132 8.68832C4.53428 8.30759 4.35775 7.86683 3.97701 7.70387C3.68779 7.58007 3.45036 7.49289 3.28193 7.43575C3.22187 7.41538 3.17053 7.39881 3.12868 7.38575C3.97719 5.75065 5.28717 4.33058 7.00083 3.34119C8.7145 2.35181 10.5993 1.92737 12.4396 2.01009C12.43 2.05286 12.4187 2.10561 12.4063 2.1678C12.3715 2.34224 12.3283 2.59145 12.2909 2.90383C12.2417 3.31503 12.5351 3.68829 12.9463 3.73753C13.3576 3.78676 13.7308 3.49333 13.78 3.08212ZM12.9386 4.73693C13.351 4.69936 13.7158 5.00326 13.7534 5.4157C13.8022 5.95188 13.8928 6.53481 14.0448 7.14821C14.1445 7.5502 13.8993 7.95683 13.4974 8.05644C13.0954 8.15606 12.6887 7.91094 12.5891 7.50896C12.4172 6.81537 12.3149 6.15685 12.2598 5.55173C12.2223 5.13929 12.5261 4.77449 12.9386 4.73693ZM5.2407 9.1813C5.47945 8.8429 5.94733 8.76212 6.28573 9.00087C6.78222 9.35117 7.30135 9.76902 7.81608 10.2647C8.1144 10.5519 8.12337 11.0266 7.8361 11.325C7.54884 11.6233 7.07413 11.6323 6.77581 11.345C6.32059 10.9066 5.86107 10.5367 5.42113 10.2263C5.08273 9.98757 5.00195 9.5197 5.2407 9.1813ZM13.8359 8.99679C14.2092 8.81743 14.6572 8.97465 14.8365 9.34794C14.9602 9.60538 15.0967 9.86482 15.2471 10.1253C15.3975 10.3858 15.5539 10.6337 15.715 10.8695C15.9486 11.2115 15.8608 11.6781 15.5188 11.9117C15.1768 12.1453 14.7102 12.0575 14.4766 11.7155C14.2945 11.4489 14.1178 11.169 13.9482 10.8752C13.7786 10.5814 13.6245 10.2885 13.4847 9.99744C13.3054 9.62415 13.4626 9.17614 13.8359 8.99679ZM8.48121 12.0883C8.82318 11.8547 9.28978 11.9425 9.52338 12.2845C9.7055 12.5511 9.88215 12.831 10.0518 13.1248C10.2214 13.4186 10.3755 13.7115 10.5153 14.0026C10.6946 14.3758 10.5374 14.8239 10.1641 15.0032C9.79085 15.1826 9.34284 15.0254 9.16348 14.6521C9.03979 14.3946 8.90334 14.1352 8.75295 13.8747C8.60255 13.6142 8.44609 13.3663 8.28499 13.1305C8.05139 12.7885 8.13924 12.3219 8.48121 12.0883ZM16.1639 12.675C16.4512 12.3767 16.9259 12.3677 17.2242 12.655C17.6794 13.0933 18.1389 13.4633 18.5789 13.7737C18.9173 14.0124 18.998 14.4803 18.7593 14.8187C18.5205 15.1571 18.0527 15.2379 17.7143 14.9991C17.2178 14.6488 16.6986 14.231 16.1839 13.7353C15.8856 13.4481 15.8766 12.9733 16.1639 12.675ZM10.5026 15.9436C10.9046 15.8439 11.3113 16.0891 11.4109 16.491C11.5828 17.1846 11.6851 17.8431 11.7402 18.4483C11.7777 18.8607 11.4739 19.2255 11.0614 19.2631C10.649 19.3006 10.2842 18.9967 10.2466 18.5843C10.1978 18.0481 10.1072 17.4652 9.95516 16.8518C9.85554 16.4498 10.1007 16.0432 10.5026 15.9436Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldTennis2;
