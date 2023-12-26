import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineQuitFullScreenSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637ZM10.0039 5.25019C10.4181 5.25371 10.751 5.59233 10.7475 6.00653C10.7403 6.85721 10.714 7.58312 10.596 8.18553C10.4739 8.80887 10.2444 9.35213 9.79826 9.79826C9.35213 10.2444 8.80887 10.4739 8.18553 10.596C7.58312 10.714 6.85721 10.7403 6.00653 10.7475C5.59233 10.751 5.25371 10.4181 5.25019 10.0039C5.24668 9.58972 5.57961 9.2511 5.99381 9.24759C6.84968 9.24033 7.44745 9.21206 7.89719 9.12396C8.32598 9.03997 8.56333 8.91188 8.7376 8.7376C8.91188 8.56333 9.03997 8.32598 9.12396 7.89719C9.21206 7.44745 9.24033 6.84968 9.24759 5.99381C9.2511 5.57961 9.58972 5.24668 10.0039 5.25019ZM13.9936 5.25019C14.4078 5.24668 14.7465 5.57961 14.75 5.99381C14.7572 6.84968 14.7855 7.44745 14.8736 7.89719C14.9576 8.32598 15.0857 8.56333 15.26 8.7376C15.4342 8.91188 15.6716 9.03997 16.1004 9.12396C16.5501 9.21206 17.1479 9.24033 18.0038 9.24759C18.4179 9.2511 18.7509 9.58972 18.7474 10.0039C18.7439 10.4181 18.4052 10.751 17.991 10.7475C17.1403 10.7403 16.4144 10.714 15.812 10.596C15.1887 10.4739 14.6454 10.2444 14.1993 9.79826C13.7532 9.35213 13.5237 8.80887 13.4016 8.18553C13.2836 7.58312 13.2572 6.85721 13.25 6.00653C13.2465 5.59233 13.5794 5.25371 13.9936 5.25019ZM5.25019 13.9936C5.25371 13.5794 5.59233 13.2465 6.00653 13.25C6.85721 13.2572 7.58312 13.2836 8.18553 13.4016C8.80887 13.5237 9.35213 13.7532 9.79826 14.1993C10.2444 14.6454 10.4739 15.1887 10.596 15.812C10.714 16.4144 10.7403 17.1403 10.7475 17.991C10.751 18.4052 10.4181 18.7439 10.0039 18.7474C9.58972 18.7509 9.2511 18.4179 9.24759 18.0038C9.24033 17.1479 9.21206 16.5501 9.12396 16.1004C9.03997 15.6716 8.91188 15.4342 8.7376 15.26C8.56333 15.0857 8.32598 14.9576 7.89719 14.8736C7.44745 14.7855 6.84968 14.7572 5.99381 14.75C5.57961 14.7465 5.24668 14.4078 5.25019 13.9936ZM18.7474 13.9936C18.7509 14.4078 18.4179 14.7465 18.0038 14.75C17.1479 14.7572 16.5501 14.7855 16.1004 14.8736C15.6716 14.9576 15.4342 15.0857 15.26 15.26C15.0857 15.4342 14.9576 15.6716 14.8736 16.1004C14.7855 16.5501 14.7572 17.1479 14.75 18.0038C14.7465 18.4179 14.4078 18.7509 13.9936 18.7474C13.5794 18.7439 13.2465 18.4052 13.25 17.991C13.2572 17.1403 13.2836 16.4144 13.4016 15.812C13.5237 15.1887 13.7532 14.6454 14.1993 14.1993C14.6454 13.7532 15.1887 13.5237 15.812 13.4016C16.4144 13.2836 17.1403 13.2572 17.991 13.25C18.4052 13.2465 18.7439 13.5794 18.7474 13.9936Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineQuitFullScreenSquare;
