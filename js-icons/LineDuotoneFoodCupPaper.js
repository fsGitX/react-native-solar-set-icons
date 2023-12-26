import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneFoodCupPaper = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20.1728 5.86056L20.8842 5.62316L20.8842 5.62316L20.1728 5.86056ZM20.2086 5.96791L19.4972 6.20531L19.4972 6.20531L20.2086 5.96791ZM3.79127 5.96791L4.50271 6.20531L4.50271 6.20531L3.79127 5.96791ZM3.82709 5.86056L3.11566 5.62316L3.11566 5.62316L3.82709 5.86056ZM6.99915 18.5795L6.25706 18.6881L6.99915 18.5795ZM17.0007 18.5794L17.7428 18.6881L17.7428 18.6881L17.0007 18.5794ZM3.48151 7.76195L4.16125 7.44501L4.16125 7.44501L3.48151 7.76195ZM3.7001 8.06533L4.2159 7.52086L4.2159 7.52086L3.7001 8.06533ZM20.5184 7.76195L21.1981 8.0789L21.1981 8.07889L20.5184 7.76195ZM20.2998 8.06533L19.784 7.52085L19.784 7.52086L20.2998 8.06533ZM18.2942 2.44432L18.6869 1.8054L18.6869 1.8054L18.2942 2.44432ZM18.65 2.70069L18.1682 3.27551L18.1682 3.27551L18.65 2.70069ZM7.92067 21.5132L7.43026 22.0806L7.43026 22.0806L7.92067 21.5132ZM5.70573 2.44432L5.31294 1.8054L5.31294 1.8054L5.70573 2.44432ZM5.34992 2.70069L5.83165 3.27551L5.83166 3.27551L5.34992 2.70069ZM9.18515 2.75H14.8147V1.25H9.18515V2.75ZM19.4613 6.09796L19.4972 6.20531L20.92 5.73052L20.8842 5.62316L19.4613 6.09796ZM4.50271 6.20531L4.53853 6.09796L3.11566 5.62316L3.07983 5.73051L4.50271 6.20531ZM10.957 22.75H13.0429V21.25H10.957V22.75ZM18.4999 7.58937H5.49994V9.08937H18.4999V7.58937ZM4.75785 8.44801L6.25706 18.6881L7.74124 18.4708L6.24203 8.23072L4.75785 8.44801ZM17.7428 18.6881L19.242 8.44801L17.7579 8.23072L16.2586 18.4708L17.7428 18.6881ZM13.0429 22.75C13.8478 22.75 14.5216 22.7514 15.0619 22.6833C15.6232 22.6125 16.1336 22.4575 16.5696 22.0806L15.5888 20.9457C15.4616 21.0557 15.2781 21.1441 14.8743 21.195C14.4494 21.2486 13.8868 21.25 13.0429 21.25V22.75ZM16.2586 18.4708C16.1364 19.3057 16.0535 19.8623 15.939 20.2749C15.8301 20.6671 15.716 20.8358 15.5888 20.9457L16.5696 22.0806C17.0057 21.7038 17.233 21.2212 17.3843 20.6761C17.53 20.1513 17.6262 19.4844 17.7428 18.6881L16.2586 18.4708ZM3.07983 5.73051C2.9265 6.19001 2.789 6.59809 2.71921 6.93604C2.64763 7.28264 2.61732 7.68331 2.80177 8.07889L4.16125 7.44501C4.17731 7.47945 4.1425 7.46074 4.18821 7.23942C4.2357 7.00945 4.33727 6.70108 4.50271 6.20531L3.07983 5.73051ZM5.49994 7.58937C4.9773 7.58937 4.65264 7.58811 4.41946 7.56036C4.19505 7.53366 4.18831 7.49472 4.2159 7.52086L3.1843 8.6098C3.50116 8.90997 3.89082 9.00805 4.24225 9.04986C4.58491 9.09063 5.01553 9.08937 5.49994 9.08937V7.58937ZM2.80177 8.07889C2.89476 8.27834 3.02454 8.45845 3.1843 8.6098L4.2159 7.52086C4.19308 7.49924 4.17454 7.47351 4.16125 7.44501L2.80177 8.07889ZM19.4972 6.20531C19.6626 6.70108 19.7642 7.00945 19.8117 7.23942C19.8574 7.46074 19.8226 7.47946 19.8386 7.44501L21.1981 8.07889C21.3826 7.68331 21.3522 7.28264 21.2807 6.93604C21.2109 6.5981 21.0734 6.19001 20.92 5.73051L19.4972 6.20531ZM18.4999 9.08937C18.9843 9.08937 19.415 9.09063 19.7576 9.04986C20.1091 9.00805 20.4987 8.90997 20.8156 8.6098L19.784 7.52086C19.8116 7.49472 19.8048 7.53366 19.5804 7.56036C19.3472 7.58811 19.0226 7.58937 18.4999 7.58937V9.08937ZM19.8386 7.44501C19.8253 7.47351 19.8068 7.49924 19.784 7.52085L20.8156 8.6098C20.9753 8.45845 21.1051 8.27833 21.1981 8.0789L19.8386 7.44501ZM14.8147 2.75C15.7488 2.75 16.3938 2.75089 16.8972 2.80174C17.3848 2.851 17.6718 2.9421 17.9014 3.08324L18.6869 1.8054C18.1938 1.50222 17.6599 1.37116 17.048 1.30934C16.4518 1.24911 15.7185 1.25 14.8147 1.25V2.75ZM20.8842 5.62316C20.5982 4.76589 20.3669 4.06998 20.121 3.52355C19.8687 2.96264 19.5754 2.4977 19.1317 2.12586L18.1682 3.27551C18.3748 3.44861 18.552 3.69197 18.7531 4.13895C18.9607 4.6004 19.1657 5.21196 19.4614 6.09796L20.8842 5.62316ZM17.9014 3.08324C17.9949 3.14073 18.0841 3.205 18.1682 3.27551L19.1317 2.12586C18.9915 2.00833 18.8428 1.90122 18.6869 1.8054L17.9014 3.08324ZM10.957 21.25C10.1131 21.25 9.55043 21.2486 9.12562 21.195C8.72175 21.1441 8.5383 21.0557 8.41109 20.9457L7.43026 22.0806C7.86632 22.4575 8.37668 22.6125 8.93796 22.6833C9.47831 22.7514 10.1521 22.75 10.957 22.75V21.25ZM6.25706 18.6881C6.37365 19.4844 6.46988 20.1513 6.61558 20.6761C6.76691 21.2212 6.99419 21.7038 7.43026 22.0806L8.41109 20.9457C8.28388 20.8358 8.16981 20.6671 8.06091 20.2749C7.94637 19.8623 7.86348 19.3057 7.74124 18.4708L6.25706 18.6881ZM9.18515 1.25C8.2814 1.25 7.54807 1.24911 6.95192 1.30934C6.33998 1.37116 5.80611 1.50222 5.31294 1.8054L6.09851 3.08324C6.32809 2.9421 6.61504 2.851 7.10268 2.80174C7.60611 2.75089 8.25112 2.75 9.18515 2.75V1.25ZM4.53853 6.09796C4.83418 5.21195 5.03919 4.60039 5.24678 4.13895C5.44786 3.69197 5.6251 3.44861 5.83165 3.27551L4.86818 2.12586C4.42448 2.4977 4.13117 2.96264 3.87883 3.52354C3.63301 4.06997 3.40172 4.76588 3.11566 5.62316L4.53853 6.09796ZM5.31294 1.8054C5.15707 1.90122 5.00842 2.00833 4.86818 2.12586L5.83166 3.27551C5.9158 3.205 6.00499 3.14073 6.09851 3.08324L5.31294 1.8054Z" fill={color}/>
	<Path d="M6.5 12H17.5" opacity="0.4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 17H17" opacity="0.4" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneFoodCupPaper;
