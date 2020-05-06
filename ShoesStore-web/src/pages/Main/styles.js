import styled from 'styled-components';
import { lighten } from 'polished';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    grid-gap: 20px;

    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;

        img {
            align-self: center;
            max-width: 250px;
        }
        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
        }
        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 28px;
        }
        button {
            background: #141419;
            color: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;
            align-items: center;
            display: flex;
            transition: background 0.2s;

            &:hover {
                background: ${lighten(0.05, '#141419')};
            }

            div {
                display: flex;
                align-items: center;
                padding: 12px;
                background: rgba(0, 0, 0, 0.1);
                svg {
                    margin-right: 5px;
                }
            }
            span {
                flex: 1;
                text-align: center;
                font-weight: bold;
            }
        }
    }
`;
