import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineTornado = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4.31274 4.5C4.67997 4.38779 5.16504 4.27819 5.75934 4.17914C7.33609 3.91634 9.54289 3.75 12 3.75C12.4142 3.75 12.75 3.41421 12.75 3C12.75 2.58579 12.4142 2.25 12 2.25C9.48655 2.25 7.19335 2.41944 5.51274 2.69954C4.67845 2.83859 3.95965 3.01055 3.43231 3.21835C3.17237 3.32078 2.91483 3.44871 2.70921 3.61618C2.51293 3.77605 2.25 4.0689 2.25 4.5C2.25 4.9311 2.51293 5.22395 2.70921 5.38382C2.91483 5.55129 3.17237 5.67922 3.43231 5.78165C3.95965 5.98945 4.67845 6.16141 5.51274 6.30046C7.19335 6.58056 9.48655 6.75 12 6.75C14.5135 6.75 16.8067 6.58056 18.4873 6.30046C19.3215 6.16141 20.0403 5.98945 20.5677 5.78165C20.8276 5.67922 21.0852 5.55129 21.2908 5.38382C21.4871 5.22395 21.75 4.9311 21.75 4.5C21.75 3.96462 21.3529 3.64298 21.1206 3.49321C20.8491 3.31812 20.4993 3.17957 20.1234 3.06485C19.361 2.83211 18.3088 2.64395 17.0832 2.50722C16.6715 2.46129 16.3006 2.75778 16.2546 3.16944C16.2087 3.58109 16.5052 3.95204 16.9168 3.99797C18.1032 4.13032 19.051 4.30583 19.6855 4.49951L19.6872 4.50002C19.32 4.61222 18.8349 4.72182 18.2407 4.82086C16.6639 5.08366 14.4571 5.25 12 5.25C9.54289 5.25 7.33609 5.08366 5.75934 4.82086C5.16504 4.72181 4.67997 4.61221 4.31274 4.5ZM20.3582 4.79149C20.3582 4.79149 20.3527 4.78778 20.3454 4.78004C20.3551 4.78757 20.3582 4.79149 20.3582 4.79149Z" fill={color} fillRule="evenodd"/>
	<Path d="M20.7061 7.74703C20.8458 8.13698 20.6429 8.56634 20.253 8.70605L20 8C20.253 8.70605 20.253 8.70605 20.253 8.70605L20.2507 8.70685L20.2475 8.708L20.2379 8.71136L20.2064 8.72212C20.1799 8.73102 20.1425 8.74331 20.0942 8.75848C19.9975 8.78884 19.8573 8.83077 19.6736 8.88034C19.3063 8.97949 18.7653 9.10918 18.0522 9.23804C16.626 9.4958 14.5124 9.75 11.7241 9.75C8.93608 9.75 6.95538 9.49582 5.65768 9.23533C5.00888 9.1051 4.53113 8.97335 4.2089 8.87117C4.0478 8.82008 3.92564 8.77641 3.84048 8.74404C3.79791 8.72786 3.76459 8.71451 3.74028 8.70447L3.71056 8.69197L3.70072 8.68771L3.69704 8.68609L3.69551 8.68541C3.69551 8.68541 3.69419 8.68482 4 8L3.69419 8.68482C3.31597 8.51593 3.14628 8.07241 3.31518 7.69419C3.48359 7.31705 3.92508 7.14725 4.30259 7.31375M4.30259 7.31375L4.31269 7.31799C4.32387 7.3226 4.34402 7.33073 4.37339 7.3419C4.43212 7.36422 4.52776 7.39867 4.66231 7.44133C4.93136 7.52665 5.35625 7.6449 5.95289 7.76467C7.14606 8.00418 9.02744 8.25 11.7241 8.25C14.4207 8.25 16.445 8.0042 17.7855 7.76195C18.4558 7.64081 18.9554 7.52051 19.2828 7.43216C19.4465 7.38798 19.5671 7.35178 19.6446 7.32745C19.6833 7.31529 19.7112 7.30609 19.7283 7.30034L19.747 7.29395L19.9812 7.94758C19.747 7.29394 19.747 7.29395 19.747 7.29395C20.1369 7.15452 20.5664 7.35723 20.7061 7.74703" fill={color} fillRule="evenodd"/>
	<Path d="M8.27306 13.3015C7.88914 13.1513 7.45556 13.3393 7.30306 13.7229C7.15003 14.1078 7.33801 14.5439 7.72291 14.6969L8 14C7.72291 14.6969 7.72291 14.6969 7.72291 14.6969L7.72399 14.6974L7.72518 14.6978L7.72792 14.6989L7.73479 14.7016L7.75414 14.7089C7.76955 14.7146 7.78996 14.7219 7.81543 14.7307C7.86638 14.7482 7.93755 14.7714 8.0294 14.7981C8.21311 14.8517 8.47931 14.9198 8.83147 14.9868C9.536 15.1208 10.583 15.25 12 15.25C13.417 15.25 14.464 15.1208 15.1685 14.9868C15.5207 14.9198 15.7869 14.8517 15.9706 14.7981C16.0624 14.7714 16.1336 14.7482 16.1846 14.7307C16.21 14.7219 16.2305 14.7146 16.2459 14.7089L16.2652 14.7016L16.2721 14.6989L16.2748 14.6978L16.276 14.6974C16.276 14.6974 16.2771 14.6969 16 14L16.2771 14.6969C16.662 14.5439 16.85 14.1078 16.6969 13.7229C16.5444 13.3393 16.1109 13.1513 15.7269 13.3015L15.7247 13.3023M15.7247 13.3023C15.7204 13.304 15.7109 13.3074 15.6966 13.3123C15.6681 13.3221 15.6196 13.338 15.5507 13.3581C15.4129 13.3983 15.1933 13.4552 14.8883 13.5132C14.2784 13.6292 13.3253 13.75 12 13.75C10.6747 13.75 9.72162 13.6292 9.11175 13.5132C8.8067 13.4552 8.5871 13.3983 8.44931 13.3581C8.3804 13.338 8.3319 13.3221 8.30336 13.3123C8.28909 13.3074 8.2798 13.304 8.27544 13.3024M15.7234 13.3029L15.7247 13.3023Z" fill={color} fillRule="evenodd"/>
	<Path d="M16.7097 16.2575C16.8436 16.6495 16.6344 17.0758 16.2425 17.2097C15.4416 17.4833 14.4567 17.75 13 17.75C11.6032 17.75 10.566 17.6245 9.86188 17.4925C9.45475 17.4163 9.18655 17.0244 9.26283 16.6173C9.33911 16.2101 9.73099 15.9419 10.1381 16.0182C10.7489 16.1326 11.6936 16.25 13 16.25C14.2465 16.25 15.0634 16.0274 15.7575 15.7903C16.1495 15.6564 16.5758 15.8656 16.7097 16.2575Z" fill={color} fillRule="evenodd"/>
	<Path d="M15.2406 19.2659C15.3068 19.6748 15.029 20.0599 14.6201 20.1261C14.1456 20.2029 13.613 20.25 13.0002 20.25C12.5141 20.25 12.0715 20.2348 11.6713 20.2094C11.2579 20.1832 10.944 19.8268 10.9703 19.4134C10.9965 19.0001 11.3529 18.6862 11.7662 18.7125C12.1345 18.7358 12.5454 18.75 13.0002 18.75C13.5346 18.75 13.9869 18.7091 14.3804 18.6454C14.7893 18.5792 15.1744 18.857 15.2406 19.2659Z" fill={color} fillRule="evenodd"/>
	<Path d="M6.59107 10.5381C6.37372 10.2593 5.98221 10.1655 5.65648 10.3333C5.28827 10.523 5.14358 10.9753 5.33329 11.3435L6 11C5.33329 11.3435 5.33425 11.3454 5.33425 11.3454L5.33521 11.3472L5.33716 11.3509L5.34119 11.3584L5.34974 11.3738C5.35565 11.3841 5.36199 11.3946 5.3688 11.4054C5.38242 11.427 5.3978 11.4493 5.41515 11.4721C5.4499 11.5179 5.49206 11.5655 5.54294 11.614C5.64452 11.7108 5.78001 11.8105 5.96074 11.9087C6.31828 12.1028 6.87548 12.3029 7.76117 12.4595C8.16905 12.5317 8.55819 12.2595 8.63033 11.8516C8.70248 11.4437 8.43031 11.0546 8.02243 10.9825C7.23536 10.8432 6.84666 10.6828 6.67649 10.5904C6.63324 10.567 6.60605 10.5489 6.59107 10.5381ZM18.3435 10.3333C18.7117 10.523 18.8564 10.9753 18.6667 11.3435L18 11C18.6667 11.3435 18.6652 11.3463 18.6652 11.3463L18.6638 11.3492L18.6607 11.3549L18.6543 11.3666C18.6499 11.3744 18.6453 11.3824 18.6404 11.3905C18.6306 11.4067 18.6198 11.4234 18.6079 11.4405C18.5839 11.4748 18.5558 11.5104 18.5227 11.5468C18.4565 11.6198 18.3717 11.6952 18.2637 11.7708C18.0495 11.9206 17.7376 12.0755 17.2769 12.217C16.3613 12.498 14.7774 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C14.7073 11.25 16.1235 11.002 16.8367 10.783C17.1904 10.6745 17.3501 10.5794 17.4039 10.5417C17.4057 10.5404 17.4089 10.5381 17.4089 10.5381C17.6263 10.2593 18.0178 10.1655 18.3435 10.3333Z" fill={color} fillRule="evenodd"/>
	<Path d="M12.25 22C12.25 21.5858 12.5858 21.25 13 21.25V22.75C12.5858 22.75 12.25 22.4142 12.25 22ZM13 22.75H13.5C13.9142 22.75 14.25 22.4142 14.25 22C14.25 21.5858 13.9142 21.25 13.5 21.25H13V22.75Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineTornado;
