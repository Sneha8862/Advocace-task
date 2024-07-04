import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Typography } from '@mui/material';
import data from '../../constants/tabData.json';
import QuestionsTabPanel from './ShowData';

const FileDataShowTabs = () => {
    const [value, setValue] = React.useState('5');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box
                    sx={{
                        borderBottom: 'none',
                        '& .MuiTabs-root': {
                            borderRadius: '20px',
                        },
                        '& .MuiTab-root': {
                            borderRadius: '20px',
                            textTransform: 'none',
                        },
                        '& .MuiTab-textColorInherit.Mui-selected': {
                            borderBottom: 'none !important',
                        },
                        '& .MuiTab-wrapper': {
                            boxShadow: 'inset 0px 3px 5px -3px rgba(0,0,0,0.5)',
                            padding: '6px 16px',
                        },
                    }}
                >
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Case Desc" value="1" />
                        <Tab label="Acts & Laws" value="2" />
                        <Tab label="Judgement" value="3" />
                        <Tab label="Templates" value="4" />
                        <Tab label="Questions" value="5" />
                        <Tab label="Support" value="6" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Typography variant="h6">Given Information</Typography>
                    <Typography>{data.given_information.text_entered}</Typography>
                    <Typography variant="subtitle1">Uploads:</Typography>
                    <ul>
                        {data.given_information.uploads.map((upload, index) => (
                            <li key={index}>{upload.file_name} (Uploaded: {upload.uploaded}/5)</li>
                        ))}
                    </ul>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h6">Acts & Laws</Typography>
                    <Typography>Details about acts and laws go here.</Typography>
                </TabPanel>
                <TabPanel value="3">
                    <Typography variant="h6">Judgement</Typography>
                    <Typography>Details about judgement go here.</Typography>
                </TabPanel>
                <TabPanel value="4">
                    <Typography variant="h6">Templates</Typography>
                    <Typography>Details about templates go here.</Typography>
                </TabPanel>
                <QuestionsTabPanel data={data} />
                <TabPanel value="6">
                    <Typography variant="h6">Support</Typography>
                    <Typography>Details about support go here.</Typography>
                </TabPanel>
            </TabContext>
        </Box>
    );
}

export default FileDataShowTabs;
