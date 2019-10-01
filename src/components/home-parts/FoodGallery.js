import React from 'react';
import "../../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

export default function FoodGallery() {
    return (
        <section class="food-gallery">
            <div class="container">
                <h1>Chique Dining Room</h1>
                <div class="slider-carousel">
                        <div class="intro-text">
                            <h3>Chique has been recently awarded with a Michelin Star.</h3>
                            <span>Come dine with us and find out why...</span>
                        </div>
                    <div class="slider-box">
                    <video id="chique-video" autoplay="" muted="muted" controls>
                        <source src="https://vimeo.com/183648707" type="video/mp4" />
                    </video>
                    </div>
                </div>
            </div>
            </section>
    )
}

{/* <Player
                        playsInline
                        poster="/assets/poster.png"
                        src="https://player.vimeo.com/video/143842659"
                    /> */}