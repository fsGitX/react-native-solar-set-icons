import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineTurntableMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4917 3.4813 18.8148 3.16506 17.75 2.98181V7.96482C17.75 8.54994 17.4576 9.09634 16.9707 9.4209L14.416 11.124C14.0714 11.3538 13.6057 11.2607 13.376 10.916C13.1462 10.5714 13.2393 10.1057 13.584 9.87596L16.1387 8.17283C16.2082 8.12646 16.25 8.0484 16.25 7.96482V2.81997C15.1242 2.75085 13.7418 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637ZM6.25 12C6.25 8.82436 8.82436 6.25 12 6.25C12.5997 6.25 13.1793 6.34206 13.7247 6.51336C14.1199 6.63748 14.3397 7.05846 14.2155 7.45364C14.0914 7.84882 13.6704 8.06856 13.2753 7.94444C12.8736 7.81829 12.4455 7.75 12 7.75C9.65279 7.75 7.75 9.65279 7.75 12C7.75 14.3472 9.65279 16.25 12 16.25C14.3472 16.25 16.25 14.3472 16.25 12C16.25 11.5858 16.5858 11.25 17 11.25C17.4142 11.25 17.75 11.5858 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12ZM10 11.25C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.4142 13.25 12.75 13.5858 12.75 14C12.75 14.4142 12.4142 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 11.5858 9.58579 11.25 10 11.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineTurntableMinimalistic;
