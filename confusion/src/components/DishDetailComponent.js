import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';


class DishDetail extends Component {
    render() {
        if (this.props.dish != null) {
            const comments = this.props.dish.comments.map((comment) => {
                return (
                    <div>
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
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h1>
                                Comments
                            </h1>
                            <div>
                                {comments}
                            </div>
                        </div>
                    </div>
                </div>);
        }
        return (
            <div></div>
        )
    }
}

export default DishDetail;