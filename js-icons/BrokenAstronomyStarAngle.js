import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenAstronomyStarAngle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.92992 12.7732C2.3588 14.4238 2.07325 15.2491 2.43835 15.7587C2.80345 16.2683 3.57742 16.1248 5.12535 15.8376L5.52582 15.7634C5.9657 15.6818 6.18563 15.641 6.39316 15.7012C6.60069 15.7614 6.77232 15.9157 7.11558 16.2245L7.42809 16.5056C8.63602 17.5922 9.79155 17.8917 9.79155 17.8917C10.3431 17.648 10.477 16.7787 10.7447 15.0401L10.814 14.5903C10.8901 14.0962 10.9281 13.8492 11.0475 13.6446C11.1669 13.4399 11.3541 13.3008 11.7286 13.0226L12.0695 12.7693C13.3871 11.7902 14.0459 11.3006 14.0217 10.6404C13.9975 9.98014 13.3063 9.58645 11.9238 8.79907L11.5662 8.59536C11.1733 8.37161 10.9769 8.25974 10.8431 8.07305C10.7094 7.88637 10.6535 7.646 10.5416 7.16529L10.4398 6.72764C10.0462 5.03598 9.84944 4.19015 9.28291 4.02582C8.71638 3.86148 8.1553 4.48747 7.03315 5.73945L6.74284 6.06335C6.42396 6.41912 6.26452 6.59701 6.06247 6.68628C5.86042 6.77556 5.63864 6.76613 5.19508 6.74725L4.79126 6.73007C3.23035 6.66365 2.4499 6.63044 2.12399 7.18912C1.79807 7.7478 2.14254 8.52837 2.83147 10.0895" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11.9239 8.79864L15 9.65061M9.7916 17.8913L13.0651 18.8409M11.0476 13.6441L19.0252 15.9583M9.28296 4.02539L17.2606 6.33953C17.8271 6.50387 18.0239 7.34969 18.4175 9.04135L18.5193 9.479C18.6312 9.95972 18.6871 10.2001 18.8208 10.3868C18.9546 10.5734 19.151 10.6853 19.5438 10.9091M19.5438 10.9091L19.9015 11.1128C21.284 11.9002 21.9752 12.2939 21.9994 12.9541C22.0236 13.6143 21.3648 14.1039 20.0471 15.083L19.7062 15.3363C19.3318 15.6145 19.1446 15.7536 19.0252 15.9583M19.5438 10.9091L17.6388 10.3815M19.0252 15.9583C18.9058 16.1629 18.8678 16.4099 18.7917 16.904L18.7224 17.3538C18.6408 17.8835 18.5205 18.3551 18.3926 18.7549C18.1952 19.3717 18.0965 19.6801 17.7378 19.8862C17.379 20.0922 17.0322 19.9916 16.3385 19.7904" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenAstronomyStarAngle;