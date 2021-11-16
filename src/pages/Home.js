import React from 'react';
import Card from '../components/Card/Card';
import { HomeLeft, HomeRight, HomeStyles } from '../components/Home/HomeStyles';
import Input from '../components/Input/Input';
import Title from '../components/Title/Title';

const cards = [
    { id: 1, circles: 0, name: "App Project", date: "20.02.2020", },
    { id: 2, circles: 0, name: "Project: fitbit", date: "28.02.2020", },
    { id: 3, circles: 3, name: "Client Documents", date: "4.03.2020", },
]

const Home = () => {

    return (
        <HomeStyles>
            <HomeLeft>
                <Input />
                <Title name="Recently Used" icons={true} view={false} />
                <div>
                    {
                        cards.map(({ id, circles, name, date }) => (
                            <Card key={id} circles={circles} name={name} date={date} />
                        ))
                    }
                </div>
                <Title name="Recently Used" icons={false} view={true} />
                <Title name="Recently Used" icons={false} view={true} />
            </HomeLeft>
            <HomeRight>
                485222222
            </HomeRight>
        </HomeStyles>
    )
}

export default Home;
