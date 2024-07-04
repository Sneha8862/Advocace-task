import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Buttons = () => {
    const navigate = useNavigate()
    return (
        <Box>
            <Button sx={{ position: "sticky" }} onClick={() => navigate("/start")} >Start</Button>
        </Box>
    )
}

export default Buttons