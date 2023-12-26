import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineSchoolCaseRound = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.77541 5.25H17.2246C18.0409 5.24999 18.6994 5.24999 19.2325 5.29373C19.7814 5.33876 20.2635 5.43392 20.7092 5.66214C21.4095 6.02074 21.9793 6.59053 22.3379 7.29084C22.5661 7.73655 22.6612 8.21861 22.7063 8.76754C22.75 9.30066 22.75 9.9591 22.75 10.7754V10.8077C22.75 10.8363 22.7501 10.8651 22.7502 10.894C22.7511 11.2321 22.7522 11.5921 22.6216 11.9139C22.5095 12.1902 22.3286 12.4333 22.0961 12.6201C21.9901 12.7054 21.8726 12.7729 21.7495 12.8293C21.7466 14.4416 21.7259 16.0708 21.5813 17.4664C21.4963 18.2856 21.366 19.0548 21.1593 19.7105C20.9559 20.3557 20.6556 20.9665 20.1803 21.389C19.3568 22.1209 18.3204 22.4436 17.0267 22.5983C15.7568 22.75 14.1291 22.75 12.0512 22.75H11.9488C9.87086 22.75 8.24319 22.75 6.97328 22.5983C5.67956 22.4436 4.64319 22.1209 3.81975 21.389C3.34441 20.9665 3.04411 20.3557 2.84074 19.7105C2.63401 19.0548 2.50368 18.2856 2.41875 17.4664C2.27407 16.0708 2.25343 14.4416 2.25049 12.8293C2.12735 12.7729 2.0099 12.7054 1.90385 12.6201C1.67138 12.4333 1.49051 12.1902 1.37839 11.9139C1.24782 11.5921 1.24886 11.2321 1.24983 10.894C1.24992 10.8651 1.25 10.8363 1.25 10.8077L1.25 10.7754C1.24999 9.95908 1.24999 9.30065 1.29373 8.76754C1.33876 8.21861 1.43392 7.73655 1.66214 7.29084C2.02074 6.59053 2.59053 6.02074 3.29085 5.66214C3.73655 5.43392 4.21861 5.33876 4.76754 5.29373C5.30065 5.24999 5.95908 5.24999 6.77541 5.25ZM3.75209 13.3087C3.7589 14.7455 3.78782 16.1259 3.91076 17.3118C3.99058 18.0818 4.10738 18.7394 4.27134 19.2596C4.43867 19.7904 4.63263 20.1046 4.81629 20.2679C5.31088 20.7075 5.99417 20.9706 7.15128 21.1089C8.32178 21.2487 9.85978 21.25 12 21.25C14.1402 21.25 15.6782 21.2487 16.8487 21.1089C18.0058 20.9706 18.6891 20.7075 19.1837 20.2679C19.3674 20.1046 19.5613 19.7904 19.7287 19.2596C19.8926 18.7394 20.0094 18.0818 20.0892 17.3118C20.2122 16.1259 20.2411 14.7455 20.2479 13.3087L15.25 14.808V15.1615C15.25 15.6726 14.9388 16.1322 14.4642 16.3221L13.7641 16.6021C12.6317 17.0551 11.3683 17.0551 10.2359 16.6021L9.53576 16.3221C9.06119 16.1323 8.75 15.6726 8.75 15.1615V14.808L3.75209 13.3087ZM8.75 13.242L3.35757 11.6242C3.14215 11.5596 3.01766 11.5218 2.92639 11.4873C2.87045 11.4661 2.84818 11.4536 2.84238 11.45C2.81001 11.4237 2.78472 11.3897 2.76884 11.3512C2.76705 11.3446 2.76152 11.3197 2.75731 11.26C2.75043 11.1627 2.75 11.0326 2.75 10.8077C2.75 9.95153 2.75059 9.35474 2.7887 8.89019C2.8261 8.43445 2.89579 8.17271 2.99729 7.97451C3.21245 7.55432 3.55432 7.21245 3.97451 6.99729C4.17271 6.89579 4.43445 6.82609 4.89019 6.7887C5.35474 6.75059 5.95153 6.75 6.80765 6.75H17.1923C18.0485 6.75 18.6453 6.75059 19.1098 6.7887C19.5655 6.82609 19.8273 6.89579 20.0255 6.99729C20.4457 7.21245 20.7876 7.55432 21.0027 7.97451C21.1042 8.17271 21.1739 8.43445 21.2113 8.89019C21.2494 9.35474 21.25 9.95153 21.25 10.8077C21.25 11.0326 21.2496 11.1627 21.2427 11.26C21.2385 11.3197 21.233 11.3446 21.2312 11.3512C21.2153 11.3897 21.19 11.4237 21.1576 11.45C21.1518 11.4536 21.1296 11.4661 21.0736 11.4873C20.9823 11.5218 20.8578 11.5596 20.6424 11.6242L15.25 13.242V13C15.25 12.3096 14.6904 11.75 14 11.75H10C9.30965 11.75 8.75 12.3096 8.75 13V13.242ZM21.1593 11.4489L21.1576 11.45ZM21.2306 11.3531L21.2312 11.3512ZM2.76943 11.3531L2.76884 11.3512ZM2.84075 11.4489L2.84238 11.45ZM10.25 13.25V14.9922L10.793 15.2094C11.5678 15.5194 12.4322 15.5194 13.207 15.2094L13.75 14.9922V13.25H10.25Z" fill={color} fillRule="evenodd"/>
	<Path d="M12.0002 2.75C11.0217 2.75 10.1873 3.37503 9.87803 4.24993C9.73999 4.64047 9.3115 4.84517 8.92097 4.70713C8.53043 4.56909 8.32573 4.1406 8.46377 3.75007C8.97821 2.29459 10.3662 1.25 12.0002 1.25C13.6341 1.25 15.0222 2.29459 15.5366 3.75007C15.6747 4.1406 15.47 4.56909 15.0794 4.70713C14.6889 4.84517 14.2604 4.64047 14.1224 4.24993C13.8131 3.37503 12.9787 2.75 12.0002 2.75Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineSchoolCaseRound;
