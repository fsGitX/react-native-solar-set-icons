import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineCallDropped = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.98564 3.47665C7.97205 2.04307 5.94383 1.80121 4.71765 3.09215L3.14805 4.74464C2.6122 5.30879 2.20492 6.09248 2.25396 7.00615C2.35322 8.85538 3.13839 12.6403 7.27156 16.9917C11.7009 21.655 15.9261 21.8895 17.7499 21.7095C18.497 21.6358 19.1016 21.2373 19.5449 20.7705L20.9655 19.275C22.2704 17.9011 21.8904 15.6019 20.2575 14.662L18.347 13.5623C17.2485 12.9301 15.8861 13.1113 15.0124 14.0312L14.6037 14.4614C14.5748 14.4716 14.4839 14.4961 14.3103 14.4679C13.9077 14.4025 13.0391 14.0472 11.6069 12.5394C10.1793 11.0364 9.8276 10.1107 9.76086 9.65513C9.72866 9.43538 9.76137 9.31959 9.77431 9.28323L9.77645 9.27743L10.0213 9.01965C10.9889 8.00097 11.0574 6.4068 10.2466 5.26014L8.98564 3.47665ZM5.80524 4.12518C6.32807 3.57473 7.24851 3.61797 7.76086 4.34262L9.02184 6.1261C9.44399 6.72317 9.37925 7.51755 8.93372 7.98662L8.6469 8.28858L9.17856 8.79357C8.64689 8.28859 8.64621 8.28931 8.64552 8.29004L8.6441 8.29154L8.6412 8.29465L8.6351 8.30129L8.62177 8.31627C8.61242 8.32703 8.60214 8.33933 8.59115 8.35322C8.56917 8.381 8.5443 8.41514 8.51822 8.4559C8.4659 8.53766 8.40917 8.64533 8.36112 8.78035C8.26342 9.05492 8.21017 9.41852 8.2767 9.87259C8.40742 10.7647 8.99197 11.9644 10.5193 13.5724C12.0422 15.1757 13.1923 15.806 14.0698 15.9485C14.5201 16.0216 14.8846 15.9633 15.1606 15.8544C15.2955 15.8012 15.4022 15.7387 15.4823 15.6819C15.5223 15.6535 15.5555 15.6266 15.5824 15.6031C15.5959 15.5913 15.6077 15.5803 15.618 15.5704L15.6324 15.5562L15.6387 15.5498L15.6417 15.5467L15.6431 15.5452C15.6438 15.5445 15.6445 15.5438 15.1173 15.043L15.6445 15.5437L16.1 15.0642C16.4854 14.6584 17.086 14.5673 17.5987 14.8624L19.5092 15.962C20.33 16.4345 20.4907 17.5968 19.8779 18.2419L18.4573 19.7375C18.1783 20.0313 17.8863 20.1887 17.6026 20.2167C16.1676 20.3584 12.4233 20.2375 8.35915 15.9587C4.48302 11.8779 3.83284 8.43558 3.7518 6.92576C3.73037 6.52646 3.90425 6.12656 4.23564 5.77767L5.80524 4.12518Z" fill={color} fillRule="evenodd"/>
	<Path d="M15.75 4.00002C15.75 3.58581 15.4142 3.25002 15 3.25002C14.5858 3.25002 14.25 3.58581 14.25 4.00002L14.25 5.05202C14.25 5.9505 14.2499 6.69972 14.3299 7.2945C14.4143 7.92229 14.6 8.48909 15.0555 8.94456C15.5109 9.40003 16.0777 9.5857 16.7055 9.67011C17.1662 9.73204 17.7195 9.74599 18.363 9.74912L17.5315 10.4144C17.208 10.6731 17.1556 11.1451 17.4143 11.4685C17.6731 11.792 18.1451 11.8444 18.4685 11.5857L20.9685 9.58567C21.1464 9.44334 21.25 9.22786 21.25 9.00002C21.25 8.77218 21.1464 8.5567 20.9685 8.41437L18.4685 6.41437C18.1451 6.15561 17.6731 6.20805 17.4143 6.5315C17.1556 6.85495 17.208 7.32691 17.5315 7.58567L18.3605 8.2489C17.7356 8.24563 17.2729 8.23289 16.9054 8.18349C16.4439 8.12144 16.2464 8.01422 16.1161 7.8839C15.9858 7.75359 15.8786 7.55609 15.8165 7.09463C15.7516 6.61159 15.75 5.96403 15.75 5.00002V4.00002Z" fill={color}/>
</Svg>;

export default OutlineCallDropped;
