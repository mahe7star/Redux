import React,{Component} from 'react';
import BookList from '../containers/book_list';
import BookDetails from '../containers/book_details';

export default class App extends Component{
    render(){
        return (
            <div className='container-fluid'>
               <h2><i className="fas fa-book"></i> The Book Store</h2>
               <BookList />
               <BookDetails/>
            </div>	
        );
    }
}
