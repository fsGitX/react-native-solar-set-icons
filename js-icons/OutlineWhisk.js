import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineWhisk = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17.9519 2.87372C16.1403 2.46727 13.9348 3.07344 12.294 4.71423C11.1265 5.88164 10.2154 7.62452 9.86375 9.3282C9.72886 9.98165 9.68101 10.5996 9.71967 11.1614C9.90479 10.8075 10.1194 10.4492 10.3481 10.0976C11.3191 8.60491 12.6635 7.05515 13.5766 6.14207C14.491 5.22775 15.8483 4.07619 17.1557 3.30001C17.417 3.14489 17.6842 3.00002 17.9519 2.87372ZM21.0787 2.92102C18.4781 0.320441 13.9916 0.895314 11.2333 3.65355C9.84333 5.04349 8.8011 7.05636 8.39472 9.02495C8.28045 9.57851 8.21372 10.1455 8.20842 10.705L2.30351 16.6097C0.89883 18.0143 0.89883 20.2917 2.30351 21.6963C3.70818 23.101 5.98558 23.101 7.39025 21.6963L13.2958 15.791C13.8549 15.7856 14.4215 15.7188 14.9746 15.6047C16.9433 15.1983 18.9562 14.1561 20.3462 12.7662C23.1045 10.0079 23.6794 5.52162 21.0787 2.92102ZM20.0181 3.9817C19.9728 3.93643 19.8405 3.84698 19.4318 3.93075C19.0285 4.01341 18.5105 4.24016 17.9215 4.58985C16.7529 5.28359 15.4935 6.34659 14.6373 7.20275C13.7798 8.06014 12.507 9.52958 11.6055 10.9155C11.1513 11.6137 10.8205 12.2468 10.6683 12.745C10.5925 12.9933 10.5739 13.1676 10.5821 13.2779C10.5859 13.3297 10.595 13.3583 10.6003 13.3712C10.6048 13.3822 10.6082 13.3858 10.6109 13.3885C10.6136 13.3913 10.6173 13.3946 10.6283 13.3991C10.6412 13.4045 10.6698 13.4136 10.7216 13.4174C10.832 13.4256 11.0064 13.407 11.2547 13.3312C11.753 13.179 12.3862 12.8483 13.0844 12.3942C14.4705 11.4928 15.9401 10.2202 16.7975 9.36284C17.6536 8.50673 18.7165 7.24726 19.4102 6.07858C19.7598 5.48949 19.9865 4.97141 20.0691 4.56806C20.1528 4.15933 20.0634 4.02698 20.0181 3.9817ZM12.8386 14.2798C13.1925 14.0947 13.5507 13.8803 13.9022 13.6517C15.395 12.6809 16.945 11.3366 17.8581 10.4235C18.7725 9.50915 19.924 8.15175 20.7001 6.84416C20.8551 6.58291 20.9999 6.31586 21.1262 6.04819C21.5325 7.85963 20.9262 10.0648 19.2855 11.7055C18.1181 12.8729 16.3751 13.7839 14.6714 14.1356C14.0181 14.2705 13.4004 14.3183 12.8386 14.2798ZM11.422 15.5435C10.7226 15.3333 10.0812 14.9801 9.55025 14.4492C9.01954 13.9185 8.66647 13.2775 8.45624 12.5785L3.36415 17.6704C2.54528 18.4892 2.54528 19.8168 3.36415 20.6357C4.18304 21.4545 5.51072 21.4545 6.32961 20.6357L11.422 15.5435Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineWhisk;
