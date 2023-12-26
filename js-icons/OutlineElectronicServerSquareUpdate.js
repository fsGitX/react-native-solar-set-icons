import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineElectronicServerSquareUpdate = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.94358 2.25H14.0564C15.8942 2.24998 17.3498 2.24997 18.489 2.40314C19.6614 2.56076 20.6104 2.89288 21.3588 3.64124C22.1071 4.38961 22.4392 5.33856 22.5969 6.51098C22.75 7.65019 22.75 9.10583 22.75 10.9436V13C22.75 13.4142 22.4142 13.75 22 13.75C21.5858 13.75 21.25 13.4142 21.25 13V12.75H2.75V13C2.75 14.9068 2.75159 16.2615 2.88976 17.2892C3.02502 18.2952 3.27869 18.8749 3.7019 19.2981C4.12511 19.7213 4.70476 19.975 5.71085 20.1102C6.73851 20.2484 8.09318 20.25 10 20.25H13C13.4142 20.25 13.75 20.5858 13.75 21C13.75 21.4142 13.4142 21.75 13 21.75H9.94359C8.10583 21.75 6.65019 21.75 5.51098 21.5969C4.33856 21.4392 3.38961 21.1071 2.64124 20.3588C1.89288 19.6104 1.56076 18.6614 1.40314 17.489C1.24997 16.3498 1.24998 14.8942 1.25 13.0564V10.9436C1.24998 9.10582 1.24997 7.65019 1.40314 6.51098C1.56076 5.33856 1.89288 4.38961 2.64124 3.64124C3.38961 2.89288 4.33856 2.56076 5.51098 2.40314C6.65019 2.24997 8.10582 2.24998 9.94358 2.25ZM2.75 11.25H21.25V11C21.25 9.09318 21.2484 7.73851 21.1102 6.71085C20.975 5.70476 20.7213 5.12511 20.2981 4.7019C19.8749 4.27869 19.2952 4.02502 18.2892 3.88976C17.2615 3.75159 15.9068 3.75 14 3.75H10C8.09318 3.75 6.73851 3.75159 5.71085 3.88976C4.70476 4.02502 4.12511 4.27869 3.7019 4.7019C3.27869 5.12511 3.02502 5.70476 2.88976 6.71085C2.75159 7.73851 2.75 9.09318 2.75 11V11.25ZM6 5.75C6.41421 5.75 6.75 6.08579 6.75 6.5V8.5C6.75 8.91421 6.41421 9.25 6 9.25C5.58579 9.25 5.25 8.91421 5.25 8.5V6.5C5.25 6.08579 5.58579 5.75 6 5.75ZM9 5.75C9.41421 5.75 9.75 6.08579 9.75 6.5V8.5C9.75 8.91421 9.41421 9.25 9 9.25C8.58579 9.25 8.25 8.91421 8.25 8.5V6.5C8.25 6.08579 8.58579 5.75 9 5.75ZM12.75 7.5C12.75 7.08579 13.0858 6.75 13.5 6.75H18C18.4142 6.75 18.75 7.08579 18.75 7.5C18.75 7.91421 18.4142 8.25 18 8.25H13.5C13.0858 8.25 12.75 7.91421 12.75 7.5ZM14.9286 16.7534C15.3176 15.2559 16.8529 14.25 18.5048 14.25C19.782 14.25 20.945 14.8304 21.6108 15.7648C21.8512 16.1021 21.7726 16.5704 21.4352 16.8108C21.0979 17.0512 20.6296 16.9726 20.3892 16.6352C20.0295 16.1304 19.3411 15.75 18.5048 15.75C17.5383 15.75 16.8181 16.2319 16.5056 16.8299C16.592 16.8734 16.6713 16.9343 16.738 17.0123C17.0074 17.327 16.9706 17.8004 16.656 18.0698L16.0718 18.5698C15.7911 18.8101 15.3772 18.8101 15.0964 18.5698L14.5123 18.0698C14.1976 17.8004 14.1609 17.327 14.4302 17.0123C14.5618 16.8586 14.742 16.7712 14.9286 16.7534ZM6 14.75C6.41421 14.75 6.75 15.0858 6.75 15.5V17.5C6.75 17.9142 6.41421 18.25 6 18.25C5.58579 18.25 5.25 17.9142 5.25 17.5V15.5C5.25 15.0858 5.58579 14.75 6 14.75ZM9 14.75C9.41421 14.75 9.75 15.0858 9.75 15.5V17.5C9.75 17.9142 9.41421 18.25 9 18.25C8.58579 18.25 8.25 17.9142 8.25 17.5V15.5C8.25 15.0858 8.58579 14.75 9 14.75ZM20.9282 17.4302C21.2089 17.1899 21.6228 17.1899 21.9036 17.4302L22.4877 17.9302C22.8024 18.1996 22.8391 18.673 22.5698 18.9877C22.4382 19.1414 22.258 19.2288 22.0714 19.2466C21.6824 20.7441 20.1471 21.75 18.4952 21.75C17.218 21.75 16.055 21.1696 15.3892 20.2352C15.1488 19.8979 15.2274 19.4296 15.5648 19.1892C15.9021 18.9488 16.3704 19.0274 16.6108 19.3648C16.9705 19.8696 17.6589 20.25 18.4952 20.25C19.4617 20.25 20.1819 19.7681 20.4944 19.1701C20.408 19.1266 20.3287 19.0657 20.262 18.9877C19.9926 18.673 20.0294 18.1996 20.344 17.9302L20.9282 17.4302Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineElectronicServerSquareUpdate;
