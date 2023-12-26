import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneEssentionalMasks = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15.9131 9.37926L16.7582 12.6766C17.7517 16.5526 15.4742 19.335 13.7324 20.8219C13.201 21.2755 12.9353 21.5023 11.907 21.7903C10.8787 22.0784 10.5401 22.0208 9.86292 21.9058C7.64328 21.5286 4.34019 20.3093 3.34673 16.4334L2.50159 13.136C2.06102 11.4171 1.84073 10.5577 2.13226 9.88284C2.22999 9.6566 2.36579 9.45054 2.53319 9.27447C3.03253 8.74929 3.87944 8.65827 5.57328 8.47622C6.82756 8.34142 7.45471 8.27402 8.06578 8.12524C8.27824 8.07352 8.48901 8.01448 8.69774 7.94822C9.29811 7.75765 9.87347 7.48822 11.0242 6.94934C12.5782 6.22163 13.3551 5.85777 14.0388 6.05159C14.268 6.11656 14.4841 6.22403 14.677 6.36888C15.2522 6.80094 15.4725 7.66038 15.9131 9.37926ZM6.00531 13.368C6.03405 13.072 6.2643 12.7673 6.643 12.6658C7.02171 12.5643 7.37345 12.7131 7.54635 12.9551C7.78715 13.2921 8.25557 13.3701 8.5926 13.1293C8.92963 12.8885 9.00764 12.4201 8.76684 12.0831C8.21636 11.3126 7.2139 10.9599 6.25477 11.2169C5.29565 11.4739 4.60382 12.2806 4.51233 13.223C4.47231 13.6353 4.77408 14.002 5.18635 14.042C5.59863 14.082 5.96529 13.7803 6.00531 13.368ZM12.4389 11.1126C12.0602 11.2141 11.8299 11.5187 11.8012 11.8148C11.7612 12.227 11.3945 12.5288 10.9823 12.4888C10.57 12.4488 10.2682 12.0821 10.3082 11.6698C10.3997 10.7273 11.0915 9.92069 12.0507 9.66369C13.0098 9.4067 14.0123 9.75936 14.5627 10.5298C14.8035 10.8669 14.7255 11.3353 14.3885 11.5761C14.0515 11.8169 13.583 11.7389 13.3422 11.4018C13.1693 11.1598 12.8176 11.0111 12.4389 11.1126ZM13.2012 16.231L13.6482 15.6287C13.9808 15.8756 14.0503 16.3453 13.8034 16.6779C13.5588 17.0075 13.0954 17.0788 12.7634 16.84L12.7537 16.8337C12.7394 16.8247 12.7113 16.8077 12.6699 16.7864C12.587 16.7438 12.4521 16.6841 12.2687 16.6343C11.9071 16.536 11.3392 16.4711 10.583 16.6737C9.82678 16.8763 9.36744 17.2165 9.10341 17.4824C8.96952 17.6172 8.8825 17.7364 8.83206 17.8148C8.80687 17.8539 8.79097 17.8826 8.78307 17.8976L8.7778 17.9079C8.60966 18.2807 8.17273 18.4507 7.79614 18.2876C7.41605 18.123 7.24136 17.6814 7.40598 17.3013L8.09421 17.5994C7.40598 17.3013 7.40581 17.3017 7.40598 17.3013L7.40667 17.2997L7.40741 17.298L7.40905 17.2943L7.41298 17.2855L7.42353 17.2629C7.43177 17.2457 7.44249 17.2241 7.45591 17.1986C7.48274 17.1477 7.52043 17.0811 7.57071 17.003C7.67124 16.8468 7.82274 16.6433 8.03909 16.4254C8.47553 15.9859 9.16352 15.5011 10.1948 15.2248C11.226 14.9485 12.0642 15.0244 12.6619 15.1867C12.9582 15.2672 13.1912 15.3677 13.3563 15.4527C13.439 15.4953 13.5049 15.534 13.5536 15.5647C13.5779 15.5801 13.598 15.5934 13.6138 15.6043L13.6342 15.6186L13.642 15.6242L13.6453 15.6266L13.6468 15.6277L13.6482 15.6287C13.6485 15.629 13.6482 15.6287 13.2012 16.231Z" fill={color} fillRule="evenodd"/>
	<Path d="M20.6525 12.4334L21.4976 9.13602C21.9382 7.41716 22.1585 6.55769 21.8669 5.88284C21.7692 5.6566 21.6334 5.45054 21.466 5.27447C20.9667 4.74929 20.1197 4.65827 18.4259 4.47622C17.1716 4.34142 16.5445 4.27402 15.9334 4.12524C15.721 4.07352 15.5102 4.01448 15.3015 3.94822C14.7011 3.75765 14.1257 3.48822 12.975 2.94934C11.421 2.22163 10.644 1.85777 9.96042 2.05159C9.73124 2.11656 9.51508 2.22403 9.32224 2.36888C8.747 2.80094 8.52671 3.66038 8.08614 5.37926L7.38662 8.10846L7.34204 8.2657C7.60675 8.22507 7.83734 8.18083 8.06568 8.12524C8.27814 8.07352 8.48891 8.01448 8.69764 7.94822C9.29801 7.75765 9.87336 7.48822 11.0241 6.94935C12.578 6.22163 13.355 5.85777 14.0387 6.05159C14.2678 6.11656 14.484 6.22403 14.6769 6.36888C15.2521 6.80094 15.4724 7.66038 15.913 9.37926L16.7581 12.6766C17.203 14.4124 16.9919 15.9289 16.4667 17.208L16.4992 17.221C18.2403 16.4706 19.9783 15.0638 20.6525 12.4334Z" fill={color} opacity="0.6"/>
	<Path d="M15.7286 8.66554C15.7633 8.70346 15.8025 8.73836 15.8461 8.76946C16.1831 9.01026 16.6515 8.93224 16.8923 8.59521C17.0652 8.35322 17.417 8.20448 17.7957 8.30596C18.1744 8.40743 18.4046 8.71211 18.4334 9.00814C18.4734 9.42041 18.84 9.72218 19.2523 9.68216C19.6646 9.64214 19.9664 9.27548 19.9263 8.8632C19.8349 7.92071 19.143 7.11407 18.1839 6.85707C17.2248 6.60007 16.2223 6.95274 15.6718 7.72321C15.609 7.81119 15.5678 7.90813 15.5474 8.00764C15.6059 8.20709 15.6654 8.42576 15.7286 8.66554Z" fill={color} opacity="0.6"/>
	<Path d="M10.2402 7.31496C10.4702 7.20876 10.7282 7.08797 11.0242 6.94935C12.2202 6.38926 12.956 6.0447 13.5432 6.00406C13.2441 5.67583 12.8474 5.42715 12.3872 5.30385C11.4281 5.04685 10.4256 5.39951 9.87516 6.16998C9.63436 6.50701 9.71238 6.97544 10.0494 7.21623C10.1095 7.25916 10.1738 7.29196 10.2402 7.31496Z" fill={color} opacity="0.6"/>
</Svg>;

export default BoldDuotoneEssentionalMasks;
