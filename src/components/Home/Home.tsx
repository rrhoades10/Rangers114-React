// import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import droneImage from '../../assets/images/sample_drone.jpg'
import { Link } from 'react-router-dom';

interface Props {
    title: string;  


}







// Create Styled Components with styled-components
const Root = styled('div')({
    padding: 0,
    margin: 0
})

const NavBarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})

const LogoA = styled('a')({
    color: 'rgb(28, 24, 22)',
    listStlye: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})

const LogoNavigation = styled('ul')({
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})

const Main = styled('main')({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${droneImage})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute'
})

const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})

export const Home = (props: Props) => {
    //where any functionality

    return (
        <Root>
            <NavBarContainer>
                <Logo>
                    <LogoA href="#">Brand</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to='/'>Home</NavA>
                    </li>
                    <li>
                        <NavA to='/dashboard'>Dashboard</NavA>
                    </li>
                    <li>
                        <NavA to='/signin'>Sign In</NavA>
                    </li>
                </LogoNavigation>
            </NavBarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p>Drones are fly....dawg</p>
                    <Button color="primary" variant='contained' component={Link} to='/dashboard'>See The Drones</Button>
                </MainText>
            </Main>
        </Root>

    )
}