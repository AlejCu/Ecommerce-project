import styled from 'styled-components';

export const FooterStyles = styled.footer`
    width: 100%;
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: relative;
    bottom: 0;
    margin-top: 20px;
    font-size: 14px;
    
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);

    .footer_top-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        max-width: 1200px;
        padding: 10px 0;
        margin-bottom: 10px;
        font-size: 14px;
    }
`;