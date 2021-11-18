import React from 'react';
import Card from '../components/Card/Card';
import { Advertisements, Board, HomeLeft, HomeRight, HomeStyles, LimitButton, PercentDiv, PercentDivDiv, ResentFiles, RightFiles, Statistics } from '../components/Home/HomeStyles';
import Input from '../components/Input/Input';
import { colors } from '../components/UI/colors';
import { Title } from '../components/TitleCard/TitleCardStyles'
import { Subtitle, Titles } from '../components/Titles/Titles';
import Files from '../components/Files/Files';
import HeaderRight from '../components/HeaderRight/HeaderRight';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import FilesRight from '../components/FilesRight/FilesRight';
import { CreateNew, LinearGradient } from '../components/Navbar/NavbarStyles';
import { files, footerCards, mainCards, rightFiles } from '../db/fakeData';

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
                <HeaderRight name="name" background={colors.ellipsis} width="32px" />
                <Statistics>
                    <div>
                        <Titles name="Storage" icons={false} view={true} />
                        <PercentDiv>
                            <PercentDivDiv>
                                <CircularProgressbar 
                                    value={85} 
                                    text={`${85}%`} 
                                    styles={{ 
                                        path: {
                                            stroke: `${colors.lightBlue}`,
                                            strokeLinecap: 'butt',
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            transform: 'rotate(0.25turn)',
                                            transformOrigin: 'center center',
                                        },
                                        text: {
                                            fill: `${colors.lightBlue}`,
                                            fontSize: '24px',
                                        },
                                }}
                                />
                            </PercentDivDiv>
                            <Subtitle files="420.2 GB of 500 GB used" color={colors.navbarColor}/>
                        </PercentDiv>
                    </div>
                    <RightFiles>
                        {
                            rightFiles.map(({id, background, paddingTitle, title, files, storage, colorSubtitle}) => (
                                <FilesRight 
                                    key={id}
                                    background={background} 
                                    paddingTitle={paddingTitle} 
                                    title={title} 
                                    files={files} 
                                    storage={storage} 
                                    colorSubtitle={colorSubtitle}/>
                            ))
                        }
                    </RightFiles>
                    <Advertisements>
                        <LinearGradient width= "120px" height= "72px" margin="0 0 24px 0"></LinearGradient>
                        <Title padding="0 0 4px 0" capitalize={false} color={colors.darkIcon}>
                            Buy more space now!
                        </Title>
                        <Subtitle files="Upgrade to cloud premium" color={colors.navbarColor}/>
                        <LimitButton>
                            <CreateNew capitalize={true} padding="10px 18px" size="10px">upgrade account!</CreateNew>
                        </LimitButton>
                    </Advertisements>
                </Statistics>
            </HomeRight>
        </HomeStyles>
    )
}

export default Home;
