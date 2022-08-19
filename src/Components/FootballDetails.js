import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import { persianGalf2021 } from "../APIs/getData";
import "./FootballDetails.css";
import axios from "axios";
import fars from "../Content/images/fars.jpg";
import esteghlal from "../Content/images/esteghlal.jpg";
import sepahan from "../Content/images/sepahan.jpg";

function FootballDetails() {
  // const [items,setItems]= React.useState([]);
  //    var showData= persianGalf2021();
  //     console.log(await showData)
  //     debugger

  // const showData = items.map(item => item.teams)
  // const showData = items.map(item => <div> item.teams</div>)

  let arry = [];

  const [products, setProducts] = React.useState([]);

  async function initProducts() {
    if (arry.length === 0) {
      const temp = await axios
        .get(
          `https://v3.football.api-sports.io/fixtures?league=290&season=2021`,
          {
            headers: {
              "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
              "x-rapidapi-key": "251b7ce58174acb4ce3f83637b364ba4",
            },
          }
        )
        .then((response) => {
          setProducts(response.data.response);
          console.log(response.data.response);
        });
      // .catch(err => console.error(err));
      // arry=temp.data.response;
    }
    return arry;
  }
  // initProducts();

  return (
    <>
      <div>
        <Accordion defaultActiveKey="0">
          {/* {products.map((item) =>  */}
          <Accordion.Item eventKey="0" className="footballAccordion">
            <Accordion.Header>
              <img className="title_image" src={fars}></img>
              <span className="title"> لیگ خلیج فارس</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="contentAccordion">
                <Col>
                  <img className="title_image" src={esteghlal}></img>
                  <span>استقلال</span>
                </Col>
                <Col>
                  <span>12:40</span>
                </Col>
                <Col>
                  <img className="title_image" src={sepahan}></img>
                  <span>سپاهان</span>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          {/* )}  */}
        </Accordion>
        <Accordion defaultActiveKey="1">
          {/* {products.map((item) =>  */}
          <Accordion.Item eventKey="0" className="footballAccordion">
            <Accordion.Header>
              <img className="title_image" src={fars}></img>
              <span className="title"> لیگ خلیج فارس</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="contentAccordion">
                <Col>
                  <img className="title_image" src={esteghlal}></img>
                  <span>استقلال</span>
                </Col>
                <Col>
                  <span>12:40</span>
                </Col>
                <Col>
                  <img className="title_image" src={sepahan}></img>
                  <span>سپاهان</span>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          {/* )}  */}
        </Accordion>
        <Accordion defaultActiveKey="2">
          {/* {products.map((item) =>  */}
          <Accordion.Item eventKey="0" className="footballAccordion">
            <Accordion.Header>
              <img className="title_image" src={fars}></img>
              <span className="title"> لیگ خلیج فارس</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="contentAccordion">
                <Col>
                  <img className="title_image" src={esteghlal}></img>
                  <span>استقلال</span>
                </Col>
                <Col>
                  <span>12:40</span>
                </Col>
                <Col>
                  <img className="title_image" src={sepahan}></img>
                  <span>سپاهان</span>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          {/* )}  */}
        </Accordion>
        <Accordion defaultActiveKey="3">
          {/* {products.map((item) =>  */}
          <Accordion.Item eventKey="0" className="footballAccordion">
            <Accordion.Header>
              <img className="title_image" src={fars}></img>
              <span className="title"> لیگ خلیج فارس</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="contentAccordion">
                <Col>
                  <img className="title_image" src={esteghlal}></img>
                  <span>استقلال</span>
                </Col>
                <Col>
                  <span>12:40</span>
                </Col>
                <Col>
                  <img className="title_image" src={sepahan}></img>
                  <span>سپاهان</span>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          {/* )}  */}
        </Accordion>
        <Accordion defaultActiveKey="4">
          {/* {products.map((item) =>  */}
          <Accordion.Item eventKey="0" className="footballAccordion">
            <Accordion.Header>
              <img className="title_image" src={fars}></img>
              <span className="title"> لیگ خلیج فارس</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="contentAccordion">
                <Col>
                  <img className="title_image" src={esteghlal}></img>
                  <span>استقلال</span>
                </Col>
                <Col>
                  <span>12:40</span>
                </Col>
                <Col>
                  <img className="title_image" src={sepahan}></img>
                  <span>سپاهان</span>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          {/* )}  */}
        </Accordion>
        <Accordion defaultActiveKey="5">
          {/* {products.map((item) =>  */}
          <Accordion.Item eventKey="0" className="footballAccordion">
            <Accordion.Header>
              <img className="title_image" src={fars}></img>
              <span className="title"> لیگ خلیج فارس</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="contentAccordion">
                <Col>
                  <img className="title_image" src={esteghlal}></img>
                  <span>استقلال</span>
                </Col>
                <Col>
                  <span>12:40</span>
                </Col>
                <Col>
                  <img className="title_image" src={sepahan}></img>
                  <span>سپاهان</span>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          {/* )}  */}
        </Accordion>
        <Accordion defaultActiveKey="6">
          {/* {products.map((item) =>  */}
          <Accordion.Item eventKey="0" className="footballAccordion">
            <Accordion.Header>
              <img className="title_image" src={fars}></img>
              <span className="title"> لیگ خلیج فارس</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="contentAccordion">
                <Col>
                  <img className="title_image" src={esteghlal}></img>
                  <span>استقلال</span>
                </Col>
                <Col>
                  <span>12:40</span>
                </Col>
                <Col>
                  <img className="title_image" src={sepahan}></img>
                  <span>سپاهان</span>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          {/* )}  */}
        </Accordion>
      </div>
    </>
  );
}
export default FootballDetails;
