import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const DataCard = ({ width, component = <></>, height = "80vh" }) => {
    return (
        <Box>
            <Card
                sx={{
                    height: { height },
                    width: { width },
                    display: "flex"
                }}
            >
                <CardContent children={component}>

                </CardContent>
            </Card>
        </Box >
    )
}

export default DataCard