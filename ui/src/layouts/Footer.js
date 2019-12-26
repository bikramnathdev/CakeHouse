import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="main-footer">
                    <strong>Copyright © <a href="fake_url">Creative Hunters</a>.</strong>
                    All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 3.0.1
                    </div>
                </footer>
            </div>
        )
    }
}
