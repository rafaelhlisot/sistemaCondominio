import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {launchCamera} from 'react-native-image-picker';
import C from './style';

import {useStateValue} from '../../contexts/StateContext';
import Api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();
    const [photo, setPhoto] = useState([]);
    const [description, setDescription] = useState('');
    const [where, setWhere] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Adicionar um perdido'
        });
        handleAddPhoto();
    }, []);

    const handleAddPhoto = () => {
        launchCamera({
            mediaType: 'photo',
            maxWidth: 1280
        }, (response) => {
            if (!response.didCancel) {
                setPhoto(response);
            }
        });
    }

    const handleSave = async () => {
        if ((photo.uri !== '') && (description !== '') && (where !== '')){
            const result = await Api.addLostItem(photo, description, where);

            if (result !=='') {
                setPhoto([]);
                setDescription('');
                setWhere('');
                navigation.navigate('FoundAndLostScreen');
            } else {
               alert(result.error);
            }
        } else {
            alert('Preencha os campos!');
        }
    }

    return (
        <C.Container>
            <C.Scroller>
                <C.PhotoArea>
                    {!photo.uri &&
                        <C.ButtonArea onPress={handleAddPhoto}>
                            <C.ButtonText>Tirar uma foto</C.ButtonText>
                        </C.ButtonArea>
                    }
                    {photo.uri &&
                        <>
                            <C.PhotoItem source={{uri: photo.uri}} resizeMode="cover" />
                            <C.ButtonArea onPress={handleAddPhoto}>
                                <C.ButtonText>Tirar outra foto</C.ButtonText>
                            </C.ButtonArea>
                        </>
                    }
                </C.PhotoArea>

                <C.Title>Descreva o item</C.Title>
                <C.Field
                    placeholder="Carteira de couro"
                    value={description}
                    onChangeText={t => setDescription(t)}
                />

                <C.Title>Onde foi encontrado</C.Title>
                <C.Field
                    placeholder="proximo ao parquinho"
                    value={where}
                    onChangeText={t => setWhere(t)}
                />

                <C.ButtonArea onPress={handleSave}>
                    <C.ButtonText>Salvar</C.ButtonText>
                </C.ButtonArea>
            </C.Scroller>
        </C.Container>
    );
}