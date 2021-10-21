class HomePage {
open(){
    // open URL
    return browser.url("/");
}

get getStartedBtn(){
    return $('#get-started') 
}

}

export default new HomePage();
