import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineCrownLine = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M8.99998 17.25C8.58576 17.25 8.24998 17.5858 8.24998 18C8.24998 18.4142 8.58576 18.75 8.99998 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H8.99998Z" fill={color}/>
	<Path d="M12 1.25C11.2936 1.25 10.845 1.74936 10.5433 2.19718C10.2371 2.65167 9.91761 3.30649 9.5388 4.08283L7.27602 8.71959C7.05699 9.16843 6.91608 9.45523 6.79382 9.65422C6.70897 9.79233 6.66261 9.83677 6.65175 9.8462C6.6205 9.86072 6.59136 9.86537 6.56451 9.86347C6.54717 9.85385 6.49858 9.82316 6.40923 9.74055C6.24714 9.59068 6.04535 9.36242 5.72532 8.9981L5.69622 8.96497C5.12353 8.313 4.65573 7.78042 4.27042 7.42022C4.07284 7.23552 3.86519 7.0653 3.64693 6.9433C3.425 6.81924 3.14632 6.71955 2.82834 6.74748C2.35527 6.78903 1.9355 7.02828 1.64119 7.38387C1.28612 7.81286 1.24616 8.41259 1.25019 8.93104C1.25455 9.4911 1.32451 10.2344 1.41145 11.158L1.64879 13.6798C1.83378 15.6455 1.97867 17.185 2.22965 18.381C2.48534 19.5995 2.86973 20.5636 3.60375 21.3145C4.34881 22.0767 5.2643 22.4254 6.39567 22.5909C7.48396 22.75 8.85863 22.75 10.5806 22.75H13.4193C15.1413 22.75 16.516 22.75 17.6043 22.5909C18.7356 22.4254 19.6511 22.0767 20.3962 21.3145C21.1302 20.5636 21.5146 19.5995 21.7703 18.381C22.0213 17.185 22.1662 15.6455 22.3512 13.6798L22.5885 11.158C22.6754 10.2344 22.7454 9.49109 22.7498 8.93104C22.7538 8.41259 22.7138 7.81286 22.3588 7.38387C22.0644 7.02828 21.6447 6.78903 21.1716 6.74748C20.8536 6.71955 20.5749 6.81924 20.353 6.9433C20.1348 7.0653 19.9271 7.23552 19.7295 7.42022C19.3442 7.78043 18.8764 8.313 18.3037 8.96498L18.2746 8.9981C17.9546 9.36242 17.7528 9.59068 17.5907 9.74055C17.5014 9.82316 17.4528 9.85385 17.4354 9.86347C17.4086 9.86537 17.3794 9.86072 17.3482 9.8462C17.3373 9.83677 17.291 9.79232 17.2061 9.65422C17.0839 9.45523 16.943 9.16842 16.7239 8.71958L14.4611 4.08282C14.0823 3.30648 13.7628 2.65167 13.4566 2.19717C13.1549 1.74935 12.7063 1.25 12 1.25ZM10.8609 4.79379C11.2726 3.95013 11.547 3.39205 11.7874 3.03525C11.8892 2.88414 11.9591 2.80859 12 2.7722C12.0408 2.80859 12.1108 2.88414 12.2126 3.03525C12.453 3.39205 12.7273 3.95013 13.139 4.79378L15.3916 9.40969C15.5903 9.81688 15.7629 10.1707 15.9281 10.4395C16.0972 10.7147 16.3202 11.0082 16.6676 11.183C16.981 11.3408 17.3341 11.3987 17.6837 11.3435C18.077 11.2813 18.3754 11.0579 18.6091 10.8419C18.8356 10.6325 19.0891 10.3438 19.3767 10.0164L19.4016 9.98804C20.0104 9.29494 20.4294 8.81934 20.7539 8.51599C20.9145 8.36587 21.02 8.28889 21.0849 8.25262L21.0858 8.25213C21.1196 8.26445 21.1588 8.28885 21.1975 8.33351C21.1974 8.33348 21.1975 8.33349 21.1975 8.33351C21.1972 8.33368 21.1976 8.33563 21.1989 8.33985C21.2083 8.36967 21.253 8.51152 21.2498 8.91937C21.246 9.40668 21.1829 10.0849 21.0915 11.056L20.8623 13.4913C20.6718 15.5153 20.5337 16.9699 20.3023 18.0729C20.0735 19.1632 19.7722 19.8071 19.3236 20.266C18.886 20.7136 18.324 20.9697 17.3872 21.1067C16.4199 21.2481 15.155 21.25 13.3599 21.25H10.6401C8.84495 21.25 7.58004 21.2481 6.61272 21.1067C5.67599 20.9697 5.11394 20.7136 4.67638 20.266C4.22779 19.8071 3.92646 19.1632 3.69767 18.0729C3.46621 16.9699 3.32817 15.5153 3.13768 13.4913L2.90848 11.056C2.81709 10.0849 2.75394 9.40668 2.75015 8.91937C2.74698 8.5116 2.79147 8.36975 2.80083 8.3399C2.80216 8.33567 2.80278 8.33368 2.80246 8.33352C2.84116 8.28885 2.88038 8.26445 2.91415 8.25213L2.91504 8.25262C2.97992 8.28889 3.08548 8.36587 3.24607 8.51599C3.57057 8.81934 3.98954 9.29494 4.59837 9.98804L4.62325 10.0164C4.91083 10.3438 5.16438 10.6325 5.39089 10.8419C5.62455 11.0579 5.92299 11.2813 6.31628 11.3435C6.6658 11.3987 7.01895 11.3408 7.33239 11.183C7.67976 11.0082 7.90276 10.7147 8.07186 10.4395C8.237 10.1707 8.40962 9.81692 8.6083 9.40976L10.8609 4.79379ZM21.1975 8.33351C21.1994 8.33572 21.2013 8.33797 21.2032 8.34028C21.2008 8.33738 21.1992 8.3353 21.1983 8.33425C21.1979 8.33385 21.1976 8.3336 21.1975 8.33351ZM12.044 2.74096C12.044 2.74143 12.0409 2.74333 12.0348 2.74527C12.041 2.74146 12.0441 2.74049 12.044 2.74096ZM11.9652 2.74527C11.9591 2.74333 11.9559 2.74143 11.9559 2.74096C11.9559 2.74049 11.9589 2.74146 11.9652 2.74527Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineCrownLine;
