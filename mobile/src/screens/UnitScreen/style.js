import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #F5F6FA;
    `,

    Scroller: styled.ScrollView`
        padding: 20px;
        flex: 1;
    `,

    LoadingIcon: styled.ActivityIndicator``,

    TitleArea: styled.View`
        flex-direction: row;
        padding: 10px;
    `,

    Title: styled.Text`
        font-size: 17px;
        color: #000;
        flex: 1;
    `,

    TitleAddButton: styled.TouchableOpacity`
        width: 30px;
        height: 30px;
    `,

    ListArea: styled.View`
        margin-bottom: 20px;
    `,

    ModalArea: styled.Modal``,

    ModalBg: styled.View`
        flex: 1;
        background-color: rgba(0, 0, 0, 0.5);
    `,

    ModalBody: styled.ScrollView`
        background-color: #FFF;
        margin: 20px;
    `
};