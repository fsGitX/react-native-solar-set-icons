import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineBag2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 2.75C10.7574 2.75 9.74999 3.75736 9.74999 5V5.25988C10.3071 5.24999 10.9183 5.24999 11.5891 5.25H12.4109C13.0817 5.24999 13.6929 5.24999 14.25 5.25988V5C14.25 3.75736 13.2426 2.75 12 2.75ZM15.75 5.32793V5C15.75 2.92893 14.0711 1.25 12 1.25C9.92893 1.25 8.24999 2.92893 8.24999 5V5.32793C8.10726 5.34021 7.96934 5.35444 7.83606 5.3709C6.8261 5.49569 5.99347 5.75783 5.28618 6.34483C4.57889 6.93183 4.1678 7.70188 3.85902 8.67156C3.55978 9.61128 3.33327 10.8194 3.04853 12.3381L3.02785 12.4484C2.62606 14.5912 2.30941 16.2799 2.25131 17.6112C2.19174 18.9758 2.39476 20.106 3.16453 21.0335C3.93431 21.961 5.00772 22.3689 6.35992 22.5618C7.67915 22.75 9.39728 22.75 11.5774 22.75H12.4226C14.6027 22.75 16.3208 22.75 17.6401 22.5618C18.9923 22.3689 20.0657 21.961 20.8355 21.0335C21.6052 20.106 21.8082 18.9758 21.7487 17.6112C21.6906 16.2799 21.3739 14.5912 20.9721 12.4484L20.9515 12.3381C20.6667 10.8194 20.4402 9.61129 20.141 8.67156C19.8322 7.70188 19.4211 6.93183 18.7138 6.34483C18.0065 5.75783 17.1739 5.49569 16.1639 5.3709C16.0306 5.35444 15.8927 5.34021 15.75 5.32793ZM8.02 6.85959C7.16446 6.96529 6.64774 7.16413 6.24413 7.49909C5.84053 7.83406 5.54987 8.30528 5.28831 9.12669C5.02045 9.96788 4.8097 11.0846 4.51358 12.6639C4.09786 14.8811 3.80278 16.4647 3.74988 17.6766C3.69788 18.8679 3.88895 19.5576 4.3188 20.0756C4.74864 20.5935 5.39139 20.9084 6.5718 21.0768C7.77271 21.2482 9.38359 21.25 11.6394 21.25H12.3606C14.6164 21.25 16.2273 21.2482 17.4282 21.0768C18.6086 20.9084 19.2513 20.5935 19.6812 20.0756C20.111 19.5576 20.3021 18.8679 20.2501 17.6766C20.1972 16.4647 19.9021 14.8811 19.4864 12.6639C19.1903 11.0846 18.9795 9.96788 18.7117 9.12669C18.4501 8.30528 18.1595 7.83406 17.7559 7.49909C17.3523 7.16413 16.8355 6.96529 15.98 6.85959C15.1038 6.75133 13.9674 6.75 12.3606 6.75H11.6394C10.0326 6.75 8.89614 6.75133 8.02 6.85959ZM9.12329 10.2602C9.53187 10.3283 9.80789 10.7147 9.73979 11.1233L8.73979 17.1233C8.67169 17.5319 8.28527 17.8079 7.8767 17.7398C7.46812 17.6717 7.1921 17.2853 7.2602 16.8767L8.2602 10.8767C8.3283 10.4681 8.71472 10.1921 9.12329 10.2602ZM14.8767 10.2602C15.2853 10.1921 15.6717 10.4681 15.7398 10.8767L16.7398 16.8767C16.8079 17.2853 16.5319 17.6717 16.1233 17.7398C15.7147 17.8079 15.3283 17.5319 15.2602 17.1233L14.2602 11.1233C14.1921 10.7147 14.4681 10.3283 14.8767 10.2602Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineBag2;
