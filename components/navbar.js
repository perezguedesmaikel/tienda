import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import Link from "next/link";
import {BiStoreAlt } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: 5,
    left: 0,
    right: 0,
    margin: '0 auto',
    padding:0,
    height:70,
    width:70
});
const Styledo = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: 5,
    left: 140,
    right: 0,
    margin: '0 auto',
});
const Style2 = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: 5,
    left: 260,
    right: 0,
    margin: '0 auto',
});
const Style3 = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: 5,
    left: 0,
    right: 140,
    margin: '0 auto',
});
const Style4 = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: 5,
    left: 0,
    right: 260,
    margin: '0 auto',
});

export default function NavBar() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square sx={{ pb: '50px' }}>

            </Paper>
            <AppBar position="fixed" color="primary" sx={{ top:0, bottom: 'auto' }}>
                <Toolbar>
                    <StyledFab color="secondary" aria-label="add">
                        <Link href={'/'}><a className='text-6xl'><BiMenu/></a></Link>
                    </StyledFab>
                    <Styledo color="secondary" aria-label="add">
                        <Link href={'/suscribirse'}><a className='text-3xl'><ShoppingCartIcon/></a></Link>
                    </Styledo>
                    <Style3 color="secondary" aria-label="add">
                        <Link href={'/suscribirse'}><a className='text-3xl'><AiOutlineLock/></a></Link>
                    </Style3>
                    <Style2 color="secondary" aria-label="add">
                        <Link href={'/suscribirse'}><a className='text-3xl'><BiHelpCircle/></a></Link>
                    </Style2>
                    <Style4 color="secondary" aria-label="add">
                        <Link href={'/'}><a className='text-3xl'><BiStoreAlt/></a></Link>
                    </Style4>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

