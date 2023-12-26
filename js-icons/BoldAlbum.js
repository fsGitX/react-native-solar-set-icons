import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldAlbum = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17.2905 11.9687C17.2905 12.7073 16.6984 13.3062 15.9679 13.3062C15.2374 13.3062 14.6453 12.7073 14.6453 11.9687C14.6453 11.23 15.2374 10.6311 15.9679 10.6311C16.6984 10.6311 17.2905 11.23 17.2905 11.9687Z" fill={color}/>
	<Path d="M18.1316 7.40799C17.2832 7.28732 16.1897 7.28734 14.8267 7.28736H9.17326C7.81031 7.28734 6.7168 7.28732 5.86839 7.40799C4.99062 7.53283 4.25955 7.80072 3.71603 8.42851C3.17252 9.05629 3.00655 9.82451 3.00019 10.7209C2.99404 11.5872 3.13858 12.6834 3.31873 14.0496L3.68419 16.8214C3.825 17.8895 3.93897 18.7539 4.11616 19.4309C4.3006 20.1355 4.57289 20.7197 5.08383 21.172C5.59477 21.6244 6.20337 21.8201 6.91841 21.9119C7.60534 22 8.46777 22 9.53332 22H14.4667C15.5322 22 16.3947 22 17.0816 21.9119C17.7966 21.8201 18.4052 21.6244 18.9162 21.172C19.4271 20.7197 19.6994 20.1355 19.8838 19.4309C20.061 18.7539 20.175 17.8894 20.3158 16.8213L20.6813 14.0496C20.8614 12.6834 21.006 11.5872 20.9998 10.7209C20.9934 9.82451 20.8275 9.05629 20.284 8.42851C19.7404 7.80072 19.0094 7.53283 18.1316 7.40799ZM6.05259 8.73247C5.32568 8.83585 4.95802 9.02442 4.71116 9.30956C4.4643 9.5947 4.32805 9.98816 4.32278 10.7305C4.31738 11.4918 4.44802 12.4945 4.63662 13.9249L4.68663 14.3042L5.05822 14.032C6.0171 13.3297 7.43388 13.3643 8.34576 14.1275L11.7301 16.9603C12.0499 17.228 12.6011 17.2781 12.9989 17.0441L13.2341 16.9057C14.3594 16.2437 15.8676 16.3135 16.9059 17.0958L18.7378 18.4758C18.8281 17.9802 18.909 17.3709 19.0107 16.5999L19.3634 13.9249C19.552 12.4945 19.6826 11.4918 19.6772 10.7305C19.6719 9.98816 19.5357 9.5947 19.2888 9.30956C19.042 9.02442 18.6743 8.83585 17.9474 8.73247C17.2019 8.62643 16.2018 8.62487 14.7748 8.62487H9.22521C7.79821 8.62487 6.7981 8.62643 6.05259 8.73247Z" fill={color} fillRule="evenodd"/>
	<Path d="M8.85886 2.00001H15.141C15.3502 1.99995 15.5106 1.99991 15.6508 2.01515C16.6479 2.12351 17.4639 2.78957 17.81 3.68676H6.18981C6.53588 2.78957 7.35195 2.12351 8.34899 2.01515C8.48922 1.99991 8.64963 1.99995 8.85886 2.00001Z" fill={color}/>
	<Path d="M6.87943 4.5C5.62786 4.5 4.60163 5.33974 4.25915 6.45377C4.25201 6.477 4.24517 6.50034 4.23862 6.5238C4.59696 6.40323 4.96989 6.32446 5.34741 6.27068C6.31974 6.13218 7.54855 6.13225 8.97598 6.13234L9.08258 6.13234L15.1789 6.13234C16.6063 6.13225 17.8351 6.13218 18.8074 6.27068C19.185 6.32446 19.5579 6.40323 19.9162 6.5238C19.9097 6.50034 19.9028 6.477 19.8957 6.45377C19.5532 5.33974 18.527 4.5 17.2754 4.5H6.87943Z" fill={color}/>
</Svg>;

export default BoldAlbum;
