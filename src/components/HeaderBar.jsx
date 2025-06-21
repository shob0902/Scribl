
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import logo from './logo.png';


const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0rgb(18, 18, 18);
`

const Heading = styled(Typography)`
  font-family: Impact, Charcoal, sans-serif;
  font-size: 32px;
  color:rgb(118, 117, 117); 
  text-transform: uppercase;
  margin-left: 20px;
  letter-spacing: 1px;


`


const HeaderBar = ({ open, handleDrawer }) => {
  
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: '20px'}}
          edge="start"
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="logo" style={{width: 30}} />
        <Heading>Scribl</Heading>
      </Toolbar>
    </Header>
  )
}

export default HeaderBar;