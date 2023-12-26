import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearListListHeartMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20 6L3 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 16H3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 11H3" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16.4901 16.3082L16.935 15.7045L16.935 15.7045L16.4901 16.3082ZM17.5 10.1062L16.9641 10.6309C17.1052 10.775 17.2983 10.8562 17.5 10.8562C17.7017 10.8562 17.8948 10.775 18.0359 10.6309L17.5 10.1062ZM18.5099 16.3083L18.9549 16.912L18.9549 16.912L18.5099 16.3083ZM17.5 16.8103L17.5 16.0603L17.5 16.0603L17.5 16.8103ZM16.935 15.7045C16.2914 15.2302 15.4675 14.5568 14.8118 13.808C14.1328 13.0325 13.75 12.3064 13.75 11.7148H12.25C12.25 12.8758 12.9489 13.9574 13.6832 14.7961C14.4409 15.6614 15.3619 16.4085 16.0451 16.912L16.935 15.7045ZM13.75 11.7148C13.75 10.607 14.2445 10.0237 14.7533 9.83348C15.2705 9.6401 16.0951 9.74331 16.9641 10.6309L18.0359 9.58145C16.88 8.40091 15.4546 7.96984 14.228 8.42849C12.993 8.89028 12.25 10.1453 12.25 11.7148H13.75ZM18.9549 16.912C19.6381 16.4085 20.5591 15.6614 21.3168 14.7961C22.0511 13.9574 22.75 12.8758 22.75 11.7148H21.25C21.25 12.3064 20.8672 13.0326 20.1882 13.808C19.5325 14.5568 18.7086 15.2302 18.065 15.7045L18.9549 16.912ZM22.75 11.7148C22.75 10.1453 22.007 8.89027 20.772 8.42849C19.5454 7.96985 18.12 8.40091 16.9641 9.58145L18.0359 10.6309C18.9049 9.74331 19.7295 9.6401 20.2467 9.83348C20.7555 10.0237 21.25 10.607 21.25 11.7148H22.75ZM16.0451 16.912C16.4368 17.2007 16.8752 17.5603 17.5 17.5603L17.5 16.0603C17.4852 16.0603 17.4682 16.0626 17.399 16.0252C17.3008 15.972 17.178 15.8836 16.935 15.7045L16.0451 16.912ZM18.065 15.7045C17.822 15.8836 17.6992 15.972 17.601 16.0252C17.5318 16.0626 17.5148 16.0603 17.5 16.0603L17.5 17.5603C18.1248 17.5603 18.5632 17.2007 18.9549 16.912L18.065 15.7045Z" fill={color}/>
</Svg>;

export default LinearListListHeartMinimalistic;
