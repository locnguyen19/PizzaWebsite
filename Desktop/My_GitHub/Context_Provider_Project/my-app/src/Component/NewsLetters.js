import React from 'react'
import './style.css'

export default function NewsLetters() {
    return (
        <div>
            <section className="newsletter">
                <div className="content">
                    <h3>monthly newsletter</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ullam veniam at itaque culpa hic corporis saepe dicta doloremque nihil.</p>
                    <form action>
                        <input type="email" placeholder="enter your email" className="box" />
                        <input type="submit" defaultValue="Send" className="btn" />
                    </form>
                </div>
            </section>
        </div>
    )
}
