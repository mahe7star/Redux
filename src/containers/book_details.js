import React,{Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component{
    render(){
        if(!this.props.book){
            return (
                <div>Please Select a Book to show details!</div>
            );
        }
        return (
            <div className='col-md-4 book-details'>
                <h4>Details for book: </h4>
                <div>Title: {this.props.book.title}</div>
                <div>Author: {this.props.book.author}</div>
            </div>
        );
       
    }
}

const mapStateToProps=(state)=>{
    return{
        book:state.activeBook
    }
}

export default connect (mapStateToProps)(BookDetails);