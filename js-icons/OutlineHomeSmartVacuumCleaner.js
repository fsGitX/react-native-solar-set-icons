import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineHomeSmartVacuumCleaner = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 13.6405 22.3825 15.1952 21.7254 16.5862C22.0584 17.1465 22.25 17.8014 22.25 18.5C22.25 20.5711 20.5711 22.25 18.5 22.25C17.8014 22.25 17.1465 22.0584 16.5862 21.7254C15.1952 22.3825 13.6405 22.75 12 22.75C10.3594 22.75 8.80463 22.3825 7.41353 21.7253C6.85319 22.0584 6.19828 22.25 5.49956 22.25C3.42849 22.25 1.74956 20.5711 1.74956 18.5C1.74956 17.8012 1.94122 17.1462 2.2744 16.5858C1.6174 15.1949 1.25 13.6403 1.25 12ZM3.26185 18.263C3.25372 18.3408 3.24956 18.4199 3.24956 18.5C3.24956 19.7426 4.25692 20.75 5.49956 20.75C5.57959 20.75 5.65861 20.7458 5.73643 20.7377C4.7831 20.0531 3.94639 19.2164 3.26185 18.263ZM18.2635 20.7378C18.3412 20.7459 18.4201 20.75 18.5 20.75C19.7426 20.75 20.75 19.7426 20.75 18.5C20.75 18.4201 20.7459 18.3412 20.7378 18.2635C20.0533 19.2167 19.2167 20.0533 18.2635 20.7378ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75ZM8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9C15.75 11.0711 14.0711 12.75 12 12.75C9.92893 12.75 8.25 11.0711 8.25 9ZM12 15.25C12.4142 15.25 12.75 15.5858 12.75 16V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V16C11.25 15.5858 11.5858 15.25 12 15.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineHomeSmartVacuumCleaner;
