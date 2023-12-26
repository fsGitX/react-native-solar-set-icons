import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldBenzeneRing = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.97923 4.87931C10.9654 4.2931 11.4585 4 12 4C12.5414 4 13.0345 4.2931 14.0207 4.87931L16.9792 6.63792C17.6847 7.05728 18.1379 7.32663 18.4378 7.62274L21.564 5.3897C21.9011 5.14894 22.3695 5.22701 22.6103 5.56407C22.851 5.90113 22.7729 6.36954 22.4359 6.6103L18.9822 9.07722C19 9.39104 19 9.76853 19 10.2414V13.7586C19 14.931 19 15.5172 18.7292 16C18.4585 16.4828 17.9654 16.7759 16.9792 17.3621L14.0207 19.1207C13.0345 19.7069 12.5414 20 12 20C11.4585 20 10.9654 19.7069 9.97923 19.1207L7.02068 17.3621C6.38484 16.9841 5.95397 16.728 5.65553 16.4643L2.41598 18.624C2.07134 18.8538 1.60568 18.7607 1.37592 18.416C1.14616 18.0714 1.23929 17.6057 1.58393 17.376L5.02858 15.0795C4.99996 14.7363 4.99996 14.313 4.99996 13.7586V10.2414C4.99996 9.68703 4.99996 9.26374 5.02858 8.92047L1.58393 6.62404C1.23929 6.39427 1.14616 5.92862 1.37592 5.58397C1.60568 5.23933 2.07134 5.1462 2.41598 5.37596L5.65553 7.53566C5.95397 7.27199 6.38484 7.01588 7.02068 6.63792L9.97923 4.87931ZM16.6442 14.116C16.8563 14.4718 16.7397 14.9322 16.3839 15.1442L12.3839 17.5283C12.0281 17.7404 11.5678 17.6239 11.3557 17.268C11.1436 16.9122 11.2602 16.4519 11.616 16.2398L15.616 13.8558C15.9718 13.6437 16.4321 13.7602 16.6442 14.116Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldBenzeneRing;
