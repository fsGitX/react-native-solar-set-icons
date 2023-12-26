import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineVideoMusicLibrary = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.7555 11.7589C12.7552 11.7639 12.7549 11.7693 12.7546 11.7753C12.7502 11.8568 12.75 11.9692 12.75 12.1586C12.75 12.2399 12.7501 12.2815 12.7512 12.3117L12.7528 12.3128C12.7797 12.3274 12.8172 12.3461 12.8902 12.3825L13.8778 12.8737C14.048 12.9583 14.1495 13.0085 14.2249 13.0413C14.2322 13.0444 14.2387 13.0472 14.2445 13.0495C14.2448 13.0446 14.2451 13.0391 14.2454 13.0332C14.2497 12.9517 14.25 12.8392 14.25 12.6498C14.25 12.5686 14.2499 12.527 14.2488 12.4967L14.2472 12.4957C14.2203 12.4811 14.1828 12.4623 14.1097 12.426L13.1222 11.9348C12.952 11.8501 12.8505 11.7999 12.7751 11.7672C12.7678 11.7641 12.7613 11.7613 12.7555 11.7589ZM12.75 13.988L13.2253 14.2244C13.3748 14.2988 13.5121 14.3671 13.6281 14.4174C13.7464 14.4687 13.9005 14.5279 14.0766 14.5484C14.765 14.6283 15.4218 14.2269 15.6599 13.573C15.7208 13.4057 15.7366 13.2408 15.7433 13.1124C15.75 12.9863 15.75 12.8334 15.75 12.6673L15.75 12.6498C15.75 12.6394 15.75 12.6286 15.75 12.6176C15.7503 12.5004 15.7506 12.3533 15.7231 12.2103C15.6535 11.8483 15.4525 11.5254 15.1596 11.3026C15.044 11.2147 14.9124 11.1496 14.8068 11.0974C14.7969 11.0924 14.7872 11.0877 14.7778 11.083L13.7747 10.584C13.6252 10.5097 13.4879 10.4414 13.3718 10.391C13.2536 10.3397 13.0994 10.2805 12.9233 10.2601C12.235 10.1802 11.5782 10.5815 11.3401 11.2355C11.2792 11.4027 11.2634 11.5676 11.2566 11.6961C11.2515 11.7937 11.2503 11.9075 11.2501 12.031L11.25 12.1073C11.25 12.1186 11.25 12.1298 11.25 12.1412V12.1586C11.25 12.1691 11.25 12.1799 11.2499 12.1909C11.2499 12.2138 11.2498 12.2378 11.25 12.2628V14.3932C11.0152 14.3105 10.7627 14.2655 10.5 14.2655C9.26103 14.2655 8.25 15.2658 8.25 16.5078C8.25 17.7498 9.26103 18.75 10.5 18.75C11.739 18.75 12.75 17.7498 12.75 16.5078V13.988ZM11.25 16.5078C11.25 16.1015 10.9179 15.7655 10.5 15.7655C10.0821 15.7655 9.75 16.1015 9.75 16.5078C9.75 16.914 10.0821 17.25 10.5 17.25C10.9179 17.25 11.25 16.914 11.25 16.5078Z" fill={color} fillRule="evenodd"/>
	<Path d="M8.69935 1.25001H15.3004C15.5203 1.24995 15.6888 1.2499 15.8362 1.26571C17.1903 1.41104 18.2268 2.52307 18.2897 3.87013C19.4805 4.22571 20.3289 5.3275 20.3443 6.59118C20.9453 6.77151 21.4637 7.05595 21.888 7.51432C22.54 8.21857 22.7421 9.08649 22.7498 10.1003C22.7572 11.075 22.5835 12.3067 22.3678 13.8363L21.9288 16.9499C21.7602 18.146 21.6232 19.1176 21.4101 19.879C21.1871 20.6756 20.8585 21.331 20.25 21.8349C19.6463 22.3347 18.9301 22.5502 18.0835 22.6518C17.265 22.75 16.2353 22.75 14.9532 22.75H9.04687C7.76478 22.75 6.73501 22.75 5.91647 22.6518C5.06993 22.5502 4.35372 22.3347 3.75003 21.8349C3.14152 21.331 2.81286 20.6756 2.58989 19.879C2.37676 19.1176 2.23979 18.146 2.07118 16.9499L1.63219 13.8363C1.41651 12.3067 1.24283 11.075 1.25023 10.1003C1.25792 9.08649 1.45997 8.21857 2.11196 7.51432C2.53621 7.05606 3.05445 6.77164 3.65528 6.5913C3.67058 5.3275 4.51917 4.22559 5.71005 3.87007C5.77295 2.52304 6.80943 1.41104 8.16359 1.26571C8.31094 1.2499 8.4795 1.24995 8.69935 1.25001ZM5.18902 6.32785C6.11481 6.24999 7.24973 6.25 8.61594 6.25001H15.384C16.75 6.25 17.8848 6.24999 18.8105 6.32781C18.6734 5.72018 18.1306 5.25001 17.4617 5.25001H6.53787C5.86896 5.25001 5.32618 5.72019 5.18902 6.32785ZM15.6761 2.75715C16.2263 2.8162 16.6611 3.22633 16.7677 3.75001H7.2321C7.33862 3.22633 7.77344 2.8162 8.32365 2.75715C8.37993 2.75111 8.46013 2.75001 8.74099 2.75001H15.2588C15.5396 2.75001 15.6198 2.75111 15.6761 2.75715ZM3.21267 8.53336C3.51557 8.20618 3.97106 7.98917 4.85612 7.87145C5.75726 7.75159 6.96357 7.75001 8.67239 7.75001H15.3276C17.0364 7.75001 18.2427 7.75159 19.1439 7.87145C20.0289 7.98917 20.4844 8.20618 20.7873 8.53336C21.0832 8.85293 21.2436 9.28782 21.2498 10.1117C21.2563 10.9618 21.1002 12.0828 20.8738 13.6883L20.4509 16.6883C20.2731 17.9491 20.1486 18.821 19.9656 19.4747C19.7894 20.1042 19.582 20.4405 19.2934 20.6795C18.9999 20.9225 18.6058 21.0784 17.9048 21.1625C17.1861 21.2488 16.2465 21.25 14.9046 21.25H9.09536C7.75347 21.25 6.81393 21.2488 6.09519 21.1625C5.39417 21.0784 5.00014 20.9225 4.70664 20.6795C4.41795 20.4405 4.21058 20.1042 4.03437 19.4747C3.8514 18.821 3.7269 17.9491 3.54913 16.6883L3.12616 13.6883C2.89981 12.0828 2.74373 10.9618 2.75018 10.1117C2.75644 9.28782 2.91681 8.85293 3.21267 8.53336Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineVideoMusicLibrary;
