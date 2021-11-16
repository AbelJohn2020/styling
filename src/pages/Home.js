import React from 'react';
import { HomeLeft, HomeRight, HomeStyles } from '../components/Home/HomeStyles';
import Input from '../components/Input/Input';
import Title from '../components/Title/Title';

const Home = () => {

    return (
        <HomeStyles>
            <HomeLeft>
                <Input />
                <Title name="Recently Used" icons={true} view={false} />
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
