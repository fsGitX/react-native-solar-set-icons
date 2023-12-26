import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineCloudBoltMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.4762 2.75C9.7261 2.75 7.5119 4.95083 7.5119 7.64706C7.5119 8.10922 7.5766 8.55551 7.69729 8.97813C8.19449 9.12162 8.65991 9.3389 9.08045 9.61709C9.42592 9.84561 9.52072 10.3109 9.29219 10.6564C9.06366 11.0019 8.59835 11.0967 8.25288 10.8681C7.87207 10.6162 7.43917 10.4355 6.9733 10.3451C6.75147 10.3021 6.52165 10.2794 6.28571 10.2794C4.3246 10.2794 2.75 11.8482 2.75 13.7647C2.75 15.6812 4.3246 17.25 6.28571 17.25C6.69993 17.25 7.03571 17.5858 7.03571 18C7.03571 18.4142 6.69993 18.75 6.28571 18.75C3.51296 18.75 1.25 16.5264 1.25 13.7647C1.25 11.0605 3.41987 8.87207 6.11351 8.78228C6.04673 8.41355 6.0119 8.03413 6.0119 7.64706C6.0119 4.10572 8.91446 1.25 12.4762 1.25C15.6343 1.25 18.2724 3.49369 18.8314 6.47127C21.1313 7.44751 22.75 9.70929 22.75 12.3529C22.75 15.4269 20.5623 17.9843 17.6568 18.6057C17.2518 18.6923 16.8532 18.4341 16.7666 18.0291C16.68 17.624 16.9381 17.2254 17.3432 17.1388C19.5829 16.6598 21.25 14.693 21.25 12.3529C21.25 10.2162 19.8607 8.39087 17.9124 7.72463C17.4038 7.55072 16.8568 7.45588 16.2857 7.45588C15.7031 7.45588 15.1455 7.55458 14.6283 7.73526C14.2372 7.87185 13.8095 7.66557 13.6729 7.27453C13.5363 6.88348 13.7426 6.45575 14.1336 6.31916C14.8079 6.08364 15.5326 5.95588 16.2857 5.95588C16.5812 5.95588 16.8723 5.97555 17.1577 6.01367C16.477 4.11631 14.6422 2.75 12.4762 2.75ZM14.8539 14.1257C15.1243 14.4395 15.0891 14.913 14.7753 15.1834L12.0195 17.5578H14.2857C14.5992 17.5578 14.8797 17.7529 14.9888 18.0467C15.0979 18.3406 15.0128 18.6714 14.7752 18.8761L10.4895 22.5684C10.1757 22.8387 9.70215 22.8035 9.43179 22.4897C9.16143 22.1759 9.19666 21.7023 9.51047 21.4319L12.2661 19.0578H10C9.6865 19.0578 9.40607 18.8629 9.29692 18.569C9.18777 18.2751 9.27294 17.9443 9.51044 17.7397L13.7962 14.047C14.11 13.7767 14.5835 13.8119 14.8539 14.1257Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineCloudBoltMinimalistic;