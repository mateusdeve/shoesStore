import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #191920;
    flex-direction: column;
`;

export const CardsContainer = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        marginTop: 20,
    },
}))`
    background: #fff;
    margin: 80px 25px;
    border-radius: 4px;
`;

export const TotalLabel = styled.Text`
    margin-top: 30px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #999999;
`;
export const TotalPrice = styled.Text`
    margin-top: 5px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
`;
export const ButtonConfirm = styled.TouchableOpacity`
    background: #141419;
    height: 42px;
    justify-content: center;
    margin: 30px;
    border-radius: 4px;
    margin-bottom: 50px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    text-align: center;
    font-weight: bold;
`;
