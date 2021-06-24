import React from "react";
import { gql, useQuery } from "@apollo/client";

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery);
    console.log(error);
    console.log(data);
    if (loading) return "lodaing ......";
    if (error) return `error!!! <br> ${error}` ;
    else return (
        <div>
            <ul id="book-list">
                {data?.books?.map((book) => {
                    return <li key={book.id}>{book.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default BookList;
