import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMasks = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.7582 12.6766L15.9131 9.37926C15.4725 7.66038 15.2522 6.80094 14.677 6.36888C14.4841 6.22403 14.268 6.11656 14.0388 6.05159C13.3551 5.85777 12.5782 6.22163 11.0242 6.94934C9.87347 7.48822 9.29811 7.75765 8.69774 7.94822C8.48901 8.01448 8.27824 8.07352 8.06578 8.12524C7.4547 8.27402 6.82756 8.34142 5.57328 8.47622C3.87945 8.65827 3.03253 8.74929 2.53319 9.27447C2.36579 9.45054 2.22999 9.6566 2.13226 9.88284C1.84073 10.5577 2.06102 11.4171 2.50159 13.136L3.34673 16.4334C4.34019 20.3093 7.64328 21.5286 9.86292 21.9058C10.5401 22.0208 10.8787 22.0784 11.907 21.7903C12.9353 21.5023 13.201 21.2755 13.7324 20.8219C15.4742 19.335 17.7517 16.5526 16.7582 12.6766Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M16.5 17.221C18.2411 16.4706 19.9791 15.0638 20.6533 12.4334L21.4984 9.13602C21.939 7.41713 22.1593 6.55769 21.8677 5.88284C21.77 5.6566 21.6342 5.45054 21.4668 5.27447C20.9675 4.74929 20.1206 4.65827 18.4267 4.47622C17.1724 4.34142 16.5453 4.27402 15.9342 4.12524C15.7218 4.07352 15.511 4.01448 15.3023 3.94822C14.7019 3.75765 14.1265 3.48822 12.9758 2.94934C11.4218 2.22163 10.6449 1.85777 9.96123 2.05159C9.73205 2.11656 9.51589 2.22403 9.32304 2.36888C8.7478 2.80094 8.52751 3.66038 8.08695 5.37926L7.38742 8.10846" stroke="black" strokeWidth="1.5"/>
	<Path d="M5.25882 13.2955C5.31893 12.6763 5.77997 12.1206 6.44889 11.9414C7.11781 11.7621 7.79491 12.0128 8.1566 12.5191" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19.1797 8.93565C19.1195 8.3164 18.6585 7.76073 17.9896 7.5815C17.3207 7.40226 16.6436 7.65296 16.2819 8.1592" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11.0547 11.7423C11.1148 11.123 11.5759 10.5674 12.2448 10.3881C12.9137 10.2089 13.5908 10.4596 13.9525 10.9658" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11.0962 7.04199C10.8554 7.37902 10.387 7.45703 10.05 7.21623C9.71293 6.97543 9.63492 6.50701 9.87572 6.16998L11.0962 7.04199ZM11.9996 6.75273C11.6209 6.65125 11.2691 6.79999 11.0962 7.04199L9.87572 6.16998C10.4262 5.39951 11.4287 5.04684 12.3878 5.30384L11.9996 6.75273ZM12.4781 7.06556C12.3674 6.9229 12.204 6.80751 11.9996 6.75273L12.3878 5.30384C12.9123 5.4444 13.3544 5.74788 13.6635 6.14641L12.4781 7.06556Z" fill={color}/>
	<Path d="M13.2006 16.231C13.2006 16.231 12.1758 15.4703 10.3883 15.9492C8.60088 16.4282 8.09366 17.5994 8.09366 17.5994" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearMasks;
