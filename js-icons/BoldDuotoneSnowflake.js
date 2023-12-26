import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneSnowflake = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4.18934L14.4697 2.46967C14.7626 2.17678 15.2374 2.17678 15.5303 2.46967C15.8232 2.76256 15.8232 3.23744 15.5303 3.53033L12.75 6.31066V17.6893L15.5303 20.4697C15.8232 20.7626 15.8232 21.2374 15.5303 21.5303C15.2374 21.8232 14.7626 21.8232 14.4697 21.5303L12.75 19.8107V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V19.8107L9.53033 21.5303C9.23744 21.8232 8.76256 21.8232 8.46967 21.5303C8.17678 21.2374 8.17678 20.7626 8.46967 20.4697L11.25 17.6893V6.31066L8.46967 3.53033C8.17678 3.23744 8.17678 2.76256 8.46967 2.46967C8.76256 2.17678 9.23744 2.17678 9.53033 2.46967L11.25 4.18934V2C11.25 1.58579 11.5858 1.25 12 1.25Z" fill={color} fillRule="evenodd"/>
	<Path d="M5.51159 4.17809C5.91169 4.07088 6.32294 4.30832 6.43015 4.70842L7.44782 8.50642L11.9998 11.1345L16.5518 8.50642L17.5695 4.70842C17.6767 4.30832 18.088 4.07088 18.4881 4.17809C18.8882 4.28529 19.1256 4.69654 19.0184 5.09664L18.389 7.44576L20.285 6.35109C20.6437 6.14398 21.1024 6.26689 21.3095 6.62561C21.5166 6.98433 21.3937 7.44302 21.035 7.65013L19.139 8.7448L21.4881 9.37424C21.8882 9.48144 22.1256 9.8927 22.0184 10.2928C21.9112 10.6929 21.5 10.9303 21.0999 10.8231L17.3018 9.80546L13.4998 12.0005L17.302 14.1958L21.1 13.1781C21.5001 13.0709 21.9114 13.3083 22.0186 13.7084C22.1258 14.1085 21.8884 14.5198 21.4883 14.627L19.1392 15.2564L21.0352 16.3511C21.3939 16.5582 21.5168 17.0169 21.3097 17.3756C21.1026 17.7343 20.6439 17.8572 20.2852 17.6501L18.3892 16.5555L19.0186 18.9046C19.1258 19.3047 18.8884 19.7159 18.4883 19.8231C18.0882 19.9303 17.6769 19.6929 17.5697 19.2928L16.552 15.4948L11.9998 12.8666L7.44762 15.4948L6.42995 19.2928C6.32275 19.6929 5.91149 19.9303 5.51139 19.8231C5.11129 19.7159 4.87386 19.3047 4.98106 18.9046L5.61051 16.5555L3.71448 17.6501C3.35576 17.8572 2.89707 17.7343 2.68996 17.3756C2.48286 17.0169 2.60576 16.5582 2.96448 16.3511L4.86051 15.2564L2.51139 14.627C2.11129 14.5198 1.87386 14.1085 1.98106 13.7084C2.08827 13.3083 2.49952 13.0709 2.89962 13.1781L6.69762 14.1958L10.4998 12.0005L6.69782 9.80546L2.89982 10.8231C2.49972 10.9303 2.08847 10.6929 1.98126 10.2928C1.87405 9.8927 2.11149 9.48144 2.51159 9.37424L4.8607 8.7448L2.96468 7.65013C2.60596 7.44302 2.48305 6.98433 2.69016 6.62561C2.89727 6.26689 3.35596 6.14398 3.71468 6.35109L5.6107 7.44576L4.98126 5.09664C4.87405 4.69654 5.11149 4.28529 5.51159 4.17809Z" fill={color} fillRule="evenodd" opacity="0.5"/>
</Svg>;

export default BoldDuotoneSnowflake;
