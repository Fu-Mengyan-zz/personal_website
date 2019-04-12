import React from "react";
import { withRouter } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <div>
            Fu Mengyan &copy; 2019. Made with{" "}
            <span role="img" aria-label="Heart">
              ❤️
            </span>{" "}
            .
          </div>
        </Container>
      </footer>
    );
  }
}

export default withRouter(Footer);
