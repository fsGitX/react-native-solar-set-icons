import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearRefreshSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.37769 11.6296L6.62769 11.6296L6.62769 11.6296L7.37769 11.6296ZM7.37769 12.5556L6.81621 13.0528C6.95149 13.2056 7.14319 13.2966 7.34708 13.3049C7.55097 13.3133 7.74945 13.2381 7.89674 13.0969L7.37769 12.5556ZM9.51918 11.5414C9.81817 11.2547 9.82816 10.7799 9.54149 10.4809C9.25483 10.182 8.78006 10.172 8.48107 10.4586L9.51918 11.5414ZM6.5616 10.5028C6.28699 10.1927 5.81299 10.1639 5.50289 10.4385C5.19279 10.7131 5.16403 11.1871 5.43864 11.4972L6.5616 10.5028ZM14.9318 9.0093C15.2131 9.31337 15.6876 9.33183 15.9917 9.05055C16.2957 8.76927 16.3142 8.29476 16.0329 7.9907L14.9318 9.0093ZM12.0438 6.25C9.05814 6.25 6.62769 8.653 6.62769 11.6296H8.12769C8.12769 9.49251 9.87544 7.75 12.0438 7.75V6.25ZM6.62769 11.6296L6.62769 12.5556L8.12769 12.5556L8.12769 11.6296L6.62769 11.6296ZM7.89674 13.0969L9.51918 11.5414L8.48107 10.4586L6.85863 12.0142L7.89674 13.0969ZM7.93917 12.0583L6.5616 10.5028L5.43864 11.4972L6.81621 13.0528L7.93917 12.0583ZM16.0329 7.9907C15.0433 6.9209 13.6213 6.25 12.0438 6.25V7.75C13.188 7.75 14.2156 8.23504 14.9318 9.0093L16.0329 7.9907Z" fill={color}/>
	<Path d="M16.6188 11.4443L17.1795 10.9462C17.0441 10.7937 16.8523 10.703 16.6485 10.6949C16.4447 10.6868 16.2464 10.7621 16.0993 10.9034L16.6188 11.4443ZM14.4805 12.4581C14.1818 12.745 14.1722 13.2198 14.4591 13.5185C14.7461 13.8173 15.2208 13.8269 15.5196 13.54L14.4805 12.4581ZM17.4394 13.4972C17.7145 13.8068 18.1885 13.8348 18.4982 13.5597C18.8078 13.2846 18.8359 12.8106 18.5607 12.5009L17.4394 13.4972ZM9.04694 15.0047C8.76348 14.7027 8.28885 14.6876 7.98681 14.9711C7.68478 15.2545 7.66972 15.7292 7.95318 16.0312L9.04694 15.0047ZM11.9349 17.7499C14.9277 17.7499 17.3688 15.3496 17.3688 12.3703H15.8688C15.8688 14.5047 14.1158 16.2499 11.9349 16.2499V17.7499ZM17.3688 12.3703V11.4443H15.8688V12.3703H17.3688ZM16.0993 10.9034L14.4805 12.4581L15.5196 13.54L17.1384 11.9853L16.0993 10.9034ZM16.0582 11.9425L17.4394 13.4972L18.5607 12.5009L17.1795 10.9462L16.0582 11.9425ZM7.95318 16.0312C8.94549 17.0885 10.3636 17.7499 11.9349 17.7499V16.2499C10.792 16.2499 9.76552 15.7704 9.04694 15.0047L7.95318 16.0312Z" fill={color}/>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearRefreshSquare;