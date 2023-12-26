import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenEssentionalBroom = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21.0364 3.94464C21.3293 3.65174 21.3293 3.17687 21.0364 2.88398C20.7435 2.59108 20.2686 2.59108 19.9758 2.88398L21.0364 3.94464ZM12.1976 5.00537C11.9047 5.29827 11.9047 5.77314 12.1976 6.06603C12.4905 6.35893 12.9654 6.35893 13.2583 6.06603L12.1976 5.00537ZM18.3848 11.1926L17.8545 11.7229C17.9951 11.8635 18.1859 11.9426 18.3848 11.9426C18.5837 11.9426 18.7745 11.8635 18.9151 11.7229L18.3848 11.1926ZM3.57952 12.9793L4.22027 12.5895L3.57952 12.9793ZM2.91264 11.883L2.24464 12.224L2.25736 12.2489L2.27189 12.2728L2.91264 11.883ZM4.40773 7.01115L4.75791 7.67438L4.75791 7.67438L4.40773 7.01115ZM7.16933 5.8601L7.37548 6.58121L7.37548 6.58121L7.16933 5.8601ZM12.5347 5.34237L13.0651 4.81204L12.8815 4.6285L12.6238 4.59767L12.5347 5.34237ZM10.9409 20.3407L11.3307 19.6999L11.3307 19.6999L10.9409 20.3407ZM12.0373 21.0076L11.6475 21.6484L11.6714 21.6629L11.6963 21.6757L12.0373 21.0076ZM16.9091 19.5126L16.2459 19.1624L16.2459 19.1624L16.9091 19.5126ZM18.0602 16.751L18.7813 16.9571L18.7813 16.9571L18.0602 16.751ZM18.9837 16.1659C19.0754 15.7619 18.8222 15.3602 18.4182 15.2686C18.0142 15.177 17.6125 15.4302 17.5209 15.8341L18.9837 16.1659ZM19.9758 2.88398L17.8544 5.0053L18.9151 6.06596L21.0364 3.94464L19.9758 2.88398ZM13.2583 6.06603C14.5275 4.79681 16.5853 4.79677 17.8544 6.06596L18.9151 5.0053C17.0601 3.15029 14.0526 3.1504 12.1976 5.00537L13.2583 6.06603ZM17.8544 6.06596C19.1237 7.33517 19.1237 9.39303 17.8545 10.6622L18.9151 11.7229C20.7701 9.86789 20.7701 6.86028 18.9151 5.0053L17.8544 6.06596ZM4.22027 12.5895L3.5534 11.4932L2.27189 12.2728L2.93877 13.3691L4.22027 12.5895ZM4.75791 7.67438C5.58484 7.23776 6.49161 6.83388 7.37548 6.58121L6.96319 5.13898C5.94531 5.42997 4.93822 5.88293 4.05755 6.34792L4.75791 7.67438ZM7.37548 6.58121C8.72904 6.19426 10.005 6.07043 10.9451 6.0444C11.4139 6.03141 11.7957 6.04283 12.0575 6.05718C12.1882 6.06435 12.2888 6.07224 12.3549 6.07813C12.388 6.08107 12.4125 6.08352 12.4278 6.08512C12.4354 6.08592 12.4408 6.08651 12.4438 6.08685C12.4453 6.08702 12.4462 6.08712 12.4465 6.08716C12.4467 6.08718 12.4467 6.08718 12.4465 6.08716C12.4465 6.08715 12.4464 6.08714 12.4462 6.08712C12.4461 6.08712 12.446 6.0871 12.446 6.08709C12.4458 6.08708 12.4457 6.08706 12.5347 5.34237C12.6238 4.59767 12.6236 4.59765 12.6234 4.59763C12.6234 4.59762 12.6232 4.5976 12.623 4.59758C12.6227 4.59755 12.6224 4.59751 12.622 4.59746C12.6213 4.59737 12.6204 4.59727 12.6193 4.59715C12.6172 4.5969 12.6145 4.59659 12.6111 4.59622C12.6045 4.59547 12.5954 4.59448 12.584 4.59328C12.5612 4.59089 12.529 4.58769 12.488 4.58404C12.4059 4.57673 12.2884 4.56759 12.1396 4.55943C11.8421 4.54313 11.4187 4.5307 10.9036 4.54497C9.87585 4.57343 8.46912 4.70847 6.96319 5.13898L7.37548 6.58121ZM3.58065 11.5421C2.87955 10.1685 3.34321 8.42133 4.75791 7.67438L4.05755 6.34792C1.85844 7.50904 1.20164 10.1807 2.24464 12.224L3.58065 11.5421ZM10.5511 20.9814L11.6475 21.6484L12.4271 20.3669L11.3307 19.6999L10.5511 20.9814ZM17.5724 19.8627C18.0374 18.9821 18.4903 17.975 18.7813 16.9571L17.3391 16.5448C17.0864 17.4287 16.6825 18.3354 16.2459 19.1624L17.5724 19.8627ZM11.6963 21.6757C13.7396 22.7186 16.4113 22.0618 17.5724 19.8627L16.2459 19.1624C15.499 20.5771 13.7518 21.0407 12.3782 20.3396L11.6963 21.6757ZM12.0044 5.87269L17.8545 11.7229L18.9151 10.6622L13.0651 4.81204L12.0044 5.87269ZM2.93877 13.3691C4.83065 16.479 7.4412 19.0895 10.5511 20.9814L11.3307 19.6999C8.42583 17.9328 5.98742 15.4944 4.22027 12.5895L2.93877 13.3691ZM18.7813 16.9571C18.8578 16.6895 18.9249 16.4252 18.9837 16.1659L17.5209 15.8341C17.4679 16.0678 17.4076 16.3052 17.3391 16.5448L18.7813 16.9571Z" fill={color}/>
</Svg>;

export default BrokenEssentionalBroom;