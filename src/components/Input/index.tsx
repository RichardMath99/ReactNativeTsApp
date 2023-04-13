import { View } from 'react-native';

import {InputS, InputContainer, InputLabel} from './style';



export const Input = (props: InputProps) => {
    return (
        <InputContainer>
            {props.label && <InputLabel>{props.label}</InputLabel>}

            <InputS 
                placeholder={props.placeholder}
                placeholderTextColor={props.placeHolderColor}
                editable={!props.disabled}
            />
        </InputContainer>

    )
}

