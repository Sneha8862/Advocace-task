import { Box, Button, Card, Divider, Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import DataCard from '../../components/common/cards/DataCard';
import FileDataShowTabs from '../../components/FilesShowData';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useNavigate } from 'react-router-dom';


const CompileStage = () => {
    const navigate = useNavigate()
    const leftChildren = () => {
        return (
            <Box>
                <Grid container
                    spacing={1}
                    direction="column"
                    justifyContent="center"
                    alignContent="center">
                    <Stack direction="row">
                        <IconButton sx={{ marginLeft: 1 }} onClick={() => navigate("/start")}>
                            <WestOutlinedIcon />
                        </IconButton>
                        <Button onClick={() => navigate("/")} sx={{ marginLeft: 2, padding: 1, width: 200, borderRadius: "10px" }} variant="contained">
                            Back to Home
                        </Button></Stack>

                    <Grid item>
                        <Box>
                            <Typography>Give Information</Typography>
                            <Divider />
                            <Typography p={1}>Text extended</Typography>
                            <Typography pb={2} pl={3} sx={{ color: "grey", fontSize: "9px" }}>This are the given files with best</Typography>
                            <Divider />
                            <Typography p={1}>Uploads</Typography>


                        </Box>

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
                    <DataCard width='20rem' component={leftChildren()}></DataCard>
                </Grid>
                <Grid item>
                    <DataCard width='50rem' component={<FileDataShowTabs />}></DataCard>
                </Grid>
            </Grid>
        </Box>

    )
}

export default CompileStage