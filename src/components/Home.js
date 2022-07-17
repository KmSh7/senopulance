import React from "react";
import "./Home.css";
import Media from "react-media";
import piconleft1 from "./pictures/cool-men's-look.jpg";
import piconright1 from "./pictures/piconright2.2.jpg";
import mainimg1 from './pictures/mainofferimg1.jpg';
import mainimg2 from './pictures/mainimg2.1.jpg';
import mainimg3 from './pictures/mainimg3.jpg';
import rightpic1 from './pictures/rightpic1.jpg';
import leftpic1 from './pictures/leftpic1.jpg';
import menimg1 from './pictures/men1.jpg';
import menimg2 from './pictures/men2.jpg';
import womenimg1 from './pictures/women1.6.jpg';
import womenimg2 from './pictures/women2.4.jpg';
import itemsimg1 from './pictures/item1.1.jpg';
import itemsimg2 from './pictures/item2.1.jpg';
import jwelimg1 from './pictures/jwel1.2.jpg';
import jwelimg2 from './pictures/jwel2.1.jpg';
import saleimg1 from './pictures/sale1.3.jpg';
import saleimg2 from './pictures/sale2.1.jpg';
import summerimg1 from './pictures/summer1.jpg';
import summerimg2 from './pictures/sum2.15.jpg';
import winterimg1 from './pictures/win1.1.jpg';
import winterimg2 from './pictures/win2.1.jpg';
import opulenceimg1 from './pictures/op1.4.jpg';
import opulenceimg2 from './pictures/op2.3.jpg';


const Home = () => {
  const width1 = "(max-width:625px)";
  function width1_img() {
    return (
      <>
        <img style={mystyle} src={leftpic1} alt="Lpic1"></img>
      </>
    );
  }
  function rest() {
    return (
      <>
        <img style={mystyle} src={piconleft1} alt="Lpic2"></img>
      </>
    );
  }
  function width1_img2() {
    return (
      <>
        <img style={mystyle2} src={mainimg2} alt="Lpic2"></img>
      </>
    );
  }
  function rest2() {
    return (
      <>
        <img style={mystyle2} src={mainimg1} alt="Lpic2"></img>
      </>
    );
  }
  function width1_img3() {
    return (
      <>
        <img style={mystyle} src={rightpic1} alt="Lpic2"></img>
      </>
    );
  }
  function rest3() {
    return (
      <>
        <img style={mystyle} src={piconright1} alt="Lpic2"></img>
      </>
    );
  }

  const mystyle = {
    backgroundColor: "rgb(0,0,0)",
    height: "100%",
    width:'100%',
  };
  const mystyle2 = {
    backgroundColor: "rgb(0,0,0)",
    height: "100%",
    width:'100%',
    padding:'0px',
  };
  const catStyle = {
    height: "100%",
    width:'100%',
    // border: '1px solid rgb(236, 236, 236)',
    borderRadius: '0px',
    padding: '-90px',
  };
  const catStyle2={
    height:'100%',
    width:'100%',
    padding:'0px',
    // border: '1px solid rgb(236, 236, 236)',
    borderRadius: '0px',
      }
  return (
    <div className="home">
      <div className="mainoffer">
        <a href="#" className="piconleft">
          <Media query={width1}>
            {(matched) => {
              return matched ? width1_img() : rest();
            }}
          </Media>
        </a>
        <a href="#" className="mainofferimg">
        <Media query={width1}>
          {(matched) => {
            return matched ? (
              <Media query='(max-width:410px)'>
              {(matched) => {
                return matched ? <img src={mainimg3} style={mystyle}></img> : width1_img2();
              }}
            </Media>
            ) : rest2();
          }}
        </Media>
        </a>
        <a href="#" className="piconright">
        <Media query={width1}>
          {(matched) => {
            return matched ? width1_img3() : rest3();
          }}
        </Media>
        </a>
      </div>
      <div className="categories">
        <fieldset  className="cat-item men"><legend>MEN</legend><a href="#">
          <Media query="(max-width:675px)">
            {
              matched=>{
               return  matched?<img style={catStyle2} src={menimg2} alt="cat"></img>:<img style={catStyle} src={menimg1} alt="cat"></img>
              }
            }
          </Media>
          </a></fieldset>
        <fieldset  className="cat-item women"><legend>WOMEN</legend><a href="#">
        <Media query="(max-width:675px)">
            {
              matched=>{
              return  matched?<img style={catStyle2} src={womenimg2} alt="cat"></img>:<img style={catStyle} src={womenimg1} alt="cat"></img>
              }
            }
          </Media>
          </a></fieldset>
        <fieldset  className="cat-item accessories"><legend>ACCESSORIES</legend><a href="#">
        <Media query="(max-width:675px)">
            {
              matched=>{
               return matched?<img style={catStyle2} src={itemsimg2} alt="cat"></img>:<img style={catStyle} src={itemsimg1} alt="cat"></img>
              }
            }
          </Media>
          </a></fieldset>
        <fieldset  className="cat-item jewellery"><legend>JEWELLERY</legend><a href="#">
        <Media query="(max-width:675px)">
            {
              matched=>{
              return  matched?<img style={catStyle2} src={jwelimg2} alt="cat"></img>:<img style={catStyle} src={jwelimg1} alt="cat"></img>
              }
            }
          </Media>
          </a></fieldset>
        <fieldset  className="cat-item sale"><legend>SALE</legend><a href="#">
        <Media query="(max-width:675px)">
            {
              matched=>{
              return  matched?<img style={catStyle2} src={saleimg2} alt="cat"></img>:<img style={catStyle} src={saleimg1} alt="cat"></img>
              }
            }
          </Media>
          </a></fieldset>
        <fieldset  className="cat-item summer"><legend>SUMMER</legend><a href="#">
        <Media query="(max-width:675px)">
            {
              matched=>{
               return matched?<img style={catStyle2} src={summerimg2} alt="cat"></img>:<img style={catStyle} src={summerimg1} alt="cat"></img>
              }
            }
          </Media>
          </a></fieldset>
        <fieldset  className="cat-item winter"><legend>WINTER</legend><a href="#">
        <Media query="(max-width:675px)">
            {
              matched=>{
              return  matched?<img style={catStyle2} src={winterimg2} alt="cat"></img>:<img style={catStyle} src={winterimg1} alt="cat"></img>
              }
            }
          </Media>
          </a></fieldset>
        <fieldset  className="cat-item opulance"><legend>OPULANCE</legend><a href="#">
        <Media query="(max-width:675px)">
            {
              matched=>{
              return  matched?<img style={catStyle2} src={opulenceimg2} alt="cat"></img>:<img style={catStyle} src={opulenceimg1} alt="cat"></img>
              }
            }
          </Media>
          </a></fieldset>

      </div>
    </div>
  );
};
export default Home;
