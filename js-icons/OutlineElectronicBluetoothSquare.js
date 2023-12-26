import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineElectronicBluetoothSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637ZM13.0099 6.56989C13.0232 6.57991 13.0366 6.58995 13.05 6.6L14.3833 7.6C14.3944 7.60832 14.4055 7.61665 14.4167 7.62499C14.6318 7.78619 14.8537 7.95252 15.0152 8.11492C15.1982 8.29903 15.4167 8.58764 15.4167 9C15.4167 9.41236 15.1982 9.70097 15.0152 9.88508C14.8537 10.0475 14.6317 10.2138 14.4167 10.375C14.4055 10.3834 14.3944 10.3917 14.3833 10.4L12.25 12L14.3833 13.6C14.3944 13.6083 14.4055 13.6166 14.4167 13.625C14.6318 13.7862 14.8537 13.9525 15.0152 14.1149C15.1982 14.299 15.4167 14.5876 15.4167 15C15.4167 15.4124 15.1982 15.701 15.0152 15.8851C14.8537 16.0475 14.6317 16.2138 14.4167 16.375C14.4055 16.3834 14.3944 16.3917 14.3833 16.4L13.05 17.4C13.0366 17.4101 13.0232 17.4201 13.0099 17.4301C12.6958 17.6658 12.3963 17.8905 12.1382 18.0308C11.8739 18.1744 11.4222 18.3586 10.941 18.118C10.4598 17.8774 10.3362 17.4055 10.2925 17.1079C10.2498 16.8173 10.2499 16.4428 10.25 16.0502C10.25 16.0335 10.25 16.0168 10.25 16V13.6013L8.48014 15.0762C8.16193 15.3413 7.68901 15.2983 7.42383 14.9801C7.15866 14.6619 7.20165 14.189 7.51986 13.9238L9.82846 12L7.51986 10.0762C7.20165 9.81099 7.15866 9.33807 7.42383 9.01986C7.68901 8.70165 8.16193 8.65866 8.48014 8.92383L10.25 10.3987V8C10.25 7.98325 10.25 7.96652 10.25 7.94983C10.2499 7.55719 10.2498 7.18274 10.2925 6.89207C10.3362 6.59451 10.4598 6.12256 10.941 5.88197C11.4222 5.64137 11.8739 5.82563 12.1382 5.96924C12.3963 6.10952 12.6958 6.33424 13.0099 6.56989ZM11.75 13.5V16C11.75 16.1995 11.7504 16.3614 11.7528 16.4945C11.8607 16.4165 11.9904 16.3197 12.15 16.2L13.4833 15.2C13.5878 15.1216 13.6737 15.0572 13.7472 15C13.6737 14.9428 13.5878 14.8784 13.4833 14.8L11.75 13.5ZM11.75 10.5V8C11.75 7.80053 11.7504 7.63864 11.7528 7.50554C11.8607 7.58348 11.9904 7.68032 12.15 7.8L13.4833 8.8C13.5878 8.87836 13.6737 8.94282 13.7472 9C13.6737 9.05718 13.5878 9.12164 13.4833 9.2L11.75 10.5Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineElectronicBluetoothSquare;