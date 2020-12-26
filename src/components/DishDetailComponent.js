import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
function RenderComments({ dishComments }) {
    const comments = dishComments.map((comment) => {
        return (
            <div className="container" key={comment.id}>
                <div>
                    <p>
                        {comment.comment}
                    </p>
                </div>
                <div>
                    <p>
                        --{comment.author} ,{comment.date}
                    </p>
                </div>
            </div>
        );
    });
    return (
        <div className="col-12 col-md-5 m-1">
            <h1>
                Comments
        </h1>
            <div>
                {comments}
            </div>
        </div>
    );
}
const DishDetail = (props) => {
    if (props.dish != null) {

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments dishComments={props.comments} />
                </div>
            </div>
        );
    }
    return (
        <div></div>
    )
}


export default DishDetail;