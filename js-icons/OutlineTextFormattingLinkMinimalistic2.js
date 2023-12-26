import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineTextFormattingLinkMinimalistic2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.7388 4.26118C17.0572 1.57961 12.7095 1.57961 10.0279 4.26118L9.30707 4.98203C9.01418 5.27492 9.01418 5.7498 9.30707 6.04269C9.59997 6.33558 10.0748 6.33558 10.3677 6.04269L11.0886 5.32184C13.1844 3.22605 16.5823 3.22605 18.6781 5.32184C20.7739 7.41763 20.7739 10.8156 18.6781 12.9114L17.9573 13.6322C17.6644 13.9251 17.6644 14.4 17.9573 14.6929C18.2502 14.9858 18.725 14.9858 19.0179 14.6929L19.7388 13.972C22.4203 11.2905 22.4203 6.94276 19.7388 4.26118Z" fill={color}/>
	<Path d="M6.04269 9.30707C6.33558 9.59997 6.33558 10.0748 6.04269 10.3677L5.32184 11.0886C3.22605 13.1844 3.22605 16.5823 5.32184 18.6781C7.41763 20.7739 10.8156 20.7739 12.9114 18.6781L13.6322 17.9573C13.9251 17.6644 14.4 17.6644 14.6929 17.9573C14.9858 18.2501 14.9858 18.725 14.6929 19.0179L13.972 19.7388C11.2905 22.4203 6.94276 22.4203 4.26118 19.7388C1.57961 17.0572 1.57961 12.7095 4.26118 10.0279L4.98203 9.30707C5.27492 9.01418 5.7498 9.01418 6.04269 9.30707Z" fill={color}/>
	<Path d="M14.6928 9.30707C14.9857 9.59997 14.9857 10.0748 14.6928 10.3677L10.3677 14.6928C10.0748 14.9857 9.59997 14.9857 9.30707 14.6928C9.01418 14.3999 9.01418 13.9251 9.30707 13.6322L13.6322 9.30707C13.9251 9.01418 14.3999 9.01418 14.6928 9.30707Z" fill={color}/>
</Svg>;

export default OutlineTextFormattingLinkMinimalistic2;
