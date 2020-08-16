import React from "react";
import { Container, Line, FooteLinks, GithubLogo } from "./styles";

const Footer: React.FC = () => {
    return (
        <Container>
            <Line />
            <FooteLinks>
                <span>Terms</span>
                <span>Privacy</span>
                <span>Security</span>
                <span>Status</span>
                <span>Help</span>
                <GithubLogo />
                <span>Contact</span>
                <span>Pricing</span>
                <span>Training</span>
                <span>Blog</span>
                <span>About</span>
            </FooteLinks>
        </Container>
    );
};

export default Footer;
