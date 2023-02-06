import { useContext } from 'react';
import { Box, Divider, Drawer, Icon, Link, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { DrawerContext, MediaQueryContext } from '../../context';
import { Children } from '../../types';
import ListItem from './ListItem';

function SideBar({ children }: Children) {

    const { theme, lgDown } = useContext(MediaQueryContext)
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
                                    onClick={lgDown ? toggleDrawer : undefined}
                                />
                            ))}
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon color='primary'>open_in_new</Icon>
                                </ListItemIcon>
                                <Link 
                                    href='https://github.com/GabrielBursi/login-react-node' 
                                    underline='none'
                                    rel="noreferrer"
                                    target='_blank'
                                >
                                    <ListItemText primary='GitHub' />
                                </Link>
                                
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>

            <Box height='100vh'>
                {children}
            </Box>
        </>
    );
}

export default SideBar;