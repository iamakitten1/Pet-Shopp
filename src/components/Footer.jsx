import React from "react";

export function Footer() {
    return (
        <footer>
            <div className="container p-3 mt-5 border-top">
                <small className="d-block text-muted text-center">   <p>&copy; 2024 Pet Shop. All rights reserved.</p> </small>
                <p>
                    Follow us on{" "}
                    <a href="https://www.facebook.com/YourCompany" target="_blank" rel="noopener noreferrer">Facebook</a>,{" "}
                    <a href="https://twitter.com/YourCompany" target="_blank" rel="noopener noreferrer">Twitter</a>,{" "}
                    <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                </p>
            </div>
        </footer>
    );
}