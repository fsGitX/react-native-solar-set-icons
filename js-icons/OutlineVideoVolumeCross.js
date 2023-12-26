import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineVideoVolumeCross = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22.5303 1.46967C22.8232 1.76256 22.8232 2.23744 22.5303 2.53033L2.53033 22.5303C2.23744 22.8232 1.76256 22.8232 1.46967 22.5303C1.17678 22.2374 1.17678 21.7626 1.46967 21.4697L5.19121 17.7481C4.30803 17.7386 3.63551 17.6859 3.02496 17.4034C2.33016 17.082 1.66141 16.4527 1.29828 15.7788C0.905663 15.0501 0.859593 14.2881 0.794087 13.2045C0.791489 13.1615 0.788861 13.1181 0.786179 13.0741C0.763733 12.7058 0.75 12.3416 0.75 12C0.75 11.6585 0.763733 11.2943 0.786179 10.926C0.788861 10.882 0.791489 10.8385 0.794087 10.7955C0.859593 9.712 0.905663 8.94996 1.29828 8.22128C1.66141 7.54732 2.33016 6.9181 3.02496 6.59664C3.77659 6.24889 4.62215 6.24933 5.83906 6.24998C5.89202 6.25 5.94569 6.25003 6.00008 6.25003C6.5366 6.25003 6.71956 6.24762 6.89132 6.21862C7.0752 6.18757 7.25452 6.13378 7.42513 6.05848C7.58448 5.98815 7.73856 5.88944 8.18647 5.59411L8.45324 5.41822C9.68412 4.60663 10.6712 3.95576 11.4848 3.56055C12.3108 3.15928 13.1241 2.9361 13.9423 3.21531C14.2142 3.30809 14.4759 3.44128 14.7109 3.60646C15.3503 4.05581 15.6552 4.74135 15.827 5.52977C15.9146 5.93197 15.9746 6.39532 16.0205 6.91886L21.4697 1.46967C21.7626 1.17678 22.2374 1.17678 22.5303 1.46967ZM14.6104 8.32893C14.5528 7.22797 14.4889 6.43466 14.3614 5.84912C14.2254 5.22532 14.0443 4.97136 13.8485 4.8337C13.7297 4.75023 13.5952 4.68181 13.4578 4.63492C13.2087 4.54989 12.8525 4.56376 12.1402 4.90978C11.426 5.25675 10.5209 5.85164 9.2311 6.70206L9.01216 6.84641C8.9955 6.85739 8.97907 6.86824 8.96284 6.87894C8.58264 7.12973 8.31931 7.30343 8.03077 7.43078C7.74641 7.55627 7.44756 7.64593 7.14108 7.69768C6.83009 7.7502 6.51464 7.75013 6.05917 7.75004C6.03973 7.75004 6.02004 7.75003 6.00008 7.75003C4.55641 7.75003 4.06911 7.76631 3.6548 7.958C3.25445 8.14323 2.82804 8.54443 2.6188 8.93278C2.40052 9.33789 2.36045 9.75309 2.2834 11.0173C2.26225 11.3642 2.25 11.6968 2.25 12C2.25 12.3033 2.26225 12.6358 2.2834 12.9828C2.36045 14.247 2.40052 14.6622 2.6188 15.0673C2.82804 15.4556 3.25445 15.8568 3.6548 16.0421C4.06911 16.2338 4.55641 16.25 6.00008 16.25C6.02004 16.25 6.03973 16.25 6.05917 16.25C6.29891 16.25 6.49985 16.2499 6.68178 16.2576L14.6104 8.32893ZM20.2645 6.3164C20.642 6.14605 21.0862 6.31403 21.2565 6.6916C21.7236 7.72674 22.25 9.45958 22.25 12C22.25 14.1916 21.8582 15.7829 21.45 16.8442C21.2462 17.374 21.0394 17.7692 20.8775 18.039C20.7966 18.1738 20.727 18.2772 20.6748 18.3504C20.6486 18.3869 20.6269 18.4159 20.6102 18.4375C20.6018 18.4483 20.5948 18.4572 20.5891 18.4643L20.5816 18.4736L20.5786 18.4772L20.5773 18.4788C20.577 18.4791 20.5762 18.4801 20 18L20.5762 18.4801C20.311 18.7983 19.8381 18.8413 19.5199 18.5762C19.2032 18.3123 19.1591 17.8426 19.42 17.5244C19.4207 17.5237 19.4218 17.5222 19.4235 17.52C19.4288 17.5132 19.4393 17.4994 19.4542 17.4785C19.4839 17.4368 19.5315 17.3668 19.5913 17.2673C19.7106 17.0683 19.8788 16.751 20.05 16.3058C20.3918 15.4171 20.75 14.0084 20.75 12C20.75 9.67366 20.2694 8.15099 19.8893 7.30849C19.7189 6.93093 19.8869 6.48676 20.2645 6.3164ZM18.164 9.26566C18.5696 9.18146 18.9666 9.44198 19.0508 9.84754C19.1609 10.378 19.25 11.0889 19.25 12C19.25 13.1101 19.1178 13.9228 18.9765 14.4738C18.9059 14.749 18.8333 14.9579 18.7745 15.1051C18.7451 15.1787 18.7191 15.2367 18.6986 15.2797C18.6884 15.3012 18.6795 15.3189 18.6723 15.333L18.6626 15.3514L18.6588 15.3585L18.6571 15.3615L18.6563 15.3629C18.6562 15.3632 18.6556 15.3642 18.0276 15.0153L18.6556 15.3642C18.4545 15.7263 17.9979 15.8568 17.6358 15.6556C17.2768 15.4562 17.1455 15.0056 17.3393 14.645L17.3443 14.6348C17.3512 14.6204 17.3643 14.5917 17.3818 14.548C17.4167 14.4608 17.4691 14.3135 17.5235 14.1012C17.6322 13.6772 17.75 12.9899 17.75 12C17.75 11.1873 17.6706 10.5787 17.5821 10.1525C17.4979 9.74689 17.7584 9.34986 18.164 9.26566ZM15.5 11.25C15.9142 11.25 16.25 11.5858 16.25 12C16.25 12.552 16.2137 13.5253 16.1619 14.6402L16.1592 14.6977C16.0914 16.1576 16.037 17.3296 15.8778 18.2139C15.7159 19.1134 15.417 19.8974 14.7109 20.3936C14.4759 20.5588 14.2142 20.692 13.9423 20.7848C13.2003 21.038 12.4627 20.8773 11.7204 20.549C10.9875 20.2248 10.1277 19.6808 9.08893 19.0001C8.74247 18.7731 8.64566 18.3082 8.87269 17.9617C9.09972 17.6153 9.56462 17.5184 9.91107 17.7455C10.9698 18.4393 11.7264 18.9114 12.3272 19.1772C12.9187 19.4389 13.2324 19.4421 13.4578 19.3651C13.5952 19.3183 13.7297 19.2498 13.8485 19.1664C14.0651 19.0141 14.2626 18.7195 14.4015 17.9482C14.541 17.1733 14.5924 16.1014 14.6635 14.5706C14.7156 13.451 14.75 12.5118 14.75 12C14.75 11.5858 15.0858 11.25 15.5 11.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineVideoVolumeCross;
