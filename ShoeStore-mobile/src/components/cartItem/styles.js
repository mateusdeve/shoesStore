import styled from 'styled-components/native';

export const Card = styled.View`
    background: #fff;
    height: 130px;
    margin: 8px 15px;
    border-radius: 4px;
`;
export const Item = styled.View`
    flex-direction: column;
    flex: 1;
`;
export const ItemBody = styled.View`
    flex-direction: row;
`;
export const ItemPicture = styled.Image`
    width: 80px;
    height: 80px;
    background-color: #fff;
    margin-right: 30px;
    margin-left: 10px;
    margin-top: 8px;
`;
export const ItemDescription = styled.View`
    flex-direction: column;
    margin-top: 16px;
`;

export const TextIten = styled.View`
    flex-direction: column;
`;
export const ItemTitle = styled.Text`
    color: #333;
    margin-bottom: 8px;
    font-size: 14px;
`;
export const ItemPrice = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;
export const ItenFooter = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #eeee;
    margin-top: 8px;
    padding-top: 3px;
    padding-bottom: 3px;
`;

export const NumberItens = styled.TextInput.attrs({
    readonly: true,
})`
    background: #fff;
    padding: 5px;
    margin: 0 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-width: 52px;
`;
export const ItenTotalPrice = styled.Text`
    margin: 0 20px;
    font-weight: bold;
`;
