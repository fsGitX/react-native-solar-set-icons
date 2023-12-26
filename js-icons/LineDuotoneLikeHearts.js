import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneLikeHearts = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.829 20.1692L15.2787 19.569L15.2787 19.569L14.829 20.1692ZM16.5 13.1584L15.973 13.692C16.2651 13.9805 16.7349 13.9805 17.027 13.692L16.5 13.1584ZM18.171 20.1692L17.7213 19.569L17.7213 19.569L18.171 20.1692ZM21.1474 12.9177L21.6899 12.3998L21.6899 12.3998L21.1474 12.9177ZM14.4018 19.8538L13.9586 20.4589L13.9586 20.4589L14.4018 19.8538ZM11.75 15.0595C11.75 14.0904 12.3259 13.2722 13.1208 12.9269C13.8774 12.5981 14.9309 12.6628 15.973 13.692L17.027 12.6247C15.5942 11.2098 13.8977 10.9538 12.523 11.5511C11.1866 12.1318 10.25 13.4863 10.25 15.0595H11.75ZM14.3792 20.7694C14.658 20.9783 14.9785 21.2176 15.3082 21.4007C15.6385 21.5842 16.044 21.75 16.5 21.75V20.25C16.406 20.25 16.2615 20.2144 16.0365 20.0894C15.811 19.9641 15.5709 19.788 15.2787 19.569L14.3792 20.7694ZM18.6208 20.7694C19.3846 20.1971 20.4262 19.4965 21.2404 18.625C22.0803 17.726 22.75 16.5776 22.75 15.0595H21.25C21.25 16.0838 20.8143 16.8839 20.1443 17.601C19.4486 18.3456 18.5758 18.9287 17.7213 19.569L18.6208 20.7694ZM17.7213 19.569C17.4291 19.788 17.189 19.9641 16.9635 20.0894C16.7385 20.2144 16.594 20.25 16.5 20.25V21.75C16.956 21.75 17.3615 21.5842 17.6918 21.4007C18.0215 21.2176 18.342 20.9783 18.6208 20.7694L17.7213 19.569ZM22.75 15.0595C22.75 14.0256 22.3452 13.0863 21.6899 12.3998L20.6048 13.4355C21.0019 13.8515 21.25 14.423 21.25 15.0595H22.75ZM21.6899 12.3998C21.0204 11.6985 20.0832 11.2553 19.0473 11.25C18.0033 11.2448 16.9258 11.6838 15.973 12.6247L17.027 13.692C17.7361 12.9917 18.4445 12.747 19.0398 12.75C19.6433 12.7531 20.1988 13.0102 20.6048 13.4355L21.6899 12.3998ZM15.2787 19.569C15.1364 19.4624 14.9905 19.3553 14.845 19.2488L13.9586 20.4589C14.1043 20.5655 14.2442 20.6683 14.3792 20.7694L15.2787 19.569ZM14.845 19.2488C13.2191 18.0578 11.75 16.9423 11.75 15.0595H10.25C10.25 17.8258 12.4773 19.3738 13.9586 20.4589L14.845 19.2488Z" fill={color}/>
	<Path d="M8.96173 19.3384L9.43876 18.7597L9.43876 18.7597L8.96173 19.3384ZM12 5.31675L11.4482 5.82469C11.5902 5.97897 11.7903 6.06675 12 6.06675C12.2097 6.06675 12.4098 5.97897 12.5518 5.82469L12 5.31675ZM9.43876 18.7597C6.38479 16.2424 2.75 13.7727 2.75 9.11901H1.25C1.25 14.6347 5.65407 17.584 8.4847 19.9172L9.43876 18.7597ZM2.75 9.11901C2.75 6.83898 3.98228 4.94507 5.63598 4.15469C7.2323 3.39174 9.3864 3.58489 11.4482 5.82469L12.5518 4.8088C10.1138 2.16027 7.26786 1.71222 4.98914 2.80132C2.7678 3.863 1.25 6.31438 1.25 9.11901H2.75ZM8.4847 19.9172C8.99677 20.3392 9.54665 20.7895 10.1042 21.1301C10.6606 21.4701 11.301 21.75 12 21.75V20.25C11.699 20.25 11.3394 20.127 10.8862 19.8501C10.4342 19.574 9.96496 19.1934 9.43876 18.7597L8.4847 19.9172ZM22.75 9.11901C22.75 6.31438 21.2322 3.863 19.0109 2.80132C16.7321 1.71222 13.8862 2.16027 11.4482 4.8088L12.5518 5.82469C14.6136 3.58489 16.7677 3.39174 18.364 4.15469C20.0177 4.94507 21.25 6.83898 21.25 9.11901H22.75ZM21.8239 13.2414C22.3995 12.0384 22.75 10.6779 22.75 9.11901H21.25C21.25 10.4425 20.9547 11.5826 20.4708 12.594L21.8239 13.2414ZM13.939 19.2637C13.1119 19.9123 12.5056 20.25 12 20.25V21.75C13.0828 21.75 14.065 21.0712 14.8647 20.444L13.939 19.2637Z" fill={color} opacity="0.5"/>
</Svg>;

export default LineDuotoneLikeHearts;