// import
import styled, {css} from 'styled-components/native';

type ButtonProps = {
    color?: string,
    outline?: boolean
}

export const ButtonS = styled.Pressable<ButtonProps>`
    width: 200px;
    background-color: ${props => (props.color ? props.color : 'cyan')};
    height: 40px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;

    ${props => props.outline && css`
        background-color: #fff;
        border: 1px solid black;
    `}
`;

export const ButtonText = styled.Text<ButtonProps>`
    font-weight: 500;
    color: ${props => (props.outline ? '#000' : '#3d3d3d')};

    
`;