import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineMoneyBillCheck = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.09872 1.25004C7.14677 1.25006 7.19553 1.25008 7.24502 1.25008H16.755C16.8045 1.25008 16.8532 1.25006 16.9013 1.25004C17.918 1.2496 18.6178 1.24929 19.2071 1.45435C20.3201 1.84161 21.1842 2.73726 21.5546 3.86559L20.8421 4.09954L21.5546 3.86559C21.7507 4.46271 21.7504 5.17254 21.75 6.22655C21.75 6.27372 21.75 6.32158 21.75 6.37014V20.3743C21.75 21.8395 20.023 22.7118 18.8856 21.671C18.8061 21.5983 18.6939 21.5983 18.6144 21.671L18.1313 22.1131C17.2031 22.9624 15.7969 22.9624 14.8687 22.1131C14.5137 21.7882 13.9863 21.7882 13.6313 22.1131C12.7031 22.9624 11.2969 22.9624 10.3687 22.1131C10.0137 21.7882 9.48631 21.7882 9.13132 22.1131C8.20313 22.9624 6.79688 22.9624 5.86869 22.1131L5.3856 21.671C5.30612 21.5983 5.19389 21.5983 5.11442 21.671C3.97699 22.7118 2.25001 21.8395 2.25001 20.3743V6.37014C2.25001 6.32158 2.24999 6.27372 2.24997 6.22655C2.24959 5.17255 2.24933 4.46271 2.44539 3.86559C2.81585 2.73726 3.67996 1.84161 4.79292 1.45435C5.38224 1.24929 6.08197 1.2496 7.09872 1.25004ZM7.24502 2.75008C6.02394 2.75008 5.60334 2.76057 5.28587 2.87103C4.62649 3.10047 4.09913 3.63728 3.87054 4.3335C3.75945 4.67183 3.75001 5.11796 3.75001 6.37014V20.3743C3.75001 20.4933 3.80993 20.5661 3.88511 20.6009C3.92427 20.619 3.96258 20.6237 3.99449 20.6194C4.02263 20.6156 4.05904 20.6035 4.10179 20.5644C4.75447 19.9671 5.74555 19.9671 6.39822 20.5644L6.88132 21.0065C7.23631 21.3313 7.76371 21.3313 8.11869 21.0065C9.04688 20.1571 10.4531 20.1571 11.3813 21.0065C11.7363 21.3313 12.2637 21.3313 12.6187 21.0065C13.5469 20.1571 14.9531 20.1571 15.8813 21.0065C16.2363 21.3313 16.7637 21.3313 17.1187 21.0065L17.6018 20.5644C18.2545 19.9671 19.2455 19.9671 19.8982 20.5644C19.941 20.6035 19.9774 20.6156 20.0055 20.6194C20.0374 20.6237 20.0757 20.619 20.1149 20.6009C20.1901 20.5661 20.25 20.4934 20.25 20.3743V6.37014C20.25 5.11797 20.2406 4.67183 20.1295 4.3335C19.9009 3.63728 19.3735 3.10047 18.7141 2.87103C18.3967 2.76057 17.9761 2.75008 16.755 2.75008H7.24502ZM14.9995 7.44063C15.3085 7.7165 15.3353 8.19062 15.0595 8.49959L11.488 12.4996C11.3457 12.659 11.1422 12.7501 10.9286 12.7501C10.7149 12.7501 10.5114 12.659 10.3691 12.4996L8.94055 10.8996C8.66468 10.5906 8.69152 10.1165 9.00049 9.84063C9.30947 9.56476 9.78359 9.59159 10.0595 9.90057L10.9286 10.874L13.9406 7.50057C14.2164 7.19159 14.6905 7.16476 14.9995 7.44063ZM6.75001 15.5001C6.75001 15.0859 7.08579 14.7501 7.50001 14.7501H16.5C16.9142 14.7501 17.25 15.0859 17.25 15.5001C17.25 15.9143 16.9142 16.2501 16.5 16.2501H7.50001C7.08579 16.2501 6.75001 15.9143 6.75001 15.5001Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineMoneyBillCheck;
