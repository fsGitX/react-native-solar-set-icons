import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSSDSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19 17V18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M16.5 17V18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14 17V18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11.5 17V18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 5.11765L19.7204 4.90886L19.718 4.90062L19.7154 4.89243L19 5.11765ZM5 5.11765L4.28461 4.89243L4.28204 4.90062L4.27965 4.90886L5 5.11765ZM21.1312 15.1645C21.2465 15.5624 21.6625 15.7914 22.0603 15.6761C22.4581 15.5608 22.6872 15.1448 22.5719 14.7469L21.1312 15.1645ZM1.42813 14.7469C1.31282 15.1448 1.54186 15.5608 1.9397 15.6761C2.33754 15.7914 2.75353 15.5624 2.86884 15.1645L1.42813 14.7469ZM2.88886 20.6431L2.45569 21.2554L2.88886 20.6431ZM2.33706 20.0589L2.97133 19.6586L2.33706 20.0589ZM21.6629 20.0589L21.0287 19.6586L21.6629 20.0589ZM21.1111 20.6431L21.5443 21.2554L21.1111 20.6431ZM21.1111 13.9451L21.5443 13.3329L21.1111 13.9451ZM21.6629 14.5294L21.0287 14.9296L21.6629 14.5294ZM2.88886 13.9451L2.45569 13.3329L2.88886 13.9451ZM2.33706 14.5294L2.97133 14.9296L2.33706 14.5294ZM21.1461 9.8279C21.0308 9.43006 20.6148 9.20102 20.217 9.31634C19.8191 9.43165 19.5901 9.84764 19.7054 10.2455L21.1461 9.8279ZM18.6361 6.5562C18.7514 6.95404 19.1674 7.18307 19.5652 7.06776C19.9631 6.95245 20.1921 6.53646 20.0768 6.13862L18.6361 6.5562ZM12 20.25C11.5858 20.25 11.25 20.5858 11.25 21C11.25 21.4142 11.5858 21.75 12 21.75V20.25ZM8 21.75C8.41421 21.75 8.75 21.4142 8.75 21C8.75 20.5858 8.41421 20.25 8 20.25V21.75ZM7.5 3.75H16.5V2.25H7.5V3.75ZM16.5 3.75C16.9281 3.75 17.2532 3.85015 17.5156 4.05473C17.785 4.26479 18.0648 4.64466 18.2846 5.34286L19.7154 4.89243C19.4352 4.0024 19.0172 3.32344 18.4378 2.87174C17.8514 2.41455 17.1765 2.25 16.5 2.25V3.75ZM7.5 2.25C6.82355 2.25 6.14861 2.41455 5.56216 2.87174C4.98276 3.32344 4.56481 4.0024 4.28461 4.89243L5.71539 5.34286C5.93519 4.64466 6.21496 4.26479 6.48441 4.05473C6.74682 3.85015 7.07188 3.75 7.5 3.75V2.25ZM4.27965 4.90886L1.42813 14.7469L2.86884 15.1645L5.72035 5.32644L4.27965 4.90886ZM5.5 14.3382H18.5V12.8382H5.5V14.3382ZM5.5 20.25C4.78126 20.25 4.30195 20.249 3.93724 20.2097C3.58737 20.172 3.42829 20.106 3.32203 20.0308L2.45569 21.2554C2.85387 21.5371 3.29814 21.6495 3.77661 21.7011C4.24024 21.751 4.81428 21.75 5.5 21.75V20.25ZM1.25 17.2941C1.25 18.0229 1.24919 18.6228 1.29557 19.1056C1.34296 19.5988 1.44521 20.0509 1.70279 20.4591L2.97133 19.6586C2.89185 19.5327 2.82557 19.3459 2.78869 18.9621C2.75081 18.5678 2.75 18.0524 2.75 17.2941H1.25ZM3.32203 20.0308C3.18572 19.9344 3.06594 19.8085 2.97133 19.6586L1.70279 20.4591C1.90001 20.7716 2.15523 21.0428 2.45569 21.2554L3.32203 20.0308ZM21.25 17.2941C21.25 18.0524 21.2492 18.5678 21.2113 18.9621C21.1744 19.3459 21.1081 19.5327 21.0287 19.6586L22.2972 20.4591C22.5548 20.0509 22.657 19.5988 22.7044 19.1056C22.7508 18.6228 22.75 18.0229 22.75 17.2941H21.25ZM18.5 21.75C19.1857 21.75 19.7598 21.751 20.2234 21.7011C20.7019 21.6495 21.1461 21.5371 21.5443 21.2554L20.678 20.0308C20.5717 20.106 20.4126 20.172 20.0628 20.2097C19.6981 20.249 19.2187 20.25 18.5 20.25V21.75ZM21.0287 19.6586C20.9341 19.8085 20.8143 19.9344 20.678 20.0308L21.5443 21.2554C21.8448 21.0428 22.1 20.7716 22.2972 20.4591L21.0287 19.6586ZM18.5 14.3382C19.2187 14.3382 19.6981 14.3393 20.0628 14.3785C20.4126 14.4162 20.5717 14.4822 20.678 14.5574L21.5443 13.3329C21.1461 13.0512 20.7019 12.9387 20.2234 12.8872C19.7598 12.8372 19.1857 12.8382 18.5 12.8382V14.3382ZM22.75 17.2941C22.75 16.5653 22.7508 15.9654 22.7044 15.4827C22.657 14.9894 22.5548 14.5373 22.2972 14.1291L21.0287 14.9296C21.1081 15.0556 21.1744 15.2423 21.2113 15.6261C21.2492 16.0204 21.25 16.5358 21.25 17.2941H22.75ZM20.678 14.5574C20.8143 14.6538 20.9341 14.7797 21.0287 14.9296L22.2972 14.1291C22.1 13.8166 21.8448 13.5454 21.5443 13.3329L20.678 14.5574ZM5.5 12.8382C4.81428 12.8382 4.24024 12.8372 3.77661 12.8872C3.29814 12.9387 2.85387 13.0512 2.45569 13.3329L3.32203 14.5574C3.42829 14.4822 3.58737 14.4162 3.93724 14.3785C4.30195 14.3393 4.78126 14.3382 5.5 14.3382V12.8382ZM2.75 17.2941C2.75 16.5358 2.75081 16.0204 2.78869 15.6261C2.82557 15.2423 2.89185 15.0556 2.97133 14.9296L1.70279 14.1291C1.44521 14.5373 1.34296 14.9894 1.29557 15.4827C1.24919 15.9654 1.25 16.5653 1.25 17.2941H2.75ZM2.45569 13.3329C2.15523 13.5454 1.90001 13.8166 1.70279 14.1291L2.97133 14.9296C3.06595 14.7797 3.18573 14.6538 3.32203 14.5574L2.45569 13.3329ZM19.7054 10.2455L21.1312 15.1645L22.5719 14.7469L21.1461 9.8279L19.7054 10.2455ZM18.2796 5.32644L18.6361 6.5562L20.0768 6.13862L19.7204 4.90886L18.2796 5.32644ZM18.5 20.25H12V21.75H18.5V20.25ZM8 20.25H5.5V21.75H8V20.25Z" fill={color}/>
</Svg>;

export default BrokenSSDSquare;
