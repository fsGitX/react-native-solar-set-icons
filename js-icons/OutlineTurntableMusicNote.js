import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineTurntableMusicNote = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.8222 3.69048 22.2305 4.62404 22.4556 5.77345C22.6767 6.90193 22.7303 8.28967 22.7448 9.99364C22.7483 10.4078 22.4153 10.7465 22.0011 10.75C21.5869 10.7535 21.2483 10.4206 21.2448 10.0064C21.2303 8.2972 21.1747 7.03759 20.9836 6.06179C20.7966 5.10692 20.4897 4.47928 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C12.4142 21.25 12.75 21.5858 12.75 22C12.75 22.4142 12.4142 22.75 12 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75ZM19 11.25C19.4142 11.25 19.75 11.5858 19.75 12C19.75 13.2426 20.7574 14.25 22 14.25C22.4142 14.25 22.75 14.5858 22.75 15C22.75 15.4142 22.4142 15.75 22 15.75C21.1558 15.75 20.3767 15.471 19.75 15.0003V20C19.75 21.5188 18.5188 22.75 17 22.75C15.4812 22.75 14.25 21.5188 14.25 20C14.25 18.4812 15.4812 17.25 17 17.25C17.4501 17.25 17.875 17.3581 18.25 17.5499V12C18.25 11.5858 18.5858 11.25 19 11.25ZM18.25 20C18.25 19.3096 17.6904 18.75 17 18.75C16.3096 18.75 15.75 19.3096 15.75 20C15.75 20.6904 16.3096 21.25 17 21.25C17.6904 21.25 18.25 20.6904 18.25 20Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineTurntableMusicNote;
