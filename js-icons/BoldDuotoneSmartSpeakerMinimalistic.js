import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneSmartSpeakerMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.4544 2.4212L7.23936 2.4614C5.15124 2.85176 3.56225 4.55367 3.32102 6.65818L3.30532 6.79516C2.89823 10.3467 2.89823 13.9329 3.30532 17.4844C3.55266 19.6422 5.24868 21.3512 7.41019 21.6206L8.42569 21.7471L8.42598 21.7472C8.92061 21.8088 9.16797 21.8396 9.41505 21.8654C11.1335 22.0449 12.866 22.0449 14.5845 21.8654C14.8315 21.8396 15.0789 21.8088 15.5735 21.7472L15.5738 21.7471L16.48 21.6342C18.7041 21.357 20.4473 19.5951 20.6948 17.3739L20.712 17.2199C21.1072 13.6729 21.0957 10.0925 20.6774 6.54809C20.4367 4.50764 18.8934 2.86019 16.8681 2.48157L16.5451 2.42119C13.541 1.8596 10.4585 1.8596 7.4544 2.4212Z" fill={color} opacity="0.5"/>
	<Path d="M7.48156 5.42503C7.164 5.15908 6.69098 5.20091 6.42503 5.51847C6.15908 5.83603 6.20091 6.30906 6.51847 6.57501C7.38044 7.29689 9.34385 8.25002 12 8.25002C14.6562 8.25002 16.6196 7.29689 17.4816 6.57501C17.7991 6.30906 17.841 5.83603 17.575 5.51847C17.3091 5.20091 16.836 5.15908 16.5185 5.42503C15.9413 5.90839 14.3238 6.75002 12 6.75002C9.67619 6.75002 8.05873 5.90839 7.48156 5.42503Z" fill={color}/>
</Svg>;

export default BoldDuotoneSmartSpeakerMinimalistic;