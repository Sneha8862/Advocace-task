import React from 'react';
import { Box, Button, Stepper, Step, StepLabel } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { styled } from '@mui/system';

const steps = [
    'Start',
    'Continue',
    'Analysis',
    'Additional Documents',
    'Relief',
    'Suggestions',
    'First Draft',
    'Q&A',
    'Final Draft',
];

const StepIcon = (props) => {
    const { active, completed } = props;
    return completed ? (
        <CheckCircleIcon color="primary" fontSize="small" />
    ) : (
        <RadioButtonUncheckedIcon color={active ? 'primary' : 'disabled'} fontSize="small" />
    );
};

const CustomStepLabel = styled(StepLabel)({
    '.MuiStepLabel-label': {
        fontSize: '0.875rem',
    },
});

const StepsComponent = ({ stepHeight = '30px', onHandleClick = () => { } }) => {
    const completedSteps = [0, 1, 2];

    return (
        <Box
            sx={{
                width: '100%',
                height: "36rem",
                maxWidth: 360,
                bgcolor: 'background.paper',
                p: 2,
                borderRadius: 1,
                boxShadow: 1,
            }}
        >
            <Stepper orientation="vertical" >
                {steps.map((label, index) => (
                    <Step key={label} completed={completedSteps.includes(index)} sx={{ height: stepHeight }}>
                        <CustomStepLabel StepIconComponent={StepIcon}>{label}</CustomStepLabel>
                    </Step>
                ))}
            </Stepper>
            <Button onClick={() => onHandleClick()} variant="contained" fullWidth sx={{ mt: 10, borderRadius: "10px" }}>
                Continue
            </Button>
        </Box>
    );
};

export default StepsComponent;
