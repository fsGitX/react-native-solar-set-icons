import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenWeatherCloudBolt = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 12.3529C22 15.0599 20.0726 17.3221 17.5 17.8722M6.28571 18C3.91878 18 2 16.1038 2 13.7647C2 11.4256 3.91878 9.52941 6.28571 9.52941C6.56983 9.52941 6.8475 9.55673 7.11616 9.60887M14.381 7.02721C14.9767 6.81911 15.6178 6.70588 16.2857 6.70588C16.9404 6.70588 17.5693 6.81468 18.1551 7.01498M7.11616 9.60887C6.88706 8.9978 6.7619 8.33687 6.7619 7.64706C6.7619 4.52827 9.32028 2 12.4762 2C15.4159 2 17.8371 4.19371 18.1551 7.01498M7.11616 9.60887C7.68059 9.71839 8.20528 9.9374 8.66667 10.2426M18.1551 7.01498C18.8381 7.24853 19.4623 7.60648 20 8.06141" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9.62607 17.4539L10.7744 15.9003C11.5166 14.896 11.8878 14.3939 12.234 14.5C12.5803 14.6061 12.5803 15.222 12.5803 16.4537V16.5699C12.5803 17.0141 12.5803 17.2362 12.7222 17.3756L12.7297 17.3828C12.8748 17.5192 13.106 17.5192 13.5683 17.5192C14.4004 17.5192 14.8165 17.5192 14.9571 17.7715C14.9594 17.7757 14.9617 17.7799 14.9639 17.7842C15.0966 18.0404 14.8557 18.3663 14.3739 19.0182L13.2256 20.5718C12.4833 21.5761 12.1122 22.0782 11.7659 21.9721C11.4197 21.866 11.4197 21.2501 11.4197 20.0184L11.4197 19.9023C11.4197 19.458 11.4197 19.2359 11.2778 19.0965L11.2703 19.0893C11.1252 18.9529 10.894 18.9529 10.4317 18.9529C9.59958 18.9529 9.18354 18.9529 9.04294 18.7006C9.04061 18.6964 9.03835 18.6922 9.03615 18.6879C8.90342 18.4317 9.1443 18.1058 9.62607 17.4539Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default BrokenWeatherCloudBolt;
