import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearPills2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.5355 10.5355C12.4404 9.63071 13 8.38071 13 7C13 4.23858 10.7614 2 8 2C6.61929 2 5.36929 2.55964 4.46447 3.46447M11.5355 10.5355C10.6307 11.4404 9.38071 12 8 12C5.23858 12 3 9.76142 3 7C3 5.61929 3.55964 4.36929 4.46447 3.46447M11.5355 10.5355L4.46447 3.46447" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 17C22 15.7204 21.5118 14.4408 20.5355 13.4645C18.5829 11.5118 15.4171 11.5118 13.4645 13.4645C12.4882 14.4408 12 15.7204 12 17M22 17C22 18.2796 21.5118 19.5592 20.5355 20.5355C18.5829 22.4882 15.4171 22.4882 13.4645 20.5355C12.4882 19.5592 12 18.2796 12 17M22 17H12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearPills2;
