import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineWadOfMoney = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15.75 5.75059V8.32501C17.4617 8.67247 18.75 10.1858 18.75 12C18.75 13.8142 17.4617 15.3275 15.75 15.675V18.2494C16.787 18.247 17.5739 18.2343 18.2102 18.1696C18.9793 18.0914 19.4449 17.9433 19.8056 17.7023C20.1605 17.4652 20.4652 17.1605 20.7023 16.8056C20.9433 16.4449 21.0914 15.9793 21.1696 15.2102C21.2491 14.4287 21.25 13.4201 21.25 12C21.25 10.5799 21.2491 9.57133 21.1696 8.78975C21.0914 8.02071 20.9433 7.55507 20.7023 7.1944C20.4652 6.83953 20.1605 6.53484 19.8056 6.29772C19.4449 6.05673 18.9793 5.90865 18.2102 5.83041C17.5739 5.76568 16.787 5.75305 15.75 5.75059ZM14.25 18.25L14.25 5.75L9.75 5.75V18.25H14.25ZM8.25 18.2494V15.675C6.53832 15.3275 5.25 13.8142 5.25 12C5.25 10.1858 6.53832 8.67247 8.25 8.32501V5.75059C7.21303 5.75305 6.42613 5.76568 5.78975 5.83042C5.02071 5.90865 4.55507 6.05673 4.1944 6.29772C3.83953 6.53484 3.53484 6.83953 3.29772 7.1944C3.05673 7.55507 2.90865 8.02071 2.83041 8.78975C2.75091 9.57133 2.75 10.5799 2.75 12C2.75 13.4201 2.75091 14.4287 2.83042 15.2102C2.90865 15.9793 3.05673 16.4449 3.29772 16.8056C3.53484 17.1605 3.83953 17.4652 4.1944 17.7023C4.55507 17.9433 5.02071 18.0914 5.78975 18.1696C6.42614 18.2343 7.21303 18.247 8.25 18.2494ZM8.25 9.87803C7.37611 10.1869 6.75 11.0203 6.75 12C6.75 12.9797 7.37611 13.8131 8.25 14.122L8.25 9.87803ZM15.75 14.122C16.6239 13.8131 17.25 12.9797 17.25 12C17.25 11.0203 16.6239 10.1869 15.75 9.87803L15.75 14.122ZM18.3621 4.33812C19.2497 4.42841 19.9907 4.61739 20.639 5.05052C21.1576 5.39707 21.6029 5.84239 21.9495 6.36104C22.3826 7.00926 22.5716 7.7503 22.6619 8.63794C22.75 9.50431 22.75 10.5892 22.75 11.9584V12.0416C22.75 13.4108 22.75 14.4957 22.6619 15.3621C22.5716 16.2497 22.3826 16.9907 21.9495 17.639C21.6029 18.1576 21.1576 18.6029 20.639 18.9495C19.9907 19.3826 19.2497 19.5716 18.3621 19.6619C17.4957 19.75 16.4108 19.75 15.0416 19.75H8.9584C7.5892 19.75 6.5043 19.75 5.63795 19.6619C4.7503 19.5716 4.00926 19.3826 3.36104 18.9495C2.84239 18.6029 2.39707 18.1576 2.05052 17.639C1.61739 16.9907 1.42841 16.2497 1.33812 15.3621C1.24998 14.4957 1.24999 13.4108 1.25 12.0416V11.9584C1.24999 10.5892 1.24998 9.5043 1.33812 8.63795C1.42841 7.7503 1.61739 7.00926 2.05052 6.36104C2.39707 5.84239 2.84239 5.39707 3.36104 5.05052C4.00926 4.61739 4.7503 4.42841 5.63794 4.33812C6.5043 4.24998 7.5892 4.24999 8.95841 4.25L15.0416 4.25C16.4108 4.24999 17.4957 4.24998 18.3621 4.33812Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineWadOfMoney;
