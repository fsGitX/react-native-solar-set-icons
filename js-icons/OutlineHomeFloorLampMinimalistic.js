import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineHomeFloorLampMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.46266 1.96175C10.1449 1.50693 11.0442 1.25 12 1.25C12.9558 1.25 13.8551 1.50693 14.5373 1.96175C15.0093 2.2764 15.4126 2.71478 15.6136 3.25H16C16.4778 3.25 16.9364 3.44667 17.2487 3.79073C17.573 4.14812 17.7343 4.66751 17.5625 5.21071C16.9569 7.12491 15.0135 8.46482 12.75 8.70965V21.25H15C15.4142 21.25 15.75 21.5858 15.75 22C15.75 22.4142 15.4142 22.75 15 22.75H9C8.58579 22.75 8.25 22.4142 8.25 22C8.25 21.5858 8.58579 21.25 9 21.25H11.25V17.9368C11.25 16.8904 10.7704 15.9051 9.95474 15.2666L6.63282 12.8921C5.58942 13.8628 4.10294 14.1562 2.79098 13.6966C2.2372 13.5026 1.92068 13.0435 1.83854 12.5599C1.79796 12.321 1.8127 12.0751 1.87724 11.8406C1.06753 10.8416 1.02484 9.37836 1.848 8.3246C2.6724 7.26924 4.09763 6.96695 5.25331 7.52565C5.46379 7.40922 5.69695 7.33792 5.93704 7.32189C6.43059 7.28894 6.94805 7.49654 7.26204 7.99079C7.95758 9.08564 8.06158 10.4813 7.51203 11.6768L10.8517 14.0639L10.8634 14.073C10.9987 14.1781 11.1277 14.2896 11.25 14.4071V8.70965C8.98651 8.46482 7.04308 7.12491 6.43751 5.21071C6.26566 4.66751 6.42698 4.14812 6.75135 3.79073C7.06362 3.44667 7.52216 3.25 8 3.25H8.38641C8.58738 2.71478 8.99068 2.2764 9.46266 1.96175ZM10.2366 3.25H13.7634C13.7447 3.23656 13.7253 3.22317 13.7053 3.20982C13.3017 2.94078 12.701 2.75 12 2.75C11.299 2.75 10.6983 2.94078 10.2947 3.20982C10.2747 3.22317 10.2553 3.23656 10.2366 3.25ZM8 4.75C7.96534 4.75 7.93412 4.75725 7.90876 4.76821C7.89506 4.77414 7.88447 4.78051 7.87665 4.78618C8.31496 6.11754 9.91509 7.25 12 7.25C14.0849 7.25 15.685 6.11754 16.1234 4.78618C16.1155 4.78051 16.1049 4.77414 16.0912 4.76821C16.0659 4.75725 16.0347 4.75 16 4.75H8ZM4.11822 8.75209C3.71244 8.7292 3.30214 8.89973 3.03009 9.248C2.75788 9.59646 2.68829 10.0405 2.80305 10.4357L4.11822 8.75209ZM5.98026 8.83773C5.95366 8.8522 5.92609 8.87441 5.90244 8.90468L3.37035 12.1461C3.34669 12.1764 3.33107 12.2095 3.32284 12.241C3.31753 12.2612 3.31594 12.2781 3.31599 12.2909C4.21403 12.592 5.24218 12.3139 5.86377 11.5181C5.88127 11.4957 5.89828 11.4731 5.91481 11.4504C6.48746 10.6613 6.50241 9.61771 6.0136 8.82339C6.00428 8.82629 5.99299 8.83081 5.98026 8.83773Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineHomeFloorLampMinimalistic;
