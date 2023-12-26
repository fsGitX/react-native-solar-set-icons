import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineWeatherTornadoSmall = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4.31274 6.5C4.67997 6.38779 5.16504 6.27819 5.75934 6.17914C7.33609 5.91634 9.54289 5.75 12 5.75C12.4142 5.75 12.75 5.41421 12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C9.48655 4.25 7.19335 4.41944 5.51274 4.69954C4.67845 4.83859 3.95965 5.01055 3.43231 5.21835C3.17237 5.32078 2.91483 5.44871 2.70921 5.61618C2.51293 5.77605 2.25 6.0689 2.25 6.5C2.25 6.9311 2.51293 7.22395 2.70921 7.38382C2.91483 7.55129 3.17237 7.67922 3.43231 7.78165C3.95965 7.98945 4.67845 8.16141 5.51274 8.30046C7.19335 8.58056 9.48655 8.75 12 8.75C14.5135 8.75 16.8067 8.58056 18.4873 8.30046C19.3215 8.16141 20.0403 7.98945 20.5677 7.78165C20.8276 7.67922 21.0852 7.55129 21.2908 7.38382C21.4871 7.22395 21.75 6.9311 21.75 6.5C21.75 5.96462 21.3529 5.64298 21.1206 5.49321C20.8491 5.31812 20.4993 5.17957 20.1234 5.06485C19.361 4.83211 18.3088 4.64395 17.0832 4.50722C16.6715 4.46129 16.3006 4.75778 16.2546 5.16944C16.2087 5.58109 16.5052 5.95204 16.9168 5.99797C18.1032 6.13032 19.051 6.30583 19.6855 6.49951L19.6872 6.50002C19.32 6.61222 18.8349 6.72182 18.2407 6.82086C16.6639 7.08366 14.4571 7.25 12 7.25C9.54289 7.25 7.33609 7.08366 5.75934 6.82086C5.16504 6.72181 4.67997 6.61221 4.31274 6.5ZM20.3582 6.79149C20.3582 6.79149 20.3527 6.78778 20.3454 6.78004C20.3551 6.78757 20.3582 6.79149 20.3582 6.79149Z" fill={color} fillRule="evenodd"/>
	<Path d="M20.7061 9.74703C20.8458 10.137 20.6429 10.5663 20.253 10.7061L20 10C20.253 10.7061 20.253 10.7061 20.253 10.7061L20.2507 10.7068L20.2475 10.708L20.2379 10.7114L20.2064 10.7221C20.1799 10.731 20.1425 10.7433 20.0942 10.7585C19.9975 10.7888 19.8573 10.8308 19.6736 10.8803C19.3063 10.9795 18.7653 11.1092 18.0522 11.238C16.626 11.4958 14.5124 11.75 11.7241 11.75C8.93608 11.75 6.95538 11.4958 5.65768 11.2353C5.00888 11.1051 4.53113 10.9733 4.2089 10.8712C4.0478 10.8201 3.92564 10.7764 3.84048 10.744C3.79791 10.7279 3.76459 10.7145 3.74028 10.7045L3.71056 10.692L3.70072 10.6877L3.69704 10.6861L3.69551 10.6854C3.69551 10.6854 3.69419 10.6848 4 10L3.69419 10.6848C3.31597 10.5159 3.14628 10.0724 3.31518 9.69419C3.48359 9.31705 3.92508 9.14725 4.30259 9.31375M4.30259 9.31375L4.31269 9.31799C4.32387 9.3226 4.34402 9.33073 4.37339 9.3419C4.43212 9.36422 4.52776 9.39867 4.66231 9.44133C4.93136 9.52665 5.35625 9.6449 5.95289 9.76467C7.14606 10.0042 9.02744 10.25 11.7241 10.25C14.4207 10.25 16.445 10.0042 17.7855 9.76195C18.4558 9.64081 18.9554 9.52051 19.2828 9.43216C19.4465 9.38798 19.5671 9.35178 19.6446 9.32745C19.6833 9.31529 19.7112 9.30609 19.7283 9.30034L19.747 9.29395L19.9812 9.94758C19.747 9.29394 19.747 9.29395 19.747 9.29395C20.1369 9.15452 20.5664 9.35723 20.7061 9.74703" fill={color} fillRule="evenodd"/>
	<Path d="M8.27306 15.3015C7.88914 15.1513 7.45556 15.3393 7.30306 15.7229C7.15003 16.1078 7.33801 16.5439 7.72291 16.6969L8 16C7.72291 16.6969 7.72291 16.6969 7.72291 16.6969L7.72399 16.6974L7.72518 16.6978L7.72792 16.6989L7.73479 16.7016L7.75414 16.7089C7.76955 16.7146 7.78996 16.7219 7.81543 16.7307C7.86638 16.7482 7.93755 16.7714 8.0294 16.7981C8.21311 16.8517 8.47931 16.9198 8.83147 16.9868C9.536 17.1208 10.583 17.25 12 17.25C13.417 17.25 14.464 17.1208 15.1685 16.9868C15.5207 16.9198 15.7869 16.8517 15.9706 16.7981C16.0624 16.7714 16.1336 16.7482 16.1846 16.7307C16.21 16.7219 16.2305 16.7146 16.2459 16.7089L16.2652 16.7016L16.2721 16.6989L16.2748 16.6978L16.276 16.6974C16.276 16.6974 16.2771 16.6969 16 16L16.2771 16.6969C16.662 16.5439 16.85 16.1078 16.6969 15.7229C16.5444 15.3393 16.1109 15.1513 15.7269 15.3015L15.7247 15.3023M15.7247 15.3023C15.7204 15.304 15.7109 15.3074 15.6966 15.3123C15.6681 15.3221 15.6196 15.338 15.5507 15.3581C15.4129 15.3983 15.1933 15.4552 14.8883 15.5132C14.2784 15.6292 13.3253 15.75 12 15.75C10.6747 15.75 9.72162 15.6292 9.11175 15.5132C8.8067 15.4552 8.5871 15.3983 8.44931 15.3581C8.3804 15.338 8.3319 15.3221 8.30336 15.3123C8.28909 15.3074 8.2798 15.304 8.27544 15.3024M15.7234 15.3029L15.7247 15.3023Z" fill={color} fillRule="evenodd"/>
	<Path d="M16.7097 18.2575C16.8436 18.6495 16.6344 19.0758 16.2425 19.2097C15.4416 19.4833 14.4567 19.75 13 19.75C11.6032 19.75 10.566 19.6245 9.86188 19.4925C9.45475 19.4163 9.18655 19.0244 9.26283 18.6173C9.33911 18.2101 9.73099 17.9419 10.1381 18.0182C10.7489 18.1326 11.6936 18.25 13 18.25C14.2465 18.25 15.0634 18.0274 15.7575 17.7903C16.1495 17.6564 16.5758 17.8656 16.7097 18.2575Z" fill={color} fillRule="evenodd"/>
	<Path d="M6.59107 12.5381C6.37372 12.2593 5.98221 12.1655 5.65648 12.3333C5.28827 12.523 5.14358 12.9753 5.33329 13.3435L6 13C5.33329 13.3435 5.33425 13.3454 5.33425 13.3454L5.33521 13.3472L5.33716 13.3509L5.34119 13.3584L5.34974 13.3738C5.35565 13.3841 5.36199 13.3946 5.3688 13.4054C5.38242 13.427 5.3978 13.4493 5.41515 13.4721C5.4499 13.5179 5.49206 13.5655 5.54294 13.614C5.64452 13.7108 5.78001 13.8105 5.96074 13.9087C6.31828 14.1028 6.87548 14.3029 7.76117 14.4595C8.16905 14.5317 8.55819 14.2595 8.63033 13.8516C8.70248 13.4437 8.43031 13.0546 8.02243 12.9825C7.23536 12.8432 6.84666 12.6828 6.67649 12.5904C6.63324 12.567 6.60605 12.5489 6.59107 12.5381ZM18.3435 12.3333C18.7117 12.523 18.8564 12.9753 18.6667 13.3435L18 13C18.6667 13.3435 18.6652 13.3463 18.6652 13.3463L18.6638 13.3492L18.6607 13.3549L18.6543 13.3666C18.6499 13.3744 18.6453 13.3824 18.6404 13.3905C18.6306 13.4067 18.6198 13.4234 18.6079 13.4405C18.5839 13.4748 18.5558 13.5104 18.5227 13.5468C18.4565 13.6198 18.3717 13.6952 18.2637 13.7708C18.0495 13.9206 17.7376 14.0755 17.2769 14.217C16.3613 14.498 14.7774 14.75 12 14.75C11.5858 14.75 11.25 14.4142 11.25 14C11.25 13.5858 11.5858 13.25 12 13.25C14.7073 13.25 16.1235 13.002 16.8367 12.783C17.1904 12.6745 17.3501 12.5794 17.4039 12.5417C17.4057 12.5404 17.4089 12.5381 17.4089 12.5381C17.6263 12.2593 18.0178 12.1655 18.3435 12.3333Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineWeatherTornadoSmall;
