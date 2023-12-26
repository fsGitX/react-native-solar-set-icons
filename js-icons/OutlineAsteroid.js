import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineAsteroid = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 12.122 2.75236 12.2435 2.75703 12.3643C3.16036 12.2892 3.57594 12.25 4.00015 12.25C7.72807 12.25 10.7502 15.2721 10.7502 19C10.7502 19.7377 10.6315 20.4487 10.4121 21.1143C10.9276 21.2035 11.4581 21.25 12 21.25C16.2686 21.25 19.8632 18.3579 20.9288 14.4261C18.2142 13.5516 16.25 11.006 16.25 8.00008C16.25 6.68035 16.6294 5.44776 17.2847 4.40719C15.7866 3.36236 13.9656 2.75 12 2.75ZM18.4534 5.373C18.0059 6.1455 17.75 7.04232 17.75 8.00008C17.75 10.268 19.1886 12.2012 21.2034 12.9348C21.2342 12.6275 21.25 12.3157 21.25 12C21.25 9.40177 20.1795 7.05405 18.4534 5.373ZM9.18679 22.378C5.05447 21.2603 1.90943 17.7421 1.34166 13.4094C1.28117 12.9479 1.25 12.4774 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C14.5751 1.25 16.9406 2.15639 18.7918 3.66686C21.2062 5.6369 22.75 8.63846 22.75 12C22.75 12.6916 22.6846 13.3686 22.5594 14.025C21.6118 18.994 17.2453 22.75 12 22.75C11.0276 22.75 10.0843 22.6207 9.18679 22.378ZM8.95587 20.7376C9.14638 20.1943 9.25015 19.6098 9.25015 19C9.25015 16.1005 6.89965 13.75 4.00015 13.75C3.63524 13.75 3.27953 13.7871 2.93646 13.8576C3.59104 17.0691 5.9113 19.677 8.95587 20.7376ZM10.5 6.75C9.5335 6.75 8.75 7.5335 8.75 8.5C8.75 9.4665 9.5335 10.25 10.5 10.25C11.4665 10.25 12.25 9.4665 12.25 8.5C12.25 7.5335 11.4665 6.75 10.5 6.75ZM7.25 8.5C7.25 6.70507 8.70507 5.25 10.5 5.25C12.2949 5.25 13.75 6.70507 13.75 8.5C13.75 10.2949 12.2949 11.75 10.5 11.75C8.70507 11.75 7.25 10.2949 7.25 8.5ZM15 15.75C14.8619 15.75 14.75 15.8619 14.75 16C14.75 16.1381 14.8619 16.25 15 16.25C15.1381 16.25 15.25 16.1381 15.25 16C15.25 15.8619 15.1381 15.75 15 15.75ZM13.25 16C13.25 15.0335 14.0335 14.25 15 14.25C15.9665 14.25 16.75 15.0335 16.75 16C16.75 16.9665 15.9665 17.75 15 17.75C14.0335 17.75 13.25 16.9665 13.25 16Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineAsteroid;
