import React from "react";

const Question = () => {
  return (
    <div>
      <section className="container my-5">
        <div className="d-flex flex-column align align-items-center my-5">
          <h1>Frequently Asked About React</h1>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <p>How does the react Work? </p>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  <strong>React Work:</strong> React is a very popular
                  JavaScript library. React basically maintains a tree for you.
                  This tree is able to do efficient diff computations on the
                  nodes. React allows you to effectively re-construct your DOM
                  in JavaScript and push only those changes to the DOM which
                  have actually occurred.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <p>What are the different between props and state </p>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  <strong>State:</strong> The state is a local data storage that
                  is local to the component only and cannot be passed to other
                  components. SetState property is used to update the state
                  values in the component
                </p>
                <p>
                  <strong>Propse:</strong> on the other hand, make components
                  reusable by giving components the ability to receive data from
                  their parent component in the form of props.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <p>What is the uses of useEffect except data load</p>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  <strong>Uses of useEffect: </strong>
                  1. Running once on mount: fetch API data. <br />
                  2. Running on state change: validating input field. <br />
                  3. Running on state change: live filtering. <br />
                  4. Running on state change: trigger animation on new array value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Question;
