import styled from 'styled-components/native';

export const ProdutosSection = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
    },
}))`
    margin-top: 80px;
`;
export const CardProduct = styled.View`
    width: 220px;
    height: 358px;
    background: #fff;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    margin-right: 15px;
`;
export const PrictureProduct = styled.Image`
    width: 200px;
    height: 200px;
    margin: 10px;
    background: #eee;
    border-radius: 4px;
`;
export const LabelProdcut = styled.Text`
    font-size: 16px;
    color: #333;
    margin-top: 10px;
`;
export const PriceProduct = styled.Text`
    font-size: 21px;
    color: #333;
    margin-top: 5px;
    font-weight: bold;
`;
export const ButtonGroup = styled.TouchableOpacity`
    margin-top: 14px;
    flex-direction: row;
    background: #141419;
    width: 200px;
    height: 42px;
    border-radius: 4px;
    align-items: center;
    justify-content: space-between;
`;

export const CartWithProducts = styled.Text`
    flex: 1;
    margin-left: 16px;
`;

export const ButtonCartNumber = styled.Text`
    flex: 1;
    color: #fff;
    margin-left: 8px;
`;
export const ButtonLabel = styled.Text`
    color: #fff;
    margin-left: 5px;
    flex: 1;
    font-weight: bold;
    text-transform: uppercase;
`;
