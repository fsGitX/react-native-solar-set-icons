import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineAstronomyStarFallMinimalistic2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.6415 5.13767C13.3348 5.53821 12.9854 6.16106 12.4665 7.09188L12.2043 7.56216C12.187 7.5932 12.1699 7.62411 12.1528 7.65486C11.918 8.07806 11.6998 8.47129 11.3463 8.73962C10.9884 9.0113 10.5534 9.10878 10.0952 9.21144C10.0619 9.21889 10.0286 9.22637 9.99509 9.23395L9.48601 9.34913C8.47665 9.57751 7.80714 9.73119 7.35251 9.91036C6.91201 10.084 6.86764 10.2073 6.85097 10.2609C6.83176 10.3227 6.80303 10.465 7.06775 10.8855C7.33757 11.3141 7.7961 11.8533 8.48294 12.6565L8.83 13.0623C8.85219 13.0883 8.8743 13.114 8.89628 13.1397C9.21175 13.5072 9.50082 13.8441 9.63373 14.2715C9.7657 14.6958 9.72189 15.1401 9.67349 15.631C9.67011 15.6653 9.66672 15.6997 9.66336 15.7344L9.61089 16.2759C9.50715 17.3464 9.43912 18.0675 9.46208 18.5829C9.48498 19.097 9.59232 19.1849 9.62647 19.2108C9.62705 19.2112 9.62768 19.2117 9.62836 19.2123C9.65322 19.2315 9.74679 19.3041 10.1935 19.1761C10.6621 19.0419 11.2906 18.7548 12.2357 18.3197L12.7124 18.1002C12.7443 18.0855 12.7762 18.0708 12.8079 18.0561C13.2337 17.8589 13.6418 17.6699 14.0889 17.6699C14.5359 17.6699 14.9441 17.8589 15.3698 18.0561C15.4016 18.0708 15.4334 18.0855 15.4654 18.1002L15.942 18.3197C16.8871 18.7548 17.5156 19.0419 17.9842 19.1761C18.4309 19.3041 18.5245 19.2315 18.5494 19.2123C18.5501 19.2117 18.5507 19.2112 18.5513 19.2108C18.5854 19.1849 18.6928 19.097 18.7157 18.5829C18.7386 18.0675 18.6706 17.3464 18.5668 16.2759L18.5144 15.7344C18.511 15.6997 18.5076 15.6652 18.5042 15.631C18.4558 15.1401 18.412 14.6958 18.544 14.2715C18.6769 13.8441 18.966 13.5072 19.2815 13.1396C19.3034 13.114 19.3255 13.0883 19.3477 13.0623L19.6948 12.6565C20.3816 11.8533 20.8402 11.3141 21.11 10.8855C21.3747 10.465 21.346 10.3227 21.3268 10.2609C21.3101 10.2073 21.2657 10.084 20.8252 9.91036C20.3706 9.73119 19.7011 9.57751 18.6917 9.34913L18.1826 9.23395C18.1492 9.22637 18.1158 9.21889 18.0825 9.21144C17.6244 9.10878 17.1893 9.0113 16.8314 8.73962C16.478 8.47129 16.2598 8.07806 16.0249 7.65486C16.0079 7.62411 15.9907 7.59319 15.9734 7.56216L15.7112 7.09188C15.1924 6.16106 14.8429 5.53821 14.5362 5.13767C14.2377 4.74784 14.1143 4.74964 14.0905 4.74998C14.0899 4.74999 14.0894 4.75 14.0889 4.75C14.0884 4.75 14.0878 4.74999 14.0872 4.74998C14.0634 4.74964 13.9401 4.74784 13.6415 5.13767ZM12.4506 4.22568C12.8403 3.71682 13.3505 3.25 14.0889 3.25C14.8273 3.25 15.3374 3.71682 15.7271 4.22568C16.1086 4.72376 16.5104 5.44469 16.9915 6.3079L17.2836 6.83181C17.6041 7.40685 17.6686 7.49186 17.7384 7.54487C17.8035 7.59431 17.89 7.62982 18.5137 7.77093L19.0842 7.90001C20.0156 8.11071 20.8 8.28815 21.3752 8.51482C21.9771 8.75201 22.5417 9.11634 22.7591 9.81548C22.974 10.5064 22.7269 11.1326 22.3794 11.6846C22.0439 12.2176 21.5113 12.8403 20.8741 13.5854L20.8348 13.6314L20.4877 14.0372C20.066 14.5303 20.0057 14.6226 19.9763 14.7169C19.946 14.8144 19.9437 14.9324 20.0074 15.5897L20.0656 16.1906C20.1621 17.1865 20.2424 18.0148 20.2142 18.6496C20.1853 19.2982 20.0369 19.9663 19.4582 20.4055C18.8673 20.8541 18.1865 20.7945 17.571 20.6181C16.9782 20.4483 16.2443 20.1103 15.3724 19.7088L14.838 19.4627C14.2516 19.1927 14.1634 19.1699 14.0889 19.1699C14.0143 19.1699 13.9262 19.1927 13.3397 19.4627L12.8053 19.7088C11.9334 20.1103 11.1995 20.4483 10.6067 20.6181C9.99121 20.7945 9.31042 20.8541 8.7195 20.4055C8.14083 19.9663 7.99246 19.2982 7.96356 18.6496C7.93528 18.0148 8.01559 17.1864 8.11213 16.1905L8.17035 15.5897C8.23405 14.9324 8.23171 14.8144 8.20139 14.7169C8.17205 14.6226 8.1117 14.5303 7.69 14.0372L7.30362 13.5854C6.66639 12.8403 6.13386 12.2176 5.79833 11.6846C5.45083 11.1326 5.20376 10.5064 5.41863 9.81548C5.63604 9.11634 6.20065 8.75201 6.80254 8.51482C7.3777 8.28816 8.16213 8.11071 9.09357 7.90001L9.66406 7.77093C10.2877 7.62982 10.3742 7.59431 10.4393 7.54487C10.5092 7.49186 10.5736 7.40685 10.8941 6.83181L11.1862 6.3079C11.6673 5.44469 12.0692 4.72376 12.4506 4.22568ZM8.74536 5.20229C6.76375 4.63125 4.63808 4.93288 2.58717 6.13395L2.37901 6.25585C2.02158 6.46518 1.56213 6.34511 1.35281 5.98768C1.14349 5.63025 1.26356 5.1708 1.62099 4.96148L1.82915 4.83958C4.18957 3.45725 6.7369 3.06248 9.16071 3.76094L9.36859 3.82084C9.76661 3.93554 9.99629 4.35117 9.88159 4.74919C9.7669 5.14721 9.35126 5.37689 8.95325 5.26219L8.74536 5.20229ZM4.83616 9.93634C4.87132 10.3491 4.56525 10.7121 4.15253 10.7473C3.99937 10.7603 3.88194 10.7678 3.78353 10.774C3.60615 10.7853 3.49057 10.7926 3.3389 10.8217C3.14241 10.8595 2.88728 10.9393 2.42428 11.1708C2.05379 11.3561 1.60329 11.2059 1.41805 10.8354C1.2328 10.4649 1.38297 10.0144 1.75346 9.82918C2.29045 9.56068 2.6802 9.42079 3.05615 9.34863C3.30305 9.30124 3.55792 9.28464 3.78712 9.26972C3.87041 9.26429 3.95031 9.25909 4.0252 9.25271C4.43792 9.21755 4.801 9.52362 4.83616 9.93634ZM5.91775 15.856C4.7338 15.5785 3.48641 15.8537 2.55304 16.5891C2.22769 16.8455 1.75612 16.7895 1.49976 16.4642C1.24341 16.1388 1.29934 15.6673 1.62469 15.4109C2.92249 14.3883 4.63899 14.0157 6.25998 14.3955C6.66327 14.49 6.91359 14.8936 6.81909 15.2968C6.72458 15.7001 6.32104 15.9505 5.91775 15.856Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineAstronomyStarFallMinimalistic2;
