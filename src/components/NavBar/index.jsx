import { AppBar, Avatar, Box, Grid, IconButton, Stack, Toolbar } from '@mui/material'
import React from 'react'
import NavTabs from '../common/NavTabs'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import logo from "../../images/advocase_logo_padded.png"

const NavBar = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: "#E8E8E8", height: "4rem" }}>
                <Stack spacing={2} justifyContent="space-between" direction="row" >
                    <Box>
                        <img src={logo} alt='ADVOCACE'></img>
                    </Box>
                    <Box>
                        <Stack spacing={2} justifyContent="space-between" direction="row"
                        >
                            <NavTabs />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack p={1} spacing={2} justifyContent="space-between" direction="row"
                        >
                            <IconButton>
                                <SettingsOutlinedIcon />
                            </IconButton>
                            <IconButton>
                                <NotificationsNoneIcon />
                            </IconButton>

                            <Avatar alt="Sneha" src="/static/images/avatar/1.jpg" />
                        </Stack>
                    </Box>

                </Stack>

            </AppBar>
        </Box >
    )
}

export default NavBar