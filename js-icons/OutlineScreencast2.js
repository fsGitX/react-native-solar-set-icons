import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineScreencast2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.94358 2.25C8.10583 2.24998 6.65019 2.24997 5.51098 2.40314C4.33856 2.56076 3.38961 2.89288 2.64124 3.64124C1.89288 4.38961 1.56076 5.33856 1.40314 6.51098C1.24997 7.65019 1.24998 9.10582 1.25 10.9436V11.0564C1.24998 12.8942 1.24997 14.3498 1.40314 15.489C1.56076 16.6614 1.89288 17.6104 2.64124 18.3588C2.94477 18.6623 3.28659 18.9023 3.67213 19.0897C4.04467 19.2707 4.49346 19.1155 4.67454 18.743C4.85561 18.3705 4.7004 17.9217 4.32787 17.7406C4.08631 17.6232 3.88274 17.4789 3.7019 17.2981C3.27869 16.8749 3.02503 16.2952 2.88976 15.2892C2.75159 14.2615 2.75 12.9068 2.75 11C2.75 9.09318 2.75159 7.73851 2.88976 6.71085C3.02503 5.70476 3.27869 5.12511 3.7019 4.7019C4.12511 4.27869 4.70476 4.02503 5.71085 3.88976C6.73851 3.75159 8.09318 3.75 10 3.75H14C15.9068 3.75 17.2615 3.75159 18.2892 3.88976C19.2952 4.02503 19.8749 4.27869 20.2981 4.7019C20.7213 5.12511 20.975 5.70476 21.1102 6.71085C21.2484 7.73851 21.25 9.09318 21.25 11C21.25 12.9068 21.2484 14.2615 21.1102 15.2892C20.975 16.2952 20.7213 16.8749 20.2981 17.2981C20.1173 17.4789 19.9137 17.6232 19.6721 17.7406C19.2996 17.9217 19.1444 18.3705 19.3255 18.743C19.5065 19.1155 19.9553 19.2707 20.3279 19.0897C20.7134 18.9023 21.0552 18.6623 21.3588 18.3588C22.1071 17.6104 22.4392 16.6614 22.5969 15.489C22.75 14.3498 22.75 12.8942 22.75 11.0565V10.9436C22.75 9.10585 22.75 7.65018 22.5969 6.51098C22.4392 5.33856 22.1071 4.38961 21.3588 3.64124C20.6104 2.89288 19.6614 2.56076 18.489 2.40314C17.3498 2.24997 15.8942 2.24998 14.0564 2.25H9.94358Z" fill={color}/>
	<Path d="M12.1182 13.8745C12.0393 13.8703 11.9603 13.8703 11.8815 13.8745C11.3796 13.9009 10.9743 14.1229 10.6088 14.4067C10.2667 14.6724 9.88942 15.0497 9.45164 15.4875L9.3763 15.5629C8.39977 16.5394 7.61165 17.3275 7.11024 17.9829C6.61984 18.6239 6.21488 19.3744 6.48097 20.1945C6.51754 20.3071 6.56294 20.4168 6.61677 20.5223C7.00848 21.2903 7.82549 21.5346 8.62554 21.6411C9.44355 21.7501 10.5581 21.75 11.9391 21.75H12.0605C13.4415 21.75 14.5561 21.7501 15.3741 21.6411C16.1741 21.5346 16.9911 21.2903 17.3828 20.5223C17.4367 20.4168 17.4821 20.3071 17.5186 20.1945C17.7847 19.3744 17.3798 18.6239 16.8894 17.9829C16.388 17.3275 15.5999 16.5394 14.6233 15.5629L14.548 15.4875C14.1102 15.0497 13.7329 14.6724 13.3908 14.4067C13.0253 14.1229 12.62 13.9009 12.1182 13.8745ZM11.9604 15.3724C11.9866 15.371 12.013 15.371 12.0393 15.3724C12.1122 15.3762 12.227 15.4021 12.4708 15.5914C12.7295 15.7923 13.0403 16.1012 13.5197 16.5806C14.5492 17.6101 15.2647 18.3279 15.698 18.8943C16.1496 19.4847 16.1094 19.6776 16.0919 19.7315C16.0797 19.7691 16.0645 19.8056 16.0466 19.8408C16.0209 19.8912 15.9129 20.0562 15.1761 20.1543C14.4692 20.2484 13.4557 20.25 11.9998 20.25C10.5439 20.25 9.53039 20.2484 8.82351 20.1543C8.0867 20.0562 7.97875 19.8912 7.95301 19.8408C7.93507 19.8056 7.91993 19.7691 7.90774 19.7315C7.89026 19.6776 7.84997 19.4847 8.30161 18.8943C8.7349 18.3279 9.45041 17.6101 10.4799 16.5806C10.9593 16.1012 11.2701 15.7923 11.5288 15.5914C11.7726 15.4021 11.8874 15.3762 11.9604 15.3724Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineScreencast2;
