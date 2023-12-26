import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineFoldersFolderWithFiles = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.85926 1.25001C6.88901 1.25001 6.91916 1.25002 6.94973 1.25002L6.98672 1.25001C7.33815 1.24999 7.5643 1.24998 7.78539 1.27065C8.68725 1.35499 9.54513 1.69531 10.2586 2.25002H16.5C16.5196 2.25002 16.5388 2.25001 16.5578 2.25001C16.9665 2.24994 17.2449 2.2499 17.4895 2.2821C19.1722 2.50364 20.4964 3.82779 20.7179 5.51054C20.7263 5.57397 20.7324 5.63966 20.737 5.70931C21.0145 5.83579 21.2714 5.99934 21.5077 6.21185C21.6061 6.30032 21.6997 6.39394 21.7882 6.49231C22.3164 7.07965 22.5422 7.79459 22.6479 8.63601C22.75 9.4479 22.75 10.4741 22.75 11.747V14.0564C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6615 22.1071 20.6104 21.3587 21.3588C20.6104 22.1071 19.6614 22.4393 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0564 22.75H9.94357C8.10581 22.75 6.65018 22.75 5.51096 22.5969C4.33854 22.4393 3.38959 22.1071 2.64123 21.3588C1.89287 20.6104 1.56075 19.6615 1.40312 18.489C1.24996 17.3498 1.24997 15.8942 1.24999 14.0564L1.24999 6.94976C1.24999 6.91919 1.24998 6.88904 1.24998 6.85929C1.24987 6.06338 1.24979 5.55685 1.33234 5.11935C1.69487 3.19788 3.19785 1.6949 5.11932 1.33237C5.55682 1.24982 6.06335 1.2499 6.85926 1.25001ZM19.1473 5.32768C18.8895 4.5029 18.1732 3.88506 17.2937 3.76927C17.1597 3.75163 16.9882 3.75002 16.5 3.75002H11.8113C12.4542 4.38908 12.7459 4.65598 13.0767 4.84005C13.2948 4.96134 13.526 5.05713 13.7659 5.12552C14.1792 5.24333 14.6324 5.25002 15.8284 5.25002L16.253 5.25002C17.4153 5.25 18.3718 5.24999 19.1473 5.32768ZM6.94973 2.75002C6.03309 2.75002 5.6787 2.75329 5.39742 2.80636C4.08274 3.05441 3.05438 4.08277 2.80633 5.39746C2.75326 5.67873 2.74999 6.03312 2.74999 6.94976V14C2.74999 15.9068 2.75158 17.2615 2.88974 18.2892C3.02501 19.2953 3.27868 19.8749 3.70189 20.2981C4.1251 20.7213 4.70475 20.975 5.71083 21.1103C6.7385 21.2484 8.09317 21.25 9.99999 21.25H14C15.9068 21.25 17.2615 21.2484 18.2891 21.1103C19.2952 20.975 19.8749 20.7213 20.2981 20.2981C20.7213 19.8749 20.975 19.2953 21.1102 18.2892C21.2484 17.2615 21.25 15.9068 21.25 14V11.7979C21.25 10.4621 21.2486 9.5305 21.1597 8.82312C21.0731 8.13448 20.9141 7.76356 20.6729 7.49539C20.6198 7.43637 20.5636 7.3802 20.5046 7.32712C20.2364 7.08592 19.8655 6.92692 19.1769 6.84034C18.4695 6.75141 17.5379 6.75002 16.2021 6.75002H15.8284C15.7912 6.75002 15.7545 6.75002 15.7182 6.75003C14.6702 6.75025 13.9944 6.75038 13.3547 6.56806C13.0041 6.46811 12.6661 6.32811 12.3475 6.15083C11.7663 5.82747 11.2885 5.3495 10.5476 4.60833C10.5219 4.58265 10.496 4.55666 10.4697 4.53035L9.9194 3.98009C9.63613 3.69682 9.52775 3.58951 9.41728 3.49793C8.914 3.08073 8.29661 2.825 7.64573 2.76413C7.50286 2.75077 7.35035 2.75002 6.94973 2.75002ZM12.25 10C12.25 9.5858 12.5858 9.25002 13 9.25002H18C18.4142 9.25002 18.75 9.5858 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H13C12.5858 10.75 12.25 10.4142 12.25 10Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineFoldersFolderWithFiles;