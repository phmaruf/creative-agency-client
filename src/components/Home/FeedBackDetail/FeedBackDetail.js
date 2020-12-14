import React from 'react';

const FeedBackDetail = ({feedBack}) => {
    return (
        <div style={{padding: '0 80px', border: '1px solid gray'}} className="col-md-4 text-center m-3 p-3">
            <div className="row d-flex p-2">
                <div className="col-md-3 col-sm-12">
                    <img style={{height: '50px'}} src={feedBack.img} alt="" />
                </div>
                <div style={{textAlign: 'left'}} className="col-md-9 mb-1">
                    <h5><b>{feedBack.name}</b></h5>
                    <h6><b>{feedBack.designation}</b></h6>
                </div>
            </div>
            <div>
                <p style={{textAlign: 'left'}} className="text-secondary">{feedBack.description}</p>
            </div>
        </div>
    );
};

export default FeedBackDetail;