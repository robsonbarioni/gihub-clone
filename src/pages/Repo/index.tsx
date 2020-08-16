import React from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Breadcrumb,
    Stats,
    LinkButtom,
    RepoIcon,
    StarIcon,
    ForkIcon,
    GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
    return (
        <Container>
            <Breadcrumb>
                <RepoIcon />
                <Link className={"username"} to={"/robsonbarioni"}>
                    robsonbarioni
                </Link>
                <span>/</span>
                <Link className={"reponame"} to={"/robsonbarioni/uploader"}>
                    uploader
                </Link>
            </Breadcrumb>

            <p>
                Monorepo exemplo de aplicação para upload de imagens em React e
                NodeJs
            </p>

            <Stats>
                <li>
                    <StarIcon />
                    <b>9</b>
                    <span>stars</span>
                </li>
                <li>
                    <ForkIcon />
                    <b>0</b>
                    <span>forks</span>
                </li>
            </Stats>

            <LinkButtom href={"https://github.com/robsonbarioni/uploader"}>
                <GithubIcon />
                <span>View on GitHub</span>
            </LinkButtom>
        </Container>
    );
};

export default Repo;
