import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneConfetti = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4.01207 15.7618L5.70156 10.6933C6.46758 8.39525 6.85059 7.24623 7.75684 7.03229C8.6631 6.81835 9.51953 7.67478 11.2324 9.38764L14.6114 12.7666C16.3242 14.4795 17.1807 15.3359 16.9667 16.2422C16.7528 17.1484 15.6038 17.5314 13.3057 18.2975L8.23724 19.987C5.47183 20.9088 4.08912 21.3697 3.35924 20.6398C2.62936 19.9099 3.09026 18.5272 4.01207 15.7618Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12.2353 18.3462C12.2353 18.3462 11.4771 16.0651 11.4771 14.5554C11.4771 13.0456 12.2353 10.7645 12.2353 10.7645M8.06529 19.4835C8.06529 19.4835 7.42497 16.7316 7.30712 14.9345C7.11242 11.9652 8.06529 7.35272 8.06529 7.35272" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14.5093 10.0061L14.6533 9.28614C14.7986 8.55924 15.3224 7.96597 16.0256 7.73155C16.7289 7.49714 17.2526 6.90387 17.398 6.17697L17.542 5.45703" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M17.5693 13.2533L17.7822 13.3762C18.4393 13.7556 19.2655 13.6719 19.8332 13.1685C20.3473 12.7126 21.0794 12.597 21.709 12.8723L22.0005 12.9997" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9.79513 2.77921C9.45764 3.33127 9.54223 4.04265 9.99976 4.50018L10.0976 4.59806C10.4908 4.99122 10.6358 5.5688 10.4749 6.10103" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.92761 3.94079C7.13708 3.73132 7.47669 3.73132 7.68616 3.94079C7.89563 4.15026 7.89563 4.48988 7.68616 4.69935C7.47669 4.90882 7.13708 4.90882 6.92761 4.69935C6.71814 4.48988 6.71814 4.15026 6.92761 3.94079Z" fill={color} opacity="0.5"/>
	<Path d="M12.1571 7.1571C12.3666 6.94763 12.7062 6.94763 12.9157 7.1571C13.1251 7.36657 13.1251 7.70619 12.9157 7.91566C12.7062 8.12512 12.3666 8.12512 12.1571 7.91566C11.9476 7.70619 11.9476 7.36657 12.1571 7.1571Z" fill={color} opacity="0.5"/>
	<Path d="M17.1571 10.1571C17.3666 9.94763 17.7062 9.94763 17.9157 10.1571C18.1251 10.3666 18.1251 10.7062 17.9157 10.9157C17.7062 11.1251 17.3666 11.1251 17.1571 10.9157C16.9476 10.7062 16.9476 10.3666 17.1571 10.1571Z" fill={color} opacity="0.5"/>
	<Path d="M19.0582 15.3134C19.2677 15.1039 19.6073 15.1039 19.8168 15.3134C20.0262 15.5228 20.0262 15.8624 19.8168 16.0719C19.6073 16.2814 19.2677 16.2814 19.0582 16.0719C18.8488 15.8624 18.8488 15.5228 19.0582 15.3134Z" fill={color} opacity="0.5"/>
	<Path d="M19.1724 10.3278L18.687 10.448L18.7595 10.7407L19.0522 10.8132L19.1724 10.3278ZM21.0004 8.49982L20.5004 8.49848C20.5 8.63155 20.5527 8.75927 20.6468 8.85337C20.7409 8.94747 20.8686 9.00017 21.0017 8.99982L21.0004 8.49982ZM19.1724 10.3278C19.6577 10.2077 19.6577 10.2078 19.6578 10.2079C19.6578 10.2079 19.6578 10.208 19.6578 10.208C19.6578 10.2081 19.6578 10.2081 19.6578 10.2081C19.6578 10.2081 19.6578 10.2081 19.6577 10.2079C19.6576 10.2074 19.6574 10.2066 19.6571 10.2053C19.6565 10.2027 19.6554 10.1983 19.654 10.1922C19.6512 10.1801 19.6469 10.1614 19.6416 10.1367C19.6308 10.0874 19.6159 10.0149 19.5998 9.92528C19.5674 9.74496 19.5313 9.5008 19.5146 9.24041C19.4978 8.97703 19.5021 8.71507 19.5416 8.49288C19.5824 8.26325 19.6509 8.13199 19.7152 8.06773L19.0081 7.36063C18.7372 7.6315 18.6145 7.99452 18.557 8.31778C18.4982 8.64848 18.4971 8.99805 18.5167 9.30429C18.5365 9.61354 18.5787 9.89711 18.6156 10.1021C18.6341 10.2052 18.6515 10.2897 18.6644 10.3493C18.6709 10.3791 18.6763 10.4028 18.6802 10.4194C18.6821 10.4278 18.6837 10.4344 18.6849 10.4392C18.6854 10.4416 18.6859 10.4435 18.6863 10.445C18.6864 10.4457 18.6866 10.4463 18.6867 10.4468C18.6868 10.4471 18.6868 10.4473 18.6869 10.4475C18.6869 10.4476 18.6869 10.4477 18.6869 10.4477C18.687 10.4478 18.687 10.448 19.1724 10.3278ZM19.7152 8.06773C19.9579 7.82498 20.1499 7.84353 20.2386 7.88451C20.335 7.92903 20.5015 8.08868 20.5004 8.49848L21.5004 8.50115C21.5022 7.81711 21.2042 7.22899 20.658 6.97668C20.1041 6.72083 19.4752 6.89349 19.0081 7.36063L19.7152 8.06773ZM19.1724 10.3278C19.0522 10.8132 19.0523 10.8132 19.0524 10.8132C19.0525 10.8132 19.0526 10.8133 19.0527 10.8133C19.0529 10.8133 19.0531 10.8134 19.0534 10.8135C19.0538 10.8136 19.0545 10.8137 19.0552 10.8139C19.0567 10.8143 19.0586 10.8147 19.061 10.8153C19.0658 10.8165 19.0724 10.818 19.0807 10.82C19.0974 10.8239 19.1211 10.8293 19.1509 10.8358C19.2105 10.8487 19.295 10.8661 19.398 10.8846C19.6031 10.9215 19.8866 10.9637 20.1959 10.9835C20.5021 11.0031 20.8517 11.002 21.1824 10.9432C21.5057 10.8857 21.8687 10.763 22.1396 10.4921L21.4325 9.78499C21.3682 9.84925 21.2369 9.91778 21.0073 9.95862C20.7851 9.99814 20.5232 10.0024 20.2598 9.98556C19.9994 9.9689 19.7552 9.93279 19.5749 9.90039C19.4853 9.88429 19.4128 9.86934 19.3634 9.85861C19.3388 9.85325 19.3201 9.84897 19.308 9.84615C19.3019 9.84473 19.2975 9.84369 19.2949 9.84306C19.2936 9.84275 19.2927 9.84254 19.2923 9.84244C19.2921 9.84239 19.292 9.84236 19.2921 9.84237C19.2921 9.84237 19.2921 9.84238 19.2922 9.8424C19.2922 9.84241 19.2923 9.84243 19.2923 9.84243C19.2924 9.84245 19.2925 9.84247 19.1724 10.3278ZM22.1396 10.4921C22.6067 10.025 22.7794 9.39612 22.5235 8.84221C22.2712 8.29598 21.6831 7.99799 20.999 7.99982L21.0017 8.99982C21.4115 8.99872 21.5712 9.16515 21.6157 9.26154C21.6567 9.35026 21.6752 9.54224 21.4325 9.78499L22.1396 10.4921Z" fill={color}/>
	<Path d="M15.1882 3.41742L15.1606 3.51453C15.1303 3.6212 15.1152 3.67453 15.1223 3.72689C15.1295 3.77925 15.1582 3.8247 15.2156 3.91561L15.2678 3.99838C15.4696 4.31829 15.5706 4.47825 15.5018 4.60909C15.433 4.73992 15.2401 4.75498 14.8543 4.7851L14.7545 4.7929C14.6448 4.80146 14.59 4.80574 14.5421 4.83093C14.4941 4.85612 14.4585 4.89937 14.3873 4.98586L14.3225 5.06461C14.0719 5.36899 13.9466 5.52118 13.8037 5.50161C13.6607 5.48204 13.5948 5.30367 13.463 4.94693L13.4289 4.85463C13.3915 4.75326 13.3728 4.70257 13.336 4.66578C13.2992 4.62899 13.2485 4.61027 13.1471 4.57281L13.0548 4.53871C12.6981 4.40691 12.5197 4.34101 12.5001 4.19809C12.4806 4.05516 12.6328 3.92986 12.9371 3.67926L13.0159 3.61442C13.1024 3.54321 13.1456 3.5076 13.1708 3.45968C13.196 3.41175 13.2003 3.35693 13.2089 3.24729L13.2166 3.14747C13.2468 2.76163 13.2618 2.56871 13.3927 2.49995C13.5235 2.43118 13.6835 2.53211 14.0034 2.73397L14.0861 2.7862C14.1771 2.84356 14.2225 2.87224 14.2749 2.87941C14.3272 2.88658 14.3806 2.87142 14.4872 2.84111L14.5843 2.81352C14.9597 2.70686 15.1474 2.65353 15.2478 2.75396C15.3482 2.85439 15.2949 3.04207 15.1882 3.41742Z" opacity="0.5" stroke="black"/>
</Svg>;

export default LineDuotoneConfetti;
