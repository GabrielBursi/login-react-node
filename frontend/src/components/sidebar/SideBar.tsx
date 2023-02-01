import { useContext } from 'react';
import { Box, Divider, Drawer, List } from '@mui/material';

import { DrawerContext, MediaQueryContext } from '../../context';
import { Children } from '../../types';
import ListItem from './ListItem';

function SideBar({ children }: Children) {

    const { theme, mdDown } = useContext(MediaQueryContext)
    const { drawerOptions, toggleDrawer, isDrawerOpen } = useContext(DrawerContext)
    
    return (
        <>
            <Drawer open={isDrawerOpen} variant='temporary' onClose={toggleDrawer} anchor="right">
                <Box height='100vh' width={theme.spacing(28)} display='flex' flexDirection='column'>

                    <Divider />

                    <Box flex={1}>
                        <List component='nav'>
                            {drawerOptions.map(option => (
                                <ListItem
                                    key={option.path}
                                    icon={option.icon}
                                    label={option.label}
                                    to={option.path}
                                    onClick={mdDown ? toggleDrawer : undefined}
                                />
                            ))}
                        </List>
                    </Box>
                </Box>
            </Drawer>

            <Box height='100vh' marginRight={mdDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
}

export default SideBar;