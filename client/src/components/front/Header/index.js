import React from 'react';
import HeaderDesktop from "./type/desktop";
import HeaderPhone from "./type/phone";
import useApp from "../../../hooks/useApp";

function AppHeader(){

    const { selectors, actions } = useApp();
    let isPhone = selectors.getMenuDisplayIsPhone();
    let isMenuOpen = selectors.getMenuOpen();

    window.onload = function(){
        checkHeaderType(actions);
    }

    window.onresize = function(){
        checkHeaderType(actions);
    }

    if(isPhone){
        return (
            <HeaderPhone isOpen={isMenuOpen} burgerMenuClickAction={() => { actions.changeMenuOpen(!isMenuOpen) }} />
        );
    }else{
        return (
            <HeaderDesktop />
        )
    }
}

function checkHeaderType(actions){
    if(window.innerWidth < 800){
        actions.changeMenuDisplay(true);
    }else{
        actions.changeMenuDisplay(false);
    }
}

export default AppHeader;