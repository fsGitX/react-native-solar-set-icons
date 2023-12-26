import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneMeditation = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.5 4.5C14.5 5.88071 13.3807 7 12 7C10.6193 7 9.5 5.88071 9.5 4.5C9.5 3.11929 10.6193 2 12 2C13.3807 2 14.5 3.11929 14.5 4.5Z" fill={color}/>
	<Path d="M9.95 15.4C10.2814 15.6485 10.3485 16.1186 10.1 16.45L9.05343 17.8454C9.02627 17.8816 9.00485 17.9102 8.98274 17.9381C8.62103 18.3954 8.12338 18.7258 7.56163 18.8817C7.52726 18.8913 7.49255 18.8999 7.44855 18.9109L7.44092 18.9129L5.95613 19.284C5.24728 19.4613 4.75 20.0982 4.75 20.8288C4.75 21.0614 4.93856 21.25 5.17116 21.25H6.72727C7.34369 21.25 7.5923 21.2488 7.82945 21.2209C8.40763 21.153 8.96569 20.967 9.46901 20.6744C9.67544 20.5544 9.87507 20.4062 10.3682 20.0364L12.55 18.4C12.8814 18.1515 13.3515 18.2186 13.6 18.55C13.8485 18.8814 13.7814 19.3515 13.45 19.6L12.5453 20.2785L13.803 20.7501C14.4297 20.9851 14.6826 21.0784 14.9395 21.1385C15.078 21.1709 15.2181 21.1963 15.3591 21.2146C15.6208 21.2486 15.8903 21.25 16.5596 21.25H18.8288C19.0614 21.25 19.25 21.0614 19.25 20.8288C19.25 20.0982 18.7527 19.4613 18.0439 19.284L16.5512 18.9109C16.5073 18.8999 16.4727 18.8913 16.4384 18.8817C15.8766 18.7258 15.379 18.3954 15.0173 17.9381C14.9951 17.9102 14.9736 17.8814 14.9464 17.8452L13.9 16.45C13.6515 16.1186 13.7186 15.6485 14.05 15.4C14.3814 15.1515 14.8515 15.2186 15.1 15.55L16.1417 16.939C16.1757 16.9843 16.185 16.9966 16.1936 17.0075C16.358 17.2153 16.5843 17.3655 16.8396 17.4364C16.853 17.4401 16.8678 17.4439 16.9229 17.4576L18.4077 17.8288C19.7843 18.173 20.75 19.4099 20.75 20.8288C20.75 21.8899 19.8899 22.75 18.8288 22.75L16.5079 22.75C15.9061 22.75 15.5352 22.7501 15.1659 22.7021C14.975 22.6773 14.7856 22.6429 14.5982 22.5991C14.2355 22.5144 13.8882 22.3841 13.3248 22.1728L11.1213 21.3465C10.7409 21.6316 10.4898 21.8161 10.2228 21.9713C9.54181 22.3671 8.7868 22.6187 8.00455 22.7107C7.66964 22.7501 7.32894 22.75 6.77545 22.75L5.17116 22.75C4.11013 22.75 3.25 21.8899 3.25 20.8288C3.25 19.4099 4.21573 18.173 5.59233 17.8288L7.07711 17.4576C7.13215 17.4439 7.14703 17.4401 7.16039 17.4364C7.41573 17.3655 7.64195 17.2153 7.80637 17.0075C7.81498 16.9966 7.82419 16.9844 7.85827 16.939L8.9 15.55C9.14853 15.2186 9.61863 15.1515 9.95 15.4Z" fill={color} fillRule="evenodd"/>
	<Path d="M12.8689 9.82208C12.2983 9.72597 11.702 9.72597 11.1314 9.82208C8.62372 10.2445 6.75016 12.4461 6.75016 15.0196C6.75016 15.5842 6.43448 16.1049 5.92728 16.3612L3.33841 17.6694C2.96871 17.8562 2.51757 17.7079 2.33077 17.3382C2.14396 16.9685 2.29222 16.5174 2.66192 16.3306L5.24941 15.0231L5.25016 15.0196C5.25016 11.7143 7.65199 8.88701 10.8823 8.34292C11.6178 8.21903 12.3825 8.21903 13.1181 8.34292C16.3483 8.88701 18.7502 11.7143 18.7502 15.0196L18.7506 15.0224L21.3384 16.3306C21.7081 16.5174 21.8564 16.9685 21.6696 17.3382C21.4827 17.7079 21.0316 17.8562 20.6619 17.6694L18.073 16.3612C17.5658 16.1049 17.2502 15.5842 17.2502 15.0196C17.2502 12.4461 15.3766 10.2445 12.8689 9.82208Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneMeditation;
