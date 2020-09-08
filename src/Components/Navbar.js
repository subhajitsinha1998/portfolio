import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
	CssBaseline,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Slide,
	useScrollTrigger
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Navbar = ({ open, setOpen }) => {
	return (
		<>
			<CssBaseline />
			<Slide appear={false} direction="down" in={!useScrollTrigger()}>
				<AppBar
					position="fixed"
					style={{ zIndex: useTheme().zIndex.drawer + 1, background: "transparent", boxShadow: "none", color: "black" }}
				>
					<Toolbar>
						<IconButton
							aria-label="open drawer"
							onClick={() => setOpen(!open)}
							edge="start"
						>
							{open ? <CloseIcon /> : <MenuIcon />}
						</IconButton>
						<Typography variant="h6" noWrap style={{cursor: "default"}}>
							Menu
          	</Typography>
					</Toolbar>
				</AppBar>
			</Slide>
		</>
	);
}


export default React.memo(Navbar);