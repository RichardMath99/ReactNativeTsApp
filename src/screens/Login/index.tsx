import {LoginS, LoginContent} from './style';
 
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';


const Login = () => { 
    return(
        <LoginS>
            <LoginContent>
                <Input label="E-mai" placeholder="E-mail" />
                <Input label="Senha" placeholder="Senha" />
                <Button text="Entrar"/>
                <Button outline text="Voltar"/>
            </LoginContent>
        </LoginS>
    )
}

export default Login;