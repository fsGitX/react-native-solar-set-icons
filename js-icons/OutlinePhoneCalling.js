import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlinePhoneCalling = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4.71763 3.09215C5.94382 1.80121 7.97204 2.04307 8.98563 3.47665L10.2466 5.26014C11.0573 6.4068 10.9889 8.00097 10.0213 9.01965L9.77644 9.27743C9.77575 9.27921 9.77504 9.28115 9.7743 9.28323C9.76136 9.31959 9.72864 9.43538 9.76084 9.65513C9.82759 10.1107 10.1792 11.0364 11.6069 12.5394C13.039 14.0472 13.9077 14.4025 14.3103 14.4679C14.4839 14.4961 14.5748 14.4716 14.6037 14.4614L15.0123 14.0312C15.8861 13.1113 17.2485 12.9301 18.3469 13.5623L20.2574 14.662C21.8904 15.6019 22.2704 17.9011 20.9654 19.275L19.5449 20.7705C19.1015 21.2373 18.497 21.6358 17.7499 21.7095C15.9261 21.8895 11.7009 21.655 7.27154 16.9917C3.13838 12.6403 2.3532 8.85538 2.25394 7.00615L2.92005 6.9704L2.25394 7.00615C2.2049 6.09248 2.61218 5.30879 3.14803 4.74464L4.71763 3.09215ZM7.76084 4.34262C7.24849 3.61797 6.32806 3.57473 5.80522 4.12518L4.23562 5.77767C3.90423 6.12656 3.73036 6.52646 3.75179 6.92576C3.83283 8.43558 4.48301 11.8779 8.35913 15.9587C12.4233 20.2375 16.1676 20.3584 17.6026 20.2167C17.8863 20.1887 18.1783 20.0313 18.4573 19.7375L19.8779 18.2419C20.4907 17.5968 20.33 16.4345 19.5092 15.962L17.5987 14.8624C17.086 14.5673 16.4854 14.6584 16.0999 15.0642L15.6445 15.5437L15.1173 15.043C15.6445 15.5438 15.6438 15.5445 15.6431 15.5452L15.6417 15.5467L15.6387 15.5498L15.6324 15.5562L15.618 15.5704C15.6077 15.5803 15.5958 15.5913 15.5824 15.6031C15.5555 15.6266 15.5223 15.6535 15.4823 15.6819C15.4022 15.7387 15.2955 15.8012 15.1606 15.8544C14.8846 15.9633 14.5201 16.0216 14.0698 15.9485C13.1923 15.806 12.0422 15.1757 10.5193 13.5724C8.99196 11.9644 8.4074 10.7647 8.27669 9.87259C8.21016 9.41852 8.2634 9.05492 8.3611 8.78035C8.40915 8.64533 8.46588 8.53766 8.5182 8.4559C8.54429 8.41514 8.56916 8.381 8.59114 8.35322C8.60213 8.33933 8.6124 8.32703 8.62176 8.31627L8.63508 8.30129L8.64118 8.29465L8.64409 8.29154L8.6455 8.29004C8.64619 8.28931 8.64688 8.28859 9.17855 8.79357L8.64689 8.28858L8.9337 7.98662C9.37924 7.51755 9.44397 6.72317 9.02183 6.1261L7.76084 4.34262Z" fill={color} fillRule="evenodd"/>
	<Path d="M13.2595 1.88008C13.3257 1.47119 13.7122 1.19381 14.1211 1.26001C14.1464 1.26485 14.2279 1.28007 14.2705 1.28958C14.3559 1.30858 14.4749 1.33784 14.6233 1.38106C14.9201 1.46751 15.3347 1.60991 15.8323 1.83805C16.8286 2.2948 18.1544 3.09381 19.5302 4.46961C20.906 5.84541 21.705 7.17122 22.1617 8.1675C22.3899 8.66511 22.5323 9.07972 22.6187 9.3765C22.6619 9.5249 22.6912 9.64393 22.7102 9.72926C22.7197 9.77193 22.7267 9.80619 22.7315 9.8315L22.7373 9.86269C22.8034 10.2716 22.5286 10.6741 22.1197 10.7403C21.712 10.8063 21.3279 10.5303 21.2601 10.1233C21.258 10.1124 21.2522 10.083 21.2461 10.0553C21.2337 9.99994 21.2124 9.91212 21.1786 9.79597C21.1109 9.56363 20.9934 9.2183 20.7982 8.79262C20.4084 7.94232 19.7074 6.76813 18.4695 5.53027C17.2317 4.2924 16.0575 3.59141 15.2072 3.20158C14.7815 3.00642 14.4362 2.88889 14.2038 2.82122C14.0877 2.78739 13.9417 2.75387 13.8863 2.74154C13.4793 2.67372 13.1935 2.2878 13.2595 1.88008Z" fill={color}/>
	<Path d="M13.4861 5.32955C13.5999 4.93128 14.015 4.70066 14.4133 4.81445L14.2072 5.53559C14.4133 4.81445 14.4136 4.81455 14.414 4.81465L14.4147 4.81486L14.4162 4.81531L14.4196 4.81628L14.4273 4.81859L14.4471 4.82476C14.4622 4.82958 14.481 4.83586 14.5035 4.84383C14.5484 4.85976 14.6077 4.88243 14.6805 4.91363C14.8262 4.97607 15.0253 5.07249 15.2698 5.2172C15.7593 5.50688 16.4275 5.98806 17.2124 6.77303C17.9974 7.558 18.4786 8.22619 18.7683 8.71565C18.913 8.96016 19.0094 9.15923 19.0718 9.30491C19.103 9.37772 19.1257 9.43708 19.1416 9.48199C19.1496 9.50444 19.1559 9.52327 19.1607 9.53835L19.1669 9.55814L19.1692 9.56589L19.1702 9.56922L19.1706 9.57075L19.1708 9.57148C19.1709 9.57184 19.171 9.57219 18.4499 9.77823L19.171 9.57219C19.2848 9.97047 19.0542 10.3856 18.6559 10.4994C18.261 10.6122 17.8496 10.3864 17.7317 9.99438L17.728 9.9836C17.7227 9.96858 17.7116 9.93899 17.6931 9.89579C17.6561 9.80946 17.589 9.66823 17.4774 9.47963C17.2544 9.10289 16.8517 8.53364 16.1518 7.83369C15.4518 7.13374 14.8826 6.73103 14.5058 6.50806C14.3172 6.39645 14.176 6.32935 14.0897 6.29235C14.0465 6.27383 14.0169 6.2628 14.0019 6.25747L13.9911 6.25377C13.599 6.13589 13.3733 5.72445 13.4861 5.32955Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlinePhoneCalling;