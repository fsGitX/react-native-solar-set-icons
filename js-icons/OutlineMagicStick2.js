import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineMagicStick2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17.544 1.49832C16.8278 1.08854 16.0621 1.24479 15.3437 1.54047C14.6378 1.83102 13.769 2.34555 12.7076 2.97416L12.0804 3.34563C11.394 3.75213 11.2339 3.82987 11.0785 3.84934C10.9285 3.86812 10.7686 3.8349 10.0272 3.60677L9.34735 3.39756C8.20554 3.04616 7.26483 2.75665 6.52104 2.64661C5.74973 2.5325 4.98782 2.57903 4.38078 3.13463C3.77784 3.68648 3.65464 4.44206 3.68494 5.22685C3.71433 5.98791 3.89821 6.96754 4.12234 8.16157L4.25502 8.86849C4.3996 9.63887 4.41777 9.81323 4.38149 9.97239C4.34436 10.1353 4.24727 10.2938 3.77952 10.9428L3.3514 11.5368C2.62441 12.5455 2.03065 13.3693 1.67313 14.0513C1.30926 14.7455 1.08259 15.49 1.40213 16.2434C1.72676 17.0088 2.42603 17.3419 3.17507 17.5271C3.90291 17.7071 4.88842 17.7973 6.08514 17.9068L6.79813 17.972C7.57839 18.0435 7.73636 18.0739 7.85944 18.1443C7.98151 18.2142 8.08585 18.3327 8.53855 18.9668L8.95248 19.5467C9.64616 20.5184 10.2182 21.3198 10.74 21.855C11.2791 22.408 11.9187 22.8381 12.743 22.7349C13.5531 22.6334 14.0878 22.072 14.5134 21.4112C14.9307 20.7634 15.3538 19.8418 15.8718 18.7135L16.1769 18.0491C16.2869 17.8096 16.3703 17.6313 16.4373 17.4959C16.4477 17.5077 16.4585 17.5191 16.4697 17.5303L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L17.6859 16.6252C17.7093 16.617 17.7333 16.6086 17.758 16.5999L18.441 16.3607C19.5975 15.9557 20.5446 15.6241 21.2233 15.2693C21.9207 14.9048 22.5191 14.4232 22.7004 13.6277C22.8839 12.8225 22.5399 12.1399 22.0536 11.534C21.5851 10.9501 20.8613 10.2871 19.9839 9.48345L19.4604 9.00396C18.8892 8.48074 18.7829 8.36207 18.7259 8.22768C18.6669 8.08867 18.6544 7.9168 18.6665 7.12281L18.6775 6.39753C18.6962 5.17338 18.7114 4.16956 18.6122 3.41727C18.511 2.64981 18.2629 1.90963 17.544 1.49832ZM13.4178 4.29692C14.5467 3.62834 15.3217 3.17164 15.9146 2.92758C16.5071 2.68372 16.7019 2.74471 16.7991 2.80029C16.8936 2.85436 17.0424 2.98607 17.1251 3.61337C17.2081 4.24281 17.1965 5.1348 17.1767 6.43853L17.1647 7.2197C17.1547 7.82676 17.1461 8.3444 17.345 8.81337C17.5457 9.28666 17.9243 9.63246 18.3612 10.0314L18.4472 10.1101L18.9225 10.5454C19.8602 11.4044 20.4962 11.9899 20.8837 12.4728C21.2622 12.9444 21.2697 13.1549 21.2379 13.2944C21.2039 13.4437 21.0914 13.6457 20.5285 13.94C19.9583 14.238 19.1162 14.5349 17.8865 14.9656L17.1539 15.2221C16.5752 15.424 16.0914 15.5927 15.7122 15.9398C15.3345 16.2855 15.1202 16.7537 14.8621 17.3177L14.5343 18.0317C13.9843 19.2296 13.6047 20.052 13.2524 20.599C12.9015 21.1436 12.6931 21.2294 12.5566 21.2465C12.4345 21.2618 12.2378 21.2426 11.8141 20.8079C11.3826 20.3653 10.8767 19.6604 10.1351 18.6217L9.75937 18.0953L9.69049 17.9986C9.34758 17.5166 9.04872 17.0966 8.60434 16.8424C8.16092 16.5887 7.64642 16.5424 7.05381 16.4891L6.93485 16.4783L6.28697 16.419C5.00882 16.302 4.1387 16.2202 3.53516 16.071C2.93966 15.9237 2.82806 15.7638 2.78306 15.6577C2.73296 15.5396 2.7003 15.3227 3.00168 14.7477C3.30352 14.1719 3.83249 13.4348 4.60438 12.3638L5.06497 11.7249C5.42825 11.2221 5.73046 10.8039 5.844 10.3057C5.95834 9.80394 5.86331 9.30117 5.75053 8.70448L5.60821 7.94674C5.36962 6.67548 5.20841 5.80578 5.18383 5.16897C5.15965 4.54279 5.27846 4.34645 5.39353 4.24113C5.50449 4.13957 5.69883 4.04129 6.30151 4.13046C6.91831 4.22171 7.7488 4.47506 8.96802 4.85024L9.6966 5.07456C10.2652 5.25041 10.7542 5.40167 11.2649 5.33772C11.7704 5.2744 12.2154 5.01007 12.7422 4.6971L13.4178 4.29692Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineMagicStick2;
