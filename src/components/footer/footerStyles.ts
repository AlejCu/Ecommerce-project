import styled from 'styled-components';

export const FooterStyles = styled.footer`
    width: 100%;
    height: 150px;
    background-color: #333;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    position: relative;
    bottom: 0;
    margin-top: 20px;
    font-size: 14px;


    .footer_icons {
        svg {
            font-size: 50px;
            cursor: pointer;
            margin: 0 15px;

            &:hover {
                color: #5FC0ED;
            }
        }
    }

    @media (max-width: 1260px) {
        flex-direction: column-reverse;
        justify-content: center;
        text-align: center;
        gap: 30px;
        padding: 30px;
        height: auto;
    }
`;