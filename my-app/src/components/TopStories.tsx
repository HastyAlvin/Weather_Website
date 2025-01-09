import { Box, Typography, Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

export default function TopStories() {
    const stories = [
        { title: 'Thousands flee wildfires in LA', time: '5 hours ago', image: '/images/story1.jpg' },
        { title: 'Apocalyptic fires in California', time: '7 hours ago', image: '/images/story2.jpg' },
        { title: 'Major storm hits Georgia', time: '6 hours ago', image: '/images/story3.jpg' },
        { title: '7.1 earthquake in Tibet', time: '21 hours ago', image: '/images/story4.jpg' },
    ];

    return (
        <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
            <Typography variant="h6">Top Stories</Typography>
            <List>
                {stories.map((story, index) => (
                    <ListItem key={index} alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar src={story.image} variant="square" />
                        </ListItemAvatar>
                        <ListItemText primary={story.title} secondary={story.time} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
