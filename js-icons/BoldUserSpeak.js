import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldUserSpeak = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18.3569 1.61424C18.57 1.25906 19.0307 1.14388 19.3859 1.35699L19 2.00011C19.3859 1.35699 19.3855 1.35679 19.3859 1.35699L19.3873 1.35783L19.3888 1.35878L19.3925 1.36103L19.4021 1.36695C19.4095 1.37153 19.4187 1.37737 19.4297 1.38448C19.4517 1.39871 19.4808 1.41809 19.516 1.44272C19.5863 1.49194 19.6813 1.56244 19.7926 1.6552C20.0147 1.84029 20.3052 2.11678 20.5945 2.49283C21.1773 3.25057 21.75 4.40746 21.75 6.00011C21.75 7.59277 21.1773 8.74966 20.5945 9.5074C20.3052 9.88345 20.0147 10.1599 19.7926 10.345C19.6813 10.4378 19.5863 10.5083 19.516 10.5575C19.4808 10.5821 19.4517 10.6015 19.4297 10.6157C19.4242 10.6193 19.4192 10.6225 19.4146 10.6254C19.41 10.6284 19.4058 10.631 19.4021 10.6333L19.3925 10.6392L19.3888 10.6414L19.3873 10.6424C19.3869 10.6426 19.3859 10.6432 19 10.0001L19.3859 10.6432C19.0307 10.8563 18.57 10.7412 18.3569 10.386C18.1447 10.0323 18.258 9.57398 18.6097 9.3597L18.6152 9.35616C18.6225 9.35145 18.6363 9.34231 18.6558 9.32866C18.6949 9.30132 18.7562 9.25619 18.8324 9.1927C18.9853 9.06529 19.1948 8.86678 19.4055 8.59283C19.8227 8.05057 20.25 7.20746 20.25 6.00011C20.25 4.79277 19.8227 3.94966 19.4055 3.4074C19.1948 3.13345 18.9853 2.93494 18.8324 2.80753C18.7562 2.74403 18.6949 2.69891 18.6558 2.67157C18.6363 2.65792 18.6225 2.64878 18.6152 2.64406L18.6097 2.64053C18.258 2.42625 18.1447 1.96793 18.3569 1.61424Z" fill={color}/>
	<Path d="M10 10.0001C12.2091 10.0001 14 8.20925 14 6.00011C14 3.79097 12.2091 2.00011 10 2.00011C7.79086 2.00011 6 3.79097 6 6.00011C6 8.20925 7.79086 10.0001 10 10.0001Z" fill={color}/>
	<Path d="M2 17.5001C2 19.9854 2 22.0001 10 22.0001C18 22.0001 18 19.9854 18 17.5001C18 15.0148 14.4183 13.0001 10 13.0001C5.58172 13.0001 2 15.0148 2 17.5001Z" fill={color}/>
	<Path d="M17.3859 3.35699C17.0307 3.14388 16.57 3.25906 16.3569 3.61424L16.6051 4.63774L16.6129 4.64305C16.6246 4.65125 16.6468 4.66747 16.6761 4.6919C16.7353 4.74119 16.8198 4.82095 16.9055 4.9324C17.0727 5.14966 17.25 5.49277 17.25 6.00011C17.25 6.50746 17.0727 6.85057 16.9055 7.06783C16.8198 7.17928 16.7353 7.25904 16.6761 7.30832C16.6468 7.33276 16.6246 7.34897 16.6129 7.35717L16.6051 7.36249C16.257 7.57794 16.1456 8.03382 16.3569 8.38599C16.57 8.74117 17.0307 8.85634 17.3859 8.64323L17 8.00011C17.3859 8.64323 17.3855 8.64343 17.3859 8.64323L17.3872 8.64243L17.3887 8.64156L17.3918 8.63963L17.3993 8.63504L17.4185 8.62282C17.4332 8.61333 17.4515 8.60108 17.4731 8.58602C17.516 8.55594 17.572 8.51435 17.6364 8.46065C17.7647 8.35369 17.9302 8.19594 18.0945 7.9824C18.4273 7.54966 18.75 6.89277 18.75 6.00011C18.75 5.10746 18.4273 4.45057 18.0945 4.01783C17.9302 3.80428 17.7647 3.64654 17.6364 3.53957C17.572 3.48588 17.516 3.44428 17.4731 3.4142C17.4515 3.39914 17.4332 3.3869 17.4185 3.3774L17.3993 3.36519L17.3918 3.36059L17.3887 3.35867L17.3872 3.3578C17.3869 3.3576 17.3859 3.35699 17 4.00011L17.3859 3.35699Z" fill={color}/>
</Svg>;

export default BoldUserSpeak;
