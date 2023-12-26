import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenRadar2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.41185 21.6588C9.94114 21.8006 10.4719 21.8972 11 21.9509C15.7947 22.4387 20.3717 19.3931 21.6593 14.5877C23.0887 9.25308 19.9229 3.76971 14.5882 2.34029C11.9556 1.63489 9.28684 2.04857 7.0869 3.28972M12 11.9996L5.00197 6.33546C4.57285 5.98813 3.93869 6.05182 3.63599 6.5135C3.06678 7.38163 2.62413 8.35389 2.34078 9.41136C1.37322 13.0224 2.51113 16.7015 5.00197 19.1453M7.36918 8.18416C6.51383 9.22115 6.00004 10.5503 6.00004 11.9996C6.00004 15.3133 8.68633 17.9996 12 17.9996C15.3137 17.9996 18 15.3133 18 11.9996C18 11.4818 17.9345 10.9793 17.8111 10.5M10.1029 6.30568C10.6991 6.10709 11.337 5.99955 12 5.99955C13.0929 5.99955 14.1175 6.29173 15 6.80222" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenRadar2;
