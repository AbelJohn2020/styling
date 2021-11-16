import React from 'react';
import Card from '../components/Card/Card';
import { Board, HomeLeft, HomeRight, HomeStyles } from '../components/Home/HomeStyles';
import Input from '../components/Input/Input';
import Title from '../components/Title/Title';
import { colors } from '../components/UI/colors';

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

const Home = () => {

    return (
        <HomeStyles>
            <HomeLeft>
                <Input />
                <Title name="Recently Used" icons={true} view={false} />
                <Board>
                    {
                        mainCards.map(({ id, circles, name, date, capitalize }) => (
                            <Card 
                                key={id} 
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
                            />
                        ))
                    }
                </Board>
                <Title name="Recent Files" icons={false} view={true} />
                <Title name="Share with me" icons={false} view={true} />
                <Board>
                    {
                        footerCards.map(({ id, circles, name, date, capitalize }) => (
                            <Card 
                                key={id} 
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
