import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneFoldersMoveToFolder = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 14V11.7979C22 9.16554 22 7.84935 21.2306 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1507 6 18.8345 6 16.2021 6H15.8284C14.6748 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9805 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4498 3.44975C10.1763 3.17633 10.0396 3.03961 9.89596 2.92051C9.27654 2.40704 8.51667 2.09229 7.71559 2.01738C7.52978 2 7.33644 2 6.94977 2C6.06724 2 5.62597 2 5.25841 2.06935C3.64033 2.37464 2.37467 3.64031 2.06938 5.25839C2.00003 5.62594 2.00003 6.06725 2.00003 6.94975L2 14L2.00001 14.2501L2.00559 15.7501C2.03321 18.3859 2.19725 19.8541 3.17157 20.8284C4.34315 22 6.22878 22 10 22H14C17.7713 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14Z" fill={color} opacity="0.5"/>
	<Path d="M9.31616 11.3935C8.98117 11.1499 8.51211 11.2239 8.26848 11.5589C8.02485 11.8939 8.09891 12.363 8.4339 12.6066L10.6936 14.2501H2L2.00558 15.7501H10.6936L8.4339 17.3935C8.09891 17.6371 8.02485 18.1062 8.26848 18.4412C8.51211 18.7762 8.98117 18.8502 9.31616 18.6066L13.4412 15.6066C13.6352 15.4655 13.75 15.24 13.75 15.0001C13.75 14.7601 13.6352 14.5346 13.4412 14.3935L9.31616 11.3935Z" fill={color}/>
</Svg>;

export default BoldDuotoneFoldersMoveToFolder;
