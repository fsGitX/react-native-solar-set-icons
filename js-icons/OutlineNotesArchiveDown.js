import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineNotesArchiveDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.95526 2.25C3.97013 2.25001 3.98505 2.25001 4.00001 2.25001L20.0448 2.25C20.4776 2.24995 20.8744 2.24991 21.1972 2.29331C21.5527 2.3411 21.9284 2.45355 22.2374 2.76257C22.5465 3.07159 22.6589 3.44732 22.7067 3.8028C22.7501 4.12561 22.7501 4.52245 22.75 4.95526V5.04475C22.7501 5.47757 22.7501 5.8744 22.7067 6.19721C22.6589 6.55269 22.5465 6.92842 22.2374 7.23744C21.9437 7.53121 21.5896 7.64733 21.25 7.69914V13.0564C21.25 14.8942 21.25 16.3498 21.0969 17.489C20.9392 18.6615 20.6071 19.6104 19.8588 20.3588C19.1104 21.1071 18.1615 21.4392 16.989 21.5969C15.8498 21.75 14.3942 21.75 12.5564 21.75H11.4436C9.60583 21.75 8.1502 21.75 7.01098 21.5969C5.83856 21.4392 4.88961 21.1071 4.14125 20.3588C3.39289 19.6104 3.06077 18.6615 2.90314 17.489C2.74998 16.3498 2.74999 14.8942 2.75001 13.0564L2.75001 7.69914C2.41038 7.64733 2.05634 7.53121 1.76257 7.23744C1.45355 6.92842 1.3411 6.55269 1.29331 6.19721C1.24991 5.8744 1.24995 5.47757 1.25 5.04476C1.25001 5.02988 1.25001 5.01496 1.25001 5.00001C1.25001 4.98505 1.25001 4.97013 1.25 4.95526C1.24995 4.52244 1.24991 4.12561 1.29331 3.8028C1.3411 3.44732 1.45355 3.07159 1.76257 2.76257C2.07159 2.45355 2.44732 2.3411 2.8028 2.29331C3.12561 2.24991 3.52244 2.24995 3.95526 2.25ZM4.25001 7.75001V13C4.25001 14.9068 4.2516 16.2615 4.38977 17.2892C4.52503 18.2952 4.7787 18.8749 5.20191 19.2981C5.62512 19.7213 6.20477 19.975 7.21086 20.1102C8.23852 20.2484 9.59319 20.25 11.5 20.25H12.5C14.4068 20.25 15.7615 20.2484 16.7892 20.1102C17.7952 19.975 18.3749 19.7213 18.7981 19.2981C19.2213 18.8749 19.475 18.2952 19.6102 17.2892C19.7484 16.2615 19.75 14.9068 19.75 13V7.75001H12.75V14.0455L14.4425 12.1649C14.7196 11.8571 15.1938 11.8321 15.5017 12.1092C15.8096 12.3863 15.8346 12.8605 15.5575 13.1684L12.5575 16.5017C12.4152 16.6598 12.2126 16.75 12 16.75C11.7874 16.75 11.5848 16.6598 11.4425 16.5017L8.44254 13.1684C8.16544 12.8605 8.1904 12.3863 8.49828 12.1092C8.80617 11.8321 9.28038 11.8571 9.55748 12.1649L11.25 14.0455V7.75001H4.25001ZM20 6.25001C20.4926 6.25001 20.7866 6.24841 20.9973 6.22008C21.0939 6.2071 21.1423 6.19181 21.164 6.18285C21.1691 6.18077 21.1724 6.17916 21.1743 6.17815L21.1768 6.17678L21.1781 6.17434C21.1792 6.1724 21.1808 6.16909 21.1828 6.16404C21.1918 6.14226 21.2071 6.0939 21.2201 5.99734C21.2484 5.78662 21.25 5.49261 21.25 5.00001C21.25 4.5074 21.2484 4.21339 21.2201 4.00267C21.2071 3.90611 21.1918 3.85775 21.1828 3.83597C21.1808 3.83093 21.1792 3.82761 21.1781 3.82568L21.1768 3.82323L21.1743 3.82187C21.1724 3.82086 21.1691 3.81924 21.164 3.81717C21.1423 3.80821 21.0939 3.79291 20.9973 3.77993C20.7866 3.7516 20.4926 3.75001 20 3.75001H4.00001C3.5074 3.75001 3.21339 3.7516 3.00267 3.77993C2.90611 3.79291 2.85775 3.80821 2.83597 3.81717C2.83093 3.81924 2.82761 3.82086 2.82568 3.82187L2.82324 3.82324L2.82187 3.82568C2.82086 3.82761 2.81924 3.83093 2.81717 3.83597C2.80821 3.85775 2.79291 3.90611 2.77993 4.00267C2.7516 4.21339 2.75001 4.5074 2.75001 5.00001C2.75001 5.49261 2.7516 5.78662 2.77993 5.99734C2.79291 6.0939 2.80821 6.14226 2.81717 6.16404C2.81924 6.16909 2.82086 6.1724 2.82187 6.17434L2.82324 6.17677L2.82568 6.17815C2.82761 6.17916 2.83093 6.18077 2.83597 6.18285C2.85775 6.19181 2.90611 6.2071 3.00267 6.22008C3.21339 6.24841 3.5074 6.25001 4.00001 6.25001H20ZM2.82324 6.17677C2.82297 6.17644 2.82284 6.17636 2.82324 6.17677Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineNotesArchiveDown;