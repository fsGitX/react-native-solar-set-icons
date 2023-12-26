import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineEndCall = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 7.75012C6.51318 7.75012 3.90179 10.2013 3.01834 11.2675C2.84345 11.4786 2.75 11.7742 2.75 12.1416L2.75 14.0645C2.75 14.8282 3.5319 15.4413 4.36905 15.196L6.36905 14.6099C6.90669 14.4523 7.25 13.9834 7.25 13.4783L7.25 12.8618L8 12.8618C7.25 12.8618 7.25 12.8608 7.25 12.8598L7.25001 12.8578L7.25004 12.8535L7.25019 12.8445L7.25085 12.8246C7.25147 12.8105 7.25248 12.7948 7.25406 12.7774C7.25722 12.7427 7.26263 12.7017 7.27167 12.6553C7.2898 12.5624 7.32239 12.4485 7.37982 12.3223C7.49703 12.0647 7.7059 11.7812 8.05672 11.5241C8.74267 11.0215 9.93056 10.6464 12 10.6464C14.0694 10.6464 15.2573 11.0215 15.9433 11.5241C16.2941 11.7812 16.503 12.0647 16.6202 12.3223C16.6776 12.4485 16.7102 12.5624 16.7283 12.6553C16.7374 12.7017 16.7428 12.7427 16.7459 12.7774C16.7475 12.7948 16.7485 12.8105 16.7492 12.8246L16.7498 12.8445L16.75 12.8535L16.75 12.8578L16.75 12.8598C16.75 12.8608 16.75 12.8618 16 12.8618H16.75V13.2501C16.75 13.8158 17.1811 14.3285 17.8091 14.4205L19.8091 14.7136C20.5953 14.8288 21.25 14.2407 21.25 13.5431V11.4184C21.25 10.9779 21.1133 10.6321 20.8708 10.4155C19.8648 9.5172 17.233 7.75012 12 7.75012ZM15.25 12.9336V13.2501C15.25 14.5972 16.2642 15.7102 17.5916 15.9047L19.5916 16.1978C21.2257 16.4372 22.75 15.2129 22.75 13.5431V11.4184C22.75 10.6849 22.5191 9.8765 21.8699 9.29673C20.5944 8.15768 17.6087 6.25012 12 6.25012C5.98964 6.25012 2.97874 8.96431 1.86331 10.3105C1.40595 10.8625 1.25 11.531 1.25 12.1416L1.25 14.0645C1.25 15.8967 3.05932 17.1429 4.7909 16.6354L6.7909 16.0493C7.93988 15.7126 8.75 14.6778 8.75 13.4783L8.75 12.9336C8.76534 12.9045 8.8133 12.8293 8.94328 12.7341C9.25733 12.504 10.0694 12.1464 12 12.1464C13.9306 12.1464 14.7427 12.504 15.0567 12.7341C15.1867 12.8293 15.2347 12.9045 15.25 12.9336Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineEndCall;
