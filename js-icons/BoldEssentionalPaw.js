import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldEssentionalPaw = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.57065 15.3763C9.15635 12.148 9.9492 10.5339 11.0904 10.1493C11.681 9.95024 12.319 9.95024 12.9096 10.1493C14.0508 10.5339 14.8437 12.148 16.4294 15.3763L17.3081 17.1653C17.7177 17.9992 17.9225 18.4162 17.971 18.7003C18.1722 19.879 17.3002 20.9654 16.1254 20.9996C15.8422 21.0079 15.4 20.8867 14.5156 20.6443C14.0101 20.5058 13.7574 20.4365 13.5047 20.3854C12.5113 20.1843 11.4887 20.1843 10.4953 20.3854C10.2426 20.4365 9.98987 20.5058 9.48445 20.6443C8.6 20.8867 8.15777 21.0079 7.87458 20.9996C6.6998 20.9654 5.82776 19.879 6.02896 18.7003C6.07746 18.4162 6.28227 17.9992 6.69189 17.1653L7.57065 15.3763Z" fill={color}/>
	<Path d="M6.14477 5.52746C6.55659 7.15822 7.72105 8.24406 8.74566 7.95275C9.77027 7.66144 10.267 6.1033 9.85523 4.47254C9.44341 2.84178 8.27895 1.75594 7.25434 2.04725C6.22973 2.33856 5.73296 3.8967 6.14477 5.52746Z" fill={color}/>
	<Path d="M17.8552 5.52746C17.4434 7.15822 16.279 8.24406 15.2543 7.95275C14.2297 7.66144 13.733 6.1033 14.1448 4.47254C14.5566 2.84178 15.721 1.75594 16.7457 2.04725C17.7703 2.33856 18.267 3.8967 17.8552 5.52746Z" fill={color}/>
	<Path d="M2.20166 12.2971C2.65166 13.5021 3.70968 14.2341 4.5648 13.9319C5.41993 13.6298 5.74834 12.4079 5.29834 11.2029C4.84834 9.99785 3.79032 9.26592 2.9352 9.56808C2.08007 9.87024 1.75166 11.0921 2.20166 12.2971Z" fill={color}/>
	<Path d="M21.7983 12.2971C21.3483 13.5021 20.2903 14.2341 19.4352 13.9319C18.5801 13.6298 18.2517 12.4079 18.7017 11.2029C19.1517 9.99785 20.2097 9.26592 21.0648 9.56808C21.9199 9.87024 22.2483 11.0921 21.7983 12.2971Z" fill={color}/>
</Svg>;

export default BoldEssentionalPaw;
