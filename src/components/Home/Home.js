import React from "react";
import { Image, Grid, Placeholder } from "semantic-ui-react";
import PaulOcean from "../../images/paulocean.jpg";
import { connect } from "react-redux";
import HomeProject from "./HomeProject";
import selectSortDate from "../../Selectors/selectSortDate";

const styleHome = {
  spacer: {
    height: 60
  },
  placeholder: {
    height: 300,
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "500rem"
  }
};

const Home = props => {
  const { sortedProjectByDate } = props;

  //****testing
  console.log("sortedProjectByDate", sortedProjectByDate);
  console.log("home call");

  return (
    <>
      <Placeholder style={styleHome.placeholder}>
        <Image src={PaulOcean} size="medium" circular centered />
      </Placeholder>

      <div style={styleHome.spacer} />
      <Grid container columns={4} doubling>
        <Grid.Row>
          {sortedProjectByDate.map((item, index) => {
            return <HomeProject data={item} key={index} />;
          })}
        </Grid.Row>
      </Grid>
    </>
  );
};

const mapStateToProps = state => ({
  sortedProjectByDate: selectSortDate(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
