import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneSportsHiking = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="11.5" cy="4.5" r="2.5" stroke="black" strokeWidth="1.5"/>
	<Path d="M9 17.5L6 22" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10.3754 11.2461L11.1217 11.3208L11.1217 11.3208L10.3754 11.2461ZM10.2132 12.8678L10.9595 12.9424L10.2132 12.8678ZM14.003 11.3358L13.5229 11.9119L13.5229 11.9119L14.003 11.3358ZM14.0844 11.4036L14.5645 10.8274L14.5645 10.8274L14.0844 11.4036ZM17.9157 11.4036L17.4355 10.8274L17.4355 10.8274L17.9157 11.4036ZM19.4802 11.0761C19.7984 10.8109 19.8414 10.338 19.5762 10.0198C19.311 9.7016 18.8381 9.6586 18.5199 9.92378L19.4802 11.0761ZM14.2282 20.064L14.9752 19.9976L14.9752 19.9976L14.2282 20.064ZM13.6534 22.0664C13.6901 22.479 14.0543 22.7837 14.4669 22.747C14.8795 22.7103 15.1842 22.3461 15.1475 21.9335L13.6534 22.0664ZM15.3142 12.2752L15.057 12.9798L15.057 12.9798L15.3142 12.2752ZM16.6859 12.2752L16.9431 12.9798L16.9431 12.9798L16.6859 12.2752ZM12.0937 10.2421L11.9136 10.9702L11.9136 10.9702L12.0937 10.2421ZM12.2424 10.2983L11.9998 11.008L11.9998 11.008L12.2424 10.2983ZM13.4813 10.9255L13.9097 10.3099L13.9097 10.3099L13.4813 10.9255ZM11.8171 16.1356L12.2146 15.4996L12.2146 15.4996L11.8171 16.1356ZM13.4812 17.3717L12.8969 17.842L12.8969 17.842L13.4812 17.3717ZM13.8794 18.0206L13.1956 18.3287L13.1956 18.3287L13.8794 18.0206ZM10.2049 14.5594L9.48906 14.7832L9.48906 14.7832L10.2049 14.5594ZM10.4738 15.1074L9.85886 15.5367L9.85886 15.5367L10.4738 15.1074ZM10.4855 10.6839L11.1677 10.9956L11.1677 10.9956L10.4855 10.6839ZM11.3087 10.1032L11.244 9.356L11.244 9.356L11.3087 10.1032ZM9.62912 11.1715L9.46695 12.7932L10.9595 12.9424L11.1217 11.3208L9.62912 11.1715ZM13.5229 11.9119L13.6042 11.9797L14.5645 10.8274L14.4831 10.7596L13.5229 11.9119ZM18.3958 11.9797L19.4802 11.0761L18.5199 9.92378L17.4355 10.8274L18.3958 11.9797ZM13.4811 20.1305L13.6534 22.0664L15.1475 21.9335L14.9752 19.9976L13.4811 20.1305ZM13.6042 11.9797C14.1593 12.4423 14.5771 12.8046 15.057 12.9798L15.5714 11.5707C15.3971 11.5071 15.2131 11.3679 14.5645 10.8274L13.6042 11.9797ZM17.4355 10.8274C16.787 11.3679 16.6029 11.5071 16.4287 11.5707L16.9431 12.9798C17.423 12.8046 17.8407 12.4423 18.3958 11.9797L17.4355 10.8274ZM15.057 12.9798C15.666 13.2021 16.334 13.2021 16.9431 12.9798L16.4287 11.5707C16.1518 11.6718 15.8482 11.6718 15.5714 11.5707L15.057 12.9798ZM11.9136 10.9702C11.9148 10.9705 11.9156 10.9707 11.9163 10.9709C11.917 10.971 11.9171 10.9711 11.9169 10.971C11.9168 10.971 11.9158 10.9707 11.9141 10.9703C11.9127 10.97 11.9091 10.969 11.9045 10.9678C11.9006 10.9667 11.8907 10.964 11.8781 10.96C11.8715 10.9579 11.8616 10.9547 11.8496 10.9504C11.8385 10.9464 11.8195 10.9393 11.7966 10.929C11.7847 10.9237 11.7694 10.9164 11.7519 10.9071C11.7348 10.898 11.7116 10.8848 11.6852 10.8671C11.6597 10.8499 11.6235 10.8233 11.5844 10.7858C11.5462 10.749 11.4931 10.6903 11.4471 10.6069C11.3992 10.5199 11.358 10.4038 11.3543 10.2653C11.3525 10.1974 11.3599 10.1312 11.3751 10.0683C11.3903 10.0058 11.4122 9.95039 11.4367 9.90261C11.4847 9.80912 11.5429 9.74382 11.5854 9.70318C11.6284 9.66203 11.6683 9.63367 11.6953 9.61613C11.7231 9.59803 11.7473 9.58499 11.7638 9.57658C11.7808 9.56794 11.7951 9.56148 11.8048 9.55727C11.8225 9.54954 11.837 9.54412 11.838 9.54377C11.8443 9.54135 11.8355 9.54468 11.8311 9.54641C11.8241 9.54912 11.8106 9.55452 11.7938 9.56214C11.7771 9.5697 11.7531 9.58132 11.7252 9.59756C11.6977 9.61364 11.6611 9.63737 11.6214 9.6706C11.5817 9.70391 11.534 9.75096 11.4893 9.81456C11.4437 9.87956 11.4028 9.95989 11.3779 10.0546C11.3528 10.15 11.3478 10.245 11.3584 10.3339C11.3687 10.4209 11.3928 10.4943 11.4184 10.5517C11.4439 10.6086 11.4726 10.6539 11.497 10.6874C11.5216 10.7212 11.5454 10.7481 11.565 10.7682C11.6029 10.8073 11.6376 10.8346 11.6592 10.8505C11.6822 10.8674 11.7023 10.8802 11.7165 10.8888C11.7441 10.9056 11.7676 10.9174 11.7808 10.9238C11.7955 10.931 11.8084 10.9367 11.8181 10.9409C11.8372 10.9491 11.8557 10.9564 11.8716 10.9624C11.9036 10.9746 11.9453 10.9894 11.9998 11.008L12.4849 9.58862C12.4367 9.57215 12.4131 9.56355 12.404 9.56007C12.3992 9.55825 12.4031 9.55963 12.4119 9.56343C12.4165 9.56539 12.4253 9.56928 12.4367 9.57484C12.4467 9.57971 12.4679 9.59024 12.4938 9.60598C12.5072 9.61408 12.5266 9.62641 12.549 9.64295C12.5701 9.65845 12.6044 9.6854 12.642 9.72416C12.6763 9.75951 12.7394 9.83125 12.788 9.93989C12.8136 9.99721 12.8376 10.0705 12.8479 10.1574C12.8585 10.2462 12.8535 10.3411 12.8285 10.4364C12.7774 10.6303 12.6637 10.7542 12.5852 10.82C12.5104 10.8827 12.4409 10.9157 12.4133 10.9282C12.3858 10.9407 12.3565 10.9513 12.3696 10.9464C12.3706 10.946 12.3852 10.9406 12.403 10.9328C12.4175 10.9265 12.4614 10.9072 12.5127 10.8739C12.5397 10.8563 12.5796 10.8279 12.6226 10.7868C12.6651 10.7461 12.7233 10.6808 12.7713 10.5873C12.8219 10.4887 12.8575 10.3648 12.8537 10.2246C12.85 10.0861 12.8088 9.9699 12.7609 9.88292C12.7149 9.7995 12.6618 9.74077 12.6235 9.704C12.5845 9.66646 12.5482 9.63982 12.5227 9.62261C12.4735 9.5895 12.431 9.56956 12.4111 9.56061C12.3703 9.54229 12.3368 9.53181 12.3286 9.52924C12.3156 9.52514 12.3051 9.52224 12.3005 9.52098C12.2912 9.51844 12.2832 9.51645 12.2817 9.51605C12.2788 9.51534 12.2757 9.51456 12.2738 9.51409L11.9136 10.9702ZM14.4831 10.7596C14.2567 10.5709 14.1185 10.4552 13.9097 10.3099L13.0529 11.5411C13.2006 11.6439 13.2914 11.719 13.5229 11.9119L14.4831 10.7596ZM11.9998 11.008C12.2966 11.1095 12.7954 11.362 13.0529 11.5411L13.9097 10.3099C13.5377 10.051 12.9137 9.73518 12.4849 9.58862L11.9998 11.008ZM11.4196 16.7716C12.362 17.3606 12.6774 17.5692 12.8969 17.842L14.0654 16.9015C13.6498 16.3851 13.0675 16.0327 12.2146 15.4996L11.4196 16.7716ZM14.9752 19.9976C14.8861 18.9957 14.8355 18.3169 14.5633 17.7126L13.1956 18.3287C13.3394 18.6479 13.3826 19.0236 13.4811 20.1305L14.9752 19.9976ZM12.8969 17.842C13.0167 17.9909 13.1171 18.1544 13.1956 18.3287L14.5633 17.7126C14.4324 17.4222 14.2651 17.1496 14.0654 16.9015L12.8969 17.842ZM9.46695 12.7932C9.38682 13.5945 9.31061 14.2126 9.48906 14.7832L10.9207 14.3356C10.8555 14.1269 10.8661 13.877 10.9595 12.9424L9.46695 12.7932ZM12.2146 15.4996C11.4181 15.0018 11.2139 14.8573 11.0888 14.6781L9.85886 15.5367C10.2011 16.027 10.7366 16.3448 11.4196 16.7716L12.2146 15.4996ZM9.48906 14.7832C9.57305 15.0518 9.69777 15.306 9.85886 15.5367L11.0888 14.6781C11.0156 14.5732 10.9589 14.4577 10.9207 14.3356L9.48906 14.7832ZM11.1217 11.3208C11.1364 11.1737 11.1439 11.1029 11.1534 11.0495C11.1602 11.0113 11.1646 11.0022 11.1677 10.9956L9.80333 10.3722C9.67273 10.658 9.65338 10.9289 9.62912 11.1715L11.1217 11.3208ZM12.2738 9.51409C12.0751 9.46496 11.8976 9.42078 11.7495 9.39239C11.5998 9.3637 11.428 9.34006 11.244 9.356L11.3735 10.8504C11.3548 10.852 11.369 10.8468 11.4671 10.8656C11.5669 10.8847 11.6991 10.9172 11.9136 10.9702L12.2738 9.51409ZM11.1677 10.9956C11.1606 11.011 11.1607 11.0047 11.1811 10.9821C11.2001 10.9611 11.228 10.9358 11.2625 10.9115C11.297 10.8872 11.3301 10.8694 11.3563 10.8585C11.3844 10.8469 11.3904 10.8489 11.3735 10.8504L11.244 9.356C10.9178 9.38426 10.6187 9.53001 10.3979 9.68576C10.1771 9.84151 9.93939 10.0744 9.80333 10.3722L11.1677 10.9956Z" fill={color}/>
	<Path d="M19 22V8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 10L6.328 10.5573C5.53493 10.8217 5 11.5639 5 12.3998C5 12.7677 5.20781 13.1039 5.5368 13.2684L8 14.5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneSportsHiking;
