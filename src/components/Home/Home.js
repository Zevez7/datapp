import React from "react";
import { Image, Grid } from "semantic-ui-react";
import PaulOcean from "../../images/paulocean.jpg";
import { connect } from "react-redux";
import HomeProject from "./HomeProject";

const styleHome = {
  spacer: {
    height: 60
  }
};

const Home = props => {
  //****testing
  console.log("props.project", props.project);

  return (
    <>
      <Image src={PaulOcean} size="medium" circular centered />

      <div style={styleHome.spacer} />
      <Grid container columns={4} doubling>
        <Grid.Row>
          {props.project.map(item => {
            return <HomeProject data={item} />;
          })}
        </Grid.Row>
      </Grid>
    </>
  );
};

const mapStateToProps = state => ({
  project: state.home
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
