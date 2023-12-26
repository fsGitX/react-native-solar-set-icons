import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearVideoMusicLibrary = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.562 7C19.7906 5.69523 18.7866 4.5 17.4619 4.5H6.53812C5.21347 4.5 4.20946 5.69523 4.43809 7" stroke="black" strokeWidth="1.5"/>
	<Path d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M12.5606 12.6995L12.2076 13.3612L12.2076 13.3612L12.5606 12.6995ZM13.4429 13.17L13.7958 12.5083L13.7958 12.5083L13.4429 13.17ZM14.4394 11.3015L14.7924 10.6398L14.7924 10.6398L14.4394 11.3015ZM13.5571 10.8309L13.91 10.1692L13.91 10.1692L13.5571 10.8309ZM12.0018 11.6066L12.7505 11.652L12.7505 11.652L12.0018 11.6066ZM13.4163 10.7579L13.1041 11.4398L13.1041 11.4398L13.4163 10.7579ZM14.9995 12.1687L15.7491 12.1449L15.7491 12.1449L14.9995 12.1687ZM14.4984 11.3335L14.8722 10.6833L14.8722 10.6833L14.4984 11.3335ZM13.5837 13.2431L13.8959 12.5611L13.8959 12.5611L13.5837 13.2431ZM14.9982 12.3944L14.2495 12.349L14.2495 12.349L14.9982 12.3944ZM12.5016 12.6674L12.1278 13.3177L12.1278 13.3177L12.5016 12.6674ZM12.0005 11.8323L11.2509 11.8561L11.2509 11.8561L12.0005 11.8323ZM11.25 16.5005C11.25 16.9147 10.9142 17.2505 10.5 17.2505V18.7505C11.7426 18.7505 12.75 17.7431 12.75 16.5005H11.25ZM10.5 17.2505C10.0858 17.2505 9.75 16.9147 9.75 16.5005H8.25C8.25 17.7431 9.25736 18.7505 10.5 18.7505V17.2505ZM9.75 16.5005C9.75 16.0863 10.0858 15.7505 10.5 15.7505V14.2505C9.25736 14.2505 8.25 15.2578 8.25 16.5005H9.75ZM10.5 15.7505C10.9142 15.7505 11.25 16.0863 11.25 16.5005H12.75C12.75 15.2578 11.7426 14.2505 10.5 14.2505V15.7505ZM12.75 16.5005V12.0005H11.25V16.5005H12.75ZM12.2076 13.3612L13.09 13.8318L13.7958 12.5083L12.9135 12.0377L12.2076 13.3612ZM14.7924 10.6398L13.91 10.1692L13.2042 11.4927L14.0865 11.9633L14.7924 10.6398ZM12.75 11.7652C12.75 11.721 12.75 11.6929 12.7502 11.672C12.7504 11.6505 12.7507 11.6476 12.7505 11.652L11.2532 11.5612C11.2496 11.6203 11.25 11.6931 11.25 11.7652H12.75ZM13.91 10.1692C13.8464 10.1352 13.7824 10.1007 13.7285 10.076L13.1041 11.4398C13.1 11.438 13.1027 11.4391 13.1218 11.449C13.1404 11.4587 13.1652 11.4719 13.2042 11.4927L13.91 10.1692ZM12.7505 11.652C12.7611 11.4767 12.9444 11.3667 13.1041 11.4398L13.7285 10.076C12.6108 9.56427 11.3277 10.3341 11.2532 11.5612L12.7505 11.652ZM15.75 12.2358C15.75 12.2067 15.7501 12.1755 15.7491 12.1449L14.2499 12.1925C14.2498 12.1917 14.2499 12.1929 14.25 12.1999C14.25 12.2077 14.25 12.2179 14.25 12.2358H15.75ZM14.0865 11.9633C14.1023 11.9717 14.1113 11.9765 14.1181 11.9802C14.1243 11.9835 14.1253 11.9842 14.1246 11.9838L14.8722 10.6833C14.8456 10.668 14.8181 10.6535 14.7924 10.6398L14.0865 11.9633ZM15.7491 12.1449C15.7298 11.5386 15.398 10.9856 14.8722 10.6833L14.1246 11.9838C14.1997 12.0269 14.2471 12.1059 14.2499 12.1925L15.7491 12.1449ZM13.09 13.8318C13.1536 13.8657 13.2176 13.9003 13.2715 13.925L13.8959 12.5611C13.9 12.563 13.8973 12.5619 13.8782 12.552C13.8596 12.5423 13.8348 12.5291 13.7958 12.5083L13.09 13.8318ZM14.25 12.2358C14.25 12.28 14.25 12.308 14.2498 12.329C14.2496 12.3505 14.2493 12.3534 14.2495 12.349L15.7468 12.4398C15.7504 12.3807 15.75 12.3079 15.75 12.2358H14.25ZM13.2715 13.925C14.3892 14.4367 15.6723 13.6668 15.7468 12.4398L14.2495 12.349C14.2389 12.5243 14.0556 12.6342 13.8959 12.5611L13.2715 13.925ZM12.9135 12.0377C12.8977 12.0293 12.8887 12.0245 12.8819 12.0208C12.8757 12.0174 12.8746 12.0168 12.8754 12.0172L12.1278 13.3177C12.1544 13.3329 12.1819 13.3475 12.2076 13.3612L12.9135 12.0377ZM11.25 11.7652C11.25 11.7943 11.2499 11.8255 11.2509 11.8561L12.7501 11.8084C12.7502 11.8093 12.7501 11.808 12.75 11.8011C12.75 11.7933 12.75 11.7831 12.75 11.7652H11.25ZM12.8754 12.0172C12.8003 11.974 12.7529 11.895 12.7501 11.8084L11.2509 11.8561C11.2702 12.4623 11.602 13.0154 12.1278 13.3177L12.8754 12.0172Z" fill={color}/>
	<Path d="M2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.2855 9.04765 22.0625 10.6294 21.6165 13.793L21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearVideoMusicLibrary;
