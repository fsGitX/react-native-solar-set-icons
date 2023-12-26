import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearWeatherCloudyMoon = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21.0672 11.8568L20.4253 11.469L20.4253 11.469L21.0672 11.8568ZM15.5 14.25C15.0858 14.25 14.75 14.5858 14.75 15C14.75 15.4142 15.0858 15.75 15.5 15.75V14.25ZM8.25 8.5C8.25 8.91421 8.58579 9.25 9 9.25C9.41421 9.25 9.75 8.91421 9.75 8.5H8.25ZM12.1432 2.93276L11.7553 2.29085L11.7553 2.29085L12.1432 2.93276ZM1.74227 15.2247C1.86638 15.6199 2.28736 15.8397 2.68254 15.7155C3.07772 15.5914 3.29746 15.1704 3.17334 14.7753L1.74227 15.2247ZM16.6245 20.013C16.2659 20.2204 16.1434 20.6792 16.3508 21.0377C16.5582 21.3963 17.017 21.5188 17.3755 21.3114L16.6245 20.013ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM3.17334 14.7753C2.89847 13.9001 2.75 12.9681 2.75 12H1.25C1.25 13.1223 1.42224 14.2058 1.74227 15.2247L3.17334 14.7753ZM21.25 12C21.25 15.4229 19.3912 18.4125 16.6245 20.013L17.3755 21.3114C20.5868 19.4538 22.75 15.98 22.75 12H21.25ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7091 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7091 12.2447Z" fill={color}/>
	<Path d="M10.0476 15.142C10.4349 15.0119 10.8516 14.9412 11.2857 14.9412C11.7113 14.9412 12.1201 15.0092 12.5008 15.1344M5.3255 16.7555C5.15087 16.723 4.97039 16.7059 4.78571 16.7059C3.24721 16.7059 2 17.891 2 19.3529C2 20.8149 3.24721 22 4.78571 22H11.2857C13.3371 22 15 20.4198 15 18.4706C15 16.9257 13.9554 15.6126 12.5008 15.1344M5.3255 16.7555C5.17659 16.3736 5.09524 15.9605 5.09524 15.5294C5.09524 13.5802 6.75818 12 8.80952 12C10.7203 12 12.2941 13.3711 12.5008 15.1344M5.3255 16.7555C5.69238 16.824 6.03343 16.9609 6.33333 17.1516" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearWeatherCloudyMoon;