import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenDesignFlipVertical = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8 22H5.88616C4.18402 22 3.33294 22 3.05381 21.4576C2.77467 20.9152 3.26934 20.2226 4.25869 18.8375L5.38815 17.2563C5.82805 16.6404 6.048 16.3325 6.37105 16.1662C6.69411 16 7.07252 16 7.82935 16L16.1702 16C16.927 16 17.3055 16 17.6285 16.1662C17.9516 16.3325 18.1715 16.6404 18.6114 17.2563L19.7409 18.8375C20.7302 20.2226 21.2249 20.9152 20.9458 21.4576C20.6666 22 19.8156 22 18.1134 22H12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 2L5.88616 2C4.18402 2 3.33294 2 3.05381 2.54242C2.77467 3.08484 3.26934 3.77738 4.25869 5.16247L5.38815 6.74372C5.82805 7.35957 6.048 7.6675 6.37105 7.83375C6.69411 8 7.07252 8 7.82935 8L16.1702 8C16.927 8 17.3055 8 17.6285 7.83375C17.9516 7.6675 18.1715 7.35957 18.6114 6.74372L19.7409 5.16248C20.7302 3.77738 21.2249 3.08484 20.9458 2.54242C20.6666 2 19.8156 2 18.1134 2L16.0567 2" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 12L10 12M6 12L2 12M22 12L18 12" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenDesignFlipVertical;