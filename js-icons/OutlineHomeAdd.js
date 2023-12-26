import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineHomeAdd = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.75 11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11L11.25 13.2501H9C8.58579 13.2501 8.25 13.5858 8.25 14.0001C8.25 14.4143 8.58579 14.7501 9 14.7501H11.25V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17L12.75 14.7501H15C15.4142 14.7501 15.75 14.4143 15.75 14.0001C15.75 13.5858 15.4142 13.2501 15 13.2501H12.75V11Z" fill={color}/>
	<Path d="M12 1.25024C11.2919 1.25024 10.6485 1.45306 9.95055 1.79248C9.27585 2.12059 8.49642 2.60433 7.52286 3.20857L5.45628 4.49114C4.53509 5.06285 3.79744 5.52065 3.2289 5.95605C2.64015 6.40694 2.18795 6.86614 1.86131 7.46287C1.53535 8.05837 1.38857 8.69199 1.31819 9.44095C1.24999 10.1668 1.24999 11.0544 1.25 12.1675V13.7801C1.24999 15.684 1.24998 17.1868 1.4027 18.3619C1.55937 19.5672 1.88856 20.5403 2.63236 21.3097C3.37958 22.0826 4.33046 22.4279 5.50761 22.5916C6.64849 22.7503 8.10556 22.7503 9.94185 22.7502H14.0581C15.8944 22.7503 17.3515 22.7503 18.4924 22.5916C19.6695 22.4279 20.6204 22.0826 21.3676 21.3097C22.1114 20.5403 22.4406 19.5672 22.5973 18.3619C22.75 17.1868 22.75 15.684 22.75 13.7801V12.1675C22.75 11.0544 22.75 10.1668 22.6818 9.44095C22.6114 8.69199 22.4646 8.05837 22.1387 7.46287C21.8121 6.86614 21.3599 6.40693 20.7711 5.95605C20.2026 5.52065 19.4649 5.06286 18.5437 4.49116L16.4771 3.20856C15.5036 2.60433 14.7241 2.12059 14.0494 1.79248C13.3515 1.45306 12.7081 1.25024 12 1.25024ZM8.27953 4.50436C9.29529 3.87395 10.0095 3.43178 10.6065 3.14144C11.1882 2.85857 11.6002 2.75024 12 2.75024C12.3998 2.75024 12.8118 2.85857 13.3935 3.14144C13.9905 3.43178 14.7047 3.87395 15.7205 4.50436L17.7205 5.74562C18.6813 6.34194 19.3559 6.76159 19.8591 7.14694C20.3487 7.52189 20.6303 7.8313 20.8229 8.1831C21.0162 8.53614 21.129 8.94889 21.1884 9.58128C21.2492 10.2288 21.25 11.0461 21.25 12.2042V13.7252C21.25 15.6962 21.2485 17.1014 21.1098 18.1685C20.9736 19.2166 20.717 19.8246 20.2892 20.2671C19.8649 20.706 19.2871 20.9667 18.2858 21.1059C17.2602 21.2485 15.9075 21.2502 14 21.2502H10C8.09247 21.2502 6.73983 21.2485 5.71422 21.1059C4.71286 20.9667 4.13514 20.706 3.71079 20.2671C3.28301 19.8246 3.02642 19.2166 2.89019 18.1685C2.75149 17.1014 2.75 15.6962 2.75 13.7252V12.2042C2.75 11.0461 2.75076 10.2288 2.81161 9.58128C2.87103 8.94889 2.98385 8.53614 3.17709 8.1831C3.36965 7.8313 3.65133 7.52189 4.14092 7.14694C4.6441 6.76159 5.31869 6.34194 6.27953 5.74562L8.27953 4.50436Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineHomeAdd;