import styled from 'styled-components';

export const DisclaimerStyles = styled.div`
    padding: 70px;
    font-family: 'Arial', sans-serif;
    
    p, ul {
        margin: 20px;
    }

    li {
        margin-left: 50px;
        list-style-type: disc;
        margin: 10px 0 0 50px;
    }

    h1 {
        font-size: 24px;
        margin-bottom: 20px;
    }

    a {
        color: #0066cc;
    }

    .disclaimer_img-container {
        text-align: center;

        img {
            margin-bottom: 10px;
            width: 300px;
            image-rendering: pixelated;
        }
    }

    .disclaimer_text-container {
        max-width: 1200px;
        margin: 0 auto;
        background-color: #f0f0f0ff;
        border-radius: 25px;
        padding: 30px;
    }
`;