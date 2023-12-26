import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSmartSpeaker2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18.8329 3.6341C18.8022 3.22102 18.4425 2.911 18.0295 2.94164C17.6164 2.97229 17.3063 3.33199 17.337 3.74507L18.8329 3.6341ZM18.8825 14.4404L19.6314 14.398L19.6304 14.385L18.8825 14.4404ZM5.15426 14.351L4.40718 14.2849L4.40653 14.2922L4.40603 14.2995L5.15426 14.351ZM6.60912 6.42123C6.64564 6.00863 6.34077 5.64455 5.92817 5.60803C5.51557 5.5715 5.15148 5.87637 5.11496 6.28897L6.60912 6.42123ZM12.0156 22.75C12.4298 22.75 12.7656 22.4142 12.7656 22C12.7656 21.5858 12.4298 21.25 12.0156 21.25V22.75ZM7.02989 21.413L6.64328 22.0557L6.64328 22.0557L7.02989 21.413ZM5.36308 19.5549L4.68432 19.8739L4.68432 19.8739L5.36308 19.5549ZM18.6162 19.5882L19.2922 19.9129L19.2922 19.9129L18.6162 19.5882ZM16.9506 21.4218L17.3346 22.066L17.3346 22.066L16.9506 21.4218ZM12.447 7.03225C12.048 7.14324 11.8144 7.55673 11.9254 7.95579C12.0364 8.35486 12.4499 8.58839 12.849 8.47739L12.447 7.03225ZM5.89111 6.81651L5.16492 7.00397L5.89111 6.81651ZM15.8295 21.0613C15.4261 21.1555 15.1755 21.5589 15.2696 21.9622C15.3638 22.3656 15.7672 22.6162 16.1705 22.5221L15.8295 21.0613ZM8.97921 8.99806C9.39326 9.00954 9.73823 8.68319 9.74971 8.26914C9.7612 7.85509 9.43485 7.51012 9.02079 7.49864L8.97921 8.99806ZM12.0156 21.25C10.6647 21.25 9.70304 21.2492 8.95547 21.1798C8.21806 21.1114 7.76717 20.9813 7.41649 20.7704L6.64328 22.0557C7.26835 22.4317 7.97365 22.5951 8.81681 22.6734C9.64983 22.7508 10.6931 22.75 12.0156 22.75V21.25ZM4.40603 14.2995C4.3117 15.6703 4.23703 16.746 4.25191 17.6093C4.26694 18.4808 4.37259 19.2107 4.68432 19.8739L6.04184 19.2358C5.85905 18.847 5.76506 18.3588 5.75169 17.5834C5.73818 16.7998 5.80635 15.7996 5.90249 14.4025L4.40603 14.2995ZM7.41649 20.7704C6.8255 20.4148 6.34551 19.8819 6.04184 19.2358L4.68432 19.8739C5.11156 20.7829 5.79211 21.5437 6.64328 22.0557L7.41649 20.7704ZM18.1337 14.4829C18.212 15.8655 18.2674 16.855 18.245 17.63C18.2228 18.3967 18.1247 18.8792 17.9401 19.2635L19.2922 19.9129C19.6068 19.2579 19.7194 18.5361 19.7444 17.6734C19.7691 16.8191 19.7081 15.7544 19.6313 14.398L18.1337 14.4829ZM17.9401 19.2635C17.6336 19.9018 17.1544 20.4272 16.5666 20.7775L17.3346 22.066C18.1812 21.5615 18.8609 20.8111 19.2922 19.9129L17.9401 19.2635ZM17.3215 3.62281C17.3524 3.74275 17.3443 3.93434 17.1814 4.22212C17.0169 4.51283 16.7204 4.8504 16.2787 5.20375C15.3974 5.90877 14.0511 6.5861 12.447 7.03225L12.849 8.47739C14.6018 7.98986 16.1428 7.23341 17.2157 6.37508C17.7512 5.94677 18.1986 5.47029 18.4869 4.96086C18.7768 4.44851 18.9303 3.85391 18.7739 3.2479L17.3215 3.62281ZM6.61731 6.62906C6.58635 6.50912 6.59452 6.31753 6.75736 6.02975C6.92187 5.73905 7.21833 5.40147 7.66005 5.04812C8.54137 4.3431 9.88766 3.66577 11.4917 3.21962L11.0898 1.77448C9.33695 2.26201 7.79602 3.01846 6.72304 3.87679C6.18761 4.30511 5.74016 4.78159 5.45189 5.29101C5.16196 5.80336 5.00848 6.39796 5.16492 7.00397L6.61731 6.62906ZM11.4917 3.21962C13.0963 2.77334 14.5862 2.66198 15.6844 2.81448C16.2349 2.89094 16.6489 3.02843 16.9252 3.19118C17.1964 3.3509 17.2912 3.50573 17.3215 3.62281L18.7739 3.2479C18.6167 2.63904 18.1928 2.1969 17.6865 1.89868C17.1853 1.60349 16.5629 1.42209 15.8907 1.32874C14.5433 1.14164 12.8422 1.28708 11.0898 1.77448L11.4917 3.21962ZM5.90134 14.4171L6.60912 6.42123L5.11496 6.28897L4.40718 14.2849L5.90134 14.4171ZM17.337 3.74507L18.1345 14.4959L19.6304 14.385L18.8329 3.6341L17.337 3.74507ZM16.1705 22.5221C16.5935 22.4233 16.9773 22.279 17.3346 22.066L16.5666 20.7775C16.3642 20.8982 16.1298 20.9912 15.8295 21.0613L16.1705 22.5221ZM9.02079 7.49864C8.24533 7.47713 7.63139 7.35003 7.21129 7.16201C6.78832 6.9727 6.65335 6.76868 6.61731 6.62906L5.16492 7.00397C5.35707 7.74836 5.94157 8.2371 6.59851 8.53113C7.25832 8.82644 8.08473 8.97325 8.97921 8.99806L9.02079 7.49864Z" fill={color}/>
	<Path d="M4.71466 13.8384C5.46405 14.591 7.37435 15.7502 11.9996 15.7502V14.2502C7.60609 14.2502 6.1461 13.1501 5.77753 12.78L4.71466 13.8384ZM11.9996 15.7502C16.7469 15.7502 18.634 14.5286 19.3401 13.7811L18.2497 12.7511C17.9277 13.092 16.5084 14.2502 11.9996 14.2502V15.7502Z" fill={color}/>
</Svg>;

export default BrokenSmartSpeaker2;
