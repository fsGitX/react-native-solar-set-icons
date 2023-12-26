import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineDumbbells2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17.3103 2.77541C17.1477 2.80611 16.9387 2.85963 16.6132 2.94357L13.9018 3.64293C13.5763 3.72689 13.3676 3.78113 13.211 3.83275C13.0601 3.88248 13.0105 3.91362 12.9911 3.92797C12.8542 4.02911 12.7719 4.17242 12.7515 4.32185C12.7495 4.33626 12.745 4.38512 12.7749 4.53165C12.8061 4.68501 12.8609 4.88336 12.9484 5.19765C13.0358 5.51186 13.0915 5.71009 13.1441 5.85812C13.1942 5.99906 13.2242 6.04159 13.2361 6.05658C13.3362 6.18207 13.4889 6.27123 13.6654 6.29587C13.6686 6.29562 13.6974 6.29577 13.7613 6.28797C13.8419 6.27813 13.9464 6.25985 14.0744 6.23299C14.3316 6.179 14.6354 6.10079 14.9559 6.01813C15.3516 5.91607 15.7562 6.14957 15.8657 6.54324L17.5458 12.579C17.5998 12.773 17.5735 12.9806 17.4729 13.155C17.3722 13.3294 17.2056 13.456 17.0106 13.5063C16.6901 13.589 16.3864 13.6675 16.1357 13.7445C16.0109 13.7828 15.9112 13.8172 15.8366 13.8474C15.7814 13.8697 15.7569 13.883 15.7524 13.8852C15.6206 13.986 15.5413 14.1264 15.5213 14.2727C15.5194 14.2871 15.5149 14.336 15.5447 14.4825C15.576 14.6358 15.6307 14.8342 15.7182 15.1485C15.8057 15.4627 15.8613 15.6609 15.914 15.809C15.9641 15.9499 15.9941 15.9924 16.006 16.0074C16.1077 16.135 16.2639 16.225 16.4441 16.2479C16.4723 16.2515 16.5336 16.254 16.6898 16.2246C16.8524 16.1939 17.0614 16.1403 17.3868 16.0564L20.0982 15.357C20.4237 15.2731 20.6325 15.2188 20.7891 15.1672C20.94 15.1175 20.9895 15.0863 21.009 15.072C21.1459 14.9708 21.2282 14.8275 21.2486 14.6781C21.2506 14.6637 21.255 14.6148 21.2252 14.4683C21.1939 14.3149 21.1392 14.1166 21.0517 13.8023C20.9642 13.4881 20.9086 13.2899 20.8559 13.1418C20.8058 13.0009 20.7759 12.9584 20.7639 12.9434C20.6639 12.8179 20.5112 12.7287 20.3347 12.7041C20.3314 12.7043 20.3027 12.7042 20.2387 12.712C20.1581 12.7218 20.0536 12.7401 19.9256 12.767C19.6685 12.821 19.3646 12.8992 19.0442 12.9818C18.6485 13.0839 18.2439 12.8504 18.1343 12.4567L16.4542 6.42096C16.4002 6.22695 16.4265 6.01937 16.5272 5.84494C16.6279 5.67052 16.7944 5.54391 16.9894 5.49361C17.3099 5.41095 17.6136 5.33245 17.8643 5.25544C17.9891 5.21712 18.0889 5.18271 18.1635 5.15258C18.2186 5.13028 18.2432 5.11694 18.2476 5.11473C18.3794 5.014 18.4587 4.87357 18.4787 4.72728C18.4807 4.71286 18.4852 4.66401 18.4553 4.51748C18.4241 4.36412 18.3693 4.16576 18.2818 3.85148C18.1944 3.53727 18.1387 3.33903 18.0861 3.19101C18.0359 3.05006 18.006 3.00753 17.9941 2.99254C17.8924 2.86496 17.7362 2.77492 17.5559 2.75207C17.5277 2.7485 17.4665 2.74592 17.3103 2.77541ZM17.032 1.30145C17.2609 1.25824 17.4959 1.23247 17.7445 1.26397C18.3024 1.33467 18.8155 1.61659 19.167 2.05756C19.325 2.25578 19.4223 2.47187 19.4993 2.68827C19.5718 2.89206 19.6413 3.14184 19.7205 3.4261L19.7334 3.47248C19.8125 3.75663 19.882 4.00646 19.9251 4.218C19.9708 4.44212 19.9994 4.6785 19.9649 4.93053C19.8882 5.49162 19.584 5.99257 19.1303 6.3277C18.9979 6.42547 18.8455 6.4948 18.7255 6.5433C18.5953 6.59594 18.4503 6.64462 18.3048 6.68933C18.2396 6.70935 18.1719 6.72929 18.1026 6.74908L19.3836 11.351C19.4635 11.3324 19.5418 11.3148 19.6175 11.299C19.8767 11.2445 20.2314 11.1789 20.5144 11.2148C21.0722 11.2855 21.5853 11.5674 21.9369 12.0084C22.0949 12.2066 22.1922 12.4227 22.2692 12.6391C22.3417 12.8429 22.4112 13.0927 22.4903 13.377L22.5032 13.4233C22.5823 13.7075 22.6519 13.9573 22.695 14.1688C22.7407 14.393 22.7692 14.6293 22.7348 14.8814C22.658 15.4425 22.3539 15.9434 21.9002 16.2785C21.6981 16.4278 21.479 16.5192 21.2587 16.5918C21.0493 16.6608 20.792 16.7272 20.4953 16.8037L17.7392 17.5146C17.4424 17.5912 17.1851 17.6575 16.968 17.6985C16.7392 17.7417 16.5041 17.7675 16.2555 17.736C15.6977 17.6653 15.1846 17.3834 14.8331 16.9424C14.6751 16.7442 14.5777 16.5281 14.5007 16.3117C14.4282 16.1079 14.3587 15.8581 14.2796 15.5738L14.2667 15.5275C14.1876 15.2433 14.118 14.9935 14.0749 14.782C14.0293 14.5578 14.0007 14.3215 14.0352 14.0694C14.1119 13.5083 14.416 13.0074 14.8698 12.6723C15.0021 12.5745 15.1546 12.5052 15.2745 12.4567C15.4048 12.404 15.5497 12.3553 15.6953 12.3106C15.7605 12.2906 15.8282 12.2707 15.8975 12.2509L14.6165 7.64899C14.5366 7.6676 14.4582 7.68511 14.3826 7.70099C14.1233 7.75541 13.7686 7.82101 13.4857 7.78515C12.9278 7.71446 12.4147 7.43254 12.0632 6.99157C11.9052 6.79334 11.8078 6.57726 11.7309 6.36086C11.6584 6.15705 11.5888 5.90726 11.5097 5.62298L11.4968 5.57666C11.4177 5.29251 11.3482 5.04266 11.3051 4.83112C11.2594 4.607 11.2308 4.37062 11.2653 4.11859C11.342 3.5575 11.6462 3.05656 12.0999 2.72143C12.3019 2.57218 12.521 2.48078 12.7414 2.40815C12.9507 2.33914 13.2081 2.27277 13.5048 2.19624L16.2609 1.48537C16.5577 1.40879 16.815 1.34243 17.032 1.30145ZM6.11173 6.34163L9.09709 6.70083C9.42047 6.73973 9.69743 6.77304 9.92424 6.81504C10.1617 6.859 10.3962 6.92095 10.6209 7.04059C11.1293 7.3114 11.5184 7.76826 11.6807 8.3255C11.7538 8.57644 11.7582 8.82022 11.7429 9.05334C11.7284 9.27273 11.6917 9.53403 11.6502 9.83007L11.6432 9.87949C11.6017 10.1757 11.5651 10.4369 11.5186 10.6523C11.4691 10.8817 11.398 11.1136 11.2606 11.3348C10.9558 11.8256 10.4639 12.1687 9.90617 12.308C9.6275 12.3777 9.25823 12.3589 8.97753 12.3375C8.88376 12.3303 8.78583 12.3214 8.68568 12.3114L8.00927 17.1337C8.09869 17.1465 8.18595 17.1597 8.26956 17.1735C8.54542 17.219 8.91032 17.2883 9.16444 17.4237C9.67289 17.6945 10.062 18.1514 10.2243 18.7086C10.2974 18.9595 10.3018 19.2033 10.2864 19.4364C10.2719 19.6558 10.2353 19.9171 10.1937 20.2132L10.1868 20.2625C10.1453 20.5587 10.1086 20.82 10.0622 21.0354C10.0126 21.2648 9.94152 21.4967 9.80418 21.7179C9.49941 22.2087 9.00746 22.5518 8.44974 22.6911C8.20326 22.7527 7.96151 22.7574 7.71948 22.7436C7.48872 22.7306 7.21179 22.6973 6.88828 22.6583L3.90307 22.2991C3.57964 22.2602 3.30265 22.2269 3.07581 22.1849C2.83836 22.141 2.60381 22.079 2.37919 21.9594C1.87073 21.6886 1.48166 21.2317 1.31934 20.6745C1.24624 20.4235 1.24181 20.1797 1.2572 19.9466C1.27168 19.7272 1.30835 19.4659 1.34989 19.1698L1.35681 19.1205C1.39835 18.8243 1.43498 18.563 1.48147 18.3476C1.53098 18.1183 1.6021 17.8863 1.73944 17.6651C2.04421 17.1743 2.53617 16.8313 3.09389 16.6919C3.37256 16.6223 3.74183 16.6411 4.02252 16.6625C4.1163 16.6696 4.21423 16.6785 4.31437 16.6885L4.99079 11.8662C4.90137 11.8535 4.8141 11.8403 4.7305 11.8265C4.45463 11.781 4.08974 11.7116 3.83562 11.5763C3.32716 11.3055 2.93809 10.8486 2.77577 10.2914C2.70267 10.0404 2.69824 9.79664 2.71363 9.56352C2.72811 9.34412 2.76478 9.08281 2.80632 8.78675L2.81324 8.73737C2.85478 8.44118 2.89141 8.17993 2.9379 7.96454C2.98741 7.73517 3.05853 7.50323 3.19587 7.28204C3.50064 6.79121 3.9926 6.44818 4.55032 6.30882C4.79679 6.24724 5.03855 6.24261 5.28058 6.25631C5.51133 6.26938 5.78824 6.3027 6.11173 6.34163ZM5.19577 7.75391C5.02408 7.74419 4.95219 7.75452 4.91393 7.76408C4.71235 7.81445 4.55749 7.93272 4.4702 8.0733C4.46052 8.08889 4.43588 8.13396 4.40414 8.28103C4.37066 8.43613 4.34128 8.64222 4.29525 8.97035C4.24921 9.29857 4.22078 9.50466 4.21037 9.66233C4.20046 9.81238 4.21219 9.85908 4.21591 9.87185C4.25798 10.0163 4.36508 10.1569 4.5351 10.2493C4.5351 10.2493 4.5351 10.2493 4.5351 10.2493C4.53526 10.2489 4.5646 10.2612 4.64038 10.2803C4.72563 10.3017 4.83737 10.3238 4.97464 10.3465C5.2503 10.3919 5.5815 10.4319 5.92861 10.4737C6.12863 10.4978 6.31056 10.6013 6.43341 10.761C6.55627 10.9206 6.60973 11.123 6.58174 11.3225L5.69834 17.6205C5.64159 18.025 5.27157 18.3097 4.86601 18.2609C4.51894 18.2191 4.18766 18.1794 3.90853 18.1582C3.76956 18.1476 3.65519 18.1425 3.56649 18.143C3.48547 18.1435 3.45296 18.1488 3.4529 18.1484C3.4529 18.1484 3.45277 18.1484 3.4529 18.1484C3.25347 18.1994 3.10042 18.3169 3.01377 18.4564C3.00409 18.472 2.97945 18.5171 2.94771 18.6641C2.91423 18.8192 2.88485 19.0253 2.83882 19.3535C2.79278 19.6817 2.76435 19.8878 2.75394 20.0454C2.74403 20.1955 2.75576 20.2422 2.75948 20.255C2.80201 20.4009 2.91102 20.5431 3.08432 20.6354C3.11535 20.652 3.1799 20.6787 3.34889 20.71C3.5233 20.7423 3.75257 20.7702 4.1046 20.8126L7.04518 21.1664C7.39715 21.2087 7.62661 21.236 7.80429 21.246C7.97598 21.2558 8.04786 21.2454 8.08612 21.2359C8.2877 21.1855 8.44257 21.0672 8.52985 20.9267C8.53953 20.9111 8.56417 20.866 8.59592 20.7189C8.6294 20.5638 8.65878 20.3577 8.70481 20.0296C8.75085 19.7014 8.77928 19.4953 8.78969 19.3376C8.79959 19.1876 8.78786 19.1409 8.78414 19.1281C8.74208 18.9837 8.63497 18.843 8.46496 18.7507C8.4648 18.751 8.43546 18.7387 8.35967 18.7197C8.27442 18.6983 8.16269 18.6761 8.02541 18.6535C7.74975 18.608 7.41855 18.568 7.07145 18.5263C6.87143 18.5022 6.6895 18.3987 6.56664 18.239C6.44378 18.0793 6.39033 17.877 6.41831 17.6774L7.30172 11.3795C7.35846 10.975 7.72849 10.6903 8.13404 10.7391C8.48112 10.7808 8.8124 10.8205 9.09153 10.8418C9.2305 10.8524 9.34486 10.8574 9.43357 10.8569C9.51458 10.8564 9.54709 10.8512 9.54716 10.8516C9.54716 10.8516 9.54729 10.8515 9.54716 10.8516C9.74659 10.8006 9.89963 10.6831 9.98628 10.5436C9.99597 10.528 10.0206 10.4829 10.0524 10.3358C10.0858 10.1807 10.1152 9.97463 10.1612 9.6465C10.2073 9.31829 10.2357 9.1122 10.2461 8.95453C10.256 8.80447 10.2443 8.75778 10.2406 8.745C10.198 8.59901 10.089 8.45682 9.91574 8.36452C9.88471 8.348 9.82016 8.32126 9.65116 8.28997C9.47675 8.25768 9.24747 8.22974 8.89545 8.18738L5.95487 7.83358C5.60291 7.79123 5.37345 7.76397 5.19577 7.75391ZM9.54255 10.8528C9.54494 10.8522 9.54664 10.8517 9.54716 10.8516Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineDumbbells2;
