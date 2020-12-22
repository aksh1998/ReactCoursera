import React, { Component } from 'react';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      const comments = dish.comments.map((comment) => {
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
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <DishDetail dish={dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <h1>
              Comments
            </h1>
            {comments}
          </div>
        </div>
      );
    }
    else
      return (
        <div></div>
      );
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id}
            onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        {this.renderDish(this.state.selectedDish)}

      </div>
    );
  }
}

export default Menu;