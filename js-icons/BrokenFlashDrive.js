import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenFlashDrive = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.8302 10.441L20.3648 10.967L20.3648 10.967L19.8302 10.441ZM17.7614 11.4739C17.4708 11.7692 17.4746 12.244 17.7699 12.5346C18.0651 12.8251 18.54 12.8213 18.8305 12.5261L17.7614 11.4739ZM19.8302 4.20481L19.2957 4.73088L19.2957 4.73088L19.8302 4.20481ZM22 7.32289L22.75 7.32289V7.32289L22 7.32289ZM13.6931 4.20481L14.2277 4.73088L14.2277 4.73088L13.6931 4.20481ZM16.7617 2L16.7617 2.75L16.7617 2.75L16.7617 2ZM11.4654 5.39919C11.1749 5.69442 11.1787 6.16928 11.4739 6.45982C11.7692 6.75036 12.244 6.74656 12.5346 6.45133L11.4654 5.39919ZM19.2957 9.91489L17.7614 11.4739L18.8305 12.5261L20.3648 10.967L19.2957 9.91489ZM19.2957 4.73088C20.0337 5.48084 20.5334 5.99085 20.8578 6.42291C21.1689 6.83718 21.25 7.09251 21.25 7.32289L22.75 7.32289C22.75 6.64 22.4695 6.07123 22.0573 5.52225C21.6585 4.99105 21.0732 4.39865 20.3648 3.67874L19.2957 4.73088ZM20.3648 10.967C21.0732 10.2471 21.6585 9.65472 22.0573 9.12352C22.4695 8.57454 22.75 8.00577 22.75 7.32289L21.25 7.32289C21.25 7.55327 21.1689 7.8086 20.8578 8.22287C20.5334 8.65492 20.0337 9.16493 19.2957 9.91489L20.3648 10.967ZM14.2277 4.73088C14.9659 3.98075 15.4676 3.47324 15.8923 3.14393C16.3003 2.82765 16.5459 2.75 16.7617 2.75L16.7617 1.25C16.0786 1.25 15.5133 1.53982 14.9733 1.95848C14.4501 2.36411 13.8669 2.959 13.1586 3.67874L14.2277 4.73088ZM20.3648 3.67874C19.6565 2.959 19.0733 2.36411 18.5501 1.95847C18.0101 1.53982 17.4447 1.25 16.7617 1.25L16.7617 2.75C16.9774 2.75 17.223 2.82765 17.631 3.14393C18.0557 3.47324 18.5574 3.98075 19.2957 4.73088L20.3648 3.67874ZM13.1586 3.67874L11.4654 5.39919L12.5346 6.45133L14.2277 4.73088L13.1586 3.67874Z" fill={color}/>
	<Path d="M9.85748 22.0002L9.85748 22.7502L9.85748 22.0002ZM14.6971 17.448C14.4042 17.7409 14.4042 18.2158 14.6971 18.5087C14.99 18.8016 15.4648 18.8016 15.7577 18.5087L14.6971 17.448ZM18.4821 13.3755L19.2321 13.3755L18.4821 13.3755ZM6.02181 8.77274L6.55214 9.30307L6.55214 9.30307L6.02181 8.77274ZM5.25467 9.53987L4.72434 9.00954L4.72434 9.00954L5.25467 9.53987ZM12.4681 21.6558C12.7918 21.3973 12.8445 20.9254 12.586 20.6018C12.3274 20.2781 11.8555 20.2254 11.5319 20.4839L12.4681 21.6558ZM5.785 10.0702L6.55214 9.30307L5.49148 8.24241L4.72434 9.00954L5.785 10.0702ZM4.72434 19.2758C5.79424 20.3457 6.64889 21.2026 7.40926 21.7828C8.18693 22.3761 8.95349 22.7502 9.85748 22.7502L9.85748 21.2502C9.41333 21.2502 8.96338 21.0818 8.31913 20.5902C7.65758 20.0855 6.88489 19.315 5.785 18.2152L4.72434 19.2758ZM14.6971 9.30307C15.797 10.403 16.5674 11.1756 17.0722 11.8372C17.5637 12.4814 17.7321 12.9314 17.7321 13.3755L19.2321 13.3755C19.2321 12.4716 18.858 11.705 18.2647 10.9273C17.6845 10.167 16.8276 9.31231 15.7577 8.24241L14.6971 9.30307ZM15.7577 18.5087C16.8276 17.4388 17.6845 16.5841 18.2647 15.8238C18.858 15.0461 19.2321 14.2795 19.2321 13.3755L17.7321 13.3755C17.7321 13.8197 17.5637 14.2696 17.0722 14.9139C16.5674 15.5754 15.797 16.3481 14.6971 17.448L15.7577 18.5087ZM6.55214 9.30307C7.65202 8.20319 8.42471 7.43275 9.08626 6.928C9.73051 6.43646 10.1805 6.26807 10.6246 6.26807L10.6246 4.76807C9.72063 4.76807 8.95407 5.14212 8.17639 5.73547C7.41602 6.31561 6.56138 7.17251 5.49148 8.24241L6.55214 9.30307ZM15.7577 8.24241C14.6878 7.17251 13.8332 6.31561 13.0728 5.73547C12.2952 5.14212 11.5286 4.76807 10.6246 4.76807L10.6246 6.26807C11.0688 6.26807 11.5187 6.43646 12.163 6.928C12.8245 7.43275 13.5972 8.20319 14.6971 9.30307L15.7577 8.24241ZM4.72434 9.00954C3.65444 10.0794 2.79754 10.9341 2.2174 11.6945C1.62406 12.4721 1.25 13.2387 1.25 14.1427L2.75 14.1427C2.75 13.6985 2.91839 13.2486 3.40993 12.6043C3.91468 11.9428 4.68512 11.1701 5.785 10.0702L4.72434 9.00954ZM5.785 18.2152C4.68512 17.1153 3.91468 16.3426 3.40993 15.681C2.91839 15.0368 2.75 14.5868 2.75 14.1427L1.25 14.1427C1.25 15.0467 1.62406 15.8132 2.2174 16.5909C2.79754 17.3513 3.65444 18.2059 4.72434 19.2758L5.785 18.2152ZM11.5319 20.4839C10.8132 21.0581 10.3318 21.2502 9.85748 21.2502L9.85748 22.7502C10.8246 22.7502 11.6342 22.3221 12.4681 21.6558L11.5319 20.4839Z" fill={color}/>
	<Path d="M5.78497 13.6122C5.49208 13.3194 5.0172 13.3194 4.72431 13.6122C4.43142 13.9051 4.43142 14.38 4.72431 14.6729L5.78497 13.6122ZM9.32711 19.2757C9.62001 19.5686 10.0949 19.5686 10.3878 19.2757C10.6807 18.9828 10.6807 18.5079 10.3878 18.2151L9.32711 19.2757ZM4.72431 14.6729L9.32711 19.2757L10.3878 18.2151L5.78497 13.6122L4.72431 14.6729Z" fill={color}/>
	<Path d="M18.7175 7.40381L18.0104 8.11092" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16.5962 5.28271L15.8891 5.98982" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenFlashDrive;
