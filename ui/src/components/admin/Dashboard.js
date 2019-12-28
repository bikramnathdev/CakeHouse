import React, { Component } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Menu from "../../layouts/Menu";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content">
                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1 className="m-0 text-dark">Dashboard</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
