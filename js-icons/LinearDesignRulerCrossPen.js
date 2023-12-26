import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearDesignRulerCrossPen = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.2535 19.4243C12.9606 19.1314 12.4857 19.1314 12.1928 19.4243C11.8999 19.7172 11.8999 20.1921 12.1928 20.485L13.2535 19.4243ZM18.5083 19.9546L19.0387 20.485L19.0387 20.485L18.5083 19.9546ZM4.04537 5.49167L4.5757 6.022L4.5757 6.022L4.04537 5.49167ZM3.51504 11.8072C3.80794 12.1001 4.28281 12.1001 4.5757 11.8072C4.8686 11.5143 4.8686 11.0394 4.5757 10.7465L3.51504 11.8072ZM11.2769 4.04537L11.8072 4.5757C11.9478 4.43505 12.0269 4.24428 12.0269 4.04537C12.0269 3.84646 11.9478 3.65569 11.8072 3.51504L11.2769 4.04537ZM5.49167 4.04537L4.96134 3.51504L4.96134 3.51504L5.49167 4.04537ZM19.9546 12.7231L20.485 12.1928C20.3443 12.0522 20.1535 11.9731 19.9546 11.9731C19.7557 11.9731 19.565 12.0522 19.4243 12.1928L19.9546 12.7231ZM19.9546 18.5083L19.4243 17.978L19.4243 17.978L19.9546 18.5083ZM8.33603 5.92553C8.04314 6.21843 8.04314 6.6933 8.33603 6.98619C8.62892 7.27909 9.1038 7.27909 9.39669 6.98619L8.33603 5.92553ZM17.0138 14.6033C16.7209 14.8962 16.7209 15.3711 17.0138 15.664C17.3067 15.9569 17.7816 15.9569 18.0745 15.664L17.0138 14.6033ZM4.96134 3.51504L3.51504 4.96134L4.5757 6.022L6.022 4.5757L4.96134 3.51504ZM19.0387 20.485L20.485 19.0387L19.4243 17.978L17.978 19.4243L19.0387 20.485ZM12.1928 20.485C12.8596 21.1518 13.4119 21.7063 13.9081 22.0849C14.4217 22.4767 14.9622 22.75 15.6157 22.75L15.6157 21.25C15.422 21.25 15.1981 21.1824 14.818 20.8924C14.4206 20.5892 13.9503 20.1211 13.2535 19.4243L12.1928 20.485ZM17.978 19.4243C17.2812 20.1211 16.8109 20.5892 16.4135 20.8924C16.0334 21.1824 15.8094 21.25 15.6157 21.25L15.6157 22.75C16.2693 22.75 16.8098 22.4767 17.3233 22.0849C17.8195 21.7063 18.3719 21.1518 19.0387 20.485L17.978 19.4243ZM3.51504 4.96134C2.84824 5.62814 2.29367 6.18046 1.91508 6.67666C1.52328 7.19017 1.25 7.73073 1.25 8.38426L2.75 8.38426C2.75 8.19057 2.81761 7.96662 3.10761 7.58654C3.41081 7.18914 3.87892 6.71878 4.5757 6.022L3.51504 4.96134ZM4.5757 10.7465C3.87892 10.0497 3.41081 9.57937 3.10761 9.18198C2.81761 8.8019 2.75 8.57795 2.75 8.38426L1.25 8.38426C1.25 9.03779 1.52328 9.57835 1.91508 10.0919C2.29367 10.5881 2.84824 11.1404 3.51504 11.8072L4.5757 10.7465ZM11.8072 3.51504C11.1404 2.84824 10.5881 2.29367 10.0919 1.91508C9.57835 1.52328 9.03779 1.25 8.38426 1.25L8.38426 2.75C8.57795 2.75 8.8019 2.81761 9.18199 3.10761C9.57938 3.41081 10.0497 3.87892 10.7465 4.5757L11.8072 3.51504ZM6.022 4.5757C6.71878 3.87892 7.18914 3.41081 7.58654 3.10761C7.96662 2.81762 8.19057 2.75 8.38426 2.75L8.38426 1.25C7.73073 1.25 7.19018 1.52328 6.67666 1.91508C6.18046 2.29367 5.62814 2.84824 4.96134 3.51504L6.022 4.5757ZM19.4243 13.2535C20.1211 13.9503 20.5892 14.4206 20.8924 14.818C21.1824 15.1981 21.25 15.422 21.25 15.6157L22.75 15.6157C22.75 14.9622 22.4767 14.4217 22.0849 13.9081C21.7063 13.4119 21.1518 12.8596 20.485 12.1928L19.4243 13.2535ZM20.485 19.0387C21.1518 18.3719 21.7063 17.8195 22.0849 17.3233C22.4767 16.8098 22.75 16.2693 22.75 15.6157L21.25 15.6157C21.25 15.8094 21.1824 16.0334 20.8924 16.4135C20.5892 16.8109 20.1211 17.2812 19.4243 17.978L20.485 19.0387ZM10.7465 3.51504L8.33603 5.92553L9.39669 6.98619L11.8072 4.5757L10.7465 3.51504ZM19.4243 12.1928L17.0138 14.6033L18.0745 15.664L20.485 13.2535L19.4243 12.1928Z" fill={color}/>
	<Path d="M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L5.83882 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.58917 19L2.32181 19.8021M19.9213 9.63993L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L5 21.4108L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearDesignRulerCrossPen;
