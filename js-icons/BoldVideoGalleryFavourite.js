import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldVideoGalleryFavourite = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11ZM16.0453 8.21599C15.2805 7.54543 14.5 6.65193 14.5 5.79802C14.5 4.0249 16.15 3.3629 17.5 4.73262C18.85 3.3629 20.5 4.0249 20.5 5.79801C20.5 6.65194 19.7195 7.54544 18.9548 8.216C18.3586 8.73867 18.0606 9 17.5 9C16.9394 9 16.6414 8.73866 16.0453 8.21599Z" fill={color} fillRule="evenodd"/>
	<Path d="M21.9036 16.4414C21.9871 15.4165 21.9983 14.1674 21.9998 12.6978C22.0002 12.3125 21.6876 12 21.3023 12C20.917 12 20.6048 12.3126 20.6044 12.6979C20.6029 14.1755 20.592 15.3561 20.5128 16.3281C20.4288 17.3597 20.2714 18.091 20.0064 18.6476L17.3734 16.2779C16.4064 15.4076 14.9663 15.3209 13.9019 16.0689L13.6245 16.2639C12.8848 16.7837 11.8785 16.6966 11.2392 16.0573L7.24872 12.0668C6.45225 11.2704 5.17465 11.2278 4.32696 11.9696L3.39567 12.7844C3.39535 12.5314 3.39535 12.2702 3.39535 12C3.39535 9.7877 3.39683 8.19866 3.55942 6.98937C3.7193 5.80016 4.02339 5.08321 4.5533 4.5533C5.08321 4.02339 5.80016 3.7193 6.98937 3.55941C8.06751 3.41446 9.44749 3.39757 11.3019 3.39561C11.6872 3.3952 12 3.08299 12 2.69767C12 2.31236 11.6873 1.99983 11.302 2.00024C9.47346 2.00215 7.97111 2.01952 6.80345 2.17651C5.45951 2.3572 4.39902 2.73426 3.56664 3.56664C2.73426 4.39902 2.3572 5.45951 2.17651 6.80345C1.99998 8.11645 1.99999 9.79928 2 11.9466V12.0009C2 12.4917 2 12.9569 2.00193 13.3967C2.00949 15.1259 2.04591 16.5184 2.24498 17.6376C2.44763 18.777 2.82871 19.6954 3.56664 20.4334C4.39902 21.2657 5.45951 21.6428 6.80345 21.8235C8.11645 22 9.79927 22 11.9466 22H12.0534C14.2007 22 15.8836 22 17.1966 21.8235C18.5405 21.6428 19.601 21.2657 20.4334 20.4334C20.7267 20.1401 20.9676 19.814 21.1636 19.45C21.6081 18.6246 21.8067 17.6308 21.9036 16.4414Z" fill={color}/>
</Svg>;

export default BoldVideoGalleryFavourite;
