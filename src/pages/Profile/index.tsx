import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCallendar from "../../components/RandomCallendar";
import { ApiUser, ApiRepo } from "../../@types";

import {
    Container,
    Main,
    LeftSide,
    RightSide,
    Repos,
    CallendarHeading,
    RepoIcon,
    OverviewIcon,
    ProjectIcon,
    Tab,
} from "./styles";

interface Data {
    user?: ApiUser;
    repos?: ApiRepo[];
    error?: string;
}

const Profile: React.FC = () => {
    const { username = "robsonbarioni" } = useParams();
    const [data, setData] = useState<Data>();

    useEffect(() => {
        Promise.all([
            fetch(`https://api.github.com/users/${username}`),
            fetch(`https://api.github.com/users/${username}/repos`),
        ]).then(async (responses) => {
            const [userResponse, repoResponse] = responses;

            if (userResponse.status === 404) {
                setData({ error: "User not found!" });
                return;
            }

            const user = await userResponse.json();
            const repos = await repoResponse.json();

            const shuffledRepos = repos.sort(() => 0.5 - Math.random());
            const slicedRepos = shuffledRepos.slice(0, 6);

            setData({
                user,
                repos: slicedRepos,
            });
        });
    }, [username]);

    if (data?.error) {
        return (
            <Container>
                <h1 className="message">{data.error}</h1>
            </Container>
        );
    }

    if (!data?.user || !data?.repos) {
        return (
            <Container>
                <h1 className="message">Loading...</h1>
            </Container>
        );
    }

    const TabContent = () => (
        <>
            <div className="content selected">
                <OverviewIcon />
                <span className="label">Overview</span>
            </div>
            <div className="content">
                <RepoIcon />
                <span className="label">Repositories</span>
                <span className="number">{data.user?.public_repos}</span>
            </div>
            <div className="content">
                <ProjectIcon />
                <span className="label">Projects</span>
            </div>
        </>
    );

    return (
        <Container>
            <Tab className="desktop">
                <div className="wrapper">
                    <span className="offset"></span>
                    <TabContent />
                </div>
                <span className="line" />
            </Tab>

            <Main>
                <LeftSide>
                    <ProfileData
                        username={data.user.login}
                        name={data.user.name}
                        avatarUrl={data.user.avatar_url}
                        followers={data.user.followers}
                        following={data.user.following}
                        company={data.user.company}
                        location={data.user.location}
                        email={data.user.email}
                        blog={data.user.blog}
                    />
                </LeftSide>

                <RightSide>
                    <Tab className="mobile">
                        <TabContent />
                        <span className="line" />
                    </Tab>

                    <Repos>
                        <h2>Popular repositories</h2>
                        <div>
                            {data.repos.map((item) => (
                                <RepoCard
                                    key={item.name}
                                    username={item.owner.login}
                                    reponame={item.name}
                                    description={item.description}
                                    language={item.language}
                                    stars={item.stargazers_count}
                                    forks={item.forks}
                                />
                            ))}
                        </div>
                    </Repos>

                    <CallendarHeading>
                        1,786 contributions in the last year
                        <sub>(do not represent actual data)</sub>
                    </CallendarHeading>

                    <RandomCallendar />
                </RightSide>
            </Main>
        </Container>
    );
};

export default Profile;
