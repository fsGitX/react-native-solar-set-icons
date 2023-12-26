import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineAlignLeft = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3 1.25C3.41421 1.25 3.75 1.58579 3.75 2V22C3.75 22.4142 3.41421 22.75 3 22.75C2.58579 22.75 2.25 22.4142 2.25 22V2C2.25 1.58579 2.58579 1.25 3 1.25ZM9.46777 4.25H18.5322C18.972 4.24998 19.3514 4.24997 19.6626 4.27818C19.9918 4.30802 20.3178 4.37407 20.625 4.55144C20.967 4.74892 21.2511 5.03296 21.4486 5.375C21.6259 5.68221 21.692 6.00817 21.7218 6.33735C21.75 6.64864 21.75 7.02797 21.75 7.46775V7.53225C21.75 7.97203 21.75 8.35136 21.7218 8.66265C21.692 8.99183 21.6259 9.31779 21.4486 9.625C21.2511 9.96704 20.967 10.2511 20.625 10.4486C20.3178 10.6259 19.9918 10.692 19.6626 10.7218C19.3514 10.75 18.972 10.75 18.5322 10.75H9.46779C9.028 10.75 8.64865 10.75 8.33735 10.7218C8.00817 10.692 7.68221 10.6259 7.375 10.4486C7.03296 10.2511 6.74892 9.96704 6.55144 9.625C6.37407 9.31779 6.30802 8.99183 6.27818 8.66265C6.24997 8.35136 6.24998 7.97201 6.25 7.53223V7.46777C6.24998 7.02799 6.24997 6.64864 6.27818 6.33735C6.30802 6.00817 6.37407 5.68221 6.55144 5.375C6.74892 5.03296 7.03296 4.74892 7.375 4.55144C7.68221 4.37407 8.00817 4.30802 8.33735 4.27818C8.64864 4.24997 9.02799 4.24998 9.46777 4.25ZM8.47274 5.77206C8.2476 5.79246 8.16586 5.82689 8.125 5.85048C8.01099 5.91631 7.91631 6.01099 7.85048 6.125C7.82689 6.16586 7.79246 6.2476 7.77206 6.47275C7.75072 6.7082 7.75 7.01889 7.75 7.5C7.75 7.98111 7.75072 8.2918 7.77206 8.52725C7.79246 8.7524 7.82689 8.83414 7.85048 8.875C7.91631 8.98901 8.01099 9.08369 8.125 9.14952C8.16586 9.17311 8.2476 9.20754 8.47274 9.22794C8.7082 9.24928 9.01889 9.25 9.5 9.25H18.5C18.9811 9.25 19.2918 9.24928 19.5273 9.22794C19.7524 9.20754 19.8341 9.17311 19.875 9.14952C19.989 9.08369 20.0837 8.98901 20.1495 8.875C20.1731 8.83414 20.2075 8.7524 20.2279 8.52725C20.2493 8.2918 20.25 7.98111 20.25 7.5C20.25 7.01889 20.2493 6.7082 20.2279 6.47275C20.2075 6.2476 20.1731 6.16586 20.1495 6.125C20.0837 6.01099 19.989 5.91631 19.875 5.85048C19.8341 5.82689 19.7524 5.79246 19.5273 5.77206C19.2918 5.75072 18.9811 5.75 18.5 5.75H9.5C9.01889 5.75 8.7082 5.75072 8.47274 5.77206ZM9.46779 13.25H15.5322C15.972 13.25 16.3514 13.25 16.6627 13.2782C16.9918 13.308 17.3178 13.3741 17.625 13.5514C17.967 13.7489 18.2511 14.033 18.4486 14.375C18.6259 14.6822 18.692 15.0082 18.7218 15.3373C18.75 15.6486 18.75 16.028 18.75 16.4678V16.5322C18.75 16.972 18.75 17.3514 18.7218 17.6627C18.692 17.9918 18.6259 18.3178 18.4486 18.625C18.2511 18.967 17.967 19.2511 17.625 19.4486C17.3178 19.6259 16.9918 19.692 16.6627 19.7218C16.3514 19.75 15.972 19.75 15.5322 19.75H9.46775C9.02797 19.75 8.64864 19.75 8.33735 19.7218C8.00817 19.692 7.68221 19.6259 7.375 19.4486C7.03296 19.2511 6.74892 18.967 6.55144 18.625C6.37407 18.3178 6.30802 17.9918 6.27818 17.6627C6.24997 17.3514 6.24998 16.972 6.25 16.5322V16.4678C6.24998 16.028 6.24997 15.6486 6.27818 15.3373C6.30802 15.0082 6.37407 14.6822 6.55144 14.375C6.74892 14.033 7.03296 13.7489 7.375 13.5514C7.68221 13.3741 8.00817 13.308 8.33735 13.2782C8.64865 13.25 9.028 13.25 9.46779 13.25ZM8.47275 14.7721C8.2476 14.7925 8.16586 14.8269 8.125 14.8505C8.01099 14.9163 7.91631 15.011 7.85048 15.125C7.82689 15.1659 7.79246 15.2476 7.77206 15.4727C7.75072 15.7082 7.75 16.0189 7.75 16.5C7.75 16.9811 7.75072 17.2918 7.77206 17.5273C7.79246 17.7524 7.82689 17.8341 7.85048 17.875C7.91631 17.989 8.01099 18.0837 8.125 18.1495C8.16586 18.1731 8.2476 18.2075 8.47274 18.2279C8.7082 18.2493 9.01889 18.25 9.5 18.25H15.5C15.9811 18.25 16.2918 18.2493 16.5273 18.2279C16.7524 18.2075 16.8341 18.1731 16.875 18.1495C16.989 18.0837 17.0837 17.989 17.1495 17.875C17.1731 17.8341 17.2075 17.7524 17.2279 17.5273C17.2493 17.2918 17.25 16.9811 17.25 16.5C17.25 16.0189 17.2493 15.7082 17.2279 15.4727C17.2075 15.2476 17.1731 15.1659 17.1495 15.125C17.0837 15.011 16.989 14.9163 16.875 14.8505C16.8341 14.8269 16.7524 14.7925 16.5273 14.7721C16.2918 14.7507 15.9811 14.75 15.5 14.75H9.5C9.01889 14.75 8.7082 14.7507 8.47275 14.7721Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineAlignLeft;
