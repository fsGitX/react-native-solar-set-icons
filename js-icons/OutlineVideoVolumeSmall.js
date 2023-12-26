import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineVideoVolumeSmall = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.1402 4.90978C11.426 5.25674 10.5209 5.85164 9.2311 6.70205L9.01216 6.84641C8.9955 6.8574 8.97905 6.86824 8.96283 6.87895C8.58263 7.12974 8.31931 7.30343 8.03077 7.43078C7.74641 7.55627 7.44756 7.64593 7.14108 7.69768C6.83009 7.7502 6.51464 7.75013 6.05918 7.75004C6.03974 7.75004 6.02004 7.75003 6.00008 7.75003C4.55641 7.75003 4.06911 7.76631 3.6548 7.958C3.25445 8.14323 2.82804 8.54443 2.6188 8.93278C2.40052 9.33789 2.36045 9.75309 2.2834 11.0173C2.26225 11.3642 2.25 11.6968 2.25 12C2.25 12.3033 2.26225 12.6358 2.2834 12.9828C2.36045 14.247 2.40052 14.6622 2.6188 15.0673C2.82804 15.4556 3.25445 15.8568 3.6548 16.0421C4.06911 16.2338 4.55641 16.25 6.00008 16.25C6.02004 16.25 6.03973 16.25 6.05917 16.25C6.51464 16.2499 6.83009 16.2499 7.14108 16.3024C7.44756 16.3541 7.74641 16.4438 8.03077 16.5693C8.31931 16.6966 8.58263 16.8703 8.96282 17.1211C8.97905 17.1318 8.99549 17.1427 9.01216 17.1537L9.2311 17.298C10.5209 18.1484 11.426 18.7433 12.1402 19.0903C12.8525 19.4363 13.2087 19.4502 13.4578 19.3651C13.5952 19.3183 13.7297 19.2498 13.8485 19.1664C14.0651 19.0141 14.2626 18.7195 14.4015 17.9482C14.541 17.1733 14.5924 16.1014 14.6635 14.5706C14.7156 13.451 14.75 12.5118 14.75 12C14.75 11.4883 14.7156 10.549 14.6635 9.42946C14.5924 7.89871 14.541 6.82677 14.4015 6.05188C14.2626 5.28052 14.0651 4.98595 13.8485 4.8337C13.7297 4.75023 13.5952 4.68181 13.4578 4.63492C13.2087 4.54989 12.8525 4.56376 12.1402 4.90978ZM11.4848 3.56055C12.3108 3.15928 13.1241 2.9361 13.9423 3.21531C14.2142 3.30809 14.4759 3.44128 14.7109 3.60646C15.417 4.10266 15.7159 4.88667 15.8778 5.78612C16.037 6.67048 16.0914 7.84243 16.1592 9.30232L16.1619 9.35983C16.2137 10.4748 16.25 11.448 16.25 12C16.25 12.552 16.2137 13.5253 16.1619 14.6402L16.1592 14.6977C16.0914 16.1576 16.037 17.3296 15.8778 18.2139C15.7159 19.1134 15.417 19.8974 14.7109 20.3936C14.4759 20.5588 14.2142 20.692 13.9423 20.7848C13.1241 21.064 12.3108 20.8408 11.4848 20.4395C10.6712 20.0443 9.68413 19.3934 8.45327 18.5819L8.18647 18.4059C7.73856 18.1106 7.58448 18.0119 7.42513 17.9416C7.25452 17.8663 7.0752 17.8125 6.89132 17.7814C6.71956 17.7524 6.5366 17.75 6.00008 17.75C5.94569 17.75 5.89203 17.7501 5.83907 17.7501C4.62215 17.7507 3.77659 17.7512 3.02496 17.4034C2.33016 17.082 1.66141 16.4527 1.29828 15.7788C0.905663 15.0501 0.859593 14.2881 0.794087 13.2045C0.791489 13.1615 0.788861 13.1181 0.786179 13.0741C0.763733 12.7058 0.75 12.3416 0.75 12C0.75 11.6585 0.763733 11.2943 0.786179 10.926C0.788861 10.882 0.791489 10.8385 0.794087 10.7955C0.859593 9.712 0.905663 8.94996 1.29828 8.22128C1.66141 7.54732 2.33016 6.9181 3.02496 6.59664C3.77659 6.24889 4.62215 6.24933 5.83906 6.24998C5.89203 6.25 5.94569 6.25003 6.00008 6.25003C6.5366 6.25003 6.71956 6.24762 6.89132 6.21862C7.0752 6.18757 7.25452 6.13377 7.42513 6.05848C7.58448 5.98815 7.73856 5.88945 8.18647 5.59411L8.45328 5.4182C9.68414 4.60662 10.6712 3.95576 11.4848 3.56055Z" fill={color} fillRule="evenodd"/>
	<Path d="M18.6563 8.63711C18.4552 8.27502 17.9979 8.14325 17.6358 8.34441C17.2768 8.54386 17.1455 8.99444 17.3393 9.35501C17.3462 9.36941 17.3643 9.40837 17.3818 9.45201C17.4167 9.53922 17.4691 9.68653 17.5235 9.89881C17.6322 10.3229 17.75 11.0101 17.75 12C17.75 12.9899 17.6322 13.6772 17.5235 14.1013C17.4691 14.3135 17.4167 14.4608 17.3818 14.5481L17.3393 14.645C17.1455 15.0056 17.2768 15.4562 17.6358 15.6557C17.9979 15.8568 18.4711 15.6951 18.6723 15.333C18.6795 15.319 18.6884 15.3012 18.6986 15.2797C18.7191 15.2367 18.7451 15.1787 18.7745 15.1051C18.8333 14.958 18.9059 14.749 18.9765 14.4738C19.1178 13.9229 19.25 13.1102 19.25 12C19.25 10.8899 19.1178 10.0772 18.9765 9.52625C18.9059 9.25103 18.8333 9.04209 18.7745 8.89493C18.7451 8.82138 18.7191 8.76338 18.6986 8.72036C18.6884 8.69885 18.6636 8.65118 18.6563 8.63711Z" fill={color}/>
</Svg>;

export default OutlineVideoVolumeSmall;