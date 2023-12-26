import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineUsersUserCross = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 1.25C9.37666 1.25 7.25001 3.37665 7.25001 6C7.25001 8.62335 9.37666 10.75 12 10.75C14.6234 10.75 16.75 8.62335 16.75 6C16.75 3.37665 14.6234 1.25 12 1.25ZM8.75001 6C8.75001 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6C15.25 7.79493 13.7949 9.25 12 9.25C10.2051 9.25 8.75001 7.79493 8.75001 6Z" fill={color} fillRule="evenodd"/>
	<Path d="M17.1968 14.1363C16.904 13.8434 16.4291 13.8434 16.1362 14.1363C15.8433 14.4292 15.8433 14.9041 16.1362 15.197L16.9394 16.0002L16.1365 16.803C15.8436 17.0959 15.8436 17.5708 16.1365 17.8637C16.4294 18.1565 16.9043 18.1565 17.1972 17.8637L18 17.0608L18.8029 17.8637C19.0957 18.1565 19.5706 18.1565 19.8635 17.8637C20.1564 17.5708 20.1564 17.0959 19.8635 16.803L19.0607 16.0002L19.8638 15.197C20.1567 14.9041 20.1567 14.4292 19.8638 14.1363C19.5709 13.8434 19.0961 13.8434 18.8032 14.1363L18 14.9395L17.1968 14.1363Z" fill={color}/>
	<Path d="M12 12.25C12.9685 12.25 13.9019 12.3421 14.7747 12.5129C15.6217 11.7291 16.7549 11.25 18 11.25C20.6234 11.25 22.75 13.3766 22.75 16C22.75 17.7601 21.7927 19.2966 20.3704 20.1172C19.9973 20.9266 19.2985 21.5697 18.1196 22.0085C16.8099 22.4961 14.8681 22.75 12 22.75C9.97424 22.75 8.41927 22.6229 7.22622 22.3815C6.03649 22.1406 5.15589 21.7761 4.52642 21.2635C3.2474 20.222 3.24882 18.7638 3.24995 17.602L3.25001 17.5C3.25001 15.8661 4.41949 14.5396 5.97546 13.6643C7.55494 12.7759 9.68646 12.25 12 12.25ZM4.75001 17.5C4.75001 16.6487 5.37139 15.7251 6.71085 14.9717C8.02681 14.2315 9.89529 13.75 12 13.75C12.6061 13.75 13.194 13.79 13.7557 13.865C13.4322 14.5069 13.25 15.2322 13.25 16C13.25 18.3893 15.0141 20.3666 17.3108 20.7004C16.2401 21.0366 14.578 21.25 12 21.25C10.0258 21.25 8.58075 21.1252 7.5238 20.9113C6.46354 20.6967 5.84413 20.4022 5.4736 20.1004C4.79033 19.544 4.75001 18.8078 4.75001 17.5ZM18 12.75C16.2051 12.75 14.75 14.2051 14.75 16C14.75 17.7949 16.2051 19.25 18 19.25C19.7949 19.25 21.25 17.7949 21.25 16C21.25 14.2051 19.7949 12.75 18 12.75Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineUsersUserCross;
