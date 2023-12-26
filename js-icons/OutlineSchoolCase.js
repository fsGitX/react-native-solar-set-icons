import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineSchoolCase = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.5814 1.25L10.561 1.25C10.4474 1.24998 10.3591 1.24997 10.2755 1.25503C9.21507 1.31926 8.28648 1.98855 7.89021 2.97425C7.85898 3.05196 7.83104 3.1358 7.79516 3.24351L7.78872 3.26283L7.76306 3.33981C7.74407 3.39678 7.73878 3.41248 7.73417 3.4252C7.5743 3.86717 7.04303 4.236 6.481 4.25024L4.6616 4.33925C3.87537 4.43163 3.20216 4.62833 2.63325 5.09123C2.43454 5.25291 2.25292 5.43453 2.09123 5.63325C1.62833 6.20216 1.43163 6.87537 1.33925 7.6616C1.24998 8.42138 1.24999 9.37673 1.25 10.5617L1.25 10.6089L1.25 10.6402C1.24997 10.9241 1.24994 11.1903 1.27268 11.4144C1.29784 11.6624 1.35574 11.9257 1.51386 12.18C1.56526 12.2627 1.62347 12.3409 1.68788 12.4139C1.85699 12.6055 2.05339 12.7291 2.25048 12.8205C2.25336 14.4357 2.27381 16.0682 2.41875 17.4664C2.50368 18.2856 2.63401 19.0548 2.84074 19.7106C3.04411 20.3557 3.34441 20.9665 3.81975 21.389C4.64319 22.1209 5.67956 22.4436 6.97328 22.5983C8.2432 22.75 9.87087 22.75 11.9488 22.75H12.0512C14.1291 22.75 15.7568 22.75 17.0267 22.5983C18.3204 22.4436 19.3568 22.1209 20.1803 21.389C20.6556 20.9665 20.9559 20.3557 21.1593 19.7106C21.366 19.0548 21.4963 18.2856 21.5813 17.4664C21.7262 16.0682 21.7466 14.4357 21.7495 12.8205C21.9466 12.7291 22.143 12.6055 22.3121 12.4139C22.3765 12.3409 22.4347 12.2627 22.4861 12.18C22.6443 11.9257 22.7022 11.6624 22.7273 11.4144C22.7501 11.1903 22.75 10.9241 22.75 10.6402L22.75 10.5616C22.75 9.37672 22.75 8.42138 22.6608 7.6616C22.5684 6.87537 22.3717 6.20216 21.9088 5.63325C21.7471 5.43454 21.5655 5.25291 21.3668 5.09123C20.7978 4.62833 20.1246 4.43163 19.3384 4.33925L17.519 4.25024C16.9572 4.23601 16.4262 3.86731 16.2663 3.42518C16.2617 3.41254 16.2563 3.39649 16.2374 3.33981L16.2053 3.24347C16.1694 3.13578 16.1415 3.05195 16.1102 2.97426C15.714 1.98855 14.7854 1.31926 13.725 1.25503C13.6414 1.24997 13.553 1.24998 13.4395 1.25L10.5814 1.25ZM7.57032 5.75L7.60893 5.75H16.3911L16.4297 5.75C17.6524 5.75004 18.5082 5.75202 19.1634 5.829C19.809 5.90486 20.1619 6.04466 20.4201 6.25474C20.5393 6.35175 20.6483 6.46072 20.7453 6.57995C20.9553 6.83814 21.0951 7.19102 21.171 7.83664C21.2488 8.49864 21.25 9.3656 21.25 10.6089C21.25 10.935 21.2491 11.1238 21.235 11.263C21.2266 11.3452 21.2161 11.3786 21.2122 11.3882C21.2049 11.3999 21.1967 11.4109 21.1876 11.4212C21.1795 11.4277 21.1506 11.4474 21.0742 11.479C20.945 11.5326 20.7644 11.5877 20.4521 11.6814L15.25 13.242V13C15.25 12.3096 14.6904 11.75 14 11.75H10C9.30965 11.75 8.75 12.3096 8.75 13V13.242L3.54792 11.6814C3.23557 11.5877 3.05502 11.5326 2.92578 11.479C2.84942 11.4474 2.82047 11.4277 2.81236 11.4212L8.75 13.242L2.78785 11.3882C2.78391 11.3786 2.77336 11.3452 2.76502 11.263C2.7509 11.1238 2.75 10.935 2.75 10.6089C2.75 9.3656 2.75122 8.49864 2.829 7.83664C2.90487 7.19102 3.04466 6.83814 3.25474 6.57995C3.35175 6.46072 3.46072 6.35175 3.57995 6.25474C3.83814 6.04466 4.19102 5.90486 4.83665 5.829C5.49176 5.75202 6.34762 5.75004 7.57032 5.75ZM10.5814 2.75C10.438 2.75 10.3984 2.75034 10.3662 2.75229C9.88417 2.78148 9.46208 3.08571 9.28196 3.53375C9.26991 3.56374 9.25708 3.60117 9.21174 3.73717L9.18338 3.82225C9.16835 3.86736 9.15665 3.90246 9.14472 3.93544C9.10527 4.04452 9.05863 4.14944 9.00558 4.25H14.9949C14.9418 4.14945 14.8952 4.04453 14.8557 3.93547C14.8438 3.90249 14.8321 3.86736 14.8171 3.82225L14.7887 3.73717C14.7434 3.60117 14.7305 3.56374 14.7185 3.53375C14.5384 3.08571 14.1163 2.78148 13.6343 2.75229C13.602 2.75034 13.5625 2.75 13.4191 2.75H10.5814ZM3.7521 13.3087C3.7589 14.7455 3.78782 16.1259 3.91076 17.3118C3.99059 18.0818 4.10738 18.7394 4.27134 19.2596C4.43867 19.7904 4.63263 20.1046 4.8163 20.2679C5.31088 20.7075 5.99418 20.9706 7.15128 21.1089C8.32178 21.2487 9.85979 21.25 12 21.25C14.1402 21.25 15.6782 21.2487 16.8487 21.1089C18.0058 20.9706 18.6891 20.7075 19.1837 20.2679C19.3674 20.1046 19.5613 19.7904 19.7287 19.2596C19.8926 18.7394 20.0094 18.0818 20.0892 17.3118C20.2122 16.1259 20.2411 14.7455 20.2479 13.3087L15.25 14.808V15.1615C15.25 15.6726 14.9388 16.1323 14.4642 16.3221L13.7641 16.6021C12.6317 17.0551 11.3684 17.0551 10.2359 16.6021L9.53577 16.3221C9.06119 16.1323 8.75 15.6726 8.75 15.1615V14.808L3.7521 13.3087ZM10.25 13.25V14.9922L10.793 15.2094C11.5678 15.5194 12.4322 15.5194 13.207 15.2094L13.75 14.9922V13.25H10.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineSchoolCase;
