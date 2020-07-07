import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(selectedDish) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name}/>
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    renderComments(comments){
        const cmt = comments.map(comment => {
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}</p>
                </li>
            )
        })
        return(
            <div className="col-12 col-md-5 m-1">
                <h4> Comments </h4>
                <ul className="list-unstyled">
                    {cmt}
                </ul>
            </div>
        )
    }

    render(){
        const selectedDish = this.props.selectedDish;
        if (selectedDish != null){
            const dishDetail = this.renderDish(selectedDish);
            const comments = this.renderComments(selectedDish.comments);
            return(
                <div className="container">
                    <div className="row">
                        {dishDetail}
                        {comments}
                    </div>
                </div>
            )
        }
        else
            return(
                <div></div>
            )      
    }
}

export default DishDetail;
