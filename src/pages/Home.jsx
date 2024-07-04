import { Alert, Box, Card, Fab, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import DataCard from '../components/common/cards/DataCard'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import "./home.css"
import FileUpload from '../components/fileUpload';
import { useNavigate } from 'react-router-dom';

const Home = () => {
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
                    <Typography p={1} variant='h6'>Recent Studies</Typography>
                    <Grid item>
                        <Card sx={{ height: 90, width: 270, border: '1px', borderRadius: '5px' }}>

                            <CardInsideComponent recentText="Dog bite complaint" timeText="1 hr" />

                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ height: 90, width: 270, border: '1px', borderRadius: '5px' }}>

                            <CardInsideComponent recentText="Cyber issue" timeText="2 hr" />

                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ height: 90, width: 270, border: '1px', borderRadius: '5px' }}>

                            <CardInsideComponent recentText="Breach Issue" timeText="3 hr" />

                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ height: 90, width: 270, border: '1px', borderRadius: '5px' }}>

                            <CardInsideComponent recentText="Murder issue" timeText="4 hr" ser='info' alertText="progress" />

                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ height: 90, width: 270, border: '1px', borderRadius: '5px' }}>

                            <CardInsideComponent recentText="Murder issue" timeText="4 hr" ser='error' alertText='failed' />

                        </Card>
                    </Grid>

                </Grid>
            </Box>
        )
    }
    const rightChildren = () => {
        return (
            <Box>
                <Grid container
                    spacing={1}
                    direction="column"
                    justifyContent="center"
                    alignContent="center">
                    <Grid item>
                        <Stack direction="row" spacing={1}>
                            <Box><ArticleOutlinedIcon />
                            </Box>
                            <Box><Typography variant='body1' fontWeight="bold">Get Complete Info About Any Case By AI Driven Assistance</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <TextField
                            multiline
                            rows={2}
                            sx={{ width: 750, border: '1px', borderRadius: '9px' }}
                            helperText="Ex: Land Dispute, Mumbai, Recent Judgements"
                        />
                    </Grid>
                    <Grid item>
                        <FileUpload />
                    </Grid>
                    <Box marginTop="5rem" display="flex" justifyContent="flex-end" alignContent="end">
                        <Fab onClick={() => navigate("/start")} borderRadius="10px" variant="extended" size="medium" color="primary">

                            Start
                        </Fab>
                    </Box>
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
                    <DataCard width='20rem' component={leftChildren()}></DataCard>
                </Grid>
                <Grid item>
                    <DataCard width='50rem' component={rightChildren()}></DataCard>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Home