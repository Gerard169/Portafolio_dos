import indexContext from './pages/index_page';
import ListContext from './pages/List_page';

export default (page)=>{
    switch(page){
        case '/index.html':
            return { ...indexContext, ...ListContext };
        case '/productos.html':
            return {};
        default:
            return {};
    }
};