import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneEssentionalBoltCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill={color} opacity="0.5"/>
	<Path d="M11.2274 8.56904L9.21236 10.1737C8.36695 10.8469 7.94424 11.1836 8.02675 11.5594L8.03114 11.578C8.12514 11.9515 8.66096 12.0951 9.73259 12.3823C10.3281 12.5418 10.6259 12.6216 10.7656 12.8473L10.7727 12.8592C10.9075 13.0876 10.8308 13.3737 10.6775 13.9459L10.6374 14.0954L10.6374 14.0954C10.2123 15.6818 9.99979 16.4749 10.4091 16.7311C10.8184 16.9872 11.4697 16.4686 12.7722 15.4314L12.7723 15.4314L14.7873 13.8267C15.6327 13.1535 16.0554 12.8169 15.9729 12.441L15.9686 12.4224C15.8745 12.0489 15.3387 11.9053 14.2671 11.6182C13.6716 11.4586 13.3738 11.3788 13.2341 11.1531L13.227 11.1412C13.0922 10.9128 13.1689 10.6267 13.3222 10.0546L13.3623 9.905C13.7873 8.31864 13.9999 7.52547 13.5905 7.26931C13.1812 7.01316 12.5299 7.53179 11.2274 8.56904Z" fill={color}/>
</Svg>;

export default BoldDuotoneEssentionalBoltCircle;