import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineNatureFireMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.88692 4.29067C6.9373 6.1337 4.75 9.30827 4.75 13.504C4.75 17.1845 7.94921 20.25 12 20.25C16.0508 20.25 19.25 17.1845 19.25 13.504C19.25 10.2368 17.571 7.61506 16.2748 6.22564C15.8821 7.05683 15.3158 8.02557 14.6004 8.82749C13.823 9.69893 12.7657 10.4863 11.4773 10.5057C10.6041 10.6042 9.51304 10.2586 8.92606 9.04898C8.42964 8.02598 8.35251 6.49242 8.88692 4.29067ZM10.0973 2.48174C10.5013 2.7761 10.7142 3.31074 10.555 3.85809C9.81189 6.41339 9.96504 7.75422 10.2756 8.39413C10.5457 8.95089 10.9793 9.05949 11.3291 9.01267L11.3786 9.00604H11.4286C12.1073 9.00604 12.806 8.58561 13.4811 7.82892C14.143 7.08691 14.681 6.13116 15.0352 5.32966C15.3609 4.59278 16.3992 4.22569 17.0905 4.91217C18.5794 6.3908 20.75 9.49532 20.75 13.504C20.75 18.1034 16.7858 21.75 12 21.75C7.21423 21.75 3.25 18.1034 3.25 13.504C3.25 8.20875 6.32627 4.40864 8.61092 2.53539C9.08007 2.15071 9.67925 2.17718 10.0973 2.48174Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineNatureFireMinimalistic;
