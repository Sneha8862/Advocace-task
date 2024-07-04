import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Circle as CircleIcon } from '@mui/icons-material';
import DescriptionIcon from '@mui/icons-material/Description';

const CaseFlow = () => {
    const sections = [
        {
            title: 'Pre litigation',
            items: [
                { primary: 'Legal Notice', secondary: 'Notifies the opposing party of the dispute and demands resolution.' },
                { primary: 'Reply to Legal Notice', secondary: 'A response to a legal notice received from the opposing party.' },
            ],
        },
        {
            title: 'Litigation',
            items: [
                { primary: 'Plaint/Complaint', secondary: 'Initiates the lawsuit, detailing the plaintiff’s claims.' },
                { primary: 'Vakalatnama', secondary: 'Authorizes a lawyer to represent the client in court.' },
                { primary: 'Written Statement/Answer', secondary: 'The defendant’s formal response to the plaint.' },
                { primary: 'Reply to Written Statement', secondary: 'Addresses points raised in the defendant’s written statement.' },
            ],
        },
        {
            title: 'Interlocutory Applications',
            items: [
                { primary: 'Application for Temporary Injunction', secondary: 'Seeks immediate court intervention to preserve status quo.' },
                { primary: 'Counter-Affidavit to Opposition’s Application', secondary: 'Responds to interlocutory applications from the opposing party.' },
            ],
        },
    ];

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
                Case flow
            </Typography>
            <Typography variant="body1" color="primary" gutterBottom>
                Select the document for drafting
            </Typography>
            {sections.map((section, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CircleIcon sx={{ color: '#1976d2', fontSize: 12, mr: 1 }} />
                        <Typography variant="body2" fontWeight="bold">
                            {section.title}
                        </Typography>
                    </Box>
                    <List dense>
                        {section.items.map((item, itemIndex) => (
                            <ListItem key={itemIndex} sx={{ m: 1, pl: 4, border: "1px solid grey", borderRadius: "10px" }}>
                                <DescriptionIcon sx={{ color: '#9e9e9e', fontSize: 16, mr: 1 }} />
                                <ListItemText
                                    primary={<Typography variant="body2">{item.primary}</Typography>}
                                    secondary={<Typography variant="caption">{item.secondary}</Typography>}
                                />
                            </ListItem>
                        ))}
                    </List>
                    {index < sections.length - 1 && <Divider />}
                </Box>
            ))}
        </Box>
    );
};

export default CaseFlow;
