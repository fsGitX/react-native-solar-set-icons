import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneStarRing = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.3952 11.7341C12.6464 11.3786 13.272 11.2008 13.6068 11.5356C13.9416 11.8704 13.7638 12.496 13.4083 13.7471L13.3163 14.0708C13.2152 14.4264 13.1647 14.6042 13.1886 14.7787C13.2125 14.9532 13.3081 15.1047 13.4993 15.4078L13.6734 15.6837C14.3463 16.75 14.6827 17.2832 14.4535 17.7193C14.2243 18.1555 13.5812 18.2057 12.2951 18.3061L11.9624 18.3321C11.5969 18.3606 11.4142 18.3749 11.2544 18.4588C11.0946 18.5428 10.976 18.6869 10.7386 18.9753L10.5225 19.2378C9.68713 20.2524 9.26946 20.7597 8.79304 20.6944C8.31661 20.6292 8.09694 20.0346 7.65761 18.8455L7.54395 18.5378C7.4191 18.1999 7.35668 18.031 7.23405 17.9083C7.11142 17.7857 6.94246 17.7233 6.60455 17.5984L6.2969 17.4848C5.10777 17.0454 4.5132 16.8258 4.44797 16.3493C4.38273 15.8729 4.89003 15.4553 5.90463 14.6199L6.16712 14.4038C6.45544 14.1664 6.5996 14.0477 6.68356 13.888C6.76753 13.7282 6.7818 13.5455 6.81033 13.18L6.83631 12.8473C6.93672 11.5612 6.98693 10.9181 7.42304 10.6889C7.85915 10.4597 8.39234 10.7961 9.45873 11.469L9.73462 11.643C10.0377 11.8343 10.1892 11.9299 10.3637 11.9538C10.5382 11.9777 10.716 11.9271 11.0715 11.8261L11.3952 11.7341Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M21.8291 19.9822C22.8403 17.8273 19.2594 12.9543 13.8309 9.09807C8.40241 5.24185 3.18203 3.86267 2.17085 6.0176M21.8291 19.9822C21.3391 21.0265 19.8604 21.2409 17.8486 20.7454M21.8291 19.9822C22.3624 18.8458 21.6185 16.9534 20 14.8529M21.8291 19.9822C21.1988 21.3256 18.9326 21.2956 16 20.1482M2.17085 6.0176C1.63758 7.15405 2.38148 9.04647 4 11.147M2.17085 6.0176C2.6609 4.97326 4.13957 4.75905 6.1514 5.25447M2.17085 6.0176C1.4639 7.5242 3.00156 10.3594 5.84592 13.2469" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18.8953 3.39503C18.9939 4.31938 19.3815 5.18594 20 5.86464M18.8953 3.39503C17.9645 4.16223 17.6651 4.30368 16.4925 4.53039M18.8953 3.39503L19.2038 3M17.5972 7C17.4986 6.07565 17.111 5.20909 16.4925 4.53039M16.4925 4.53039L16 4.51382" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneStarRing;
