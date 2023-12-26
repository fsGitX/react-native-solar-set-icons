import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldFlashDrive = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M5.25467 9.53972L6.02181 8.77259C8.19159 6.60281 9.27648 5.51791 10.6246 5.51791C10.8261 5.51791 11.0217 5.54214 11.2159 5.59059C12.321 5.86637 13.3815 6.92686 15.2266 8.77189L15.2274 8.77271L15.2281 8.77346C16.8083 10.3536 17.813 11.3583 18.2421 12.3084C18.4021 12.6626 18.4821 13.0093 18.4821 13.3754C18.4821 14.7235 17.3972 15.8084 15.2274 17.9782L14.4603 18.7453C12.2905 20.9151 11.2056 22 9.85748 22C8.50935 22 7.42446 20.9151 5.25467 18.7453C3.08489 16.5755 2 15.4907 2 14.1425C2 12.7944 3.08489 11.7095 5.25467 9.53972ZM4.72452 13.6122C5.01741 13.3193 5.49229 13.3193 5.78518 13.6122L10.388 18.215C10.6809 18.5079 10.6809 18.9828 10.388 19.2757C10.0951 19.5686 9.62022 19.5686 9.32732 19.2757L4.72452 14.6729C4.43163 14.38 4.43163 13.9051 4.72452 13.6122Z" fill={color} fillRule="evenodd"/>
	<Path d="M19.8302 4.16978C21.2767 5.6163 22 6.33957 22 7.23832C22 8.13707 21.2767 8.86033 19.8302 10.3069L19.1945 10.9426C19.0901 10.7827 18.9783 10.6262 18.8609 10.4724C18.257 9.6808 17.3833 8.80722 16.359 7.78302L16.2171 7.64107C15.1929 6.61678 14.3193 5.74311 13.5277 5.13917C13.3739 5.02178 13.2174 4.90995 13.0574 4.80555L13.6931 4.16978C15.1397 2.72327 15.8629 2 16.7617 2C17.6604 2 18.3837 2.72326 19.8302 4.16978ZM19.6213 6.5C19.9141 6.79289 19.9141 7.26777 19.6213 7.56066L18.9141 8.26777C18.6213 8.56066 18.1464 8.56066 17.8535 8.26777C17.5606 7.97487 17.5606 7.5 17.8535 7.20711L18.5606 6.5C18.8535 6.20711 19.3284 6.20711 19.6213 6.5ZM17.4999 4.37868C17.7928 4.67157 17.7928 5.14645 17.4999 5.43934L16.7928 6.14645C16.4999 6.43934 16.0251 6.43934 15.7322 6.14645C15.4393 5.85355 15.4393 5.37868 15.7322 5.08579L16.4393 4.37868C16.7322 4.08579 17.207 4.08579 17.4999 4.37868Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldFlashDrive;
