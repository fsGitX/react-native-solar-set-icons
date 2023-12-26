import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneFootball = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color} opacity="0.5"/>
	<Path d="M15.658 3.22334L14.3376 4.15456C13.6404 4.6463 13.1571 4.98717 12.7387 5.17554V9.57381L14.2887 10.7593L18.3858 9.0626C18.4193 8.60569 18.5719 8.03567 18.7915 7.21528L19.2095 5.65341L19.3212 5.20978C20.9695 6.99304 21.9769 9.37874 21.9769 12C21.9769 12.1971 21.9712 12.3929 21.96 12.5872L20.4493 11.5886C19.7353 11.1166 19.2411 10.79 18.9132 10.4677L14.7009 12.2121L14.1186 14.0986L16.6986 17.0828C17.146 17 17.7315 17 18.5696 17H20.6406C19.2551 19.3979 16.9037 21.1663 14.1189 21.772L14.1917 21.5L14.7793 19.7351C15.0515 18.9175 15.2394 18.3531 15.4674 17.9522L12.9151 15H11.0415L8.71853 17.9583C8.9449 18.3588 9.13229 18.9216 9.40314 19.7351L9.99076 21.5L10.0999 21.8215C7.20965 21.2678 4.76172 19.467 3.33628 17H5.61279C6.45913 17 7.04778 17 7.49688 17.0852L9.85371 14.0838L9.27685 12.2149L5.12864 10.4667C4.8008 10.7893 4.30632 11.1161 3.59168 11.5885L2.04097 12.6136L2.01944 12.6289C2.00654 12.421 2 12.2112 2 12C2 9.35924 3.02243 6.95755 4.69259 5.17007L4.8315 5.65332L5.24951 7.21519C5.46881 8.03457 5.62126 8.60419 5.65502 9.06081L9.68715 10.7601L11.2387 9.57341V5.15773C10.8253 4.96004 10.3502 4.60934 9.66562 4.10403L8.16997 3L7.9628 2.84539C9.19428 2.30182 10.5562 2 11.9885 2C13.436 2 14.8117 2.30828 16.0534 2.86285L15.658 3.22334Z" fill={color}/>
</Svg>;

export default BoldDuotoneFootball;
