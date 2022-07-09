import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <main>
            <section>
                <header className="my-5">
                    <h2>
                        About Portal
                    </h2>
                    <hr />
                </header>
                <p>
                1. As a user you can search the movies based on type:-
                    <br/>- coming soon
                    <br/>- Movies in theaters
                    <br/>- top rated Indian
                    <br/>- top rated movies
                    <br/>2. As a user you can see all the movie's basic information (poster, title) in the selected options
                    <br/>3. As a user you can see the details of the movie if you select the movie.
                    <br/>4. As a user you can add the movie to the favorite list by clicking on the favorite button
                    <br/>5. As a user you should get the option to view your favorite list.
                    <br/>6. As a user you can remove a movie from the favorite list.       </p>
            </section>
        </main>
    )
};

export default About;