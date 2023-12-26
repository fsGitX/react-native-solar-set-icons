import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldSearchMinimalisticMagniferZoomOut = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20.1279 11.1429C20.1279 16.1924 16.0698 20.2859 11.0639 20.2859C6.05806 20.2859 2 16.1924 2 11.1429C2 6.09343 6.05806 2 11.0639 2C16.0698 2 20.1279 6.09343 20.1279 11.1429Z" fill={color}/>
	<Path d="M8.2944 11.1429C8.2944 10.7221 8.63257 10.381 9.04972 10.381H13.0781C13.4953 10.381 13.8335 10.7221 13.8335 11.1429C13.8335 11.5637 13.4953 11.9048 13.0781 11.9048H9.04972C8.63257 11.9048 8.2944 11.5637 8.2944 11.1429Z" fill="white" fillRule="evenodd"/>
	<Path d="M17.8194 19.7006C17.7301 18.6064 18.6357 17.6929 19.7205 17.783C19.9085 17.7986 20.1337 17.867 20.363 17.9367C20.3851 17.9435 20.4073 17.9502 20.4294 17.9569C20.4494 17.9629 20.4694 17.9689 20.4894 17.9749C20.7001 18.0383 20.9097 18.1013 21.0692 18.1874C21.9844 18.6818 22.2799 19.8631 21.7067 20.7363C21.6068 20.8884 21.4519 21.0441 21.2962 21.2007C21.2814 21.2156 21.2666 21.2305 21.2519 21.2454C21.2371 21.2602 21.2224 21.2752 21.2076 21.2901C21.0524 21.4471 20.898 21.6034 20.7472 21.7041C19.8816 22.2823 18.7105 21.9843 18.2204 21.0611C18.135 20.9002 18.0725 20.6888 18.0097 20.4762C18.0038 20.4561 17.9978 20.4359 17.9918 20.4157C17.9852 20.3934 17.9785 20.3711 17.9719 20.3488C17.9028 20.1175 17.8349 19.8903 17.8194 19.7006Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldSearchMinimalisticMagniferZoomOut;
