import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import C from './style';

import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    return (
        <C.container>
            <C.Texto>TELA DE LOGIN TCHÓ</C.Texto>
        </C.container>
    );
}