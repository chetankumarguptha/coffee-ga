// Menu of our items located at or shop

import React, { Component } from 'react';

import Title from "../Globals/Title";

import Img from 'gatsby-image';



const getCategories = items =>{

    let tempItems = items.map(items =>{
        return items.node.category;
       
    });
    let tempCategories = new Set(tempItems);
    let categories = Array.from(tempCategories);
    categories = ["all",...categories];
    return categories;
}



export default class Menu extends Component {

    constructor(probs){
        super(probs);
        this.state={
            items:probs.items.edges,     
            coffeeItems:probs.items.edges,
            categories:getCategories(probs.items.edges)         
        };
    };

    handleItems = category => {
        let tempItems = [...this.state.items];
        if(category === "all"){
            this.setState(()=>{
                return{coffeeItems:tempItems}
            })
        }
        else{
            let items = tempItems.filter(({node}) => node.category === category);
            this.setState(() =>{
                return{coffeeItems: items};
            });
        }
    };

    render() {
        if(this.state.items.length>0){
        return  (
            <section className="menu py-5">
                <div className="container">
                    <Title title="Our New Menu"/>
                        {/* categories */}
                        <div className="row mb-5">
                            <div className="col-10 mx-auto text-center">
                                {this.state.categories.map((category, index)=>{
                                    return(<button type="button" key={index} className="btn btn-yellow text-capitilize m-3" 
                                    onClick={() =>{this.handleItems(category)}}>{category}</button>)
                                })}
                            </div>
                        </div>

                        {/* items */}
                    <div className="row ">
                        {this.state.coffeeItems.map(({node}) =>{
                            return(
                                <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                    <div>
                                        {/* <Img fixed={node.image.fixed}></Img> */}
                                        
                                    </div>
                                    {/* Item text */}
                                    <div className="flex-grown-1 px-3 ">
                                        <p className="text-muted">
                                            <div className="d-flex justify-content-between">
                                                <h6 className=" mb-0 "> 
                                                    <small> {node.title}</small>
                                                </h6>
                                                <h6 className=" mb-0 text-yellow ">
                                                    <small>${ node.price}</small>
                                                </h6>
                                            </div>
                                        <small className=" text-secondary font-italic"> {node.description}</small>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>
        );
         }
        else{
            return ( <section className="menu py-5">
                <div className="container">
                    <Title title="best of our menu"></Title>
                    <div className="row">
                        <div className="col-10 col-sm-6 mx-auto text-center text-capitilizer">
                            <h1>there are no items to display</h1>
                        </div>
                    </div>
                </div>
             </section> )
        }

        }

     
    }




