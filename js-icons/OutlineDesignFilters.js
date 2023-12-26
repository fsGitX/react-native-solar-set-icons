import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineDesignFilters = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 2.75C9.1005 2.75 6.75 5.10051 6.75 8C6.75 10.8995 9.1005 13.25 12 13.25C14.8995 13.25 17.25 10.8995 17.25 8C17.25 5.10051 14.8995 2.75 12 2.75ZM5.25 8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8C18.75 8.60091 18.6715 9.18349 18.5241 9.73802C21.0013 10.7375 22.75 13.1638 22.75 16C22.75 19.7279 19.7279 22.75 16 22.75C14.5034 22.75 13.1193 22.2622 12.0001 21.4377C10.8806 22.2625 9.49722 22.75 8 22.75C4.27208 22.75 1.25 19.7279 1.25 16C1.25 13.1638 2.99868 10.7375 5.47587 9.73802C5.32852 9.18349 5.25 8.60091 5.25 8ZM6.02094 11.1356C4.10208 11.917 2.75 13.8014 2.75 16C2.75 18.8995 5.10051 21.25 8 21.25C10.8995 21.25 13.25 18.8995 13.25 16C13.25 15.5377 13.1904 15.0902 13.0787 14.6643C12.7275 14.7207 12.3672 14.75 12 14.75C9.40395 14.75 7.15019 13.2845 6.02094 11.1356ZM14.524 14.2623C14.6715 14.8173 14.75 15.3999 14.75 16C14.75 17.6778 14.1378 19.2127 13.1246 20.3934C13.9506 20.9353 14.938 21.25 16 21.25C18.8995 21.25 21.25 18.8995 21.25 16C21.25 13.8014 19.8979 11.917 17.9791 11.1356C17.238 12.5458 16.0126 13.6617 14.524 14.2623Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineDesignFilters;
