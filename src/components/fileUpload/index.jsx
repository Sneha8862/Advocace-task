import React, { useState } from 'react';
import { Box, Button, Grid, List, ListItem, ListItemText, Typography, IconButton, ListItemIcon } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';

const FileUpload = () => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };

    const handleDeleteFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const renderFileIcon = (fileName) => {
        const extension = fileName.split('.').pop().toLowerCase();
        if (extension === 'pdf') {
            return <PictureAsPdfIcon />;
        } else if (extension === 'doc' || extension === 'docx') {
            return <DescriptionIcon />;
        } else {
            return <DescriptionIcon />;
        }
    };

    return (
        <Box>
            <Box
                sx={{
                    border: '1px dashed grey',
                    borderRadius: '4px',
                    padding: '20px',
                    textAlign: 'center',
                    marginBottom: '20px',
                }}
            >
                <input
                    accept=".jpg,.png,.pdf,.doc,.docx"
                    style={{ display: 'none' }}
                    id="file-input"
                    multiple
                    type="file"
                    onChange={handleFileChange}
                />
                <label htmlFor="file-input">
                    <Button variant="outlined" component="span" startIcon={<CloudUploadIcon />}>
                        Upload a file
                    </Button>
                </label>
                <Typography variant="body2" color="textSecondary">
                    Maximum uploads: 1
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    File formats: JPG, PNG, DOCX, PDF etc.
                </Typography>
            </Box>

            <List>
                {files.length > 0 && (
                    <Typography variant="body1" color="textPrimary">
                        Uploaded files <span>{files.length}/5</span>
                    </Typography>
                )}
                {files.map((file, index) => (
                    <ListItem key={index} secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteFile(index)}>
                            <DeleteIcon />
                        </IconButton>
                    }>
                        <ListItemIcon>{renderFileIcon(file.name)}</ListItemIcon>
                        <ListItemText primary={file.name} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default FileUpload;
