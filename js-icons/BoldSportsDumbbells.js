import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldSportsDumbbells = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.3447 8.93024L16.6892 6.09016L16.6892 6.09014C16.7694 5.4285 16.8096 5.09767 16.7403 4.82267C16.6479 4.456 16.4234 4.14364 16.116 3.95431C15.8855 3.81231 15.5766 3.76933 14.9589 3.68338C14.3412 3.59742 14.0323 3.55444 13.7756 3.62863C13.4333 3.72756 13.1417 3.96809 12.9649 4.29732C12.8323 4.54424 12.7492 5.23007 12.6689 5.89173L6.53738 5.03851C6.61763 4.37686 6.70081 3.69102 6.63155 3.41601C6.53919 3.04934 6.31464 2.73698 6.00727 2.54765C5.77675 2.40565 5.46789 2.36268 4.85018 2.27672C4.23246 2.19076 3.9236 2.14778 3.66686 2.22198C3.32454 2.3209 3.03292 2.56143 2.85617 2.89066C2.7236 3.13758 2.68348 3.46841 2.60323 4.13006L2.25877 6.97015C2.17852 7.6318 2.1384 7.96263 2.20767 8.23764C2.30002 8.60431 2.52458 8.91667 2.83194 9.106C3.06246 9.248 3.37132 9.29097 3.98903 9.37693L3.98904 9.37693L3.98904 9.37693C4.60676 9.46289 4.91561 9.50587 5.17235 9.43167C5.51468 9.33275 5.80629 9.09222 5.98305 8.76299C6.11561 8.51607 6.19879 7.83023 6.27904 7.16858L12.4106 8.0218C12.3303 8.68345 12.2471 9.36929 12.3164 9.6443C12.4088 10.011 12.6333 10.3233 12.9407 10.5127C13.1712 10.6547 13.4801 10.6976 14.0978 10.7836L14.0978 10.7836L14.0978 10.7836C14.7155 10.8695 15.0244 10.9125 15.2811 10.8383C15.6234 10.7394 15.915 10.4989 16.0918 10.1696C16.2244 9.92273 16.2645 9.59191 16.3447 8.93026L16.3447 8.93024Z" fill={color}/>
	<Path d="M7.7611 19.925L7.06908 17.1586C6.90786 16.5142 6.82725 16.1919 6.86196 15.9095C6.90824 15.533 7.09227 15.1916 7.37356 14.9604C7.58453 14.787 7.88537 14.7006 8.48705 14.5279C9.08873 14.3552 9.38957 14.2689 9.65322 14.3061C10.0047 14.3556 10.3235 14.5528 10.5393 14.8541C10.7012 15.08 10.8683 15.7481 11.0296 16.3926L17.0019 14.6784C16.8407 14.0339 16.6736 13.3659 16.7083 13.0835C16.7546 12.707 16.9386 12.3656 17.2199 12.1344C17.4309 11.961 17.7317 11.8746 18.3334 11.7019C18.9351 11.5292 19.2359 11.4429 19.4996 11.4801C19.8511 11.5296 20.1698 11.7268 20.3857 12.0281C20.5476 12.254 20.6282 12.5763 20.7894 13.2208L21.4814 15.9871C21.6426 16.6316 21.7232 16.9539 21.6885 17.2363C21.6423 17.6128 21.4582 17.9542 21.1769 18.1854C20.966 18.3588 20.6651 18.4451 20.0635 18.6178L20.0634 18.6178L20.0634 18.6178C19.4618 18.7905 19.1609 18.8769 18.8973 18.8397C18.5457 18.7901 18.227 18.593 18.0112 18.2917C17.8493 18.0657 17.6822 17.3977 17.5209 16.7532L11.5486 18.4673C11.7098 19.1118 11.8769 19.7799 11.8422 20.0623C11.7959 20.4388 11.6119 20.7802 11.3306 21.0114C11.1196 21.1848 10.8188 21.2711 10.2171 21.4438L10.2171 21.4438L10.2171 21.4438C9.61541 21.6165 9.31457 21.7029 9.05093 21.6657C8.6994 21.6161 8.38065 21.419 8.16481 21.1177C8.00293 20.8917 7.92232 20.5695 7.7611 19.925Z" fill={color}/>
</Svg>;

export default BoldSportsDumbbells;
