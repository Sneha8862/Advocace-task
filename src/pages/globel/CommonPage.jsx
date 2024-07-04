import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const CommonPage = ({ heading = "No data found", text = "No data" }) => {
    return (
        <Box >
            <Card sx={{ bgcolor: "transparent" }}>
                <CardContent>
                    <Typography p={2} variant='h3'>{heading}</Typography>
                    <Typography p={2} variant='body1'>{text}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default CommonPage 