// Types 
import { ButtonProps } from './types';

import {ButtonS, ButtonText} from './style';

export const Button = (props: ButtonProps) => {
    return (
        <ButtonS outline={props.outline} color={props.color}>
            <ButtonText outline={props.outline} >
               {props.text} 
            </ButtonText>
        </ButtonS>
    )
}

