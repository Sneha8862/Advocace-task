import { Alert, Box, Button, Card, Divider, Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import DataCard from '../../components/common/cards/DataCard';
import StepsComponent from '../../components/stepper';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useNavigate } from 'react-router-dom';
import CaseFlow from './CaseFlow';

const ShowContext = () => {
    const navigate = useNavigate();

    const CardInsideComponent = ({ recentText, timeText, ser = "success", alertText = "Completed" }) => {
        return (
            <Box>
                <Stack direction="column" spacing={1}>
                    <Typography paddingLeft={2} sx={{ fontSize: "15px", color: "blue" }}>{`"${recentText}"`}</Typography>
                    <Stack paddingLeft={1} direction="row" spacing={9}
                    >
                        <Typography sx={{
                            fontSize: "15px",
                            fontStyle: "italic",
                            color: 'gray'
                        }}>{timeText}</Typography>
                        <Alert sx={{ borderRadius: "20px", fontSize: "14px" }} severity={ser}>{alertText}</Alert>
                    </Stack>
                </Stack>
            </Box>
        )
    }

    const leftChildren = () => {
        return (
            <Box>
                <Grid container
                    spacing={1}
                    direction="column"
                    justifyContent="center"
                    alignContent="center">
                    <Stack direction="row">
                        <IconButton sx={{ marginLeft: 1 }} onClick={() => navigate("/")}>
                            <WestOutlinedIcon />
                        </IconButton>
                        <Button onClick={() => navigate("/")} sx={{ marginLeft: 2, padding: 1, width: 200, borderRadius: "10px" }} variant="contained">
                            Back to Home
                        </Button></Stack>

                    <Grid item>
                        <Box>
                            <Typography>Give Information</Typography>
                            <Divider />
                            <Typography p={1}>Your Search</Typography>
                            <Typography pb={2} pl={3} sx={{ color: "grey", fontSize: "9px" }}>Good lawyer</Typography>
                            <Typography pb={2} pl={1} >Recents</Typography>

                        </Box>

                    </Grid>
                    <Grid item>
                        <Card sx={{ padding: 1, height: 90, width: 270, border: '1px', borderRadius: '5px' }}>

                            <CardInsideComponent recentText="Dog bite complaint" timeText="1 hr" />

                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ padding: 1, height: 90, width: 270, border: '1px', borderRadius: '5px' }}>

                            <CardInsideComponent recentText="Cyber issue" timeText="2 hr" />

                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ padding: 1, height: 90, width: 270, border: '1px', borderRadius: '5px' }}>

                            <CardInsideComponent recentText="Breach Issue" timeText="3 hr" />

                        </Card>
                    </Grid>

                </Grid>
            </Box>
        )
    }
    return (
        <Box p={3}>
            <Grid container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignContent="center">
                <Grid item>
                    <DataCard width='20rem' component={leftChildren()} height="83vh"></DataCard>
                </Grid>
                <Grid item>
                    <DataCard width='40rem' component={<CaseFlow />}></DataCard>
                </Grid>
                <Grid item>
                    <StepsComponent onHandleClick={() => navigate("/context")} />
                </Grid>
            </Grid>
        </Box>

    )
}

export default ShowContext