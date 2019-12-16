    import React from 'react';
    import Title from '../Globals/Title';
    
    export default function Contact() {
        return (
            <section className="contact py-5">
                <Title title="Contact Us" />
                <div className="row">
                    <div className="col-10 col-sm-8 col-md-6 mx-auto">
                        <form action="https://formspree.io/chetan.chaitu35@gmail.com" method="POST">
                            {/* Name */}
                            <div className="form-group">
                                <lable  htmlFor="name">Name</lable>
                                <input  type="text" className="form-control" name="name" id="name" placeholder="Chetan Kumar"/>
                            </div>
                                {/* Email */}
                                <div className="form-group">
                                <lable  htmlFor="email">Email</lable>
                                <input  type="text" className="form-control" name="email" id="email" placeholder="email@gmail.com"/>
                            </div>
                            {/* Description  */}
                            <div className="form-group">
                                <label htmlFor="description"></label>
                                <textarea name="description" id="description" className="form-control" row="5" 
                                placeholder=" Enter Your Description here........"></textarea>

                            </div>
                            {/* Submit */}
                            <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
    