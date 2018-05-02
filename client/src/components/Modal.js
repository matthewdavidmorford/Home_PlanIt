import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ModalExample extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        modal: false
    };

    this.toggle = this.toggle.bind(this);
    }

    toggle() {
    this.setState({
        modal: !this.state.modal
    });
    }

    render() {
    return (
        <div>
        <Button color="danger" onClick={this.toggle}>Add Event</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Add an Event</ModalHeader>
            <ModalBody>
            <Form inline>
            <FormGroup>
                <Label for="eventTitle">Event Title</Label>
                <Input type="text" name="eventTitle" id="eventTitle" placeholder="What are you up to?" />
            </FormGroup> 
            <FormGroup>
                <Label for="eventDesc">Event Description</Label>
                <Input type="text" name="eventDesc" id="eventDesc" placeholder="Tell me more." />
            </FormGroup> 
            <FormGroup>
                <Label for="month">Month</Label>
                <Input type="month" name="month" id="month" placeholder="month placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="day">Day</Label>
                <Input type="day" name="day" id="day" placeholder="day placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="year">Year</Label>
                <Input type="year" name="year" id="year" placeholder="year placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="startTime">Start Time</Label>
                <Input type="time" name="startTime" id="startTime" placeholder="time placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="endTime">End Time</Label>
                <Input type="time" name="endTime" id="endTime" placeholder="time placeholder" />
            </FormGroup>
            </Form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Add it!</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
    }
}

export default ModalExample;