import styled, { css } from "styled-components";
import {
    RiBookMarkLine,
    RiBookOpenLine,
    RiBarChartBoxLine,
} from "react-icons/ri";

export const Container = styled.div`
    --h-padding: 16px;
    --v-padding: 23px;

    padding: var(--v-padding) var(--h-padding);
    overflow: hidden;

    > .message {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--gray-dark);
        height: 73vh;

        animation: colorRotate 6s linear 0s infinite;
    }

    @keyframes colorRotate {
        from {
            color: var(--gray-dark);
        }
        10% {
            color: #0099ff;
        }
        50% {
            color: #00ff00;
        }
        75% {
            color: #ff3399;
        }
        100% {
            color: #6666ff;
        }
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1280px;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const LeftSide = styled.div`
    padding: 0 var(--h-padding);

    @media (min-width: 768px) {
        width: 25%;
    }
`;

export const RightSide = styled.div`
    margin: 0 16px;

    @media (min-width: 768px) {
        width: 75%;
    }
`;

export const Repos = styled.div`
    margin-top: var(--v-padding);

    > h2 {
        font-size: 16px;
        font-weight: normal;
    }
    > div {
        margin-top: 8px;
        display: grid;
        grid-gap: 16px;
        grid-template-columns: 1fr;

        @media (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }
    }
`;

export const CallendarHeading = styled.span`
    font-size: 16px;
    margin: 36px 0 9px;
    display: inline-flex;

    > sub {
        margin-left: 5px;
        color: #aaa;
    }
`;

const iconCss = css`
    width: 16px;
    height: 16px;
    margin-right: 4px;
`;

export const RepoIcon = styled(RiBookMarkLine)`
    ${iconCss}
`;
export const OverviewIcon = styled(RiBookOpenLine)`
    ${iconCss}
`;
export const ProjectIcon = styled(RiBarChartBoxLine)`
    ${iconCss}
    transform: rotate(180deg);
`;

export const Tab = styled.div`
    background: var(--primary);

    .content {
        display: flex;
        align-items: center;
        width: min-content;
        padding: 14px 16px;
        border-bottom: 2px solid transparent;

        svg {
            fill: var(--gray-light);
        }

        &.selected {
            border-bottom: 2px solid var(--orange);

            svg {
                fill: var(--gray-dark);
            }
        }

        .label {
            font-size: 14px;
            padding: 0 7px;
            font-weight: 600;
        }

        .number {
            font-size: 12px;
            background: var(--ticker);
            padding: 2px 6px;
            border-radius: 24px;
        }
    }

    .line {
        display: flex;
        width: 200vw;
        border-bottom: 1px solid var(--border);
        margin-left: --50vw;
    }

    &.mobile {
        margin-top: var(--v-padding);

        .content {
            margin: 0 auto;
        }

        @media (min-width: 768px) {
            display: none;
        }
    }

    &.desktop {
        display: none;

        @media (min-width: 768px) {
            display: unset;

            .wrapper {
                display: flex;
                margin: 0 auto;
                max-width: 1280px;
            }

            .offset {
                width: 25%;
                padding-right: var(--h-padding);
            }
        }
    }
`;
