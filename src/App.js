import { useState } from 'react'
import { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import styled from 'styled-components';
import Home from "./Pages/HomePage";
import { Route, Switch as Switching } from "react-router";
import About from "./Pages/AboutPage";
import Contact from "./Pages/ContactPage";
import Portfolio from "./Pages/PortfolioPage";
import Resume from "./Pages/ResumePage";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from '@material-ui/core';

function App() {

  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  const themeToggler = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false);
    }else{
      setTheme('light-theme');
      setChecked(true);
    }
  }

  return (
    <div className="App">
      <Sidebar navToggle={ navToggle } />
      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={ checked }
              inputProps={{ 'aria-label': '' }}
              size="medium"
              onClick={ themeToggler }
            />
          </div>
        </div>
      </div>

      <div className="menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switching>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/About" exact>
            <About />
          </Route>
          <Route path="/Resume" exact>
            <Resume />
          </Route>
          <Route path="/Portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/Contact" exact>
            <Contact />
          </Route>
        </Switching>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  @media screen and (max-width: 1310px){
    margin-left: 0rem;
  }

  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.2;
    z-index: -1;

    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
