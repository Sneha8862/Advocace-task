import React, { useState } from 'react';
import { TabPanel } from '@mui/lab';
import { Typography, Divider, Button, Stack } from '@mui/material';

const QuestionsTabPanel = ({ data }) => {
    const [showPetitioner, setShowPetitioner] = useState(true);

    const listItemStyle = {
        marginBottom: '10px',
    };

    const subtitleStyle = {
        fontWeight: 'bold',
    };

    return (
        <TabPanel value="5">
            <Typography variant="h6">
                Questions
            </Typography>
            <Stack pl={4} direction="row">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setShowPetitioner(true)}
                    style={{ marginRight: '15px', borderRadius: "10px", fontSize: "10px" }}
                >
                    Petitioner
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ borderRadius: "10px", fontSize: "10px" }}
                    onClick={() => setShowPetitioner(false)}
                >
                    Respondent
                </Button>
            </Stack>
            {showPetitioner ? (
                <ol>
                    {data.questions.by_petitioner.map((question, index) => (
                        <React.Fragment key={index}>
                            <li style={listItemStyle}>
                                <Typography variant="subtitle1" style={subtitleStyle}>
                                    {question.question}
                                </Typography>
                                <Typography>{question.reason}</Typography>
                            </li>
                            <Divider />
                        </React.Fragment>
                    ))}
                </ol>
            ) : (
                <ol>
                    {data.questions.by_respondent.map((question, index) => (
                        <React.Fragment key={index}>
                            <li style={listItemStyle}>
                                <Typography variant="subtitle1" style={subtitleStyle}>
                                    {question.question}
                                </Typography>
                                <Typography>{question.reason}</Typography>
                            </li>
                            <Divider />
                        </React.Fragment>
                    ))}
                </ol>
            )}
        </TabPanel>
    );
};

export default QuestionsTabPanel;
