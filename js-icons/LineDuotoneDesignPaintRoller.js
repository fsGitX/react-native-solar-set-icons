import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneDesignPaintRoller = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.75 6.79904L6.375 7.44856L6.75 6.79904ZM6.20096 6.25L5.55144 6.625L6.20096 6.25ZM17.799 6.25L18.4486 6.625L17.799 6.25ZM17.25 6.79904L17.625 7.44856L17.25 6.79904ZM17.25 2.20096L17.625 1.55144L17.25 2.20096ZM17.799 2.75L18.4486 2.375L17.799 2.75ZM6.75 2.20096L6.375 1.55144L6.75 2.20096ZM6.20096 2.75L5.55144 2.375L6.20096 2.75ZM13.7071 21.7071L13.1768 21.1768L13.1768 21.1768L13.7071 21.7071ZM13.7071 14.2929L13.1768 14.8232L13.1768 14.8232L13.7071 14.2929ZM10.2929 14.2929L9.76256 13.7626L9.76256 13.7626L10.2929 14.2929ZM10.2929 21.7071L10.8232 21.1768L10.8232 21.1768L10.2929 21.7071ZM12.0047 14.75C12.4189 14.75 12.7547 14.4142 12.7547 14C12.7547 13.5858 12.4189 13.25 12.0047 13.25V14.75ZM8.5 2.75H15.5V1.25H8.5V2.75ZM15.5 6.25H8.5V7.75H15.5V6.25ZM8.5 6.25C8.01889 6.25 7.7082 6.24928 7.47275 6.22794C7.2476 6.20754 7.16586 6.17311 7.125 6.14952L6.375 7.44856C6.68221 7.62593 7.00817 7.69198 7.33735 7.72182C7.65622 7.75072 8.04649 7.75 8.5 7.75V6.25ZM5.25 4.5C5.25 4.95351 5.24928 5.34378 5.27818 5.66265C5.30802 5.99183 5.37407 6.31779 5.55144 6.625L6.85048 5.875C6.82689 5.83414 6.79246 5.7524 6.77206 5.52725C6.75072 5.2918 6.75 4.98111 6.75 4.5H5.25ZM7.125 6.14952C7.01099 6.08369 6.91631 5.98901 6.85048 5.875L5.55144 6.625C5.74892 6.96704 6.03296 7.25108 6.375 7.44856L7.125 6.14952ZM17.25 4.5C17.25 4.98111 17.2493 5.2918 17.2279 5.52725C17.2075 5.7524 17.1731 5.83414 17.1495 5.875L18.4486 6.625C18.6259 6.31779 18.692 5.99183 18.7218 5.66265C18.7507 5.34378 18.75 4.95351 18.75 4.5H17.25ZM15.5 7.75C15.9535 7.75 16.3438 7.75072 16.6626 7.72182C16.9918 7.69198 17.3178 7.62593 17.625 7.44856L16.875 6.14952C16.8341 6.17311 16.7524 6.20754 16.5273 6.22794C16.2918 6.24928 15.9811 6.25 15.5 6.25V7.75ZM17.1495 5.875C17.0837 5.98901 16.989 6.08369 16.875 6.14952L17.625 7.44856C17.967 7.25108 18.2511 6.96704 18.4486 6.625L17.1495 5.875ZM15.5 2.75C15.9811 2.75 16.2918 2.75072 16.5273 2.77206C16.7524 2.79246 16.8341 2.82689 16.875 2.85048L17.625 1.55144C17.3178 1.37407 16.9918 1.30802 16.6626 1.27818C16.3438 1.24928 15.9535 1.25 15.5 1.25V2.75ZM18.75 4.5C18.75 4.04649 18.7507 3.65622 18.7218 3.33735C18.692 3.00817 18.6259 2.68221 18.4486 2.375L17.1495 3.125C17.1731 3.16586 17.2075 3.2476 17.2279 3.47275C17.2493 3.7082 17.25 4.01889 17.25 4.5H18.75ZM16.875 2.85048C16.989 2.91631 17.0837 3.01099 17.1495 3.125L18.4486 2.375C18.2511 2.03296 17.967 1.74892 17.625 1.55144L16.875 2.85048ZM8.5 1.25C8.04649 1.25 7.65622 1.24928 7.33735 1.27818C7.00817 1.30802 6.68221 1.37407 6.375 1.55144L7.125 2.85048C7.16586 2.82689 7.2476 2.79246 7.47275 2.77206C7.7082 2.75072 8.01889 2.75 8.5 2.75V1.25ZM6.75 4.5C6.75 4.01889 6.75072 3.7082 6.77206 3.47275C6.79246 3.2476 6.82689 3.16586 6.85048 3.125L5.55144 2.375C5.37407 2.68221 5.30802 3.00817 5.27818 3.33735C5.24928 3.65622 5.25 4.04649 5.25 4.5H6.75ZM6.375 1.55144C6.03296 1.74892 5.74892 2.03296 5.55144 2.375L6.85048 3.125C6.91631 3.01099 7.01099 2.91631 7.125 2.85048L6.375 1.55144ZM10.75 20V16H9.25V20H10.75ZM13.25 16V20H14.75V16H13.25ZM13.25 20C13.25 20.4926 13.2484 20.7866 13.2201 20.9973C13.2071 21.0939 13.1918 21.1423 13.1828 21.164C13.1808 21.1691 13.1791 21.1724 13.1781 21.1743C13.1771 21.1762 13.1766 21.1771 13.1765 21.1772C13.1765 21.1772 13.1766 21.177 13.1769 21.1766C13.1772 21.1763 13.1772 21.1763 13.1768 21.1768L14.2374 22.2374C14.5465 21.9284 14.6589 21.5527 14.7067 21.1972C14.7516 20.8633 14.75 20.4502 14.75 20H13.25ZM12 22.75C12.4502 22.75 12.8633 22.7516 13.1972 22.7067C13.5527 22.6589 13.9284 22.5465 14.2374 22.2374L13.1768 21.1768C13.1763 21.1772 13.1763 21.1772 13.1767 21.1769C13.177 21.1766 13.1772 21.1765 13.1772 21.1765C13.1771 21.1766 13.1762 21.1771 13.1743 21.1781C13.1724 21.1791 13.1691 21.1808 13.164 21.1828C13.1423 21.1918 13.0939 21.2071 12.9973 21.2201C12.7866 21.2484 12.4926 21.25 12 21.25V22.75ZM12 14.75C12.4926 14.75 12.7866 14.7516 12.9973 14.7799C13.0939 14.7929 13.1423 14.8082 13.164 14.8172C13.1691 14.8192 13.1724 14.8209 13.1743 14.8219C13.1762 14.8229 13.1771 14.8234 13.1772 14.8235C13.1772 14.8235 13.177 14.8234 13.1766 14.8231C13.1763 14.8228 13.1763 14.8228 13.1768 14.8232L14.2374 13.7626C13.9284 13.4535 13.5527 13.3411 13.1972 13.2933C12.8633 13.2484 12.4502 13.25 12 13.25V14.75ZM14.75 16C14.75 15.5498 14.7516 15.1367 14.7067 14.8028C14.6589 14.4473 14.5465 14.0716 14.2374 13.7626L13.1768 14.8232C13.1772 14.8237 13.1772 14.8237 13.1769 14.8234C13.1766 14.823 13.1765 14.8228 13.1765 14.8228C13.1766 14.8229 13.1771 14.8238 13.1781 14.8257C13.1791 14.8276 13.1808 14.8309 13.1828 14.836C13.1918 14.8577 13.2071 14.9061 13.2201 15.0027C13.2484 15.2134 13.25 15.5074 13.25 16H14.75ZM10.75 16C10.75 15.5074 10.7516 15.2134 10.7799 15.0027C10.7929 14.9061 10.8082 14.8577 10.8172 14.836C10.8192 14.8309 10.8209 14.8276 10.8219 14.8257C10.8229 14.8238 10.8234 14.8229 10.8235 14.8228C10.8235 14.8228 10.8234 14.823 10.8231 14.8234C10.8228 14.8237 10.8228 14.8237 10.8232 14.8232L9.76256 13.7626C9.45354 14.0716 9.34109 14.4473 9.2933 14.8028C9.24841 15.1367 9.25 15.5498 9.25 16H10.75ZM12 13.25C11.5498 13.25 11.1367 13.2484 10.8028 13.2933C10.4473 13.3411 10.0716 13.4535 9.76256 13.7626L10.8232 14.8232C10.8237 14.8228 10.8237 14.8228 10.8234 14.8231C10.823 14.8234 10.8228 14.8235 10.8228 14.8235C10.8229 14.8234 10.8238 14.8229 10.8257 14.8219C10.8276 14.8209 10.8309 14.8192 10.836 14.8172C10.8577 14.8082 10.9061 14.7929 11.0027 14.7799C11.2134 14.7516 11.5074 14.75 12 14.75V13.25ZM9.25 20C9.25 20.4502 9.24841 20.8633 9.2933 21.1972C9.34109 21.5527 9.45354 21.9284 9.76256 22.2374L10.8232 21.1768C10.8228 21.1763 10.8228 21.1763 10.8231 21.1766C10.8234 21.177 10.8235 21.1772 10.8235 21.1772C10.8234 21.1771 10.8229 21.1762 10.8219 21.1743C10.8209 21.1724 10.8192 21.1691 10.8172 21.164C10.8082 21.1423 10.7929 21.0939 10.7799 20.9973C10.7516 20.7866 10.75 20.4926 10.75 20H9.25ZM12 21.25C11.5074 21.25 11.2134 21.2484 11.0027 21.2201C10.9061 21.2071 10.8577 21.1918 10.836 21.1828C10.8309 21.1808 10.8276 21.1791 10.8257 21.1781C10.8238 21.1771 10.8229 21.1766 10.8228 21.1765C10.8228 21.1765 10.823 21.1766 10.8234 21.1769C10.8237 21.1772 10.8237 21.1772 10.8232 21.1768L9.76256 22.2374C10.0716 22.5465 10.4473 22.6589 10.8028 22.7067C11.1367 22.7516 11.5498 22.75 12 22.75V21.25ZM12 14.75H12.0047V13.25H12V14.75Z" fill={color}/>
	<Path d="M5.5 3.75C5.08579 3.75 4.75 4.08579 4.75 4.5C4.75 4.91421 5.08579 5.25 5.5 5.25V3.75ZM6 3.75H5.5V5.25H6V3.75Z" fill={color} opacity="0.5"/>
	<Path d="M15.4066 10.989L15.2953 10.2473L15.2953 10.2473L15.4066 10.989ZM19.4832 10.3775L19.3719 9.63581L19.3719 9.63581L19.4832 10.3775ZM21.8609 5.76733L22.5588 5.49258L22.5588 5.49258L21.8609 5.76733ZM20.7326 4.63903L20.4579 5.3369L20.4579 5.3369L20.7326 4.63903ZM20.9384 10.0438L20.5865 9.38148L20.5865 9.38148L20.9384 10.0438ZM21.8858 8.94369L22.593 9.19346L22.593 9.19346L21.8858 8.94369ZM12.4845 11.9173L11.9162 11.4278L11.9162 11.4278L12.4845 11.9173ZM11.2547 13.9875C11.2478 14.4016 11.5779 14.743 11.9921 14.7499C12.4063 14.7568 12.7476 14.4267 12.7545 14.0125L11.2547 13.9875ZM15.5178 11.7307L19.5945 11.1192L19.3719 9.63581L15.2953 10.2473L15.5178 11.7307ZM19.0448 3.75H17.9999V5.25H19.0448V3.75ZM22.7499 7.4551C22.7499 7.02002 22.7503 6.65783 22.731 6.3612C22.7112 6.05823 22.6687 5.77171 22.5588 5.49258L21.163 6.04208C21.1922 6.11609 21.2191 6.22858 21.2341 6.45878C21.2496 6.6953 21.2499 7.00044 21.2499 7.4551H22.7499ZM19.0448 5.25C19.4995 5.25 19.8046 5.25037 20.0412 5.26579C20.2714 5.2808 20.3839 5.30776 20.4579 5.3369L21.0074 3.94117C20.7282 3.83128 20.4417 3.78872 20.1387 3.76897C19.8421 3.74963 19.4799 3.75 19.0448 3.75V5.25ZM22.5588 5.49258C22.2792 4.78261 21.7173 4.22069 21.0074 3.94117L20.4579 5.3369C20.7806 5.46395 21.036 5.71937 21.163 6.04208L22.5588 5.49258ZM19.5945 11.1192C20.303 11.0129 20.846 10.9422 21.2903 10.7061L20.5865 9.38148C20.4253 9.4671 20.2 9.5116 19.3719 9.63581L19.5945 11.1192ZM21.2499 7.4551C21.2499 8.29243 21.2394 8.52185 21.1786 8.69391L22.593 9.19346C22.7605 8.71904 22.7499 8.17157 22.7499 7.4551H21.2499ZM21.2903 10.7061C21.8987 10.3829 22.3635 9.84304 22.593 9.19346L21.1786 8.69391C21.0743 8.98918 20.863 9.23455 20.5865 9.38148L21.2903 10.7061ZM15.2953 10.2473C14.502 10.3663 13.8376 10.4646 13.3148 10.6116C12.7717 10.7643 12.2912 10.9923 11.9162 11.4278L13.0528 12.4067C13.1622 12.2796 13.3302 12.1654 13.7208 12.0556C14.1317 11.94 14.6861 11.8555 15.5178 11.7307L15.2953 10.2473ZM12.7545 14.0125C12.7723 12.9469 12.8712 12.6175 13.0528 12.4067L11.9162 11.4278C11.3353 12.1023 11.2716 12.9787 11.2547 13.9875L12.7545 14.0125Z" fill={color} opacity="0.5"/>
</Svg>;

export default LineDuotoneDesignPaintRoller;