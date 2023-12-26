import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineVideoMuted = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.2241 6.80715C12.4234 5.97214 13.2598 5.39181 13.9182 5.05408C14.576 4.71667 14.878 4.71757 15.0744 4.78833C15.1946 4.83165 15.3137 4.89544 15.4199 4.97424C15.6067 5.11282 15.7902 5.39058 15.9202 6.13021C15.992 6.53816 16.3808 6.81073 16.7888 6.739C17.1967 6.66728 17.4693 6.27842 17.3976 5.87046C17.2471 5.01441 16.9707 4.25718 16.3138 3.76968C16.0915 3.60468 15.8427 3.47079 15.5829 3.37716C14.7882 3.09078 14.0043 3.32411 13.2336 3.71943C12.4743 4.10894 11.5549 4.74901 10.4153 5.54248L10.1637 5.71766C9.74579 6.00861 9.60776 6.10159 9.46629 6.16752C9.31351 6.23872 9.15371 6.28924 8.99053 6.31833C8.84055 6.34508 8.67989 6.34775 8.17866 6.34775L8.01889 6.34768C6.89957 6.34693 6.09436 6.34639 5.37924 6.69576C4.71961 7.01802 4.09472 7.64271 3.75773 8.30314C3.39426 9.01546 3.35173 9.75841 3.29088 10.8211L3.28355 10.9488C3.26273 11.3095 3.25 11.6661 3.25 12.0003C3.25 12.3346 3.26273 12.6912 3.28355 13.0519L3.29088 13.1796C3.35173 14.2423 3.39426 14.9852 3.75773 15.6975C4.09472 16.358 4.71961 16.9827 5.37924 17.3049C6.09436 17.6543 6.89957 17.6537 8.0189 17.653L8.17865 17.6529C8.67989 17.6529 8.84055 17.6556 8.99053 17.6823C9.1537 17.7114 9.31351 17.762 9.46629 17.8331C9.60777 17.8991 9.74578 17.992 10.1637 18.283L10.4153 18.4582C11.5549 19.2517 12.4743 19.8917 13.2336 20.2812C14.0043 20.6766 14.7882 20.9099 15.5829 20.6235C15.8427 20.5299 16.0915 20.396 16.3138 20.231C16.9707 19.7435 17.2471 18.9863 17.3976 18.1302C17.4693 17.7222 17.1967 17.3334 16.7888 17.2617C16.3808 17.1899 15.992 17.4625 15.9202 17.8705C15.7902 18.6101 15.6067 18.8878 15.4199 19.0264C15.3137 19.1052 15.1946 19.169 15.0744 19.2123C14.878 19.2831 14.576 19.284 13.9182 18.9466C13.2598 18.6089 12.4234 18.0285 11.2241 17.1935L10.9719 17.018C10.6219 16.7742 10.3732 16.6009 10.0999 16.4735C9.83021 16.3479 9.546 16.2577 9.25385 16.2056C8.95709 16.1527 8.65648 16.1528 8.23805 16.1529L8.17865 16.1529C6.83037 16.1529 6.40203 16.1351 6.03768 15.9571C5.68038 15.7826 5.28835 15.3969 5.09384 15.0158C4.88997 14.6162 4.85258 14.2046 4.78106 12.9655C4.7614 12.6249 4.75 12.2983 4.75 12.0003C4.75 11.7024 4.7614 11.3757 4.78106 11.0352C4.85258 9.79611 4.88997 9.38445 5.09384 8.98491C5.28835 8.60372 5.68038 8.21807 6.03768 8.04352C6.40203 7.86552 6.83037 7.84775 8.17865 7.84775L8.23806 7.84776C8.65648 7.84788 8.95709 7.84796 9.25385 7.79504C9.546 7.74294 9.83021 7.65281 10.0999 7.52713C10.3732 7.39975 10.6219 7.2265 10.9719 6.98271L11.2241 6.80715Z" fill={color}/>
	<Path d="M14.5303 8.47C14.2374 8.17711 13.7625 8.17711 13.4696 8.47C13.1768 8.7629 13.1768 9.23777 13.4696 9.53066L15.9393 12.0003L13.4697 14.47C13.1768 14.7629 13.1768 15.2378 13.4697 15.5307C13.7626 15.8236 14.2374 15.8236 14.5303 15.5307L17 13.061L19.4696 15.5306C19.7625 15.8235 20.2374 15.8235 20.5303 15.5306C20.8232 15.2377 20.8232 14.7629 20.5303 14.47L18.0606 12.0003L20.5303 9.53069C20.8232 9.23779 20.8232 8.76292 20.5303 8.47003C20.2374 8.17713 19.7625 8.17713 19.4696 8.47003L17 10.9397L14.5303 8.47Z" fill={color}/>
</Svg>;

export default OutlineVideoMuted;
