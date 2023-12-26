import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenCallCallChat = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17 12C19.7614 12 22 9.76142 22 7C22 4.23858 19.7614 2 17 2C14.2386 2 12 4.23858 12 7C12 7.79984 12.1878 8.55582 12.5217 9.22624C12.6105 9.4044 12.64 9.60803 12.5886 9.80031L12.2908 10.9133C12.1615 11.3965 12.6035 11.8385 13.0867 11.7092L14.1997 11.4114C14.392 11.36 14.5956 11.3895 14.7738 11.4783C15.4442 11.8122 16.2002 12 17 12Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M14.1008 16.0272L14.6446 16.5437L14.6446 16.5437L14.1008 16.0272ZM14.5562 15.5477L14.0124 15.0312L14.0124 15.0312L14.5562 15.5477ZM16.9729 15.2123L16.5987 15.8623L16.5987 15.8623L16.9729 15.2123ZM18.8834 16.312L18.5092 16.962L18.8834 16.312ZM19.4217 19.7584L19.9655 20.2749L19.9655 20.2749L19.4217 19.7584ZM18.0012 21.254L17.4574 20.7375L17.4574 20.7375L18.0012 21.254ZM16.6763 21.9631L16.75 22.7095L16.75 22.7095L16.6763 21.9631ZM6.8154 17.4752L7.3592 16.9587L6.8154 17.4752ZM2.75185 7.92574C2.72965 7.51212 2.37635 7.19481 1.96273 7.21701C1.54911 7.23921 1.23181 7.59252 1.25401 8.00613L2.75185 7.92574ZM8.19075 9.80507L8.73454 10.3216L8.73454 10.3216L8.19075 9.80507ZM8.47756 9.50311L9.02135 10.0196L9.02135 10.0196L8.47756 9.50311ZM8.63428 6.6931L9.24668 6.26012L9.24668 6.26012L8.63428 6.6931ZM7.3733 4.90961L6.7609 5.3426L6.7609 5.3426L7.3733 4.90961ZM3.7177 4.09213C3.43244 4.39246 3.44465 4.86717 3.74498 5.15244C4.04531 5.4377 4.52002 5.42549 4.80529 5.12516L3.7177 4.09213ZM10.0632 14.0559L10.607 13.5394L10.607 13.5394L10.0632 14.0559ZM9.66411 20.8123C10.0148 21.0327 10.4778 20.9271 10.6982 20.5764C10.9186 20.2257 10.8129 19.7627 10.4622 19.5423L9.66411 20.8123ZM14.113 21.0584C13.7076 20.9735 13.3101 21.2334 13.2252 21.6388C13.1403 22.0442 13.4001 22.4417 13.8056 22.5266L14.113 21.0584ZM14.6446 16.5437L15.1 16.0642L14.0124 15.0312L13.557 15.5107L14.6446 16.5437ZM16.5987 15.8623L18.5092 16.962L19.2575 15.662L17.347 14.5623L16.5987 15.8623ZM18.8779 19.2419L17.4574 20.7375L18.545 21.7705L19.9655 20.2749L18.8779 19.2419ZM7.3592 16.9587C3.48307 12.8778 2.83289 9.43556 2.75185 7.92574L1.25401 8.00613C1.35326 9.85536 2.13844 13.6403 6.27161 17.9917L7.3592 16.9587ZM8.73454 10.3216L9.02135 10.0196L7.93377 8.9866L7.64695 9.28856L8.73454 10.3216ZM9.24668 6.26012L7.98569 4.47663L6.7609 5.3426L8.02189 7.12608L9.24668 6.26012ZM8.19075 9.80507C7.64695 9.28856 7.64626 9.28929 7.64556 9.29002C7.64533 9.29028 7.64463 9.29102 7.64415 9.29152C7.6432 9.29254 7.64223 9.29357 7.64125 9.29463C7.63928 9.29675 7.63724 9.29896 7.63515 9.30127C7.63095 9.30588 7.6265 9.31087 7.62182 9.31625C7.61247 9.32701 7.60219 9.33931 7.5912 9.3532C7.56922 9.38098 7.54435 9.41511 7.51826 9.45588C7.46595 9.53764 7.40921 9.64531 7.36117 9.78033C7.26346 10.0549 7.21022 10.4185 7.27675 10.8726C7.40746 11.7647 7.99202 12.9644 9.51937 14.5724L10.607 13.5394C9.1793 12.0363 8.82765 11.1106 8.7609 10.6551C8.72871 10.4354 8.76142 10.3196 8.77436 10.2832C8.78163 10.2628 8.78639 10.2571 8.78174 10.2644C8.77948 10.2679 8.77498 10.2745 8.76742 10.2841C8.76363 10.2888 8.75908 10.2944 8.75364 10.3006C8.75092 10.3038 8.74798 10.3071 8.7448 10.3106C8.74321 10.3123 8.74156 10.3141 8.73985 10.3159C8.739 10.3169 8.73813 10.3178 8.73724 10.3187C8.7368 10.3192 8.73612 10.3199 8.7359 10.3202C8.73522 10.3209 8.73454 10.3216 8.19075 9.80507ZM9.51937 14.5724C11.0422 16.1757 12.1924 16.806 13.0699 16.9485C13.5201 17.0216 13.8846 16.9632 14.1606 16.8544C14.2955 16.8012 14.4023 16.7387 14.4824 16.6819C14.5223 16.6535 14.5556 16.6266 14.5825 16.6031C14.5959 16.5913 14.6078 16.5803 14.6181 16.5703C14.6233 16.5654 14.628 16.5606 14.6324 16.5562C14.6346 16.554 14.6368 16.5518 14.6388 16.5497C14.6398 16.5487 14.6408 16.5477 14.6417 16.5467C14.6422 16.5462 14.6429 16.5454 14.6432 16.5452C14.6439 16.5444 14.6446 16.5437 14.1008 16.0272C13.557 15.5107 13.5577 15.51 13.5583 15.5093C13.5586 15.509 13.5592 15.5083 13.5597 15.5078C13.5606 15.5069 13.5615 15.506 13.5623 15.5051C13.5641 15.5033 13.5658 15.5015 13.5675 15.4998C13.5708 15.4965 13.574 15.4933 13.577 15.4904C13.5831 15.4846 13.5885 15.4796 13.5933 15.4754C13.6029 15.467 13.61 15.4616 13.6146 15.4583C13.6239 15.4517 13.623 15.454 13.6102 15.459C13.5909 15.4666 13.5001 15.4987 13.3103 15.4679C12.9078 15.4025 12.0391 15.0472 10.607 13.5394L9.51937 14.5724ZM7.98569 4.47663C6.9721 3.04305 4.94388 2.80119 3.7177 4.09213L4.80529 5.12516C5.32812 4.57471 6.24855 4.61795 6.7609 5.3426L7.98569 4.47663ZM17.4574 20.7375C17.1783 21.0313 16.8864 21.1887 16.6026 21.2167L16.75 22.7095C17.497 22.6357 18.1016 22.2373 18.545 21.7705L17.4574 20.7375ZM9.02135 10.0196C9.98893 9.00095 10.0574 7.40678 9.24668 6.26012L8.02189 7.12608C8.44404 7.72315 8.3793 8.51753 7.93377 8.9866L9.02135 10.0196ZM18.5092 16.962C19.3301 17.4345 19.4907 18.5968 18.8779 19.2419L19.9655 20.2749C21.2705 18.901 20.8904 16.6019 19.2575 15.662L18.5092 16.962ZM15.1 16.0642C15.4854 15.6584 16.086 15.5672 16.5987 15.8623L17.347 14.5623C16.2485 13.93 14.8862 14.1113 14.0124 15.0312L15.1 16.0642ZM10.4622 19.5423C9.47846 18.9241 8.43149 18.0876 7.3592 16.9587L6.27161 17.9917C7.42564 19.2067 8.56897 20.1241 9.66411 20.8123L10.4622 19.5423ZM16.6026 21.2167C16.0561 21.2707 15.1912 21.2842 14.113 21.0584L13.8056 22.5266C15.0541 22.788 16.0742 22.7762 16.75 22.7095L16.6026 21.2167Z" fill={color}/>
</Svg>;

export default BrokenCallCallChat;
