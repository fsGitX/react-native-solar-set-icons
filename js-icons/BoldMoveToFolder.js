import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldMoveToFolder = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7713 22 14 22H10C6.22878 22 4.34315 22 3.17157 20.8284C2.19725 19.8541 2.03321 18.3859 2.00559 15.7501H10.6937L8.43392 17.3935C8.09893 17.6371 8.02487 18.1062 8.26849 18.4412C8.51212 18.7762 8.98118 18.8502 9.31617 18.6066L13.4412 15.6066C13.6352 15.4655 13.75 15.24 13.75 15.0001C13.75 14.7601 13.6352 14.5346 13.4412 14.3935L9.31617 11.3935C8.98118 11.1499 8.51212 11.2239 8.26849 11.5589C8.02487 11.8939 8.09893 12.363 8.43392 12.6066L10.6937 14.2501H2.00001L2 14L2.00003 6.94975C2.00003 6.06725 2.00003 5.62594 2.06938 5.25839C2.37467 3.64031 3.64033 2.37464 5.25841 2.06935C5.62597 2 6.06724 2 6.94977 2C7.33644 2 7.52978 2 7.71559 2.01738C8.51667 2.09229 9.27654 2.40704 9.89596 2.92051C10.0396 3.03961 10.1763 3.17633 10.4498 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9805 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6748 6 15.8284 6H16.2021C18.8345 6 20.1507 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2306 6.99383C22 7.84935 22 9.16554 22 11.7979Z" fill={color}/>
</Svg>;

export default BoldMoveToFolder;
