import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineAlignBottom = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.46778 2.25H7.53223C7.97201 2.24998 8.35136 2.24997 8.66265 2.27818C8.99183 2.30802 9.31779 2.37407 9.625 2.55144C9.96704 2.74892 10.2511 3.03296 10.4486 3.375C10.6259 3.68221 10.692 4.00817 10.7218 4.33735C10.75 4.64865 10.75 5.028 10.75 5.4678L10.75 14.5322C10.75 14.972 10.75 15.3514 10.7218 15.6627C10.692 15.9918 10.6259 16.3178 10.4486 16.625C10.2511 16.967 9.96704 17.2511 9.625 17.4486C9.31779 17.6259 8.99183 17.692 8.66265 17.7218C8.35135 17.75 7.972 17.75 7.53221 17.75H7.46779C7.028 17.75 6.64865 17.75 6.33735 17.7218C6.00817 17.692 5.68221 17.6259 5.375 17.4486C5.03296 17.2511 4.74892 16.967 4.55144 16.625C4.37407 16.3178 4.30802 15.9918 4.27818 15.6627C4.24997 15.3514 4.24998 14.972 4.25 14.5322L4.25 5.5C4.25 5.48922 4.25 5.47848 4.25 5.46778C4.24998 5.02799 4.24997 4.64864 4.27818 4.33735C4.30802 4.00817 4.37407 3.68221 4.55144 3.375C4.74892 3.03296 5.03296 2.74892 5.375 2.55144C5.68221 2.37408 6.00817 2.30802 6.33735 2.27818C6.64864 2.24997 7.02799 2.24998 7.46778 2.25ZM6.47274 3.77206C6.2476 3.79247 6.16586 3.82689 6.125 3.85048C6.01098 3.91631 5.91631 4.01099 5.85048 4.125C5.82689 4.16587 5.79246 4.2476 5.77206 4.47275C5.75072 4.7082 5.75 5.01889 5.75 5.5L5.75 14.5C5.75 14.9811 5.75072 15.2918 5.77206 15.5273C5.79246 15.7524 5.82689 15.8341 5.85048 15.875C5.91631 15.989 6.01098 16.0837 6.125 16.1495C6.16586 16.1731 6.2476 16.2075 6.47274 16.2279C6.7082 16.2493 7.01889 16.25 7.5 16.25C7.98111 16.25 8.2918 16.2493 8.52725 16.2279C8.7524 16.2075 8.83414 16.1731 8.875 16.1495C8.98901 16.0837 9.08369 15.989 9.14952 15.875C9.17311 15.8341 9.20754 15.7524 9.22794 15.5273C9.24928 15.2918 9.25 14.9811 9.25 14.5L9.25 5.5C9.25 5.01889 9.24928 4.7082 9.22794 4.47275C9.20753 4.2476 9.17311 4.16586 9.14952 4.125C9.08369 4.01099 8.98901 3.91631 8.875 3.85048C8.83414 3.82689 8.7524 3.79247 8.52725 3.77206C8.2918 3.75072 7.98111 3.75 7.5 3.75C7.01889 3.75 6.7082 3.75072 6.47274 3.77206ZM16.4678 5.25H16.5322C16.972 5.24998 17.3514 5.24997 17.6627 5.27818C17.9918 5.30802 18.3178 5.37407 18.625 5.55144C18.967 5.74892 19.2511 6.03296 19.4486 6.375C19.6259 6.68221 19.692 7.00817 19.7218 7.33735C19.75 7.64864 19.75 8.02797 19.75 8.46775V14.5322C19.75 14.972 19.75 15.3514 19.7218 15.6627C19.692 15.9918 19.6259 16.3178 19.4486 16.625C19.2511 16.967 18.967 17.2511 18.625 17.4486C18.3178 17.6259 17.9918 17.692 17.6627 17.7218C17.3514 17.75 16.972 17.75 16.5322 17.75H16.4678C16.028 17.75 15.6486 17.75 15.3373 17.7218C15.0082 17.692 14.6822 17.6259 14.375 17.4486C14.033 17.2511 13.7489 16.967 13.5514 16.625C13.3741 16.3178 13.308 15.9918 13.2782 15.6627C13.25 15.3514 13.25 14.972 13.25 14.5322V8.46776C13.25 8.02798 13.25 7.64864 13.2782 7.33735C13.308 7.00817 13.3741 6.68222 13.5514 6.375C13.7489 6.03296 14.033 5.74892 14.375 5.55144C14.6822 5.37408 15.0082 5.30802 15.3373 5.27818C15.6486 5.24997 16.028 5.24998 16.4678 5.25ZM15.4727 6.77206C15.2476 6.79247 15.1659 6.82689 15.125 6.85048C15.011 6.91631 14.9163 7.01099 14.8505 7.125C14.8269 7.16586 14.7925 7.2476 14.7721 7.47275C14.7507 7.7082 14.75 8.01889 14.75 8.5V14.5C14.75 14.9811 14.7507 15.2918 14.7721 15.5273C14.7925 15.7524 14.8269 15.8341 14.8505 15.875C14.9163 15.989 15.011 16.0837 15.125 16.1495C15.1659 16.1731 15.2476 16.2075 15.4727 16.2279C15.7082 16.2493 16.0189 16.25 16.5 16.25C16.9811 16.25 17.2918 16.2493 17.5273 16.2279C17.7524 16.2075 17.8341 16.1731 17.875 16.1495C17.989 16.0837 18.0837 15.989 18.1495 15.875C18.1731 15.8341 18.2075 15.7524 18.2279 15.5273C18.2493 15.2918 18.25 14.9811 18.25 14.5V8.5C18.25 8.01889 18.2493 7.7082 18.2279 7.47275C18.2075 7.2476 18.1731 7.16586 18.1495 7.125C18.0837 7.01099 17.989 6.91631 17.875 6.85048C17.8341 6.82689 17.7524 6.79247 17.5273 6.77206C17.2918 6.75072 16.9811 6.75 16.5 6.75C16.0189 6.75 15.7082 6.75072 15.4727 6.77206ZM1.25 21C1.25 20.5858 1.58579 20.25 2 20.25H22C22.4142 20.25 22.75 20.5858 22.75 21C22.75 21.4142 22.4142 21.75 22 21.75H2C1.58579 21.75 1.25 21.4142 1.25 21Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineAlignBottom;
