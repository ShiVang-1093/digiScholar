const isLoggedin = () => {
    if (localStorage.getItem('jwt')) {
        return true;
    }
    else {
        return false;
    }
}
export default isLoggedin;