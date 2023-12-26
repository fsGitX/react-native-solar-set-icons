import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMuted = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.6589 6C16.5186 5.20217 16.2887 4.68467 15.8669 4.37163C15.7026 4.24973 15.5186 4.15089 15.3286 4.08241C14.3375 3.72527 13.1569 4.54728 10.7955 6.1913L10.5922 6.33284C10.1953 6.60922 9.99677 6.74741 9.78309 6.84699C9.57186 6.94543 9.34985 7.01576 9.12219 7.05635C8.89189 7.09742 8.65414 7.09742 8.17865 7.09742C6.90287 7.09742 6.26498 7.09742 5.70846 7.3693C5.19999 7.61771 4.69153 8.12289 4.42579 8.64369C4.13493 9.21371 4.10072 9.80635 4.0323 10.9916C4.01206 11.3423 4 11.6839 4 12C4 12.3161 4.01206 12.6577 4.0323 13.0084C4.10072 14.1936 4.13493 14.7863 4.42579 15.3563C4.69153 15.8771 5.19999 16.3823 5.70846 16.6307C6.26498 16.9026 6.90287 16.9026 8.17865 16.9026C8.65414 16.9026 8.89189 16.9026 9.12219 16.9436C9.34985 16.9842 9.57186 17.0546 9.78309 17.153C9.99677 17.2526 10.1953 17.3908 10.5922 17.6672L10.7955 17.8087C13.1569 19.4527 14.3375 20.2747 15.3286 19.9176C15.5186 19.8491 15.7026 19.7503 15.8669 19.6284C16.2887 19.3153 16.5186 18.7978 16.6589 18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20 9.00002L14 15M14 9L19.9999 15" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearMuted;
