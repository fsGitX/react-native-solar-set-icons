import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneMedicineAdhesivePlaster = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.2132 9.07107C1.5956 7.45346 1.5956 4.83081 3.2132 3.2132C4.83081 1.5956 7.45346 1.5956 9.07107 3.2132L20.7868 14.9289C22.4044 16.5465 22.4044 19.1692 20.7868 20.7868C19.1692 22.4044 16.5465 22.4044 14.9289 20.7868L3.2132 9.07107Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M15.8414 12.8715C16.149 13.179 16.149 13.6777 15.8414 13.9852C15.5339 14.2928 15.0353 14.2928 14.7277 13.9852C14.4202 13.6777 14.4202 13.179 14.7277 12.8715C15.0353 12.5639 15.5339 12.5639 15.8414 12.8715Z" fill={color}/>
	<Path d="M12.129 9.15901C11.8214 8.85146 11.3228 8.85146 11.0152 9.15901C10.7077 9.46656 10.7077 9.9652 11.0152 10.2727C11.3228 10.5803 11.8214 10.5803 12.129 10.2727C12.4365 9.9652 12.4365 9.46656 12.129 9.15901Z" fill={color}/>
	<Path d="M13.9852 14.7277C14.2928 15.0353 14.2928 15.5339 13.9852 15.8414C13.6777 16.149 13.179 16.149 12.8715 15.8414C12.5639 15.5339 12.5639 15.0353 12.8715 14.7277C13.179 14.4202 13.6777 14.4202 13.9852 14.7277Z" fill={color}/>
	<Path d="M10.2727 11.0152C9.9652 10.7077 9.46656 10.7077 9.15901 11.0152C8.85146 11.3228 8.85146 11.8214 9.15901 12.129C9.46656 12.4365 9.9652 12.4365 10.2727 12.129C10.5803 11.8214 10.5803 11.3228 10.2727 11.0152Z" fill={color}/>
	<Path d="M16.7696 15.6558C17.0771 15.9634 17.0771 16.462 16.7696 16.7696C16.462 17.0771 15.9634 17.0771 15.6558 16.7696C15.3483 16.462 15.3483 15.9634 15.6558 15.6558C15.9634 15.3483 16.462 15.3483 16.7696 15.6558Z" fill={color}/>
	<Path d="M9.34465 8.23091C9.0371 7.92336 8.53846 7.92336 8.23091 8.23091C7.92336 8.53846 7.92336 9.0371 8.23091 9.34465C8.53846 9.6522 9.0371 9.6522 9.34465 9.34465C9.6522 9.0371 9.6522 8.53846 9.34465 8.23091Z" fill={color}/>
	<Path d="M13.057 11.9433C13.3646 12.2509 13.3646 12.7495 13.057 13.057C12.7495 13.3646 12.2509 13.3646 11.9433 13.057C11.6358 12.7495 11.6358 12.2509 11.9433 11.9433C12.2509 11.6358 12.7495 11.6358 13.057 11.9433Z" fill={color} opacity="0.5"/>
	<g opacity="0.5">
		<Path d="M12 17.8579L9.07107 20.7868C7.45346 22.4044 4.83081 22.4044 3.2132 20.7868C1.5956 19.1692 1.5956 16.5465 3.2132 14.9289L6.14214 12L12 17.8579Z" stroke="black" strokeWidth="1.5"/>
		<Path d="M12 6.14214L14.9289 3.2132C16.5465 1.5956 19.1692 1.5956 20.7868 3.2132C22.4044 4.83081 22.4044 7.45346 20.7868 9.07107L17.8579 12L12 6.14214Z" stroke="black" strokeWidth="1.5"/>
	</g>
</Svg>;

export default LineDuotoneMedicineAdhesivePlaster;
