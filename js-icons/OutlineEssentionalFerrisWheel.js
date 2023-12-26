import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineEssentionalFerrisWheel = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.6976 3.07325C13.5071 2.31301 12.8193 1.75 12 1.75C11.1807 1.75 10.4929 2.31302 10.3024 3.07326C10.2697 3.08988 10.2371 3.10701 10.2048 3.12465L5.41054 5.73883C5.32787 5.7839 5.24734 5.83183 5.16906 5.88245C4.96294 5.7971 4.73697 5.75 4.5 5.75C3.5335 5.75 2.75 6.5335 2.75 7.5C2.75 8.07606 3.02834 8.58711 3.45786 8.906C3.45648 8.94762 3.45578 8.98935 3.45578 9.03118V13.9688C3.45578 14.1693 3.47178 14.3674 3.50286 14.5617C3.04787 14.8777 2.75 15.4041 2.75 16C2.75 16.9665 3.5335 17.75 4.5 17.75C4.91559 17.75 5.29735 17.6051 5.59753 17.3631L6.84128 18.0413L4.84437 21.6358C4.64321 21.9979 4.77367 22.4545 5.13575 22.6556C5.49784 22.8568 5.95444 22.7263 6.1556 22.3642L8.15826 18.7594L10.2048 19.8754C10.2371 19.893 10.2697 19.9101 10.3024 19.9267C10.4929 20.687 11.1807 21.25 12 21.25C12.8193 21.25 13.5071 20.687 13.6976 19.9268C13.7303 19.9101 13.7629 19.893 13.7953 19.8754L15.8417 18.7595L17.8444 22.3642C18.0456 22.7263 18.5022 22.8568 18.8642 22.6556C19.2263 22.4545 19.3568 21.9979 19.1556 21.6358L17.1587 18.0413L18.4025 17.3631C18.7027 17.6051 19.0844 17.75 19.5 17.75C20.4665 17.75 21.25 16.9665 21.25 16C21.25 15.4041 20.9521 14.8777 20.4972 14.5617C20.5282 14.3674 20.5442 14.1693 20.5442 13.9688V9.03118C20.5442 8.98934 20.5435 8.94761 20.5422 8.90599C20.9717 8.5871 21.25 8.07605 21.25 7.5C21.25 6.5335 20.4665 5.75 19.5 5.75C19.263 5.75 19.0371 5.7971 18.831 5.88245C18.7527 5.83183 18.6721 5.7839 18.5895 5.73882L13.7952 3.12465C13.7629 3.10701 13.7303 3.08987 13.6976 3.07325ZM10.6369 4.59754C10.9577 4.99544 11.4491 5.25 12 5.25C12.5509 5.25 13.0424 4.99544 13.3631 4.59753L17.8152 7.02513C17.7727 7.17614 17.75 7.33542 17.75 7.5C17.75 8.30884 18.2987 8.98951 19.0442 9.19006V13.9688C19.0442 14.0867 19.035 14.2032 19.0171 14.3175C18.2855 14.5271 17.75 15.201 17.75 16C17.75 16.0035 17.75 16.0069 17.75 16.0104L16.4302 16.7301L14.179 12.6778C14.537 12.2136 14.75 11.6316 14.75 11C14.75 9.48122 13.5188 8.25 12 8.25C10.4812 8.25 9.25 9.48122 9.25 11C9.25 11.6316 9.46296 12.2136 9.82099 12.6778L7.56977 16.73L6.24997 16.0104C6.24999 16.0069 6.25 16.0035 6.25 16C6.25 15.201 5.71455 14.5271 4.98291 14.3175C4.965 14.2032 4.95578 14.0867 4.95578 13.9688V9.19006C5.70127 8.9895 6.25 8.30883 6.25 7.5C6.25 7.33542 6.22728 7.17614 6.18481 7.02514L10.6369 4.59754ZM15.1133 17.4482L12.9625 13.5769C12.6629 13.6888 12.3386 13.75 12 13.75C11.6614 13.75 11.3371 13.6888 11.0375 13.5769L8.88675 17.4482L10.6369 18.4025C10.9577 18.0046 11.4491 17.75 12 17.75C12.5509 17.75 13.0424 18.0046 13.3631 18.4025L15.1133 17.4482ZM10.75 11C10.75 10.3096 11.3096 9.75 12 9.75C12.6904 9.75 13.25 10.3096 13.25 11C13.25 11.6904 12.6904 12.25 12 12.25C11.3096 12.25 10.75 11.6904 10.75 11Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineEssentionalFerrisWheel;