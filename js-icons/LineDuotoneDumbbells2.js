import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneDumbbells2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.04444 7.08897L6.13403 6.34434L6.13403 6.34434L6.04444 7.08897ZM8.98501 7.44277L8.89542 8.1874L8.98501 7.44277ZM10.6234 10.9392L11.2606 11.3348L10.6234 10.9392ZM8.04442 11.4837L8.13401 10.7391C7.72846 10.6903 7.35843 10.975 7.30169 11.3795L8.04442 11.4837ZM9.72433 11.5804L9.54252 10.8528L9.54252 10.8528L9.72433 11.5804ZM10.2683 7.70258L10.6208 7.04061L10.6208 7.04061L10.2683 7.70258ZM10.9606 8.53527L10.2405 8.74502L10.2405 8.74503L10.9606 8.53527ZM3.83301 7.67769L3.19585 7.28206L3.19585 7.28206L3.83301 7.67769ZM4.7321 7.03647L4.55029 6.30884L4.55029 6.30884L4.7321 7.03647ZM3.49581 10.0816L2.77574 10.2914L2.77574 10.2914L3.49581 10.0816ZM5.83899 11.2183L6.58172 11.3225C6.6097 11.123 6.55624 10.9206 6.43339 10.761C6.31053 10.6013 6.1286 10.4978 5.92858 10.4737L5.83899 11.2183ZM4.18815 10.9143L4.54072 10.2524L4.54072 10.2524L4.18815 10.9143ZM6.95556 21.911L6.86597 22.6557L6.86597 22.6557L6.95556 21.911ZM4.01498 21.5572L4.10458 20.8126L4.10458 20.8126L4.01498 21.5572ZM9.44751 20.1338L10.1902 20.238L9.44751 20.1338ZM9.16699 21.3223L8.52983 20.9267L8.52983 20.9267L9.16699 21.3223ZM8.2679 21.9635L8.44971 22.6912L8.44971 22.6912L8.2679 21.9635ZM7.16101 17.7817L6.41828 17.6775C6.3903 17.877 6.44376 18.0794 6.56661 18.239C6.68947 18.3987 6.8714 18.5022 7.07142 18.5263L7.16101 17.7817ZM8.81185 18.0857L9.16441 17.4237L9.16441 17.4237L8.81185 18.0857ZM9.50419 18.9184L8.78412 19.1281L8.78412 19.1281L9.50419 18.9184ZM2.09606 19.2493L2.83879 19.3535L2.09606 19.2493ZM2.37658 18.0608L1.73942 17.6652L1.73942 17.6652L2.37658 18.0608ZM4.95558 17.5163L4.86599 18.2609C5.27154 18.3097 5.64157 18.025 5.69831 17.6205L4.95558 17.5163ZM3.27567 17.4196L3.09386 16.6919L3.09386 16.6919L3.27567 17.4196ZM2.03938 20.4647L1.31931 20.6745L2.03938 20.4647ZM2.73172 21.2974L2.37916 21.9594L2.37916 21.9594L2.73172 21.2974ZM5.95484 7.8336L8.89542 8.1874L9.07461 6.69814L6.13403 6.34434L5.95484 7.8336ZM10.1612 9.64652C10.1152 9.97465 10.0858 10.1807 10.0523 10.3358C10.0206 10.4829 9.99594 10.528 9.98626 10.5436L11.2606 11.3348C11.3979 11.1136 11.469 10.8817 11.5186 10.6523C11.5663 10.431 11.6037 10.1612 11.6467 9.85489L10.1612 9.64652ZM7.95483 12.2283C8.29282 12.269 8.65913 12.3132 8.97751 12.3375C9.2582 12.3589 9.62747 12.3777 9.90614 12.3081L9.54252 10.8528C9.55913 10.8486 9.53259 10.8563 9.43354 10.8569C9.34483 10.8575 9.23047 10.8524 9.0915 10.8418C8.81237 10.8205 8.48109 10.7808 8.13401 10.7391L7.95483 12.2283ZM9.98626 10.5436C9.89897 10.6842 9.74411 10.8024 9.54252 10.8528L9.90614 12.3081C10.4639 12.1687 10.9558 11.8257 11.2606 11.3348L9.98626 10.5436ZM8.89542 8.1874C9.24744 8.22976 9.47672 8.2577 9.65113 8.28999C9.82013 8.32128 9.88468 8.34802 9.91571 8.36454L10.6208 7.04061C10.3962 6.92097 10.1617 6.85902 9.92421 6.81506C9.69217 6.77209 9.40764 6.73821 9.07461 6.69814L8.89542 8.1874ZM11.6467 9.85489C11.6896 9.54863 11.7279 9.27886 11.7428 9.05336C11.7582 8.82024 11.7538 8.57646 11.6807 8.32552L10.2405 8.74503C10.2443 8.7578 10.256 8.80449 10.2461 8.95455C10.2357 9.11222 10.2072 9.31831 10.1612 9.64652L11.6467 9.85489ZM9.91571 8.36454C10.089 8.45684 10.198 8.59903 10.2405 8.74502L11.6807 8.32552C11.5184 7.76828 11.1293 7.31142 10.6208 7.04061L9.91571 8.36454ZM4.29522 8.97037C4.34125 8.64224 4.37063 8.43615 4.40411 8.28105C4.43585 8.13398 4.46049 8.08891 4.47017 8.07332L3.19585 7.28206C3.05851 7.50325 2.98739 7.73519 2.93788 7.96456C2.8901 8.18589 2.85273 8.45566 2.80976 8.76201L4.29522 8.97037ZM6.13403 6.34434C5.80093 6.30426 5.51659 6.2697 5.28055 6.25633C5.03852 6.24263 4.79676 6.24726 4.55029 6.30884L4.9139 7.7641C4.95216 7.75454 5.02405 7.74421 5.19574 7.75393C5.37342 7.76399 5.60288 7.79125 5.95484 7.8336L6.13403 6.34434ZM4.47017 8.07332C4.55746 7.93274 4.71233 7.81447 4.91391 7.7641L4.55029 6.30884C3.99257 6.4482 3.50061 6.79123 3.19585 7.28206L4.47017 8.07332ZM2.80976 8.76201C2.7668 9.06827 2.72849 9.33804 2.7136 9.56354C2.69821 9.79666 2.70264 10.0404 2.77574 10.2914L4.21588 9.87187C4.21216 9.8591 4.20044 9.8124 4.21034 9.66235C4.22075 9.50468 4.24918 9.29859 4.29522 8.97037L2.80976 8.76201ZM5.92858 10.4737C5.58147 10.432 5.25027 10.392 4.97461 10.3465C4.83734 10.3238 4.7256 10.3017 4.64036 10.2803C4.54458 10.2562 4.52298 10.2429 4.54072 10.2524L3.83559 11.5763C4.08971 11.7116 4.4546 11.781 4.73047 11.8265C5.04504 11.8784 5.41143 11.9223 5.74939 11.963L5.92858 10.4737ZM2.77574 10.2914C2.93806 10.8486 3.32713 11.3055 3.83559 11.5763L4.54072 10.2524C4.36742 10.1601 4.25841 10.0179 4.21588 9.87187L2.77574 10.2914ZM7.04516 21.1664L4.10458 20.8126L3.92539 22.3019L6.86597 22.6557L7.04516 21.1664ZM8.70478 20.0296C8.65875 20.3578 8.62937 20.5639 8.59589 20.719C8.56415 20.866 8.53951 20.9111 8.52983 20.9267L9.80415 21.7179C9.94149 21.4968 10.0126 21.2648 10.0621 21.0354C10.1099 20.8141 10.1473 20.5443 10.1902 20.238L8.70478 20.0296ZM6.86597 22.6557C7.19907 22.6957 7.48341 22.7303 7.71946 22.7437C7.96149 22.7574 8.20324 22.7527 8.44971 22.6912L8.08609 21.2359C8.04783 21.2455 7.97595 21.2558 7.80426 21.2461C7.62658 21.236 7.39712 21.2088 7.04516 21.1664L6.86597 22.6557ZM8.52983 20.9267C8.44254 21.0673 8.28767 21.1855 8.08609 21.2359L8.44971 22.6912C9.00743 22.5518 9.49939 22.2088 9.80415 21.7179L8.52983 20.9267ZM7.07142 18.5263C7.41853 18.568 7.74973 18.608 8.02539 18.6535C8.16266 18.6762 8.2744 18.6983 8.35964 18.7197C8.45542 18.7438 8.47702 18.7571 8.45928 18.7476L9.16441 17.4237C8.91029 17.2884 8.5454 17.219 8.26953 17.1735C7.95496 17.1216 7.58857 17.0777 7.25061 17.037L7.07142 18.5263ZM10.1902 20.238C10.2332 19.9317 10.2715 19.662 10.2864 19.4365C10.3018 19.2033 10.2974 18.9596 10.2243 18.7086L8.78412 19.1281C8.78784 19.1409 8.79956 19.1876 8.78966 19.3377C8.77925 19.4953 8.75082 19.7014 8.70478 20.0296L10.1902 20.238ZM8.45928 18.7476C8.63258 18.8399 8.74159 18.9821 8.78412 19.1281L10.2243 18.7086C10.0619 18.1514 9.67287 17.6945 9.16441 17.4237L8.45928 18.7476ZM2.83879 19.3535C2.88482 19.0253 2.9142 18.8193 2.94768 18.6642C2.97942 18.5171 3.00406 18.472 3.01374 18.4564L1.73942 17.6652C1.60208 17.8864 1.53096 18.1183 1.48145 18.3477C1.43367 18.569 1.3963 18.8388 1.35333 19.1451L2.83879 19.3535ZM5.04517 16.7717C4.70718 16.731 4.34087 16.6868 4.0225 16.6625C3.7418 16.6411 3.37253 16.6223 3.09386 16.6919L3.45747 18.1472C3.44087 18.1514 3.46741 18.1437 3.56646 18.1431C3.65517 18.1425 3.76953 18.1476 3.9085 18.1582C4.18763 18.1795 4.51891 18.2192 4.86599 18.2609L5.04517 16.7717ZM3.01374 18.4564C3.10103 18.3158 3.2559 18.1976 3.45748 18.1472L3.09386 16.6919C2.53614 16.8313 2.04418 17.1743 1.73942 17.6652L3.01374 18.4564ZM1.35333 19.1451C1.31037 19.4514 1.27206 19.7211 1.25717 19.9466C1.24178 20.1798 1.24621 20.4235 1.31931 20.6745L2.75945 20.255C2.75573 20.2422 2.74401 20.1955 2.75391 20.0455C2.76432 19.8878 2.79275 19.6817 2.83879 19.3535L1.35333 19.1451ZM4.10458 20.8126C3.75255 20.7702 3.52327 20.7423 3.34887 20.71C3.17987 20.6787 3.11532 20.652 3.08429 20.6355L2.37916 21.9594C2.60379 22.079 2.83833 22.141 3.07578 22.1849C3.30783 22.2279 3.59235 22.2618 3.92539 22.3019L4.10458 20.8126ZM1.31931 20.6745C1.48163 21.2317 1.8707 21.6886 2.37916 21.9594L3.08429 20.6355C2.91099 20.5432 2.80198 20.401 2.75945 20.255L1.31931 20.6745ZM5.69831 17.6205L6.58172 11.3225L5.09626 11.1142L4.21285 17.4121L5.69831 17.6205ZM7.30169 11.3795L6.41828 17.6775L7.90374 17.8858L8.78715 11.5879L7.30169 11.3795Z" fill={color} opacity="0.5"/>
	<Path d="M17.5741 16.7826L17.3868 16.0564L17.3868 16.0564L17.5741 16.7826ZM20.2855 16.0833L20.4728 16.8095L20.4728 16.8095L20.2855 16.0833ZM21.3504 12.4759L21.9368 12.0084L21.9368 12.0084L21.3504 12.4759ZM18.8568 12.2556L18.1343 12.4567C18.2439 12.8504 18.6484 13.0839 19.0441 12.9818L18.8568 12.2556ZM20.4201 11.9589L20.5144 11.2148L20.5144 11.2148L20.4201 11.9589ZM21.4545 15.6753L21.9001 16.2786L21.9001 16.2786L21.4545 15.6753ZM21.9916 14.7798L22.7347 14.8814L22.7347 14.8814L21.9916 14.7798ZM15.4195 16.4749L14.833 16.9424L14.833 16.9424L15.4195 16.4749ZM16.3498 16.992L16.2555 17.736L16.2555 17.736L16.3498 16.992ZM14.7782 14.1711L14.0351 14.0694L14.0351 14.0694L14.7782 14.1711ZM16.8233 12.7801L17.0106 13.5064C17.2056 13.4561 17.3722 13.3295 17.4728 13.155C17.5735 12.9806 17.5998 12.773 17.5458 12.579L16.8233 12.7801ZM15.3153 13.2756L14.8697 12.6723L14.8697 12.6723L15.3153 13.2756ZM16.4259 2.21736L16.6132 2.94359L16.6132 2.94359L16.4259 2.21736ZM13.7145 2.91672L13.5272 2.19049L13.5272 2.19049L13.7145 2.91672ZM19.0043 3.65038L18.2818 3.8515L19.0043 3.65038ZM18.5805 2.52507L17.994 2.99256L17.994 2.99256L18.5805 2.52507ZM17.6502 2.00804L17.7445 1.26399L17.7445 1.26399L17.6502 2.00804ZM17.1767 6.21986L16.9894 5.49363C16.7944 5.54393 16.6278 5.67054 16.5272 5.84496C16.4265 6.01939 16.4002 6.22697 16.4542 6.42098L17.1767 6.21986ZM18.6847 5.72445L19.1303 6.32772L19.1303 6.32772L18.6847 5.72445ZM19.2218 4.82892L18.4787 4.7273L18.4787 4.7273L19.2218 4.82892ZM12.2258 5.39879L11.5033 5.59991L12.2258 5.39879ZM12.6496 6.52409L13.2361 6.0566L13.2361 6.0566L12.6496 6.52409ZM15.1432 6.74438L15.8657 6.54326C15.7561 6.14959 15.3516 5.91609 14.9559 6.01815L15.1432 6.74438ZM13.5799 7.04112L13.6742 6.29707L13.6742 6.29707L13.5799 7.04112ZM12.0084 4.22024L12.7514 4.32187L12.0084 4.22024ZM12.5455 3.32472L12.0999 2.72145L12.0999 2.72145L12.5455 3.32472ZM17.7614 17.5089L20.4728 16.8095L20.0982 15.357L17.3868 16.0564L17.7614 17.5089ZM22.4967 13.4001C22.4149 13.1062 22.3436 12.8484 22.2692 12.6391C22.1922 12.4227 22.0948 12.2066 21.9368 12.0084L20.7639 12.9434C20.7758 12.9584 20.8058 13.0009 20.8559 13.1419C20.9086 13.2899 20.9642 13.4881 21.0517 13.8023L22.4967 13.4001ZM19.0441 12.9818C19.3646 12.8992 19.6684 12.821 19.9256 12.767C20.0536 12.7401 20.1581 12.7218 20.2387 12.712C20.3298 12.7009 20.3494 12.7059 20.3258 12.7029L20.5144 11.2148C20.2314 11.179 19.8767 11.2446 19.6174 11.299C19.3201 11.3614 18.9807 11.4491 18.6695 11.5294L19.0441 12.9818ZM21.9368 12.0084C21.5853 11.5674 21.0722 11.2855 20.5144 11.2148L20.3258 12.7029C20.506 12.7258 20.6622 12.8158 20.7639 12.9434L21.9368 12.0084ZM20.4728 16.8095C20.779 16.7305 21.044 16.6626 21.2587 16.5918C21.479 16.5192 21.6981 16.4278 21.9001 16.2786L21.0089 15.072C20.9895 15.0864 20.9399 15.1175 20.7891 15.1672C20.6325 15.2189 20.4237 15.2731 20.0982 15.357L20.4728 16.8095ZM21.0517 13.8023C21.1391 14.1166 21.1939 14.315 21.2252 14.4683C21.255 14.6149 21.2505 14.6637 21.2486 14.6781L22.7347 14.8814C22.7692 14.6294 22.7406 14.393 22.695 14.1689C22.6507 13.9516 22.5785 13.6939 22.4967 13.4001L21.0517 13.8023ZM21.9001 16.2786C22.3539 15.9434 22.658 15.4425 22.7347 14.8814L21.2486 14.6781C21.2281 14.8276 21.1459 14.9709 21.0089 15.072L21.9001 16.2786ZM14.2731 15.5507C14.3549 15.8446 14.4262 16.1024 14.5007 16.3117C14.5777 16.5281 14.675 16.7442 14.833 16.9424L16.006 16.0074C15.994 15.9924 15.9641 15.9499 15.9139 15.809C15.8613 15.6609 15.8057 15.4627 15.7182 15.1485L14.2731 15.5507ZM17.3868 16.0564C17.0614 16.1403 16.8523 16.1939 16.6897 16.2246C16.5336 16.2541 16.4723 16.2515 16.4441 16.2479L16.2555 17.736C16.5041 17.7675 16.7392 17.7417 16.968 17.6985C17.1905 17.6565 17.4552 17.5879 17.7614 17.5089L17.3868 16.0564ZM14.833 16.9424C15.1845 17.3834 15.6977 17.6653 16.2555 17.736L16.4441 16.2479C16.2638 16.2251 16.1077 16.135 16.006 16.0074L14.833 16.9424ZM15.7182 15.1485C15.6307 14.8342 15.576 14.6359 15.5447 14.4825C15.5148 14.336 15.5193 14.2871 15.5213 14.2727L14.0351 14.0694C14.0007 14.3215 14.0292 14.5579 14.0749 14.782C14.1192 14.9993 14.1914 15.257 14.2731 15.5507L15.7182 15.1485ZM16.6359 12.0539C16.3247 12.1342 15.9852 12.2216 15.6953 12.3107C15.5497 12.3554 15.4048 12.404 15.2745 12.4567C15.1545 12.5052 15.0021 12.5745 14.8697 12.6723L15.7609 13.8788C15.7393 13.8948 15.7518 13.8817 15.8366 13.8474C15.9111 13.8173 16.0109 13.7829 16.1357 13.7445C16.3864 13.6675 16.6901 13.589 17.0106 13.5064L16.6359 12.0539ZM15.5213 14.2727C15.5417 14.1233 15.624 13.98 15.7609 13.8788L14.8697 12.6723C14.416 13.0074 14.1119 13.5084 14.0351 14.0694L15.5213 14.2727ZM16.2386 1.49113L13.5272 2.19049L13.9018 3.64295L16.6132 2.94359L16.2386 1.49113ZM19.7269 3.44926C19.6451 3.15541 19.5738 2.89759 19.4993 2.68829C19.4223 2.47189 19.325 2.2558 19.167 2.05758L17.994 2.99256C18.006 3.00755 18.0359 3.05008 18.0861 3.19103C18.1387 3.33905 18.1943 3.53729 18.2818 3.8515L19.7269 3.44926ZM16.6132 2.94359C16.9386 2.85965 17.1477 2.80613 17.3103 2.77543C17.4664 2.74594 17.5277 2.74852 17.5559 2.75209L17.7445 1.26399C17.4959 1.23249 17.2608 1.25826 17.032 1.30147C16.8095 1.34347 16.5448 1.41214 16.2386 1.49113L16.6132 2.94359ZM19.167 2.05758C18.8155 1.61661 18.3023 1.33469 17.7445 1.26399L17.5559 2.75209C17.7362 2.77494 17.8923 2.86498 17.994 2.99256L19.167 2.05758ZM17.3641 6.94609C17.6753 6.86583 18.0148 6.77842 18.3047 6.68935C18.4503 6.64464 18.5952 6.59596 18.7255 6.54332C18.8455 6.49482 18.9979 6.42549 19.1303 6.32772L18.2391 5.12117C18.2607 5.1052 18.2482 5.11833 18.1634 5.1526C18.0889 5.18273 17.9891 5.21714 17.8643 5.25546C17.6136 5.33247 17.3099 5.41097 16.9894 5.49363L17.3641 6.94609ZM18.2818 3.8515C18.3693 4.16578 18.424 4.36414 18.4553 4.5175C18.4852 4.66403 18.4807 4.71288 18.4787 4.7273L19.9649 4.93055C19.9993 4.67852 19.9708 4.44214 19.9251 4.21802C19.8808 4.00074 19.8086 3.74304 19.7269 3.44926L18.2818 3.8515ZM19.1303 6.32772C19.584 5.99259 19.8881 5.49164 19.9649 4.93055L18.4787 4.7273C18.4583 4.87672 18.376 5.02004 18.2391 5.12117L19.1303 6.32772ZM11.5033 5.59991C11.5851 5.89376 11.6564 6.15157 11.7308 6.36088C11.8078 6.57728 11.9052 6.79336 12.0632 6.99159L13.2361 6.0566C13.2242 6.04161 13.1942 5.99908 13.1441 5.85814C13.0914 5.71011 13.0358 5.51188 12.9483 5.19767L11.5033 5.59991ZM14.9559 6.01815C14.6354 6.10081 14.3316 6.17902 14.0744 6.23301C13.9464 6.25987 13.8419 6.27815 13.7613 6.28799C13.6702 6.29911 13.6506 6.29407 13.6742 6.29707L13.4856 7.78517C13.7686 7.82103 14.1233 7.75543 14.3826 7.70101C14.6799 7.63859 15.0193 7.55089 15.3305 7.47062L14.9559 6.01815ZM12.0632 6.99159C12.4147 7.43256 12.9278 7.71448 13.4856 7.78517L13.6742 6.29707C13.494 6.27423 13.3378 6.18419 13.2361 6.0566L12.0632 6.99159ZM12.9483 5.19767C12.8609 4.88338 12.8061 4.68503 12.7748 4.53167C12.745 4.38514 12.7495 4.33628 12.7514 4.32187L11.2653 4.11861C11.2308 4.37064 11.2594 4.60702 11.305 4.83114C11.3493 5.04843 11.4215 5.30612 11.5033 5.59991L12.9483 5.19767ZM13.5272 2.19049C13.221 2.26947 12.956 2.33743 12.7413 2.40817C12.521 2.4808 12.3019 2.5722 12.0999 2.72145L12.9911 3.92799C13.0105 3.91364 13.0601 3.8825 13.2109 3.83277C13.3675 3.78115 13.5763 3.72691 13.9018 3.64295L13.5272 2.19049ZM12.7514 4.32187C12.7719 4.17244 12.8541 4.02913 12.9911 3.92799L12.0999 2.72145C11.6461 3.05658 11.342 3.55752 11.2653 4.11861L12.7514 4.32187ZM14.4206 6.9455L16.1007 12.9813L17.5458 12.579L15.8657 6.54326L14.4206 6.9455ZM19.5794 12.0545L17.8993 6.01874L16.4542 6.42098L18.1343 12.4567L19.5794 12.0545Z" fill={color}/>
</Svg>;

export default LineDuotoneDumbbells2;
