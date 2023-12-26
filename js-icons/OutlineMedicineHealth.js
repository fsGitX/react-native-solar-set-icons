import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineMedicineHealth = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17.25 7.00004C17.25 6.58583 16.9142 6.25004 16.5 6.25004C16.0858 6.25004 15.75 6.58583 15.75 7.00004V8.25006H14.5C14.0858 8.25006 13.75 8.58585 13.75 9.00006C13.75 9.41428 14.0858 9.75006 14.5 9.75006L15.75 9.75006V11C15.75 11.4143 16.0858 11.75 16.5 11.75C16.9142 11.75 17.25 11.4143 17.25 11V9.75006H18.5C18.9142 9.75006 19.25 9.41428 19.25 9.00006C19.25 8.58585 18.9142 8.25006 18.5 8.25006H17.25V7.00004Z" fill={color}/>
	<Path d="M22.75 9.31751C22.75 5.99212 21.2676 3.50971 18.9609 2.60649C16.8252 1.77023 14.2618 2.39591 12 4.51322C9.73815 2.39591 7.17479 1.77023 5.0391 2.6065C2.73242 3.50972 1.25 5.99214 1.25 9.31755C1.25 11.4354 2.38041 13.5196 3.78729 15.314C5.20863 17.1268 6.99671 18.75 8.48914 19.9611L8.62327 20.07C9.82386 21.0457 10.6906 21.75 12 21.75C13.3094 21.75 14.1762 21.0457 15.3767 20.07L15.5109 19.9611C17.0033 18.75 18.7914 17.1268 20.2127 15.314C21.6196 13.5197 22.75 11.4354 22.75 9.31751ZM12.5478 6.08639C14.6596 3.82783 16.8491 3.39047 18.414 4.00323C19.9823 4.61734 21.25 6.41292 21.25 9.31751C21.25 10.9289 20.3707 12.6815 19.0323 14.3885C17.7084 16.077 16.0156 17.6198 14.5657 18.7963C13.1731 19.9264 12.7229 20.25 12 20.25C11.2771 20.25 10.8269 19.9264 9.43432 18.7963C7.98445 17.6197 6.29166 16.077 4.96771 14.3884C3.62931 12.6814 2.75 10.9289 2.75 9.31755C2.75 6.41293 4.01766 4.61735 5.58602 4.00323C7.15092 3.39047 9.34039 3.82783 11.4522 6.08639C11.594 6.23807 11.7923 6.32417 12 6.32417C12.2077 6.32417 12.406 6.23807 12.5478 6.08639Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineMedicineHealth;
