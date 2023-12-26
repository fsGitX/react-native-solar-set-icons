import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDesignMirrorLeft = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.3408 20.75C13.3408 20.3358 13.6766 20 14.0908 20H14.9999C15.4361 20 15.8346 20 16.2023 19.9968C16.6165 19.9932 16.9552 20.3261 16.9588 20.7403C16.9624 21.1545 16.6295 21.4932 16.2153 21.4968C15.8405 21.5 15.4359 21.5 15.0021 21.5H14.0908C13.6766 21.5 13.3408 21.1642 13.3408 20.75ZM13.3408 2.75C13.3408 2.33579 13.6766 2 14.0908 2L15.0022 2C15.436 2 15.8405 2 16.2153 2.00323C16.6295 2.00681 16.9624 2.34548 16.9588 2.75968C16.9552 3.17387 16.6165 3.50675 16.2023 3.50318C15.8346 3.50001 15.4361 3.5 14.9999 3.5H14.0908C13.6766 3.5 13.3408 3.16421 13.3408 2.75ZM18.3711 20.6954C18.2482 20.2998 18.4692 19.8795 18.8647 19.7566C19.1859 19.6568 19.4094 19.5225 19.5909 19.341C19.7724 19.1595 19.9067 18.936 20.0065 18.6148C20.1294 18.2193 20.5498 17.9983 20.9453 18.1212C21.3409 18.2441 21.5619 18.6644 21.4389 19.06C21.2788 19.5754 21.0311 20.0221 20.6516 20.4017C20.272 20.7812 19.8253 21.0288 19.3099 21.189C18.9143 21.312 18.494 21.0909 18.3711 20.6954ZM18.3711 2.8046C18.494 2.40905 18.9143 2.18805 19.3099 2.31098C19.8253 2.47116 20.272 2.71876 20.6516 3.09835C21.0311 3.47794 21.2788 3.92463 21.4389 4.44002C21.5619 4.83557 21.3409 5.25589 20.9453 5.37882C20.5498 5.50175 20.1294 5.28075 20.0065 4.88519C19.9067 4.56401 19.7724 4.34048 19.5909 4.15901C19.4094 3.97754 19.1859 3.84322 18.8647 3.7434C18.4692 3.62047 18.2482 3.20015 18.3711 2.8046ZM20.9902 16.7089C20.576 16.7053 20.2432 16.3666 20.2467 15.9524C20.2499 15.5847 20.2499 15.1862 20.2499 14.75V13.3864C20.2499 12.9722 20.5857 12.6364 20.9999 12.6364C21.4141 12.6364 21.7499 12.9722 21.7499 13.3864V14.7523C21.7499 15.186 21.7499 15.5906 21.7467 15.9654C21.7431 16.3796 21.4044 16.7125 20.9902 16.7089ZM20.9902 6.79112C21.4044 6.78755 21.7431 7.12043 21.7467 7.53463C21.7499 7.90941 21.7499 8.31395 21.7499 8.74771V10.1136C21.7499 10.5279 21.4141 10.8636 20.9999 10.8636C20.5857 10.8636 20.2499 10.5279 20.2499 10.1136V8.75C20.2499 8.31379 20.2499 7.9153 20.2467 7.54756C20.2432 7.13337 20.576 6.7947 20.9902 6.79112Z" fill={color} fillRule="evenodd"/>
	<Path d="M3 10.75L3 12.75C3 16.5212 3 18.4069 4.17157 19.5784C5.26421 20.6711 7.84768 20.745 11.25 20.75C11.25 21.1642 11.5858 21.5 12 21.5C12.4142 21.5 12.75 21.1642 12.75 20.75L12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75C7.84768 2.75496 5.26421 2.82894 4.17157 3.92157C3 5.09315 3 6.97876 3 10.75Z" fill={color}/>
</Svg>;

export default BoldDesignMirrorLeft;
