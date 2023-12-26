import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearBusinessPieChart3 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.4443 3.68518C6.97115 3.33315 7.52766 3.0337 8.10577 2.78928C9.50868 2.19615 10.2101 1.89958 11.1051 2.49284C12 3.0861 12 4.05736 12 5.99988V7.99987C12 9.88549 12 10.8283 12.5858 11.4141C13.1716 11.9999 14.1144 11.9999 16 11.9999H18C19.9425 11.9999 20.9138 11.9999 21.507 12.8948C22.1003 13.7897 21.8037 14.4912 21.2106 15.8941C20.9662 16.4722 20.6667 17.0287 20.3147 17.5556C19.2159 19.2001 17.6541 20.4818 15.8268 21.2387C13.9996 21.9955 11.9889 22.1936 10.0491 21.8077C8.10929 21.4219 6.32746 20.4695 4.92894 19.0709C3.53041 17.6724 2.578 15.8906 2.19215 13.9508C1.8063 12.011 2.00433 10.0003 2.76121 8.17304C3.51809 6.34578 4.79981 4.78399 6.4443 3.68518Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M14.5 2.31494C18.014 3.21939 20.7805 5.98588 21.685 9.4999" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearBusinessPieChart3;
