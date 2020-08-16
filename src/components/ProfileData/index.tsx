import React from "react";
import {
    Container,
    Flex,
    Avatar,
    Badge,
    Row,
    Column,
    PeopleIcon,
    CompanyIcon,
    LocationIcon,
    EmailIcon,
    BlogIcon,
} from "./styles";

interface Props {
    username: string;
    name: string;
    avatarUrl: string;
    followers: number;
    following: number;
    company?: string;
    location?: string;
    email?: string;
    blog?: string;
}

const ProfileData: React.FC<Props> = ({
    username,
    name,
    avatarUrl,
    followers,
    following,
    company,
    location,
    email,
    blog,
}) => {
    return (
        <Container>
            <Flex>
                <div className="wrapper">
                    <Avatar src={avatarUrl} alt={username} />
                    <Badge>
                        <svg viewBox="0 0 16 16" width="16" height="16">
                            <path
                                fill-rule="evenodd"
                                d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
                            ></path>
                        </svg>
                        <span>Working from home</span>
                    </Badge>
                </div>
                <div>
                    <h1>{name}</h1>
                    <h2>{username}</h2>
                </div>
            </Flex>

            <Row className="follow-action">
                <button>Follow</button>
                <svg viewBox="0 0 16 16" height="16" width="16" role="img">
                    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
            </Row>

            <Row>
                <li>
                    <PeopleIcon />
                    <b>{followers}</b>
                    <span>followers</span>
                    <span>·</span>
                </li>
                <li>
                    <b>{following}</b>
                    <span>following</span>
                </li>
            </Row>

            <Column>
                {company && (
                    <li>
                        <CompanyIcon />
                        <span>{company}</span>
                    </li>
                )}
                {location && (
                    <li>
                        <LocationIcon />
                        <span>{location}</span>
                    </li>
                )}
                {email && (
                    <li>
                        <EmailIcon />
                        <span>{email}</span>
                    </li>
                )}
                {blog && (
                    <li>
                        <BlogIcon />
                        <span>{blog}</span>
                    </li>
                )}
            </Column>
        </Container>
    );
};

export default ProfileData;