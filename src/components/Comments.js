import React from "react";
import { Comment, Form, Button } from "semantic-ui-react";

export default () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content="Add Comment" labelPosition="left" icon="edit" primary />
    </Form>
  </Comment.Group>
);
