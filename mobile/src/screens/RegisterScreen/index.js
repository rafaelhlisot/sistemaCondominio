import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import C from './style';

import {useStateValue} from '../../contexts/StateContext';
import Api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Realizar Cadastro'
        });
    }, []);

    return (
        <C.Container>
            <C.Field
                placeholder="Digite seu Nome Completo"
                value={name}
                onChangeText={t=>setName(t)}
            />

            <C.Field
                placeholder="Digite seu CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={t=>setCpf(t)}
            />
            
            <C.Field
                placeholder="Digite seu E-Mail"
                value={email}
                onChangeText={t=>setEmail(t)}
            />
            
            <C.Field
                placeholder="Digite sua senha"
                secureTextEntry={true}
                value={password}
                onChangeText={t=>setPassowrd(t)}
            />

            <C.Field
                placeholder="Repita sua senha"
                secureTextEntry={true}
                value={passwordConfirm}
                onChangeText={t=>setPasswordConfirm(t)}
            />

            <C.ButtonArea onPress={null}>
                <C.ButtonText>
                    CADASTRAR-SE
                </C.ButtonText>
            </C.ButtonArea>
        </C.Container>
    );
}