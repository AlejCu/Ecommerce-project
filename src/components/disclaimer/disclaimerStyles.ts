import styled from 'styled-components';

export const DisclaimerStyles = styled.div`
    padding: 80px;
    font-size: 14px;
    height: 75vh;
    
    p, ul {
        margin-bottom: 15px;
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
            margin-bottom: 20px;
            width: 200px;
            image-rendering: pixelated;
        }
    }
`;