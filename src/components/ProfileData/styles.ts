import styled, { css } from "styled-components";
import {
    RiGroupLine,
    RiBuilding4Line,
    RiMapPin2Line,
    RiMailLine,
    RiLinksLine,
} from "react-icons/ri";

export const Container = styled.div``;

export const Flex = styled.div`
    display: flex;
    align-items: center;

    > div {
        margin-left: 24px;

        > h1 {
            font-size: 26px;
            line-height: 1.25;
            color: var(--gray-dark);
            font-weight: 600;
        }
        > h2 {
            font-size: 20px;
            font-weight: 300;
            color: var(--username);
        }
    }

    > .wrapper {
        position: relative;
    }

    @media (min-width: 768px) {
        flex-direction: column;
        align-items: flex-start;

        > div {
            margin-left: 0;
            margin-top: 16px;
        }
    }
`;

export const Avatar = styled.img`
    width: 16%;
    border-radius: 50%;

    @media (min-width: 768px) {
        width: 100%;
        margin-top: -34px;
    }
`;

export const Badge = styled.div`
    position: absolute;
    bottom: 0;
    left: 100%;
    z-index: 2;
    width: 38px;
    height: 38px;
    margin-bottom: 32px;
    margin-left: -40px;
    background: #fff;
    border-radius: 2em;
    border: 1px solid #e1e4e8;
    box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04);
    color: #333;
    display: flex;
    font-size: 12px;
    white-space: nowrap;
    align-items: center;
    overflow: hidden;

    transition: 0.1s ease;

    > span {
        color: var(--link);
    }

    > svg {
        fill: #333;
        flex-shrink: 0;
        margin: 10px;
    }

    &:hover {
        width: max-content;
        padding-right: 10px;

        svg {
            fill: var(--link);
        }
    }
`;

export const Row = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 0;

    &.follow-action {
        margin: 15px 0;
    }

    button {
        display: block;
        width: 85%;
        text-align: center;
        color: #24292e;
        background-color: #fafbfc;
        border: 1px solid rgba(27, 31, 35, 0.15);
        border-radius: 6px;
        box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
            inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
        transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
        height: 33px;
        font-weight: 600;
        cursor: pointer;

        &:hover {
            background-color: #f3f4f6;
            transition-duration: 0.1s;
        }
    }

    > svg {
        margin: 16px 0 16px 16px;
        fill: var(--gray);
        cursor: pointer;
    }

    > li {
        display: flex;
        align-items: center;

        span {
            font-size: 14px;
            color: var(--gray);
        }

        > b {
            font-size: 13px;
            color: var(--gray-dark);
            font-weight: 500;
        }

        > * {
            margin-right: 5px;
        }
    }
`;

export const Column = styled.ul`
    li {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    li + li {
        margin-top: 10px;
    }

    span {
        margin-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const iconCss = css`
    width: 16px;
    height: 16px;
    fill: var(--icon);
    flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`
    ${iconCss}
`;

export const CompanyIcon = styled(RiBuilding4Line)`
    ${iconCss}
`;

export const LocationIcon = styled(RiMapPin2Line)`
    ${iconCss}
`;

export const EmailIcon = styled(RiMailLine)`
    ${iconCss}
`;

export const BlogIcon = styled(RiLinksLine)`
    ${iconCss}
`;
