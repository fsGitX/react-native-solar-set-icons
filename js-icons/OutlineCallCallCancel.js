import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineCallCallCancel = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.98563 3.47665C7.97204 2.04307 5.94382 1.80121 4.71763 3.09215L3.14803 4.74464C2.61218 5.30879 2.2049 6.09248 2.25394 7.00615C2.3532 8.85538 3.13838 12.6403 7.27154 16.9917C11.7009 21.655 15.9261 21.8895 17.7499 21.7095C18.497 21.6358 19.1015 21.2373 19.5449 20.7705L20.9654 19.275C22.2704 17.9011 21.8904 15.6019 20.2574 14.662L18.3469 13.5623C17.2485 12.9301 15.8861 13.1113 15.0123 14.0312L14.6037 14.4614C14.5748 14.4716 14.4839 14.4961 14.3103 14.4679C13.9077 14.4025 13.039 14.0472 11.6069 12.5394C10.1792 11.0364 9.82759 10.1107 9.76084 9.65513C9.72864 9.43538 9.76136 9.31959 9.7743 9.28323L9.77644 9.27743L10.0213 9.01965C10.9889 8.00097 11.0573 6.4068 10.2466 5.26014L8.98563 3.47665ZM5.80522 4.12518C6.32806 3.57473 7.24849 3.61797 7.76084 4.34262L9.02183 6.1261C9.44397 6.72317 9.37924 7.51755 8.9337 7.98662L8.64689 8.28858L9.17855 8.79357C8.64688 8.28859 8.64619 8.28931 8.6455 8.29004L8.64409 8.29154L8.64118 8.29465L8.63508 8.30129L8.62176 8.31627C8.6124 8.32703 8.60213 8.33933 8.59114 8.35322C8.56916 8.381 8.54429 8.41514 8.5182 8.4559C8.46588 8.53766 8.40915 8.64533 8.3611 8.78035C8.2634 9.05492 8.21016 9.41852 8.27669 9.87259C8.4074 10.7647 8.99196 11.9644 10.5193 13.5724C12.0422 15.1757 13.1923 15.806 14.0698 15.9485C14.5201 16.0216 14.8846 15.9633 15.1606 15.8544C15.2955 15.8012 15.4022 15.7387 15.4823 15.6819C15.5223 15.6535 15.5555 15.6266 15.5824 15.6031C15.5958 15.5913 15.6077 15.5803 15.618 15.5704L15.6324 15.5562L15.6387 15.5498L15.6417 15.5467L15.6431 15.5452C15.6438 15.5445 15.6445 15.5438 15.1173 15.043L15.6445 15.5437L16.0999 15.0642C16.4854 14.6584 17.086 14.5673 17.5987 14.8624L19.5092 15.962C20.33 16.4345 20.4907 17.5968 19.8779 18.2419L18.4573 19.7375C18.1783 20.0313 17.8863 20.1887 17.6026 20.2167C16.1676 20.3584 12.4233 20.2375 8.35913 15.9587C4.48301 11.8779 3.83283 8.43558 3.75179 6.92576C3.73036 6.52646 3.90423 6.12656 4.23562 5.77767L5.80522 4.12518Z" fill={color} fillRule="evenodd"/>
	<Path d="M16.5303 3.46969C16.2374 3.1768 15.7625 3.1768 15.4696 3.46969C15.1767 3.76258 15.1767 4.23746 15.4696 4.53035L16.9393 6.00003L15.4696 7.46969C15.1768 7.76258 15.1768 8.23746 15.4696 8.53035C15.7625 8.82324 16.2374 8.82324 16.5303 8.53035L18 7.06069L19.4696 8.53033C19.7625 8.82323 20.2374 8.82323 20.5303 8.53033C20.8232 8.23744 20.8232 7.76257 20.5303 7.46967L19.0606 6.00003L20.5303 4.53037C20.8232 4.23747 20.8232 3.7626 20.5303 3.46971C20.2374 3.17681 19.7625 3.17681 19.4696 3.46971L18 4.93937L16.5303 3.46969Z" fill={color}/>
</Svg>;

export default OutlineCallCallCancel;