import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineBroom = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21.0364 2.88398C21.3293 3.17687 21.3293 3.65174 21.0364 3.94464L19.4038 5.57726C20.6349 7.27255 20.6066 9.59817 19.3188 11.2644L19.3226 11.2965L19.2908 11.3003C19.2908 11.3004 19.2909 11.3002 19.2908 11.3003C19.3228 11.2965 19.3226 11.2964 19.3226 11.2965L19.3232 11.301L19.3241 11.3091L19.327 11.3363C19.3294 11.3591 19.3326 11.3913 19.3363 11.4323C19.3436 11.5144 19.3527 11.6319 19.3609 11.7807C19.3772 12.0782 19.3896 12.5016 19.3753 13.0167C19.3469 14.0444 19.2118 15.4512 18.7813 16.9571C18.4903 17.975 18.0374 18.9821 17.5724 19.8627C16.4113 22.0618 13.7396 22.7186 11.6963 21.6757L11.6714 21.6629L10.5511 20.9814C7.4412 19.0895 4.83066 16.479 2.93877 13.3691L2.25736 12.2489L2.24465 12.224C1.20165 10.1807 1.85845 7.50904 4.05755 6.34792C4.93823 5.88293 5.94532 5.42997 6.96319 5.13898C8.46913 4.70847 9.87585 4.57343 10.9036 4.54497C11.4187 4.5307 11.8421 4.54313 12.1396 4.55943C12.2884 4.56759 12.4059 4.57673 12.488 4.58404C12.529 4.58769 12.5612 4.59089 12.584 4.59328L12.6111 4.59622L12.6193 4.59715L12.622 4.59746L12.623 4.59758C12.6231 4.59759 12.6236 4.59764 12.6198 4.63008C12.6198 4.63003 12.6197 4.63013 12.6198 4.63008L12.623 4.59758L12.6563 4.60156C14.3225 3.31392 16.6479 3.28555 18.3431 4.5166L19.9758 2.88398C20.2687 2.59108 20.7435 2.59108 21.0364 2.88398ZM12.1975 6.06581C12.1557 6.06293 12.1089 6.06 12.0575 6.05718C11.7957 6.04283 11.4139 6.03141 10.9451 6.0444C10.005 6.07043 8.72905 6.19426 7.37549 6.58121C6.49162 6.83388 5.58485 7.23776 4.75792 7.67438C3.35129 8.41707 2.88488 10.1486 3.56876 11.5185L4.22028 12.5895C5.98742 15.4944 8.42584 17.9328 11.3307 19.6999L12.4018 20.3515C13.7717 21.0354 15.5032 20.569 16.2459 19.1624C16.6825 18.3354 17.0864 17.4287 17.3391 16.5448C17.726 15.1912 17.8499 13.9153 17.8759 12.9752C17.8889 12.5064 17.8775 12.1246 17.8631 11.8628C17.8603 11.8114 17.8574 11.7646 17.8545 11.7228L12.1975 6.06581ZM18.3234 10.0703L13.8502 5.59715C15.1031 4.82305 16.7678 4.97932 17.8544 6.06596C18.9411 7.15262 19.0974 8.81738 18.3234 10.0703Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineBroom;
