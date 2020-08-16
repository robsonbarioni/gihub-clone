import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px;
    height: 80px;
`;

export const Line = styled.div`
    max-width: 1280px;
    width: 100%;
    border-top: 1px solid var(--border);
`;

export const FooteLinks = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    > span {
        font-size: 12px;
        line-height: 18px;
        color: var(--link);
        margin-top: 15px;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const GithubLogo = styled(FaGithub)`
    fill: var(--border);
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin-top: 25px;
`;
