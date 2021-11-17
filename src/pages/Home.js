import React from 'react';
import Card from '../components/Card/Card';
import { Board, HomeLeft, HomeRight, HomeStyles, ResentFiles } from '../components/Home/HomeStyles';
import Input from '../components/Input/Input';
import { colors } from '../components/UI/colors';
import { Title } from '../components/TitleCard/TitleCardStyles'
import Titles from '../components/Titles/Titles';
import Files from '../components/Files/Files';

const mainCards  = [
    { id: 1, circles: 0, name: "app project", date: "20.02.2020", capitalize: true },
    { id: 2, circles: 0, name: "Project: fitbit", date: "28.02.2020", capitalize: false },
    { id: 3, circles: 3, name: "client documents", date: "4.03.2020", capitalize: true },
]

const footerCards = [
    { id: 4, circles: 0, name: "panding page", date: "20.02.2020", capitalize: true },
    { id: 5, circles: 3, name: "ilustration pack", date: "20.02.2020", capitalize: true },
    { id: 6, circles: 0, name: "cV design", date: "20.02.2020", capitalize: true },
]

const files = [
    { id: 7, title: "travel landing page", members: "5 members", date: "Mar 8, 2020", background: colors.ochre, padding: "4px 0", capitalize: true, color: colors.navbarColor, colorsTitle: colors.darkIcon, paddingTitle: "4px 0 4px 12px"},
    { id: 8, title: "true photos", members: "12 members", date: "Mar 8, 2020", background: colors.green, padding: "4px 0", capitalize: true, color: colors.navbarColor, colorsTitle: colors.darkIcon, paddingTitle: "4px 0 4px 12px" },
    { id: 9, title: "dashboard structure", members: "10 members", date: "Mar 9, 2020", background: colors.tomato, padding: "4px 0", capitalize: true, color: colors.navbarColor, colorsTitle: colors.darkIcon, paddingTitle: "4px 0 4px 12px" },
    { id: 10, title: "character illustration", members: "3 members", date: "Mar 10, 2020", background: colors.ochre, padding: "4px 0", capitalize: true, color: colors.navbarColor, colorsTitle: colors.darkIcon, paddingTitle: "4px 0 4px 12px" },
]

const Home = () => {

    return (
        <HomeStyles>
            <HomeLeft>
                <Input />
                <Titles name="Recently Used" icons={true} view={false} />
                <Board>
                    {
                        mainCards.map(({ id, circles, name, date, capitalize }) => (
                            <Card 
                                key={id}
                                id={id} 
                                numbers={true}
                                circles={circles} 
                                firstC={ colors.extraOption }
                                secondC={ colors.extraOption }
                                thirdC={ colors.extraOption }
                                background={colors.createNewBackround}
                                shadow={true}
                                radius="0"
                                icon={true}
                                name={name} 
                                date={date} 
                                padding="0 0 10px 0"
                                capitalize={capitalize}
                                color={colors.darkIcon}
                            />
                        ))
                    }
                </Board>
                <Titles name="Recent Files" icons={false} view={true} />
                <div>
                    <ResentFiles>
                        <Title padding="0" capitalize={true} color={colors.navbarColor}>name</Title>
                        <Title padding="0" capitalize={true} color={colors.navbarColor}>members</Title>
                        <Title padding="0" capitalize={true} color={colors.navbarColor}>last modified</Title>
                    </ResentFiles>
                    <div>
                        {
                            files.map(({id, title, members, date, background, padding, capitalize, color, colorsTitle, paddingTitle}) => (
                                <Files 
                                    key={id}
                                    radius="4px" 
                                    background={background}
                                    shadow={false}
                                    padding={padding}
                                    capitalize={capitalize}
                                    color={color}
                                    title={title}
                                    members={members}
                                    date={date}
                                    colorsTitle={colorsTitle}
                                    paddingTitle={paddingTitle}
                                />
                            ))
                        }
                    </div>
                </div>
                <Titles name="Share with me" icons={false} view={true} />
                <Board>
                    {
                        footerCards.map(({ id, circles, name, date, capitalize }) => (
                            <Card 
                                key={id}
                                id={id} 
                                numbers={false}
                                circles={circles} 
                                firstC={ colors.cyan }
                                secondC={ colors.red }
                                thirdC={ colors.ochre }
                                background={colors.createNewBackround}
                                shadow={false}
                                radius="0"
                                icon={true}
                                name={name} 
                                date={date} 
                                padding="0 0 10px 0"
                                capitalize={capitalize}
                                color={colors.darkIcon}
                            />
                        ))
                    }
                </Board>
            </HomeLeft>
            <HomeRight>
                485222222
            </HomeRight>
        </HomeStyles>
    )
}

export default Home;
