import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenHeartBroken = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.96173 18.9111L9.42605 18.3221L8.96173 18.9111ZM12 5.50088L11.4596 6.02098C11.601 6.16787 11.7961 6.25088 12 6.25088C12.2039 6.25088 12.399 6.16787 12.5404 6.02098L12 5.50088ZM15.0383 18.9111L15.5026 19.5001L15.0383 18.9111ZM7.00061 16.4211C6.68078 16.1579 6.20813 16.2038 5.94491 16.5236C5.68169 16.8435 5.72758 17.3161 6.04741 17.5793L7.00061 16.4211ZM2.34199 13.4117C2.54074 13.7751 2.99647 13.9086 3.35988 13.7098C3.7233 13.5111 3.85677 13.0554 3.65801 12.6919L2.34199 13.4117ZM2.75 9.13734C2.75 6.98647 3.96537 5.18277 5.62436 4.42444C7.23607 3.68772 9.40166 3.88282 11.4596 6.02098L12.5404 4.98078C10.0985 2.44377 7.26409 2.02563 5.00076 3.0602C2.78471 4.07317 1.25 6.42527 1.25 9.13734H2.75ZM8.49742 19.5001C9.00965 19.9039 9.55954 20.3345 10.1168 20.6602C10.6739 20.9857 11.3096 21.2502 12 21.2502V19.7502C11.6904 19.7502 11.3261 19.6295 10.8736 19.3651C10.4213 19.1008 9.95208 18.7368 9.42605 18.3221L8.49742 19.5001ZM15.5026 19.5001C16.9292 18.3755 18.7528 17.0868 20.1833 15.476C21.6395 13.8363 22.75 11.8029 22.75 9.13734H21.25C21.25 11.3347 20.3508 13.0285 19.0617 14.48C17.7469 15.9605 16.0896 17.1273 14.574 18.3221L15.5026 19.5001ZM22.75 9.13734C22.75 6.42527 21.2153 4.07317 18.9992 3.0602C16.7359 2.02563 13.9015 2.44377 11.4596 4.98078L12.5404 6.02098C14.5983 3.88282 16.7639 3.68772 18.3756 4.42444C20.0346 5.18277 21.25 6.98647 21.25 9.13734H22.75ZM14.574 18.3221C14.0479 18.7368 13.5787 19.1008 13.1264 19.3651C12.6739 19.6295 12.3096 19.7502 12 19.7502V21.2502C12.6904 21.2502 13.3261 20.9857 13.8832 20.6602C14.4405 20.3345 14.9903 19.9039 15.5026 19.5001L14.574 18.3221ZM9.42605 18.3221C8.63014 17.6947 7.82129 17.0966 7.00061 16.4211L6.04741 17.5793C6.87768 18.2627 7.75472 18.9146 8.49742 19.5001L9.42605 18.3221ZM3.65801 12.6919C3.0968 11.6658 2.75 10.5035 2.75 9.13734H1.25C1.25 10.7749 1.66995 12.183 2.34199 13.4117L3.65801 12.6919Z" fill={color}/>
	<Path d="M12 5.50098L10.5 8.50034L14 11.0003L11 14.5003L13 16.5003L12 20.5003" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenHeartBroken;
