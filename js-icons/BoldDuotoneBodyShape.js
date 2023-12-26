import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneBodyShape = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21.8363 17.4618C21.393 16.4153 20.8141 15.4629 20.3001 14.6175C20.1159 14.3144 19.94 14.025 19.7817 13.75H4.21829C4.05999 14.025 3.8841 14.3144 3.69986 14.6175C3.18593 15.4629 2.60702 16.4153 2.16368 17.4618C1.63049 18.7204 1.25 20.1844 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75C2.41421 22.75 2.75 22.4142 2.75 22C2.75 20.5094 3.03996 19.3043 3.45871 18.2562C8.85291 18.4031 10.9185 21.1271 11.2885 22.2372C11.3906 22.5434 11.6772 22.75 12 22.75C12.3228 22.75 12.6094 22.5434 12.7115 22.2372C13.0815 21.1271 15.1471 18.4031 20.5413 18.2562C20.96 19.3043 21.25 20.5094 21.25 22C21.25 22.4142 21.5858 22.75 22 22.75C22.4142 22.75 22.75 22.4142 22.75 22C22.75 20.1844 22.3695 18.7204 21.8363 17.4618Z" fill={color}/>
	<Path d="M4.68998 1.70591C4.52745 1.32492 4.08684 1.14781 3.70584 1.31034C3.3249 1.47285 3.14787 1.91356 3.31029 2.29452L3.31103 2.29626L3.31461 2.30475L3.3299 2.34135C3.34358 2.37429 3.36406 2.4241 3.39037 2.48943C3.443 2.62011 3.51891 2.81275 3.61034 3.05667C3.79335 3.54491 4.03777 4.23647 4.28208 5.04637C4.77471 6.6794 5.25012 8.73952 5.25012 10.5716C5.25012 11.1648 5.1377 11.7108 4.9425 12.2502H19.0577C18.8626 11.7108 18.7501 11.1648 18.7501 10.5716C18.7501 8.73952 19.2255 6.6794 19.7182 5.04637C19.9625 4.23647 20.2069 3.54491 20.3899 3.05667C20.4813 2.81275 20.5572 2.62011 20.6099 2.48943C20.6362 2.4241 20.6567 2.37429 20.6703 2.34135L20.6856 2.30475L20.6892 2.29626L20.69 2.29433C20.8525 1.91336 20.6754 1.47285 20.2944 1.31034C19.9134 1.14781 19.4725 1.32553 19.31 1.70653C19.31 1.70653 19.3103 1.70591 20.0001 2.00019L19.31 1.70653L19.3096 1.70758L19.3081 1.71095L19.3031 1.72277L19.285 1.76624C19.2694 1.80387 19.2469 1.85858 19.2185 1.92903C19.1618 2.06991 19.0814 2.27389 18.9853 2.53018C18.7934 3.04236 18.5378 3.76558 18.2821 4.61316C17.8011 6.20758 17.3047 8.29057 17.2543 10.2502H6.74594C6.69559 8.29057 6.19914 6.20758 5.71816 4.61316C5.46248 3.76558 5.2069 3.04236 5.01491 2.53018C4.91884 2.27389 4.83849 2.06991 4.78175 1.92903C4.75338 1.85858 4.73089 1.80387 4.71527 1.76624L4.69711 1.72277L4.69212 1.71095L4.69069 1.70758L4.68998 1.70591Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneBodyShape;
