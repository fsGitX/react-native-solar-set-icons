import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineUploadTrack = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C12.6345 21.25 13.2534 21.1862 13.8508 21.065C14.2567 20.9826 14.6526 21.2448 14.735 21.6508C14.8174 22.0567 14.5551 22.4526 14.1492 22.535C13.4541 22.6761 12.7353 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 12.7353 22.6761 13.4541 22.535 14.1492C22.4526 14.5551 22.0567 14.8174 21.6508 14.735C21.2448 14.6526 20.9826 14.2567 21.065 13.8508C21.1862 13.2534 21.25 12.6345 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM12.7676 8.52584C12.7661 8.53409 12.7604 8.56729 12.7564 8.64336C12.7502 8.76101 12.75 8.91982 12.75 9.17082C12.75 9.27795 12.7501 9.33904 12.7518 9.38529C12.7528 9.41425 12.7542 9.42649 12.7546 9.42955C12.7662 9.48945 12.7993 9.54303 12.8477 9.58021C12.8502 9.58194 12.8606 9.58864 12.886 9.60252C12.9266 9.62468 12.9812 9.65209 13.0771 9.7L14.3938 10.3584C14.6183 10.4706 14.7604 10.5414 14.8684 10.5885C14.9382 10.6189 14.9705 10.6287 14.9785 10.631C15.0885 10.6405 15.1917 10.5767 15.2324 10.4742C15.2339 10.4659 15.2396 10.4327 15.2436 10.3566C15.2498 10.239 15.25 10.0802 15.25 9.82918C15.25 9.72205 15.2499 9.66096 15.2482 9.61471C15.2472 9.58575 15.2458 9.57351 15.2454 9.57045C15.2338 9.51055 15.2007 9.45697 15.1523 9.41979C15.1498 9.41805 15.1394 9.41136 15.114 9.39748C15.0734 9.37533 15.0188 9.34791 14.9229 9.3L13.6062 8.64164C13.3817 8.52939 13.2396 8.45859 13.1316 8.41151C13.0617 8.38107 13.0295 8.37131 13.0215 8.36896C12.9115 8.35945 12.8083 8.42327 12.7676 8.52584ZM12.75 11.2135L13.7396 11.7083C13.9425 11.8098 14.1204 11.8987 14.269 11.9635C14.4199 12.0293 14.5988 12.097 14.7972 12.1202C15.6037 12.2142 16.3689 11.7413 16.6454 10.978C16.7134 10.7901 16.7328 10.5998 16.7415 10.4355C16.75 10.2735 16.75 10.0747 16.75 9.8479V9.82918C16.75 9.81565 16.75 9.80205 16.75 9.78837C16.7503 9.62647 16.7505 9.45474 16.7188 9.28904C16.638 8.86674 16.4045 8.48898 16.0629 8.22783C15.9289 8.12535 15.7752 8.04877 15.6303 7.97658C15.618 7.97048 15.6059 7.96441 15.5938 7.95836L14.2603 7.29164C14.0575 7.19022 13.8796 7.10128 13.731 7.03647C13.5801 6.97071 13.4012 6.90297 13.2028 6.87982C12.3963 6.78575 11.6311 7.25868 11.3546 8.02203C11.2866 8.20986 11.2672 8.40019 11.2585 8.56454C11.2519 8.68919 11.2504 8.83571 11.2501 9L11.25 9.11944C11.25 9.13026 11.25 9.14115 11.25 9.1521V9.17082C11.25 9.18435 11.25 9.19795 11.25 9.21163C11.2499 9.23918 11.2499 9.26701 11.25 9.29505V12.5499C10.875 12.3581 10.4501 12.25 10 12.25C8.48122 12.25 7.25 13.4812 7.25 15C7.25 16.5188 8.48122 17.75 10 17.75C11.5188 17.75 12.75 16.5188 12.75 15V11.2135ZM11.25 15C11.25 14.3096 10.6904 13.75 10 13.75C9.30964 13.75 8.75 14.3096 8.75 15C8.75 15.6904 9.30964 16.25 10 16.25C10.6904 16.25 11.25 15.6904 11.25 15ZM17.4697 14.4697C17.7626 14.1768 18.2374 14.1768 18.5303 14.4697L21.0303 16.9697C21.3232 17.2626 21.3232 17.7374 21.0303 18.0303C20.7374 18.3232 20.2626 18.3232 19.9697 18.0303L18.75 16.8107V22C18.75 22.4142 18.4142 22.75 18 22.75C17.5858 22.75 17.25 22.4142 17.25 22V16.8107L16.0303 18.0303C15.7374 18.3232 15.2626 18.3232 14.9697 18.0303C14.6768 17.7374 14.6768 17.2626 14.9697 16.9697L17.4697 14.4697Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineUploadTrack;
