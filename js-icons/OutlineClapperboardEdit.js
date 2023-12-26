import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineClapperboardEdit = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.859 3.72729 22.2687 4.71445 22.4865 5.93898C22.7006 7.14188 22.7398 8.63844 22.7479 10.4967C22.7497 10.9109 22.4154 11.2482 22.0012 11.25C21.587 11.2518 21.2498 10.9175 21.2479 10.5033C21.2451 9.86262 21.2384 9.2807 21.2232 8.75H13.5112C13.5033 8.75013 13.4953 8.75013 13.4874 8.75H7.01122C7.00327 8.75013 6.99532 8.75013 6.98737 8.75H2.77672C2.75045 9.67173 2.75 10.7422 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.47928 20.4897 5.10692 20.7966 6.06179 20.9836C7.03759 21.1747 8.2972 21.2303 10.0064 21.2448C10.4206 21.2483 10.7535 21.5869 10.75 22.0011C10.7465 22.4153 10.4078 22.7483 9.99364 22.7448C8.28967 22.7303 6.90193 22.6767 5.77345 22.4556C4.62404 22.2305 3.69048 21.8222 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM2.85681 7.25H6.58829L9.44439 2.76185C8.31691 2.77915 7.39205 2.82171 6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.89922 6.81554 2.87624 7.02735 2.85681 7.25ZM11.2072 2.75032C11.1886 2.80268 11.1638 2.85379 11.1327 2.90266L8.36626 7.25H13.0883L15.9189 2.80191C14.8557 2.7507 13.5747 2.75 12 2.75C11.727 2.75 11.4629 2.75002 11.2072 2.75032ZM17.5982 2.95698L14.8663 7.25H21.1432C21.11 6.86849 21.0665 6.52079 21.0097 6.20174C20.8255 5.16648 20.5122 4.50178 20.0052 3.9948C19.4677 3.45731 18.7512 3.13594 17.5982 2.95698ZM18.4488 12.988C19.4328 12.004 21.0281 12.004 22.012 12.988C22.996 13.9719 22.996 15.5672 22.012 16.5512L17.7302 20.833C17.4994 21.0639 17.3387 21.2246 17.1585 21.3652C16.9467 21.5304 16.7175 21.6721 16.4749 21.7877C16.2686 21.886 16.0531 21.9578 15.7434 22.061L13.8653 22.687C13.4243 22.834 12.9381 22.7192 12.6095 22.3905C12.2808 22.0619 12.166 21.5757 12.313 21.1347L12.939 19.2567C13.0422 18.947 13.114 18.7314 13.2123 18.5251C13.3279 18.2826 13.4696 18.0533 13.6348 17.8415C13.7753 17.6613 13.936 17.5006 14.1669 17.2698L18.4488 12.988ZM20.9514 14.0486C20.5532 13.6505 19.9076 13.6505 19.5095 14.0486L19.3777 14.1803C19.3829 14.1966 19.3885 14.2133 19.3944 14.2305C19.4762 14.4661 19.6315 14.7784 19.9266 15.0734C20.2216 15.3685 20.5339 15.5238 20.7695 15.6056C20.7867 15.6115 20.8034 15.6171 20.8197 15.6223L20.9514 15.4905C21.3495 15.0924 21.3495 14.4468 20.9514 14.0486ZM19.6857 16.7562C19.4193 16.6068 19.1372 16.4054 18.8659 16.1341C18.5946 15.8628 18.3932 15.5807 18.2438 15.3143L15.2578 18.3003C14.9856 18.5725 14.8944 18.6655 14.8176 18.764C14.7193 18.8899 14.6351 19.0262 14.5664 19.1704C14.5127 19.2831 14.4703 19.4063 14.3485 19.7715L14.0029 20.8084L14.1916 20.9971L15.2285 20.6515C15.5937 20.5297 15.7169 20.4873 15.8296 20.4336C15.9738 20.3649 16.1101 20.2807 16.236 20.1824C16.3345 20.1056 16.4275 20.0144 16.6997 19.7422L19.6857 16.7562Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineClapperboardEdit;
