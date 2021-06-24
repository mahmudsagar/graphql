import React from 'react'
import { gql, useMutation } from '@apollo/client';

const addBook = gql`
  mutation addBook($type: String!) {
    addBook(type: $type) {
      name
      genre
      authorId
    }
  }
`;


const AddBook = () => {
    return (
        <div>
            <form id="add-book">
                <div className="field">
                    <label htmlFor="">Book name:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label htmlFor="">Genre:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label htmlFor="">Author:</label>
                    <select name="">
                        <option value="">Select Author</option>
                    </select>
                </div>
                <button>+</button>
            </form>
        </div>
    )
}

export default AddBook
