import { DisclaimerStyles } from './disclaimerStyles.ts';

function Disclaimer() {
    return (
        <DisclaimerStyles>
            <p>
                This website is a fictional demonstration project created solely for educational, illustrative, and portfolio purposes. It does not represent a real store, business, or commercial entity. Any resemblance to actual brands, companies, or products—whether existing or not—is purely coincidental.
            </p>
            <p>
                All items, descriptions, prices, images, and product details displayed on this site are entirely fictional. None of the products showcased are available for purchase, and no transactions, orders, or payments can be made through this website. Any interactive features, such as shopping cart functionality, checkout simulations, or form submissions, are implemented exclusively for testing, learning, and demonstration of user interface behavior.
            </p>
            <p>
                No personal or financial information entered on this site is processed, stored, or transmitted to any third party. The website is designed to mimic the appearance and flow of an online store for practice and demonstration only.
            </p>
            <p>By browsing this website, you acknowledge and understand that:</p>
            <ul>
                <li>This is not an operational or legitimate online shop.</li>
                <li>All displayed content is mock data created for demonstration purposes.</li>
                <li>No products, services, or transactions are real or fulfillable.</li>
                <li>The site is intended to showcase design, development, and user interface concepts only.</li>
            </ul>
            <p>If you have any questions regarding this demonstration project, feel free to contact the creator or developer of the site.</p>
        </DisclaimerStyles>
    );
}

export { Disclaimer };