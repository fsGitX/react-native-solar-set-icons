import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneVideoShuffle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 16.25C1.58579 16.25 1.25 16.5858 1.25 17C1.25 17.4142 1.58579 17.75 2 17.75V16.25ZM10.7478 14.087L10.1047 13.7011L10.1047 13.7011L10.7478 14.087ZM13.2522 9.91303L13.8953 10.2989L13.8953 10.2989L13.2522 9.91303ZM22 7L22.5303 7.53033C22.8232 7.23744 22.8232 6.76256 22.5303 6.46967L22 7ZM19.4697 8.46967C19.1768 8.76256 19.1768 9.23744 19.4697 9.53033C19.7626 9.82322 20.2374 9.82322 20.5303 9.53033L19.4697 8.46967ZM20.5303 4.46967C20.2374 4.17678 19.7626 4.17678 19.4697 4.46967C19.1768 4.76256 19.1768 5.23744 19.4697 5.53033L20.5303 4.46967ZM15.2205 7.3894L14.851 6.73675L14.8509 6.73675L15.2205 7.3894ZM2 17.75H5.60286V16.25H2V17.75ZM11.3909 14.4728L13.8953 10.2989L12.6091 9.52716L10.1047 13.7011L11.3909 14.4728ZM18.3971 7.75H22V6.25H18.3971V7.75ZM21.4697 6.46967L19.4697 8.46967L20.5303 9.53033L22.5303 7.53033L21.4697 6.46967ZM22.5303 6.46967L20.5303 4.46967L19.4697 5.53033L21.4697 7.53033L22.5303 6.46967ZM13.8953 10.2989C14.3295 9.57518 14.6286 9.07834 14.9013 8.70996C15.1644 8.35464 15.3692 8.16707 15.59 8.04205L14.8509 6.73675C14.384 7.00113 14.0315 7.36397 13.6958 7.8174C13.3697 8.25778 13.0285 8.82806 12.6091 9.52716L13.8953 10.2989ZM18.3971 6.25C17.5819 6.25 16.9173 6.24918 16.3719 6.30219C15.8104 6.35677 15.3179 6.47237 14.851 6.73675L15.59 8.04205C15.8108 7.91703 16.077 7.83793 16.517 7.79516C16.9733 7.75082 17.5531 7.75 18.3971 7.75V6.25ZM5.60286 17.75C6.41814 17.75 7.0827 17.7508 7.62807 17.6978C8.18961 17.6432 8.6821 17.5276 9.14905 17.2632L8.41 15.9579C8.18919 16.083 7.92299 16.1621 7.48296 16.2048C7.02675 16.2492 6.44685 16.25 5.60286 16.25V17.75ZM10.1047 13.7011C9.67046 14.4248 9.37141 14.9217 9.09867 15.29C8.8356 15.6454 8.63081 15.8329 8.41 15.9579L9.14905 17.2632C9.616 16.9989 9.96851 16.636 10.3042 16.1826C10.6303 15.7422 10.9715 15.1719 11.3909 14.4728L10.1047 13.7011Z" fill={color}/>
	<Path d="M2 7.75C1.58579 7.75 1.25 7.41421 1.25 7C1.25 6.58579 1.58579 6.25 2 6.25V7.75ZM10.7478 9.91303L10.1047 10.2989L10.1047 10.2989L10.7478 9.91303ZM13.2522 14.087L13.8953 13.7011L13.8953 13.7011L13.2522 14.087ZM22 17L22.5303 16.4697C22.8232 16.7626 22.8232 17.2374 22.5303 17.5303L22 17ZM19.4697 15.5303C19.1768 15.2374 19.1768 14.7626 19.4697 14.4697C19.7626 14.1768 20.2374 14.1768 20.5303 14.4697L19.4697 15.5303ZM20.5303 19.5303C20.2374 19.8232 19.7626 19.8232 19.4697 19.5303C19.1768 19.2374 19.1768 18.7626 19.4697 18.4697L20.5303 19.5303ZM15.2205 16.6106L14.851 17.2632L14.8509 17.2632L15.2205 16.6106ZM2 6.25H5.60286V7.75H2V6.25ZM11.3909 9.52715L13.8953 13.7011L12.6091 14.4728L10.1047 10.2989L11.3909 9.52715ZM18.3971 16.25H22V17.75H18.3971V16.25ZM21.4697 17.5303L19.4697 15.5303L20.5303 14.4697L22.5303 16.4697L21.4697 17.5303ZM22.5303 17.5303L20.5303 19.5303L19.4697 18.4697L21.4697 16.4697L22.5303 17.5303ZM13.8953 13.7011C14.3295 14.4248 14.6286 14.9217 14.9013 15.29C15.1644 15.6454 15.3692 15.8329 15.59 15.9579L14.8509 17.2632C14.384 16.9989 14.0315 16.636 13.6958 16.1826C13.3697 15.7422 13.0285 15.1719 12.6091 14.4728L13.8953 13.7011ZM18.3971 17.75C17.5819 17.75 16.9173 17.7508 16.3719 17.6978C15.8104 17.6432 15.3179 17.5276 14.851 17.2632L15.59 15.9579C15.8108 16.083 16.077 16.1621 16.517 16.2048C16.9733 16.2492 17.5531 16.25 18.3971 16.25V17.75ZM5.60286 6.25C6.41814 6.25 7.0827 6.24918 7.62807 6.30219C8.18961 6.35677 8.6821 6.47237 9.14905 6.73675L8.41 8.04205C8.18919 7.91703 7.92299 7.83793 7.48296 7.79516C7.02675 7.75082 6.44685 7.75 5.60286 7.75V6.25ZM10.1047 10.2989C9.67046 9.57518 9.37141 9.07834 9.09867 8.70996C8.8356 8.35464 8.63081 8.16707 8.41 8.04205L9.14905 6.73675C9.616 7.00113 9.96851 7.36397 10.3042 7.8174C10.6303 8.25778 10.9715 8.82806 11.3909 9.52715L10.1047 10.2989Z" fill={color} opacity="0.5"/>
</Svg>;

export default LineDuotoneVideoShuffle;
