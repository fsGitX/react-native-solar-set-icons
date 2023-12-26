import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldSquareAcademicCap2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.217 3.49965C12.796 2.83345 11.2035 2.83345 9.78252 3.49965L5.48919 5.51246C6.27114 5.59683 6.98602 6.0894 7.31789 6.86377C7.80739 8.00594 7.2783 9.32867 6.13613 9.81817L5.06046 10.2792C4.52594 10.5082 4.22261 10.6406 4.01782 10.7456C4.0167 10.7619 4.01564 10.7788 4.01465 10.7962L9.78261 13.5003C11.2036 14.1665 12.7961 14.1665 14.2171 13.5003L20.9082 10.3634C22.3637 9.68105 22.3637 7.31899 20.9082 6.63664L14.217 3.49965Z" fill={color}/>
	<Path d="M4.9998 12.9147V16.6254C4.9998 17.6334 5.50331 18.5772 6.38514 19.0656C7.85351 19.8787 10.2038 21 11.9998 21C13.7958 21 16.1461 19.8787 17.6145 19.0656C18.4963 18.5772 18.9998 17.6334 18.9998 16.6254V12.9148L14.8538 14.8585C13.0294 15.7138 10.9703 15.7138 9.14588 14.8585L4.9998 12.9147Z" fill={color}/>
	<Path d="M5.54544 8.43955C5.92616 8.27638 6.10253 7.83547 5.93936 7.45475C5.7762 7.07403 5.33528 6.89767 4.95456 7.06083L3.84318 7.53714C3.28571 7.77603 2.81328 7.97849 2.44254 8.18705C2.04805 8.40898 1.70851 8.66944 1.45419 9.05513C1.19986 9.44083 1.09421 9.85551 1.04563 10.3055C0.999964 10.7284 0.999981 11.2424 1 11.8489V14.7502C1 15.1644 1.33579 15.5002 1.75 15.5002C2.16422 15.5002 2.5 15.1644 2.5 14.7502V11.8878C2.5 11.232 2.50101 10.7995 2.53696 10.4665C2.57095 10.1517 2.63046 9.99612 2.70645 9.88087C2.78244 9.76562 2.90202 9.64964 3.178 9.49438C3.46985 9.33019 3.867 9.15889 4.46976 8.90056L5.54544 8.43955Z" fill={color}/>
</Svg>;

export default BoldSquareAcademicCap2;
