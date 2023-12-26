import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldSportsBodyShape = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21.8363 17.462C21.393 16.4155 20.8141 15.4631 20.3001 14.6177C20.1159 14.3146 19.94 14.0252 19.7817 13.7502H4.21829C4.05999 14.0252 3.8841 14.3146 3.69986 14.6177C3.18593 15.4631 2.60702 16.4155 2.16368 17.462C1.63049 18.7206 1.25 20.1846 1.25 22.0002C1.25 22.4144 1.58579 22.7502 2 22.7502C2.41421 22.7502 2.75 22.4144 2.75 22.0002C2.75 20.5096 3.03996 19.3045 3.45871 18.2564C8.85291 18.4033 10.9185 21.1273 11.2885 22.2374C11.3906 22.5436 11.6772 22.7502 12 22.7502C12.3228 22.7502 12.6094 22.5436 12.7115 22.2374C13.0815 21.1273 15.1471 18.4033 20.5413 18.2564C20.96 19.3045 21.25 20.5096 21.25 22.0002C21.25 22.4144 21.5858 22.7502 22 22.7502C22.4142 22.7502 22.75 22.4144 22.75 22.0002C22.75 20.1846 22.3695 18.7206 21.8363 17.462Z" fill={color}/>
	<Path d="M4.68985 1.70591C4.52733 1.32492 4.08671 1.14781 3.70572 1.31034C3.32477 1.47285 3.14775 1.91356 3.31017 2.29452L3.3109 2.29626L3.31449 2.30475L3.32977 2.34135C3.34345 2.37429 3.36393 2.4241 3.39024 2.48943C3.44288 2.62011 3.51878 2.81275 3.61022 3.05667C3.79323 3.54491 4.03764 4.23647 4.28196 5.04637C4.77458 6.6794 5.25 8.73952 5.25 10.5716C5.25 11.1648 5.13757 11.7108 4.94237 12.2502H19.0576C18.8624 11.7108 18.75 11.1648 18.75 10.5716C18.75 8.73952 19.2254 6.6794 19.718 5.04637C19.9624 4.23647 20.2068 3.54491 20.3898 3.05667C20.4812 2.81275 20.5571 2.62011 20.6098 2.48943C20.6361 2.4241 20.6565 2.37429 20.6702 2.34135L20.6855 2.30475L20.6891 2.29626L20.6899 2.29433C20.8523 1.91336 20.6752 1.47285 20.2943 1.31034C19.9133 1.14781 19.4724 1.32553 19.3099 1.70653C19.3099 1.70653 19.3101 1.70591 20 2.00019L19.3099 1.70653L19.3094 1.70758L19.308 1.71095L19.303 1.72277L19.2849 1.76624C19.2692 1.80387 19.2467 1.85858 19.2184 1.92903C19.1616 2.06991 19.0813 2.27389 18.9852 2.53018C18.7932 3.04236 18.5376 3.76558 18.282 4.61316C17.801 6.20758 17.3045 8.29057 17.2542 10.2502H6.74582C6.69546 8.29057 6.19902 6.20758 5.71804 4.61316C5.46236 3.76558 5.20677 3.04236 5.01478 2.53018C4.91871 2.27389 4.83837 2.06991 4.78163 1.92903C4.75326 1.85858 4.73077 1.80387 4.71515 1.76624L4.69699 1.72277L4.692 1.71095L4.69056 1.70758L4.68985 1.70591Z" fill={color}/>
</Svg>;

export default BoldSportsBodyShape;