import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineNotebookSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.52 5.27261C17.7923 5.21011 18.75 6.25695 18.75 7.45154V12.9108C18.75 14.1716 17.7316 15.1365 16.5459 15.2249C16.0529 15.2617 15.5551 15.3216 15.178 15.4138C14.4402 15.594 13.4666 16.0647 12.857 16.3858C12.3214 16.6681 11.6786 16.6681 11.143 16.3858C10.5334 16.0647 9.55979 15.594 8.82199 15.4138C8.44487 15.3216 7.94708 15.2617 7.45414 15.2249C6.26836 15.1365 5.25 14.1716 5.25 12.9108V7.49649C5.25 6.27528 6.248 5.21817 7.54194 5.31291C8.06744 5.35139 8.67286 5.41879 9.17802 5.54222C10.0998 5.76744 11.1985 6.30646 11.8132 6.6291C11.9157 6.6829 12.0434 6.68078 12.1463 6.62125C12.7018 6.29984 13.6675 5.77873 14.4997 5.54804C15.1227 5.37535 15.8904 5.30353 16.52 5.27261ZM17.25 7.45154C17.25 7.03391 16.9314 6.7542 16.5935 6.7708C15.9907 6.80041 15.3582 6.86663 14.9003 6.99354C14.2696 7.16839 13.4487 7.6007 12.8975 7.91959C12.8493 7.94749 12.8001 7.97306 12.75 7.99628V14.7586C13.3591 14.4625 14.1393 14.1234 14.822 13.9566C15.3199 13.835 15.9149 13.7678 16.4343 13.7291C16.9097 13.6936 17.25 13.3157 17.25 12.9108V7.45154ZM11.116 7.95726C11.16 7.98035 11.2047 8.00154 11.25 8.02081V14.7586C10.6409 14.4625 9.86071 14.1234 9.17802 13.9566C8.68009 13.835 8.08508 13.7678 7.56568 13.7291C7.09031 13.6936 6.75 13.3157 6.75 12.9108V7.49649C6.75 7.06975 7.08277 6.78331 7.4324 6.80891C7.9319 6.84548 8.43898 6.90578 8.82199 6.99936C9.54804 7.17676 10.5035 7.63574 11.116 7.95726Z" fill={color} fillRule="evenodd"/>
	<Path d="M9.94358 0.25C8.10583 0.249985 6.65019 0.249973 5.51098 0.403136C4.33856 0.560764 3.38961 0.892881 2.64124 1.64124C1.89288 2.38961 1.56076 3.33856 1.40314 4.51098C1.24997 5.65019 1.24998 7.10582 1.25 8.94357V13.0564C1.24998 14.8942 1.24997 16.3498 1.40314 17.489C1.56076 18.6614 1.89288 19.6104 2.64124 20.3588C3.38961 21.1071 4.33856 21.4392 5.51098 21.5969C6.65018 21.75 8.1058 21.75 9.94354 21.75H14.0564C15.8942 21.75 17.3498 21.75 18.489 21.5969C19.6614 21.4392 20.6104 21.1071 21.3588 20.3588C22.1071 19.6104 22.4392 18.6614 22.5969 17.489C22.75 16.3498 22.75 14.8942 22.75 13.0565V8.94359C22.75 7.10585 22.75 5.65018 22.5969 4.51098C22.4392 3.33856 22.1071 2.38961 21.3588 1.64124C20.6104 0.892881 19.6614 0.560764 18.489 0.403136C17.3498 0.249973 15.8942 0.249985 14.0564 0.25H9.94358ZM3.7019 2.7019C4.12511 2.27869 4.70476 2.02503 5.71085 1.88976C6.73851 1.75159 8.09318 1.75 10 1.75H14C15.9068 1.75 17.2615 1.75159 18.2892 1.88976C19.2952 2.02503 19.8749 2.27869 20.2981 2.7019C20.7213 3.12511 20.975 3.70476 21.1102 4.71085C21.2484 5.73851 21.25 7.09318 21.25 9V13C21.25 14.9068 21.2484 16.2615 21.1102 17.2892C20.975 18.2952 20.7213 18.8749 20.2981 19.2981C19.8749 19.7213 19.2952 19.975 18.2892 20.1102C17.2615 20.2484 15.9068 20.25 14 20.25H10C8.09318 20.25 6.73851 20.2484 5.71085 20.1102C4.70476 19.975 4.12511 19.7213 3.7019 19.2981C3.27869 18.8749 3.02503 18.2952 2.88976 17.2892C2.75159 16.2615 2.75 14.9068 2.75 13V9C2.75 7.09318 2.75159 5.73851 2.88976 4.71085C3.02503 3.70476 3.27869 3.12511 3.7019 2.7019Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineNotebookSquare;
