import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineEssentionalPerfume = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.95063 1.25H10.0494C10.7142 1.24996 11.2871 1.24993 11.7458 1.31161C12.2375 1.37771 12.7087 1.52677 13.091 1.90901C13.4732 2.29126 13.6223 2.76252 13.6884 3.25416C13.7272 3.54277 13.7416 3.87656 13.7469 4.25H14.3197C15.2124 4.25 16.0927 4.45784 16.8911 4.85704L17.0093 4.91613C17.9527 3.89673 19.6234 3.87761 20.875 4.60025C22.2867 5.4153 23.1478 7.16375 22.3146 8.60682C21.4815 10.0499 19.5367 10.1784 18.125 9.36339C17.0041 8.71623 16.2304 7.48062 16.3763 6.27665L16.2203 6.19868C15.6302 5.90361 14.9795 5.75 14.3197 5.75H13.75L13.75 7C13.75 7.0149 13.7496 7.02969 13.7487 7.04437C16.5261 8.28708 18.5168 10.8696 18.7309 13.9436C18.7503 14.0279 18.7553 14.1158 18.7447 14.2031C18.7482 14.3 18.75 14.3973 18.75 14.495C18.75 16.616 17.8998 18.5448 16.5157 19.9988L16.498 20.0174C16.2853 20.241 16.0762 20.4607 15.7913 20.6693C15.4966 20.8851 15.1472 21.0713 14.6493 21.2848C13.5638 21.7502 12.7751 21.7501 11.5168 21.75H8.48321C7.2249 21.7501 6.43622 21.7502 5.35072 21.2848C4.85279 21.0713 4.50336 20.8851 4.20874 20.6693C3.92384 20.4607 3.71473 20.241 3.50199 20.0174L3.48432 19.9988C2.1002 18.5448 1.25 16.616 1.25 14.495C1.25 11.1804 3.30934 8.36071 6.25129 7.04437C6.25043 7.02969 6.25 7.0149 6.25 7L6.25 6.99758V5.5C6.25 5.48687 6.25034 5.47381 6.25101 5.46084C6.25034 5.44788 6.25 5.43482 6.25 5.42169L6.25 4.95063C6.24996 4.28577 6.24993 3.7129 6.31161 3.25416C6.37771 2.76252 6.52677 2.29126 6.90901 1.90901C7.29126 1.52677 7.76252 1.37771 8.25416 1.31161C8.7129 1.24993 9.28576 1.24996 9.95063 1.25ZM17.0527 12.93C16.2982 9.98762 13.4637 7.75337 10.0078 7.75H9.99217C6.73181 7.75318 4.02448 9.742 3.09505 12.4378C3.38113 12.5641 3.67132 12.7044 3.95986 12.8451L4.08039 12.9039C4.44219 13.0806 4.80693 13.2586 5.19056 13.4285C6.039 13.8043 6.94184 14.1223 7.94463 14.2352C9.20368 14.377 10.1612 13.9399 11.3146 13.4133L11.326 13.4081C12.4605 12.8901 13.786 12.2896 15.5208 12.5777C16.0499 12.6656 16.5747 12.7861 17.0527 12.93ZM2.77441 13.9399C2.94229 14.0183 3.11756 14.1032 3.30243 14.1934L3.42329 14.2523C3.78224 14.4276 4.17234 14.6181 4.5831 14.8C5.50181 15.207 6.56181 15.589 7.77679 15.7258C9.45292 15.9145 10.7452 15.3233 11.8399 14.8224L11.949 14.7726C13.0909 14.2512 14.0363 13.8517 15.275 14.0575C16.0503 14.1862 16.7523 14.3829 17.2494 14.586C17.2256 16.2591 16.5471 17.7903 15.4292 18.9646C15.198 19.2075 15.0732 19.336 14.905 19.4591C14.7387 19.5809 14.5038 19.7151 14.0582 19.9062C13.2733 20.2427 12.7683 20.25 11.4584 20.25H8.5416C7.23169 20.25 6.72666 20.2427 5.94177 19.9062C5.49615 19.7151 5.26129 19.5809 5.09497 19.4591C4.92681 19.336 4.80198 19.2075 4.57077 18.9646C3.43265 17.769 2.75 16.2036 2.75 14.495C2.75 14.3083 2.75824 14.1231 2.77441 13.9399ZM12.25 6.25L7.75 6.25V5.71686C7.80857 5.70629 7.86874 5.69229 7.92888 5.67368C8.13123 5.61104 8.36593 5.48564 8.53721 5.23929C8.70287 5.00102 8.75 4.73418 8.75 4.5C8.75 4.26586 8.70288 3.99892 8.53706 3.7606C8.36561 3.51417 8.13071 3.38893 7.92838 3.32646C7.89359 3.31571 7.8588 3.30652 7.82431 3.29863C7.86702 3.09337 7.92289 3.01646 7.96967 2.96967C8.02677 2.91258 8.12873 2.84197 8.45403 2.79823C8.80091 2.7516 9.27169 2.75 10 2.75C10.7283 2.75 11.1991 2.7516 11.546 2.79823C11.8713 2.84197 11.9732 2.91258 12.0303 2.96967C12.0874 3.02677 12.158 3.12873 12.2018 3.45403C12.2484 3.80091 12.25 4.27169 12.25 5V6.25ZM18.875 8.06435C17.8953 7.49869 17.7131 6.57692 17.9845 6.10682C18.2559 5.63671 19.1453 5.33363 20.125 5.89929C21.1048 6.46495 21.287 7.38671 21.0156 7.85682C20.7442 8.32692 19.8548 8.63001 18.875 8.06435Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineEssentionalPerfume;
