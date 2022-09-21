import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
    return (
        <header className="header">
            <div className="header-logo">
                <div className="img-holder">
                    <img
                        src="/images/logo.png" 
                        alt="logo"
                    />
                </div>
                <Header as="h1">헬로</Header>
            </div>
            <Gnb />
        </header>
    ); 
}