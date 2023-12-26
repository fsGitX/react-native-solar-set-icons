import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneDesignPipette = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.5312 19.2911L10.0008 18.7608L10.0008 18.7608L10.5312 19.2911ZM11.333 6.84476L11.8633 6.31443L11.8633 6.31443L11.333 6.84476ZM10.2413 5.75308L9.71095 6.28341L9.71095 6.28341L10.2413 5.75308ZM12.4246 3.56973L12.955 3.0394L12.955 3.0394L12.4246 3.56973ZM13.5163 4.6614L12.986 5.19173C13.1266 5.33239 13.3174 5.4114 13.5163 5.4114C13.7152 5.4114 13.906 5.33239 14.0466 5.19173L13.5163 4.6614ZM14.9719 3.20583L14.4416 2.6755L14.4416 2.6755L14.9719 3.20583ZM19.3386 10.4837L18.8083 9.95336C18.5154 10.2462 18.5154 10.7211 18.8083 11.014L19.3386 10.4837ZM20.4303 11.5754L19.8999 12.1057L19.8999 12.1057L20.4303 11.5754ZM4.70889 13.4688L4.17856 12.9385L4.17856 12.9385L4.70889 13.4688ZM2.45219 19.3645L2.98252 19.8948L2.98252 19.8948L2.45219 19.3645ZM3.0809 18.7357L2.55057 18.2054L2.55057 18.2054L3.0809 18.7357ZM4.63554 21.5478L5.16587 22.0781L5.16587 22.0781L4.63554 21.5478ZM5.26425 20.9191L4.73392 20.3888L4.73392 20.3888L5.26425 20.9191ZM3.77862 16.7467L3.03321 16.8295L3.03321 16.8295L3.77862 16.7467ZM3.72581 16.2714L4.47122 16.1885L4.47122 16.1885L3.72581 16.2714ZM7.25332 20.2214L7.17049 20.9668L7.17049 20.9668L7.25332 20.2214ZM7.72863 20.2742L7.81145 19.5288L7.81145 19.5288L7.72863 20.2742ZM5.51488 20.6781L6.00027 21.2499L6.00027 21.2499L5.51488 20.6781ZM6.90709 20.1898L6.92895 19.4401L6.92894 19.4401L6.90709 20.1898ZM3.88016 14.4259L3.21747 14.0747L3.21746 14.0747L3.88016 14.4259ZM3.67658 15.0063L2.93971 14.8665L2.93971 14.8665L3.67658 15.0063ZM3.32186 18.4851L2.75011 17.9997L2.75011 17.9997L3.32186 18.4851ZM3.81022 17.0929L4.5599 17.0711L4.5599 17.0711L3.81022 17.0929ZM9.57407 20.1198L9.92526 20.7825L9.92526 20.7825L9.57407 20.1198ZM8.99371 20.3234L9.13345 21.0603L9.13345 21.0603L8.99371 20.3234ZM14.5 15.3223L13.9697 14.792L13.9697 14.792L14.5 15.3223ZM11.8633 6.31443L10.7716 5.22275L9.71095 6.28341L10.8026 7.37509L11.8633 6.31443ZM18.7772 13.2284L17.6856 12.1367L16.6249 13.1974L17.7166 14.2891L18.7772 13.2284ZM11.8943 4.10006L12.986 5.19173L14.0466 4.13107L12.955 3.0394L11.8943 4.10006ZM14.0466 5.19173L15.5022 3.73616L14.4416 2.6755L12.986 4.13107L14.0466 5.19173ZM20.2638 8.49779L18.8083 9.95336L19.8689 11.014L21.3245 9.55845L20.2638 8.49779ZM10.8026 7.37509L16.6249 13.1974L17.6856 12.1367L11.8633 6.31443L10.8026 7.37509ZM5.23922 13.9992L11.8633 7.37509L10.8026 6.31443L4.17856 12.9385L5.23922 13.9992ZM2.98252 19.8948L3.61123 19.2661L2.55057 18.2054L1.92186 18.8341L2.98252 19.8948ZM5.16587 22.0781L5.79458 21.4494L4.73392 20.3888L4.10521 21.0175L5.16587 22.0781ZM4.52404 16.6639L4.47122 16.1885L2.9804 16.3542L3.03321 16.8295L4.52404 16.6639ZM7.17049 20.9668L7.64581 21.0196L7.81145 19.5288L7.33614 19.476L7.17049 20.9668ZM5.79458 21.4494C5.92779 21.3162 5.96506 21.2798 6.00027 21.2499L5.02949 20.1064C4.93671 20.1852 4.84956 20.2731 4.73392 20.3888L5.79458 21.4494ZM7.33615 19.476C7.17359 19.4579 7.05059 19.4436 6.92895 19.4401L6.88523 20.9395C6.9314 20.9408 6.98329 20.946 7.17049 20.9668L7.33615 19.476ZM6.00027 21.2499C6.24677 21.0406 6.56202 20.93 6.88523 20.9395L6.92894 19.4401C6.23522 19.4199 5.55857 19.6572 5.02949 20.1064L6.00027 21.2499ZM1.92186 22.0781C2.81767 22.974 4.27006 22.974 5.16587 22.0781L4.10521 21.0175C3.79519 21.3275 3.29254 21.3275 2.98252 21.0175L1.92186 22.0781ZM4.17856 12.9385C3.75541 13.3616 3.42729 13.6788 3.21747 14.0747L4.54285 14.7771C4.62249 14.6269 4.75037 14.488 5.23922 13.9992L4.17856 12.9385ZM4.47122 16.1885C4.39488 15.5014 4.38176 15.3131 4.41345 15.146L2.93971 14.8665C2.85622 15.3068 2.91431 15.7594 2.9804 16.3542L4.47122 16.1885ZM3.21746 14.0747C3.08575 14.3233 2.99212 14.5902 2.93971 14.8665L4.41345 15.146C4.43786 15.0173 4.48149 14.8929 4.54285 14.7771L3.21746 14.0747ZM20.2638 3.73616C21.5787 5.05105 21.5787 7.1829 20.2638 8.49779L21.3245 9.55845C23.2252 7.65777 23.2252 4.57618 21.3245 2.6755L20.2638 3.73616ZM15.5022 3.73616C16.8171 2.42128 18.949 2.42128 20.2638 3.73616L21.3245 2.6755C19.4238 0.774832 16.3422 0.774832 14.4416 2.6755L15.5022 3.73616ZM19.8999 13.2284C19.5899 13.5384 19.0873 13.5384 18.7772 13.2284L17.7166 14.2891C18.6124 15.1849 20.0648 15.1849 20.9606 14.2891L19.8999 13.2284ZM3.61123 19.2661C3.72688 19.1504 3.81485 19.0633 3.8936 18.9705L2.75011 17.9997C2.72021 18.0349 2.68376 18.0722 2.55057 18.2054L3.61123 19.2661ZM3.03321 16.8295C3.05401 17.0167 3.05919 17.0686 3.06054 17.1148L4.5599 17.0711C4.55635 16.9494 4.5421 16.8264 4.52404 16.6639L3.03321 16.8295ZM3.8936 18.9705C4.34277 18.4414 4.58012 17.7648 4.5599 17.0711L3.06054 17.1148C3.06996 17.438 2.95937 17.7532 2.75011 17.9997L3.8936 18.9705ZM10.7716 4.10006C11.0816 3.79003 11.5843 3.79003 11.8943 4.10006L12.955 3.0394C12.0592 2.14359 10.6068 2.14359 9.71095 3.0394L10.7716 4.10006ZM2.98252 21.0175C2.67249 20.7075 2.67249 20.2048 2.98252 19.8948L1.92186 18.8341C1.02605 19.7299 1.02605 21.1823 1.92186 22.0781L2.98252 21.0175ZM10.7716 5.22275C10.4616 4.91273 10.4616 4.41008 10.7716 4.10006L9.71095 3.0394C8.81514 3.93521 8.81514 5.3876 9.71095 6.28341L10.7716 5.22275ZM20.9606 14.2891C21.8564 13.3932 21.8564 11.9408 20.9606 11.045L19.8999 12.1057C20.21 12.4157 20.21 12.9184 19.8999 13.2284L20.9606 14.2891ZM10.0008 18.7608C9.51199 19.2496 9.37315 19.3775 9.22287 19.4571L9.92526 20.7825C10.3212 20.5727 10.6384 20.2446 11.0615 19.8214L10.0008 18.7608ZM7.64581 21.0196C8.24057 21.0857 8.6932 21.1438 9.13345 21.0603L8.85397 19.5866C8.68687 19.6182 8.49856 19.6051 7.81145 19.5288L7.64581 21.0196ZM9.22287 19.4571C9.10708 19.5185 8.98272 19.5621 8.85397 19.5866L9.13345 21.0603C9.40981 21.0079 9.67672 20.9142 9.92526 20.7825L9.22287 19.4571ZM18.8083 11.014L19.8999 12.1057L20.9606 11.045L19.8689 9.95336L18.8083 11.014ZM11.0615 19.8214L15.0303 15.8526L13.9697 14.792L10.0008 18.7608L11.0615 19.8214ZM15.0303 15.8526L17.6856 13.1974L16.6249 12.1367L13.9697 14.792L15.0303 15.8526Z" fill={color}/>
	<Path d="M14.4999 15.3222L12.6465 13.4688M12.4999 17.3222L10.6465 15.4688" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneDesignPipette;
