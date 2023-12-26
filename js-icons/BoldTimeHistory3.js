import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldTimeHistory3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.09958 2.39754C9.24874 2.78396 9.05641 3.21814 8.66999 3.36731C8.52855 3.42191 8.38879 3.47988 8.2508 3.54114C7.87221 3.70921 7.42906 3.53856 7.261 3.15997C7.09293 2.78139 7.26358 2.33824 7.64217 2.17017C7.80267 2.09892 7.96526 2.03147 8.12981 1.96795C8.51623 1.81878 8.95041 2.01112 9.09958 2.39754ZM5.6477 4.24026C5.93337 4.54021 5.92178 5.01495 5.62183 5.30061C5.51216 5.40505 5.40505 5.51216 5.30061 5.62183C5.01495 5.92178 4.54021 5.93337 4.24026 5.6477C3.94031 5.36204 3.92873 4.88731 4.21439 4.58736C4.33566 4.46003 4.46002 4.33566 4.58736 4.21439C4.88731 3.92873 5.36204 3.94031 5.6477 4.24026ZM3.15997 7.261C3.53856 7.42907 3.70921 7.87221 3.54114 8.2508C3.47988 8.38879 3.42191 8.52855 3.36731 8.66999C3.21814 9.05641 2.78396 9.24874 2.39754 9.09958C2.01112 8.95041 1.81878 8.51623 1.96795 8.12981C2.03147 7.96526 2.09892 7.80267 2.17017 7.64217C2.33824 7.26358 2.78139 7.09293 3.15997 7.261ZM2.02109 11.004C2.43518 11.0141 2.76276 11.3579 2.75275 11.7719C2.75092 11.8477 2.75 11.9237 2.75 12C2.75 12.0763 2.75092 12.1523 2.75275 12.2281C2.76276 12.6421 2.43518 12.9859 2.02109 12.996C1.60699 13.006 1.26319 12.6784 1.25319 12.2643C1.25107 12.1764 1.25 12.0883 1.25 12C1.25 11.9117 1.25107 11.8236 1.25319 11.7357C1.26319 11.3216 1.60699 10.994 2.02109 11.004ZM21.6025 14.9004C21.9889 15.0496 22.1812 15.4838 22.032 15.8702C21.9685 16.0347 21.9011 16.1973 21.8298 16.3578C21.6618 16.7364 21.2186 16.9071 20.84 16.739C20.4614 16.5709 20.2908 16.1278 20.4589 15.7492C20.5201 15.6112 20.5781 15.4714 20.6327 15.33C20.7819 14.9436 21.216 14.7513 21.6025 14.9004ZM2.39754 14.9004C2.78396 14.7513 3.21814 14.9436 3.36731 15.33C3.42191 15.4714 3.47988 15.6112 3.54114 15.7492C3.70921 16.1278 3.53856 16.5709 3.15997 16.739C2.78139 16.9071 2.33824 16.7364 2.17017 16.3578C2.09892 16.1973 2.03147 16.0347 1.96795 15.8702C1.81878 15.4838 2.01112 15.0496 2.39754 14.9004ZM19.7597 18.3523C20.0597 18.638 20.0713 19.1127 19.7856 19.4126C19.6643 19.54 19.54 19.6643 19.4126 19.7856C19.1127 20.0713 18.638 20.0597 18.3523 19.7597C18.0666 19.4598 18.0782 18.9851 18.3782 18.6994C18.4878 18.5949 18.5949 18.4878 18.6994 18.3782C18.9851 18.0782 19.4598 18.0666 19.7597 18.3523ZM4.24026 18.3523C4.54021 18.0666 5.01495 18.0782 5.30061 18.3782C5.40505 18.4878 5.51216 18.5949 5.62183 18.6994C5.92178 18.9851 5.93337 19.4598 5.6477 19.7597C5.36204 20.0597 4.88731 20.0713 4.58736 19.7856C4.46003 19.6643 4.33566 19.54 4.21439 19.4126C3.92873 19.1127 3.94031 18.638 4.24026 18.3523ZM7.261 20.84C7.42907 20.4614 7.87221 20.2908 8.2508 20.4589C8.38879 20.5201 8.52855 20.5781 8.66999 20.6327C9.05641 20.7819 9.24874 21.216 9.09958 21.6025C8.95041 21.9889 8.51623 22.1812 8.12981 22.032C7.96526 21.9685 7.80267 21.9011 7.64217 21.8298C7.26358 21.6618 7.09293 21.2186 7.261 20.84ZM16.739 20.84C16.9071 21.2186 16.7364 21.6618 16.3578 21.8298C16.1973 21.9011 16.0347 21.9685 15.8702 22.032C15.4838 22.1812 15.0496 21.9889 14.9004 21.6025C14.7513 21.216 14.9436 20.7819 15.33 20.6327C15.4714 20.5781 15.6112 20.5201 15.7492 20.4589C16.1278 20.2908 16.5709 20.4614 16.739 20.84ZM11.004 21.9789C11.0141 21.5648 11.3579 21.2372 11.7719 21.2472C11.8477 21.2491 11.9237 21.25 12 21.25C12.0763 21.25 12.1523 21.2491 12.2281 21.2472C12.6421 21.2372 12.9859 21.5648 12.996 21.9789C13.006 22.393 12.6784 22.7368 12.2643 22.7468C12.1764 22.7489 12.0883 22.75 12 22.75C11.9117 22.75 11.8236 22.7489 11.7357 22.7468C11.3216 22.7368 10.994 22.393 11.004 21.9789Z" fill={color} fillRule="evenodd"/>
	<Path d="M12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 12.4142 21.5858 12.75 22 12.75C22.4142 12.75 22.75 12.4142 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2C11.25 2.41421 11.5858 2.75 12 2.75Z" fill={color} fillRule="evenodd"/>
	<Path d="M12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V12.25H16C16.4142 12.25 16.75 12.5858 16.75 13C16.75 13.4142 16.4142 13.75 16 13.75H12C11.5858 13.75 11.25 13.4142 11.25 13V9C11.25 8.58579 11.5858 8.25 12 8.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldTimeHistory3;
