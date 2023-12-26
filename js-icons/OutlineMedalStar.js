import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineMedalStar = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.948 1.25H13.052C13.9505 1.24997 14.6997 1.24995 15.2945 1.32991C15.9223 1.41432 16.4891 1.59999 16.9445 2.05546C17.4 2.51093 17.5857 3.07773 17.6701 3.70552C17.75 4.30031 17.75 5.04953 17.75 5.94801L17.75 7.28108L18.5894 7.73883C19.7944 8.39587 20.5442 9.6587 20.5442 11.0312V15.9688C20.5442 17.3413 19.7944 18.6041 18.5894 19.2612L13.7952 21.8754C12.6762 22.4855 11.3238 22.4855 10.2047 21.8754L5.41051 19.2612C4.20553 18.6041 3.45575 17.3413 3.45575 15.9688V11.0312C3.45575 9.6587 4.20553 8.39587 5.41051 7.73883L6.24998 7.28108L6.24998 5.948C6.24995 5.04952 6.24992 4.3003 6.32989 3.70552C6.41429 3.07773 6.59996 2.51093 7.05543 2.05546C7.5109 1.59999 8.0777 1.41432 8.7055 1.32991C9.30028 1.24995 10.0495 1.24997 10.948 1.25ZM7.74998 6.46317L10.2047 5.12465C11.3238 4.51446 12.6762 4.51446 13.7952 5.12465L16.25 6.46317V6C16.25 5.03599 16.2484 4.38843 16.1834 3.90539C16.1214 3.44393 16.0142 3.24644 15.8839 3.11612C15.7535 2.9858 15.556 2.87858 15.0946 2.81654C14.6115 2.7516 13.964 2.75 13 2.75H11C10.036 2.75 9.38841 2.7516 8.90537 2.81654C8.44391 2.87858 8.24641 2.9858 8.11609 3.11612C7.98578 3.24644 7.87856 3.44393 7.81651 3.90539C7.75157 4.38843 7.74998 5.03599 7.74998 6V6.46317ZM13.0771 6.44159C12.4057 6.07548 11.5943 6.07548 10.9228 6.44159L6.12861 9.05577C5.40562 9.45 4.95575 10.2077 4.95575 11.0312V15.9688C4.95575 16.7923 5.40562 17.55 6.1286 17.9442L10.9228 20.5584C11.5943 20.9245 12.4057 20.9245 13.0771 20.5584L17.8714 17.9442C18.5943 17.55 19.0442 16.7923 19.0442 15.9688V11.0312C19.0442 10.2077 18.5943 9.45 17.8713 9.05577L13.0771 6.44159ZM12 11.5346C11.9418 11.6353 11.8772 11.7512 11.801 11.8878L11.7027 12.0642C11.6958 12.0767 11.6883 12.0903 11.6804 12.1048C11.6018 12.2484 11.4718 12.4863 11.2549 12.6509C11.0336 12.8189 10.7673 12.8767 10.6116 12.9106C10.596 12.9139 10.5815 12.9171 10.5683 12.9201L10.3773 12.9633C10.2022 13.0029 10.0595 13.0353 9.93748 13.0659C10.0168 13.1636 10.1199 13.2849 10.254 13.4417L10.3842 13.5939C10.3934 13.6047 10.4034 13.6162 10.4141 13.6286C10.5221 13.7529 10.6963 13.9536 10.7769 14.2128C10.8565 14.4688 10.8291 14.7326 10.8117 14.899C10.81 14.9156 10.8084 14.9312 10.807 14.9458L10.7873 15.1488C10.7691 15.3371 10.7549 15.4873 10.7454 15.6095C10.8496 15.5636 10.9682 15.5091 11.109 15.4443L11.2878 15.362C11.3001 15.3563 11.3135 15.3499 11.3281 15.3431C11.4716 15.2754 11.7213 15.1576 12 15.1576C12.2786 15.1576 12.5283 15.2754 12.6718 15.3431C12.6864 15.3499 12.6999 15.3563 12.7122 15.362L12.891 15.4443C13.0318 15.5091 13.1503 15.5636 13.2545 15.6095C13.2451 15.4873 13.2309 15.3371 13.2127 15.1488L13.193 14.9458C13.1916 14.9312 13.1899 14.9156 13.1882 14.899C13.1709 14.7326 13.1434 14.4689 13.223 14.2128C13.3036 13.9536 13.4779 13.7529 13.5858 13.6286C13.5965 13.6162 13.6066 13.6047 13.6158 13.5939L13.7459 13.4417C13.88 13.2849 13.9831 13.1636 14.0625 13.0659C13.9405 13.0353 13.7978 13.0029 13.6226 12.9633L13.4317 12.9201C13.4185 12.9171 13.404 12.9139 13.3884 12.9106C13.2327 12.8767 12.9664 12.8189 12.745 12.6509C12.5282 12.4863 12.3981 12.2484 12.3196 12.1048C12.3116 12.0902 12.3042 12.0767 12.2972 12.0642L12.1989 11.8878C12.1228 11.7512 12.0581 11.6353 12 11.5346ZM11.0135 10.2998C11.1856 10.075 11.4983 9.75016 12 9.75016C12.5017 9.75016 12.8143 10.075 12.9865 10.2998C13.1508 10.5144 13.3163 10.8114 13.486 11.1159C13.4937 11.1298 13.5014 11.1436 13.5091 11.1575L13.6074 11.3339C13.6302 11.3748 13.6482 11.4069 13.6639 11.4345C13.6912 11.4409 13.723 11.4481 13.7627 11.4571L13.9536 11.5003C13.9693 11.5038 13.9849 11.5073 14.0005 11.5109C14.3284 11.5849 14.6541 11.6586 14.9042 11.7571C15.1804 11.8659 15.5547 12.0779 15.6989 12.5418C15.8406 12.9975 15.6618 13.3835 15.5056 13.6316C15.3611 13.8612 15.1414 14.118 14.9165 14.3809C14.9063 14.3928 14.8961 14.4047 14.8859 14.4166L14.7558 14.5688C14.7213 14.6091 14.6953 14.6395 14.6734 14.6658C14.6764 14.7022 14.6805 14.7445 14.686 14.8011L14.7057 15.0041C14.7072 15.0196 14.7087 15.0351 14.7102 15.0505C14.7443 15.4025 14.7774 15.7426 14.7653 16.0146C14.7525 16.2999 14.6841 16.7317 14.2969 17.0256C13.8975 17.3288 13.4564 17.2627 13.1767 17.1826C12.9189 17.1087 12.6144 16.9684 12.3077 16.8271C12.293 16.8203 12.2783 16.8135 12.2636 16.8068L12.0849 16.7245C12.0514 16.7091 12.0239 16.6964 12 16.6856C11.976 16.6964 11.9485 16.7091 11.9151 16.7245L11.7364 16.8068C11.7217 16.8135 11.707 16.8203 11.6923 16.8271C11.3856 16.9684 11.081 17.1087 10.8233 17.1826C10.5436 17.2627 10.1024 17.3288 9.70304 17.0256C9.31587 16.7317 9.24741 16.2999 9.2347 16.0146C9.22258 15.7426 9.25561 15.4025 9.28979 15.0506C9.29129 15.0351 9.29279 15.0196 9.29429 15.0041L9.31397 14.8011C9.31946 14.7445 9.32354 14.7022 9.32652 14.6658C9.30463 14.6395 9.27864 14.6091 9.24416 14.5688L9.11401 14.4166C9.10383 14.4047 9.09365 14.3928 9.08348 14.3809C8.85857 14.118 8.63888 13.8612 8.49434 13.6316C8.33815 13.3835 8.15931 12.9975 8.30103 12.5418C8.44529 12.0779 8.8196 11.8659 9.09574 11.7571C9.34582 11.6586 9.6716 11.5849 9.99941 11.5109C10.015 11.5073 10.0307 11.5038 10.0463 11.5003L10.2372 11.4571C10.277 11.4481 10.3087 11.4409 10.3361 11.4345C10.3518 11.4069 10.3697 11.3748 10.3925 11.3339L10.4908 11.1575C10.4986 11.1436 10.5063 11.1298 10.514 11.1159C10.6837 10.8114 10.8491 10.5144 11.0135 10.2998Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineMedalStar;
