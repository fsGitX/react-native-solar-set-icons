import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMessagesSquareShareLine = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 13.9979C21.9711 17.4119 21.7815 19.294 20.5404 20.5352C19.0755 22 16.7179 22 12.0026 22C7.28733 22 4.9297 22 3.46485 20.5352C2 19.0703 2 16.7127 2 11.9974C2 7.28212 2 4.92448 3.46485 3.45963C4.70599 2.21848 6.58807 2.02895 10.0021 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 7H14C12.1824 7 11.0867 7.89202 10.6804 8.30029C10.5546 8.42673 10.4917 8.48996 10.4908 8.49082C10.49 8.49168 10.4267 8.55459 10.3003 8.68042C9.89202 9.08671 9 10.1824 9 12V15M22 7L17 2M22 7L17 12" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearMessagesSquareShareLine;
