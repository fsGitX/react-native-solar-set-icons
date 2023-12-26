import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneGallery = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z" fill={color}/>
	<Path d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0309C22.75 13.9397 22.75 15.5023 22.6463 16.7745C22.5422 18.0531 22.3287 19.1214 21.8509 20.0087C21.6401 20.4001 21.3812 20.7506 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.14086 20.2726 1.7312 19.2852 1.51335 18.0604C1.29935 16.8573 1.2602 15.3603 1.25207 13.5015C1.25 13.0287 1.25 12.5286 1.25 12.001L1.25 11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 12.5287 2.75 13.0257 2.75205 13.4949C2.76025 15.369 2.80214 16.7406 2.99017 17.7978C3.17436 18.8333 3.48774 19.4981 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.2151 19.7953 20.3872 19.5631 20.5302 19.2976C20.8619 18.6816 21.0531 17.8578 21.1513 16.6527C21.2494 15.4482 21.25 13.9459 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637Z" fill={color} fillRule="evenodd"/>
	<Path d="M20.6067 19.1463L17.7763 16.599C16.7367 15.6634 15.1886 15.5702 14.0444 16.3744L13.7462 16.5839C12.951 17.1428 11.8692 17.0491 11.182 16.3618L6.89228 12.0721C6.03607 11.2159 4.66265 11.1702 3.75138 11.9675L2.75024 12.8435C2.75052 13.0665 2.75103 13.2835 2.75196 13.4949C2.76016 15.369 2.80204 16.7406 2.99007 17.7978C3.17426 18.8333 3.48764 19.4981 3.9947 20.0052C4.56436 20.5749 5.33508 20.9018 6.61348 21.0736C7.91346 21.2484 9.62168 21.25 11.9999 21.25C14.3781 21.25 16.0863 21.2484 17.3863 21.0736C18.6647 20.9018 19.4354 20.5749 20.0051 20.0052C20.215 19.7953 20.3871 19.5631 20.5301 19.2976C20.5565 19.2485 20.582 19.1981 20.6067 19.1463Z" fill={color} opacity="0.4"/>
</Svg>;

export default BoldDuotoneGallery;
