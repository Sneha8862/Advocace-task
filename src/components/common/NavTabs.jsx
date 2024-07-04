import { Box, Button } from '@mui/material';
import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useNavigate } from 'react-router-dom';

const NavButtons = () => {
    const [selected, setSelected] = React.useState(2);

    const navigate = useNavigate();

    const handleClick = (index, path) => {
        setSelected(index);
        navigate(path);
    };

    const buttons = [
        { icon: <ArticleOutlinedIcon />, label: "News feed", path: "/news" },
        { icon: <GroupsOutlinedIcon />, label: "Find lawyers", path: "/findLawyer" },
        { icon: <HomeOutlinedIcon />, label: "Home", path: "/" },
        { icon: <ConnectWithoutContactOutlinedIcon />, label: "Connections", path: "/connections" },
        { icon: <ChatOutlinedIcon />, label: "Chats", path: "/chats" },
    ];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'transparent', p: 1 }}>
            {buttons.map((button, index) => (
                <Button
                    key={index}
                    startIcon={button.icon}
                    onClick={() => handleClick(index, button.path)}
                    sx={{
                        textTransform: 'none',
                        fontWeight: 500,
                        padding: '10px 20px',
                        fontSize: '0.875rem',
                        color: selected === index ? '#fff' : '#000',
                        backgroundColor: selected === index ? '#025BD4' : 'transparent',
                        borderRadius: '30px',
                        '&:hover': {
                            backgroundColor: selected === index ? '#025BD4' : '#f0f0f0',
                        },
                    }}
                >
                    {button.label}
                </Button>
            ))}
        </Box>
    );
};

export default NavButtons;
