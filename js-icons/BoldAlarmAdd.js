import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldAlarmAdd = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.0001 22.0001C16.9707 22.0001 21.0001 17.9707 21.0001 13.0001C21.0001 8.02954 16.9707 4.0001 12.0001 4.0001C7.02954 4.0001 3.0001 8.02954 3.0001 13.0001C3.0001 17.9707 7.02954 22.0001 12.0001 22.0001ZM12.0001 9.2501C12.4143 9.2501 12.7501 9.58589 12.7501 10.0001V12.2501H15.0001C15.4143 12.2501 15.7501 12.5859 15.7501 13.0001C15.7501 13.4143 15.4143 13.7501 15.0001 13.7501H12.7501L12.7501 16.0001C12.7501 16.4143 12.4143 16.7501 12.0001 16.7501C11.5859 16.7501 11.2501 16.4143 11.2501 16.0001V13.7501H9.0001C8.58589 13.7501 8.2501 13.4143 8.2501 13.0001C8.2501 12.5859 8.58589 12.2501 9.0001 12.2501H11.2501L11.2501 10.0001C11.2501 9.58589 11.5859 9.2501 12.0001 9.2501Z" fill={color} fillRule="evenodd"/>
	<Path d="M8.13612 1.6026C8.35566 1.95386 8.24887 2.41657 7.89762 2.6361L3.8976 5.1361C3.54634 5.35563 3.08363 5.24885 2.8641 4.8976C2.64457 4.54634 2.75135 4.08363 3.1026 3.8641L7.10263 1.3641C7.45388 1.14457 7.91659 1.25135 8.13612 1.6026ZM15.8641 1.6026C16.0836 1.25135 16.5463 1.14457 16.8976 1.3641L20.8976 3.8641C21.2489 4.08363 21.3556 4.54635 21.1361 4.8976C20.9166 5.24885 20.4539 5.35563 20.1026 5.1361L16.1026 2.6361C15.7513 2.41657 15.6446 1.95385 15.8641 1.6026Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldAlarmAdd;
