import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldSpedometerMax = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.7521 3.97525C12.7521 4.39004 12.4154 4.72629 12 4.72629C11.5846 4.72629 11.2479 4.39004 11.2479 3.97525V2C9.04427 2.16317 7.03884 3.03751 5.46094 4.39401L7.01653 5.94744C7.31023 6.24074 7.31023 6.71627 7.01653 7.00957C6.72282 7.30287 6.24663 7.30287 5.95292 7.00957L4.39733 5.45614C3.03895 7.03185 2.16339 9.0345 2 11.2351H3.97778C4.39314 11.2351 4.72986 11.5713 4.72986 11.9861C4.72986 12.4009 4.39314 12.7372 3.97778 12.7372H2C2.16339 14.9378 3.03895 16.9404 4.39733 18.5161L5.95292 16.9627C6.24663 16.6694 6.72282 16.6694 7.01653 16.9627C7.31023 17.256 7.31023 17.7315 7.01653 18.0248L5.46094 19.5783C7.21662 21.0876 9.50161 22 12 22C14.4984 22 16.7834 21.0876 18.5391 19.5783L16.9835 18.0248C16.6898 17.7315 16.6898 17.256 16.9835 16.9627C17.2772 16.6694 17.7534 16.6694 18.0471 16.9627L19.6027 18.5161C20.9611 16.9404 21.8366 14.9378 22 12.7372H20.022C19.6066 12.7372 19.2699 12.4009 19.2699 11.9861C19.2699 11.5713 19.6066 11.2351 20.022 11.2351H22C21.8366 9.0345 20.9611 7.03185 19.6027 5.45614L18.0471 7.00957C17.7534 7.30287 17.2772 7.30287 16.9835 7.00957C16.6898 6.71627 16.6898 6.24074 16.9835 5.94744L18.5391 4.39401C16.9612 3.03751 14.9557 2.16317 12.7521 2V3.97525ZM10.1149 10.1041C8.94008 11.2773 8.94008 13.1794 10.1149 14.3526C10.5618 14.7989 11.4895 15.1106 12.4675 15.3255C13.9301 15.6468 14.6614 15.8075 15.2438 15.2259C15.8262 14.6443 15.6653 13.914 15.3435 12.4535C15.1283 11.4768 14.8162 10.5504 14.3693 10.1041C13.1945 8.93091 11.2897 8.93091 10.1149 10.1041Z" fill="#1C274C" fillRule="evenodd"/>
</Svg>;

export default BoldSpedometerMax;
