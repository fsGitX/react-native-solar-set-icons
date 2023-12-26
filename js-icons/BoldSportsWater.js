import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldSportsWater = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4.58155 6.01037C5.27232 4.99469 6.71517 5.03259 7.44347 5.90937C8.42545 7.09155 9.80981 8.24983 12 8.24983C14.2278 8.24983 15.591 7.31995 16.5186 6.15371C17.24 5.24674 18.7775 5.10103 19.5336 6.17693C20.152 7.05691 20.828 7.75783 22.1623 8.05353C22.5667 8.14315 22.8219 8.54363 22.7323 8.94803C22.6427 9.35244 22.2422 9.60762 21.8378 9.518C19.9968 9.11001 19.0391 8.08213 18.3063 7.0394C18.2577 6.97023 18.1709 6.91916 18.0399 6.9215C17.9038 6.92393 17.7731 6.98622 17.6925 7.08746C16.5172 8.56506 14.7411 9.74983 12 9.74983C9.17718 9.74983 7.41075 8.21753 6.28962 6.86782L6.86655 6.3886L6.28962 6.86782C6.22438 6.78928 6.12738 6.7479 6.02872 6.74989C5.93337 6.75182 5.864 6.79199 5.82188 6.85393C5.07571 7.95107 4.11844 9.0845 2.16231 9.518C1.75791 9.60762 1.35742 9.35244 1.2678 8.94803C1.17818 8.54363 1.43337 8.14315 1.83777 8.05353C3.24968 7.74064 3.92594 6.97435 4.58155 6.01037ZM4.58155 11.0104C5.27232 9.99469 6.71517 10.0326 7.44347 10.9094C8.42545 12.0915 9.80981 13.2498 12 13.2498C14.2278 13.2498 15.591 12.3199 16.5186 11.1537C17.24 10.2467 18.7775 10.101 19.5336 11.1769C20.152 12.0569 20.828 12.7578 22.1623 13.0535C22.5667 13.1431 22.8219 13.5436 22.7323 13.948C22.6427 14.3524 22.2422 14.6076 21.8378 14.518C19.9968 14.11 19.0391 13.0821 18.3063 12.0394C18.2577 11.9702 18.1709 11.9192 18.0399 11.9215C17.9038 11.9239 17.7731 11.9862 17.6925 12.0875C16.5172 13.5651 14.7411 14.7498 12 14.7498C9.17718 14.7498 7.41075 13.2175 6.28962 11.8678C6.22438 11.7893 6.12738 11.7479 6.02873 11.7499C5.93337 11.7518 5.864 11.792 5.82188 11.8539C5.07571 12.9511 4.11844 14.0845 2.16231 14.518C1.75791 14.6076 1.35742 14.3524 1.2678 13.948C1.17818 13.5436 1.43337 13.1431 1.83777 13.0535C3.24968 12.7406 3.92594 11.9744 4.58155 11.0104ZM4.58155 16.0104C5.27232 14.9947 6.71517 15.0326 7.44347 15.9094C8.42545 17.0915 9.80981 18.2498 12 18.2498C14.2278 18.2498 15.591 17.3199 16.5186 16.1537C17.24 15.2467 18.7775 15.101 19.5336 16.1769C20.152 17.0569 20.828 17.7578 22.1623 18.0535C22.5667 18.1431 22.8219 18.5436 22.7323 18.948C22.6427 19.3524 22.2422 19.6076 21.8378 19.518C19.9968 19.11 19.0391 18.0821 18.3063 17.0394C18.2577 16.9702 18.1709 16.9192 18.0399 16.9215C17.9038 16.9239 17.7731 16.9862 17.6925 17.0875C16.5172 18.5651 14.7411 19.7498 12 19.7498C9.17718 19.7498 7.41075 18.2175 6.28962 16.8678C6.22438 16.7893 6.12738 16.7479 6.02873 16.7499C5.93337 16.7518 5.864 16.792 5.82188 16.8539C5.07571 17.9511 4.11844 19.0845 2.16231 19.518C1.75791 19.6076 1.35742 19.3524 1.2678 18.948C1.17818 18.5436 1.43337 18.1431 1.83777 18.0535C3.24968 17.7406 3.92594 16.9744 4.58155 16.0104Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldSportsWater;
