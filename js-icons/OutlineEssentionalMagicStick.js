import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineEssentionalMagicStick = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.0223 4.40996C14.1296 3.70294 14.8905 3.21942 15.4771 2.95394C16.0631 2.68874 16.2661 2.73967 16.3705 2.79341C16.4687 2.84397 16.6217 2.96761 16.7289 3.5831C16.8369 4.20294 16.8605 5.08688 16.892 6.38137L16.908 7.03791L16.9108 7.15745V7.15746C16.9245 7.75914 16.9364 8.27591 17.1558 8.73578C17.3767 9.19872 17.7712 9.52737 18.225 9.90547L18.3151 9.98062L18.8096 10.3939C19.7855 11.2095 20.4473 11.7655 20.8555 12.2294C21.2549 12.6832 21.267 12.888 21.2418 13.0208C21.2145 13.1651 21.1122 13.3696 20.556 13.6847C19.9945 14.0029 19.1597 14.3305 17.9417 14.8055L17.3233 15.0467L17.2159 15.0885L17.2159 15.0885C16.6427 15.3112 16.1646 15.497 15.7978 15.8556C15.4315 16.2138 15.2341 16.6879 14.9971 17.2574L14.9527 17.3641L14.6961 17.9785C14.1908 19.1884 13.8422 20.0182 13.5103 20.5739C13.1808 21.1254 12.9747 21.221 12.8336 21.244C12.7052 21.2649 12.5039 21.2499 12.0622 20.8363C11.6114 20.4141 11.0756 19.7348 10.2899 18.7333L9.89166 18.2258L9.81901 18.133C9.45511 17.6677 9.13838 17.2628 8.68277 17.0283C8.22939 16.7949 7.71341 16.7692 7.11539 16.7393L6.99604 16.7333L6.34294 16.6997C5.05495 16.6335 4.17656 16.5862 3.56329 16.4615C2.95587 16.3379 2.83733 16.1821 2.78905 16.0809C2.73668 15.9711 2.69295 15.7625 2.97275 15.181C3.25288 14.5987 3.75474 13.8475 4.48798 12.7548L4.86029 12.2L4.92603 12.1022C5.27039 11.5904 5.55857 11.1622 5.65343 10.6611C5.74908 10.1558 5.63309 9.65783 5.49653 9.07156L5.4705 8.95958L5.32345 8.32443C5.03356 7.07222 4.83765 6.21703 4.78795 5.58763C4.73919 4.9702 4.85007 4.77477 4.95985 4.66743C5.06861 4.56108 5.26353 4.45541 5.87499 4.52065C6.49931 4.58727 7.34455 4.80655 8.58355 5.13111L9.21185 5.2957L9.32328 5.325C9.90242 5.47756 10.3969 5.60783 10.9045 5.52496C11.4074 5.44285 11.8425 5.16429 12.3603 4.83269L12.46 4.76892L13.0223 4.40996ZM17.0569 1.45969C16.326 1.0835 15.568 1.26632 14.8586 1.58737C14.1615 1.90285 13.3095 2.44688 12.2678 3.11203L11.6528 3.50463C10.9804 3.93398 10.8209 4.01874 10.6628 4.04457C10.5095 4.06959 10.3444 4.04176 9.59195 3.84465L8.90172 3.66385L8.90172 3.66384C7.74018 3.35954 6.78463 3.1092 6.03415 3.02912C5.25753 2.94625 4.49767 3.02145 3.91116 3.59493C3.32566 4.16743 3.231 4.92568 3.2926 5.70573C3.35222 6.46059 3.57575 7.42601 3.84776 8.6008L4.00915 9.29789C4.18505 10.0577 4.20907 10.2265 4.17961 10.3821C4.14931 10.5421 4.05964 10.7012 3.61474 11.3642L3.20778 11.9706C2.51766 12.999 1.95352 13.8396 1.62105 14.5307C1.2827 15.2339 1.08201 15.9865 1.43528 16.7269C1.79265 17.4758 2.50803 17.7775 3.26423 17.9313C4.00146 18.0813 4.99409 18.1324 6.20127 18.1944L6.91899 18.2313C7.70465 18.2717 7.8676 18.2957 7.99634 18.362C8.12269 18.427 8.23221 18.5408 8.71157 19.1517L9.15023 19.7108L9.15027 19.7109C9.88532 20.6477 10.4916 21.4205 11.0369 21.9312C11.6013 22.4597 12.2578 22.8579 13.0753 22.7244C13.8803 22.593 14.3951 22.0176 14.798 21.3431C15.1919 20.6837 15.5808 19.7525 16.0564 18.6136L16.0564 18.6136L16.3368 17.9422C16.6428 17.2096 16.7262 17.0458 16.8465 16.9281C16.9665 16.8108 17.1308 16.7318 17.8683 16.4442L18.4867 16.203L18.5444 16.1805L18.5445 16.1805C19.6905 15.7335 20.6282 15.3679 21.2954 14.9898C21.9792 14.6024 22.5639 14.1011 22.7156 13.2998C22.8695 12.4871 22.4932 11.8198 21.9816 11.2384C21.4878 10.6773 20.7347 10.048 19.8218 9.28499L19.277 8.82967C18.6821 8.33241 18.5714 8.21927 18.5096 8.08979C18.4462 7.95702 18.4268 7.79053 18.4075 7.00139L18.39 6.28049C18.3604 5.06638 18.3362 4.06912 18.2067 3.3257C18.0742 2.56484 17.794 1.83907 17.0569 1.45969ZM19.5303 18.4697C19.2374 18.1768 18.7626 18.1768 18.4697 18.4697C18.1768 18.7626 18.1768 19.2374 18.4697 19.5303L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L19.5303 18.4697Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineEssentionalMagicStick;