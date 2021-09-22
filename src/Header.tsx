import { MouseEvent, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'

function Header() {
    const [auth, setAuth] = useState<boolean>(true)
    const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null)
    const [appMenuAnchor, setAppMenuAnchor] = useState<null | HTMLElement>(null)

    const isUserMenuOpen = Boolean(userMenuAnchor)
    const isAppMenuOpen = Boolean(appMenuAnchor)

    const handleUserMenuOpen = (event: MouseEvent<HTMLElement>) => {
        setUserMenuAnchor(event.currentTarget)
    }

    const handleAppMenuOpen = (event: MouseEvent<HTMLElement>) => {
        setAppMenuAnchor(event.currentTarget)
    }

    const handleMenuClose = () => {
        setUserMenuAnchor(null)
        setAppMenuAnchor(null)
    }

    const handleLogout = () => {
        handleMenuClose()
        setAuth(false)
    }

    const menuUserId = 'menuUserId'
    const renderUserMenu = (
        <Menu
            anchorEl={userMenuAnchor}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuUserId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isUserMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    )

    const menuAppId = 'menuAppId'
    const renderAppMenu = (
        <Menu
            anchorEl={appMenuAnchor}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            id={menuAppId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={isAppMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem>Home</MenuItem>
            <MenuItem>Dashboard</MenuItem>
            <MenuItem>Admin</MenuItem>
        </Menu>
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='open drawer'
                        onClick={handleAppMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' noWrap component='div'>
                        Router
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        {auth ? (
                            <IconButton
                                size='large'
                                edge='end'
                                aria-label='account of current user'
                                aria-controls={menuUserId}
                                aria-haspopup='true'
                                onClick={handleUserMenuOpen}
                                color='inherit'
                            >
                                <AccountCircle />
                            </IconButton>
                        ) : (
                            <Button color='inherit'>Login</Button>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            {renderUserMenu}
            {renderAppMenu}
        </Box>
    )
}

export { Header }
