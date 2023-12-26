import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineMessagesPaperclipRounded = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.7312 1.92791C12.4894 1.02403 14.5708 1.02403 16.329 1.92791C17.1995 2.37548 17.9893 3.17252 19.3013 4.49676C19.3398 4.53559 19.3787 4.57488 19.4181 4.61462C19.4571 4.65392 19.4956 4.69277 19.5337 4.73117C20.8473 6.05629 21.6369 6.85272 22.0799 7.72994C22.9734 9.49935 22.9734 11.5928 22.0799 13.3622C21.6369 14.2394 20.8473 15.0358 19.5337 16.361C19.4956 16.3994 19.4571 16.4382 19.4181 16.4775L15.7039 20.2251C15.389 20.543 15.179 20.7549 14.9706 20.9163C13.5348 22.0279 11.5363 22.0279 10.1005 20.9163C9.89209 20.7549 9.68207 20.543 9.36721 20.2252L9.28334 20.1406C8.96819 19.8227 8.75817 19.6108 8.59842 19.4008C7.50007 17.9565 7.50007 15.9496 8.59842 14.5054C8.75816 14.2953 8.96817 14.0835 9.28331 13.7656C9.29706 13.7517 9.31101 13.7376 9.32517 13.7234L12.1558 10.8672C12.4474 10.573 12.9223 10.5709 13.2165 10.8625C13.5107 11.1541 13.5128 11.6289 13.2212 11.9231L10.3906 14.7793C10.0185 15.1546 9.88468 15.292 9.79238 15.4134C9.10209 16.3211 9.10209 17.5851 9.79238 18.4928C9.88468 18.6141 10.0185 18.7515 10.3906 19.1269C10.7627 19.5023 10.8987 19.6372 11.0187 19.7302C11.9139 20.4233 13.1571 20.4233 14.0523 19.7302C14.1724 19.6372 14.3084 19.5023 14.6805 19.1269L18.3527 15.4216C19.8175 13.9436 20.4187 13.324 20.7409 12.686C21.4197 11.3418 21.4197 9.75031 20.7409 8.4061C20.4187 7.76816 19.8175 7.14849 18.3527 5.67052C16.8874 4.19202 16.2739 3.58621 15.6431 3.26194C14.3154 2.57935 12.7448 2.57935 11.4171 3.26194C10.7863 3.58621 10.1728 4.19202 8.70746 5.67052L4.97785 9.43367C4.15549 10.2634 3.81549 10.6106 3.58867 10.939C2.47044 12.5579 2.47044 14.7097 3.58867 16.3285C3.81549 16.6569 4.15549 17.0041 4.97784 17.8339C5.26942 18.1281 5.2673 18.6029 4.9731 18.8945C4.6789 19.1861 4.20403 19.184 3.91245 18.8898L3.84739 18.8241C3.10955 18.0798 2.66663 17.6329 2.35448 17.181C0.88184 15.0491 0.881839 12.2184 2.35448 10.0865C2.66663 9.6346 3.10955 9.18776 3.84739 8.4434C3.86883 8.42177 3.89051 8.3999 3.91245 8.37776L7.64206 4.61462C7.68144 4.57488 7.72036 4.5356 7.75884 4.49677C9.07092 3.17252 9.86065 2.37548 10.7312 1.92791Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineMessagesPaperclipRounded;
