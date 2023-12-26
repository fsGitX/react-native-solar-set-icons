import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneElectronicBoombox = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z" fill={color} opacity="0.5"/>
	<Path d="M5.25 9.5C5.25 9.08579 5.58579 8.75 6 8.75H18C18.4142 8.75 18.75 9.08579 18.75 9.5C18.75 9.91421 18.4142 10.25 18 10.25H6C5.58579 10.25 5.25 9.91421 5.25 9.5Z" fill={color} fillRule="evenodd"/>
	<Path d="M11.948 1.25H12.052C12.9505 1.24997 13.6997 1.24995 14.2945 1.32991C14.9223 1.41432 15.4891 1.59999 15.9445 2.05546C16.4 2.51093 16.5857 3.07773 16.6701 3.70552C16.7501 4.30031 16.75 5.04953 16.75 5.94801L16.75 6H15.25C15.25 5.03599 15.2484 4.38843 15.1835 3.90539C15.1214 3.44393 15.0142 3.24644 14.8839 3.11612C14.7536 2.9858 14.5561 2.87858 14.0946 2.81654C13.6116 2.7516 12.964 2.75 12 2.75C11.036 2.75 10.3884 2.7516 9.90539 2.81654C9.44393 2.87858 9.24644 2.9858 9.11612 3.11612C8.9858 3.24644 8.87858 3.44393 8.81654 3.90539C8.7516 4.38843 8.75 5.03599 8.75 6H7.25L7.25 5.948C7.24997 5.04952 7.24995 4.3003 7.32991 3.70552C7.41432 3.07773 7.59999 2.51093 8.05546 2.05546C8.51093 1.59999 9.07773 1.41432 9.70552 1.32991C10.3003 1.24995 11.0495 1.24997 11.948 1.25Z" fill={color} fillRule="evenodd"/>
	<Path d="M7.25 13.0947C5.95608 13.4278 5 14.6023 5 16.0002C5 17.6571 6.34315 19.0002 8 19.0002C9.65685 19.0002 11 17.6571 11 16.0002C11 14.6023 10.0439 13.4278 8.75 13.0947V15.0002C8.75 15.4144 8.41421 15.7502 8 15.7502C7.58579 15.7502 7.25 15.4144 7.25 15.0002V13.0947Z" fill={color}/>
	<Path d="M13.8787 18.1213C15.0503 19.2929 16.9497 19.2929 18.1213 18.1213C19.1098 17.1329 19.2643 15.6263 18.5848 14.4758L17.2372 15.8234C16.9443 16.1163 16.4694 16.1163 16.1765 15.8234C15.8837 15.5306 15.8837 15.0557 16.1765 14.7628L17.5242 13.4152C16.3737 12.7357 14.8671 12.8902 13.8787 13.8787C12.7071 15.0503 12.7071 16.9497 13.8787 18.1213Z" fill={color}/>
</Svg>;

export default BoldDuotoneElectronicBoombox;