import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineWeatherCloudBolt = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.4762 2.75C9.7261 2.75 7.5119 4.95083 7.5119 7.64706C7.5119 8.10922 7.5766 8.55551 7.69729 8.97813C8.19449 9.12162 8.65991 9.3389 9.08045 9.61709C9.42592 9.84561 9.52072 10.3109 9.29219 10.6564C9.06366 11.0019 8.59835 11.0967 8.25288 10.8681C7.87207 10.6162 7.43917 10.4355 6.97329 10.3451C6.75148 10.3021 6.52165 10.2794 6.28571 10.2794C4.3246 10.2794 2.75 11.8482 2.75 13.7647C2.75 15.6812 4.3246 17.25 6.28571 17.25C6.69993 17.25 7.03571 17.5858 7.03571 18C7.03571 18.4142 6.69993 18.75 6.28571 18.75C3.51296 18.75 1.25 16.5264 1.25 13.7647C1.25 11.0605 3.41987 8.87207 6.11351 8.78228C6.04673 8.41355 6.0119 8.03413 6.0119 7.64706C6.0119 4.10572 8.91446 1.25 12.4762 1.25C15.6343 1.25 18.2724 3.49369 18.8314 6.47127C21.1313 7.44751 22.75 9.70929 22.75 12.3529C22.75 15.4269 20.5623 17.9843 17.6568 18.6057C17.2518 18.6923 16.8532 18.4341 16.7666 18.0291C16.68 17.624 16.9381 17.2254 17.3432 17.1388C19.5829 16.6598 21.25 14.693 21.25 12.3529C21.25 10.2162 19.8607 8.39087 17.9124 7.72463C17.4038 7.55072 16.8568 7.45588 16.2857 7.45588C15.7031 7.45588 15.1455 7.55458 14.6283 7.73526C14.2372 7.87185 13.8095 7.66557 13.6729 7.27453C13.5363 6.88348 13.7426 6.45575 14.1336 6.31916C14.8079 6.08364 15.5326 5.95588 16.2857 5.95588C16.5812 5.95588 16.8723 5.97555 17.1577 6.01367C16.477 4.11631 14.6422 2.75 12.4762 2.75Z" fill={color} fillRule="evenodd"/>
	<Path d="M12.4538 13.7829C11.8147 13.5871 11.3356 14.0316 11.1123 14.2637L10.2029 15.4116L10.1712 15.4545L9.02293 17.0081L8.99368 17.0477L8.4387 17.8667C8.3044 18.1189 8.12672 18.5628 8.37016 19.0328C8.37588 19.0439 8.38176 19.0548 8.38776 19.0656C8.63824 19.5151 9.094 19.625 9.37414 19.6641C9.65242 19.703 10.0095 19.703 10.384 19.7029L10.4317 19.7029C10.5254 19.7029 10.6023 19.7029 10.6691 19.7039C10.6697 19.7605 10.6697 19.8251 10.6697 19.9022L10.6697 20.0183L10.6697 20.073C10.6696 20.6419 10.6696 21.1457 10.7197 21.5175C10.7622 21.8332 10.8905 22.4882 11.5462 22.6891C12.1852 22.885 12.6643 22.4404 12.8877 22.2084C13.1508 21.935 13.4531 21.5258 13.7971 21.0604L14.9771 19.4639L15.0063 19.4244L15.0466 19.3699C15.2475 19.0979 15.4391 18.8349 15.5613 18.6054C15.6956 18.3532 15.8733 17.9093 15.6298 17.4392L15.6122 17.4064C15.3617 16.9569 14.906 16.8471 14.6259 16.8079C14.3476 16.769 13.9905 16.7691 13.616 16.7692L13.5683 16.7692C13.4746 16.7692 13.3977 16.7691 13.3309 16.7682C13.3303 16.7116 13.3303 16.647 13.3303 16.5698V16.4537L13.3303 16.399C13.3303 15.8301 13.3304 15.3264 13.2803 14.9546C13.2377 14.6388 13.1094 13.9838 12.4538 13.7829ZM11.8267 15.7451C11.7013 15.9085 11.5543 16.1068 11.3775 16.3461L10.2292 17.8997C10.1451 18.0135 10.072 18.1125 10.008 18.2011C10.1255 18.2026 10.2648 18.2029 10.4317 18.2029L10.4648 18.2029C10.6666 18.2028 10.8826 18.2027 11.0648 18.226C11.2751 18.2528 11.5487 18.3215 11.7841 18.543L11.7899 18.5484L11.8032 18.5612C12.0381 18.7918 12.1151 19.0667 12.1449 19.2824C12.1699 19.4634 12.1698 19.6765 12.1697 19.8684L12.1697 19.9023L12.1697 20.0183C12.1697 20.2975 12.17 20.531 12.1733 20.7269C12.2986 20.5635 12.4457 20.3652 12.6225 20.126L13.7708 18.5724C13.8549 18.4585 13.928 18.3596 13.992 18.271C13.8745 18.2694 13.7352 18.2692 13.5683 18.2692L13.5351 18.2692C13.3334 18.2692 13.1174 18.2693 12.9352 18.2461C12.7249 18.2193 12.4513 18.1505 12.2159 17.9291L12.2101 17.9236L12.1968 17.9108C11.9619 17.6802 11.8849 17.4054 11.8551 17.1896C11.8301 17.0087 11.8302 16.7956 11.8303 16.6037L11.8303 16.5698V16.4537C11.8303 16.1745 11.83 15.9411 11.8267 15.7451Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineWeatherCloudBolt;
