import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneCart = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.0234 2C9.05694 2 8.27344 2.7835 8.27344 3.75C8.27344 4.7165 9.05694 5.5 10.0234 5.5H14.0234C14.9899 5.5 15.7734 4.7165 15.7734 3.75C15.7734 2.7835 14.9899 2 14.0234 2H10.0234Z" fill={color} opacity="0.5"/>
	<Path d="M3.88671 16.2052C3.02876 12.7734 2.59979 11.0575 3.50062 9.90376C4.40145 8.75 6.17016 8.75 9.70756 8.75H14.3382C17.8757 8.75 19.6444 8.75 20.5452 9.90376C21.446 11.0575 21.0171 12.7734 20.1591 16.2052C19.6134 18.3879 19.3406 19.4792 18.5268 20.1146C17.713 20.75 16.5881 20.75 14.3382 20.75H9.70756C7.45771 20.75 6.33278 20.75 5.519 20.1146C4.70521 19.4792 4.43238 18.3879 3.88671 16.2052Z" fill={color} opacity="0.5"/>
	<Path d="M15.6039 4.5024C15.7126 4.2745 15.7734 4.0194 15.7734 3.75009C15.7734 3.48204 15.7132 3.22806 15.6055 3.00098C16.289 3.00595 16.8217 3.03732 17.2973 3.22318C17.8655 3.44525 18.3597 3.82275 18.7234 4.31251C19.0903 4.80659 19.2626 5.43988 19.4996 6.31153L19.546 6.4819L20.0587 9.44488C19.6501 9.16295 19.1231 8.99542 18.4414 8.89587L18.0801 6.80786C17.7964 5.76815 17.6934 5.44141 17.5191 5.20683C17.3233 4.94312 17.0572 4.73985 16.7512 4.62027C16.5314 4.53436 16.2658 4.50909 15.6039 4.5024Z" fill={color}/>
	<Path d="M8.44142 3.00098C8.3337 3.22807 8.27344 3.48204 8.27344 3.75009C8.27344 4.0194 8.33427 4.2745 8.44294 4.5024C7.78109 4.50909 7.51551 4.53436 7.29571 4.62027C6.98976 4.73985 6.72365 4.94312 6.5278 5.20683C6.35359 5.44141 6.25059 5.76815 5.96681 6.80786L5.60551 8.89578C4.92397 8.99527 4.39697 9.16269 3.98828 9.44442L4.50092 6.4819L4.54731 6.31154C4.78439 5.43989 4.95663 4.80659 5.32356 4.31251C5.68728 3.82275 6.18149 3.44525 6.74968 3.22318C7.22521 3.03733 7.75793 3.00595 8.44142 3.00098Z" fill={color}/>
</Svg>;

export default BoldDuotoneCart;
