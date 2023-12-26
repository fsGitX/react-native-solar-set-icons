import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineCallCallMedicine = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17 2.75C14.6528 2.75 12.75 4.65279 12.75 7C12.75 7.68122 12.9097 8.32298 13.1931 8.89186C13.3521 9.2111 13.4179 9.60224 13.3131 9.99416L13.06 10.94L14.0058 10.6869C14.3978 10.5821 14.7889 10.6479 15.1082 10.8069C15.677 11.0903 16.3188 11.25 17 11.25C19.3472 11.25 21.25 9.34721 21.25 7C21.25 4.65279 19.3472 2.75 17 2.75ZM11.25 7C11.25 3.82436 13.8244 1.25 17 1.25C20.1756 1.25 22.75 3.82436 22.75 7C22.75 10.1756 20.1756 12.75 17 12.75C16.0815 12.75 15.2114 12.5341 14.4394 12.1496C14.4221 12.141 14.4082 12.1376 14.3998 12.1366C14.3959 12.1361 14.3935 12.1362 14.3926 12.1362L13.2805 12.4338C12.2399 12.7122 11.2878 11.7601 11.5662 10.7195L11.8638 9.60744C11.8639 9.60649 11.8639 9.60415 11.8634 9.6002C11.8624 9.5918 11.859 9.5779 11.8504 9.56061C11.4659 8.78866 11.25 7.91847 11.25 7ZM3.71767 4.09213C4.94385 2.80119 6.97207 3.04305 7.98566 4.47663L9.24664 6.26012C10.0574 7.40678 9.9889 9.00095 9.02132 10.0196L8.77647 10.2774C8.77579 10.2792 8.77507 10.2811 8.77433 10.2832C8.76139 10.3196 8.72867 10.4354 8.76087 10.6551C8.82762 11.1106 9.17927 12.0363 10.6069 13.5394C12.0391 15.0472 12.9077 15.4025 13.3103 15.4679C13.484 15.4961 13.5748 15.4716 13.6037 15.4614L14.0124 15.0312C14.8861 14.1113 16.2485 13.93 17.347 14.5623L19.2575 15.662C20.8904 16.6019 21.2705 18.901 19.9655 20.2749L18.5449 21.7705C18.1016 22.2373 17.497 22.6357 16.75 22.7095C14.9261 22.8895 10.701 22.655 6.27158 17.9917C2.13841 13.6403 1.35323 9.85536 1.25397 8.00613C1.20493 7.09246 1.61221 6.30877 2.14806 5.74462L2.69186 6.26114L2.14806 5.74462L3.71767 4.09213ZM6.76087 5.3426C6.24852 4.61795 5.32809 4.57471 4.80525 5.12516L3.23565 6.77765C2.90426 7.12654 2.73039 7.52644 2.75182 7.92574C2.83286 9.43555 3.48304 12.8778 7.35916 16.9587C11.4233 21.2375 15.1676 21.3584 16.6026 21.2167C16.8864 21.1887 17.1783 21.0313 17.4573 20.7375L18.8779 19.2419C19.4907 18.5968 19.33 17.4345 18.5092 16.962L16.5987 15.8623C16.086 15.5672 15.4854 15.6584 15.1 16.0642L14.6445 16.5437L14.1007 16.0272C14.6445 16.5437 14.6438 16.5444 14.6431 16.5452L14.6417 16.5467L14.6387 16.5497L14.6324 16.5562L14.6181 16.5703C14.6077 16.5803 14.5959 16.5913 14.5824 16.6031C14.5556 16.6266 14.5223 16.6535 14.4823 16.6819C14.4022 16.7387 14.2955 16.8012 14.1606 16.8544C13.8846 16.9632 13.5201 17.0216 13.0698 16.9485C12.1923 16.806 11.0422 16.1757 9.51934 14.5724C7.99199 12.9644 7.40743 11.7647 7.27672 10.8726C7.21019 10.4185 7.26343 10.0549 7.36113 9.78033C7.40918 9.64531 7.46591 9.53764 7.51823 9.45588C7.54432 9.41511 7.56919 9.38098 7.59117 9.3532C7.60216 9.33931 7.61243 9.32701 7.62179 9.31625L7.63511 9.30127L7.64121 9.29463L7.64412 9.29152L7.64553 9.29002C7.64623 9.28929 7.64692 9.28856 8.19071 9.80507L7.64692 9.28856L7.93373 8.9866C8.37927 8.51753 8.444 7.72315 8.02186 7.12608L6.76087 5.3426ZM17 4.25C17.4142 4.25 17.75 4.58579 17.75 5V6.25H19C19.4142 6.25 19.75 6.58579 19.75 7C19.75 7.41421 19.4142 7.75 19 7.75H17.75V9C17.75 9.41421 17.4142 9.75 17 9.75C16.5858 9.75 16.25 9.41421 16.25 9V7.75L15 7.75C14.5858 7.75 14.25 7.41421 14.25 7C14.25 6.58579 14.5858 6.25 15 6.25L16.25 6.25V5C16.25 4.58579 16.5858 4.25 17 4.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineCallCallMedicine;
