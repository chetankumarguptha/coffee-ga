import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer py-3">
                <div className="container">
                    <div className="row">
                        <div className=" col-10 mx-auto col-md-6 text-yellow text-center text-capitilized">
                            <h3 className=""> All Rights Reserved &copy;{new Date().getFullYear().toString( )} </h3>
                        </div>
                    </div>
                </div>

            </footer>
        )
    }
}
