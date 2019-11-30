import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ai from '../../images/ai.png'
import volvo from '../../images/volvo.png'
import capGemini from '../../images/cap_gemini.png'
import telia from '../../images/telia.png'

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 1000,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={ai}
          title="Master Thesis in AI"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Master Thesis in AI
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Chalmers & Ericsson
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              The thesis examined the possibility of using machine learning
              algorithms to predict possible overloads in a specific node in a
              cellular network. The thesis resulted in a proof of concept which
              showed that machine learning could be used to predict overloads with
              good results.
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={telia}
          title="Software developer at Telia"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Software developer
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Telia
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Lorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem
              ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum
              blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum blaLorem ipsum bla
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={capGemini}
          title="Software developer at Volvo"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Software developer
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Cap Gemini
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              I started at Capgemini as a graduate in their Ignite program and
              graduated after 1,5 of training and courses. Thereafter I continued to
              work as a consultant for their clients developing my programming skills in, for example, Java and Kotlin.
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={volvo}
          title="Software developer Volvo"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Master Thesis in AI
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Chalmers & Ericsson
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              The thesis examined the possibility of using machine learning
              algorithms to predict possible overloads in a specific node in a
              cellular network. The thesis resulted in a proof of concept which
              showed that machine learning could be used to predict overloads with
              good results.
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}


// import React from 'react';
// import ai from '../../images/ai.svg'
// import "./Card.css"
//
//
// class Card extends React.Component{
//   render(){
//     return(
//       <div className="card-bg flex block">
//         <div className="card-media">
//           <img alt="Artificial intelligence"src={ai}/>
//         </div>
//         <div className="card-text ml-2">
//           <h2>Master Thesis in AI</h2>
//           <h3>Chalmers & Ericsson</h3>
//           <p>The thesis examined the possibility of using machine learning
//           algorithms to predict possible overloads in a specific node in a
//           cellular network. The thesis resulted in a proof of concept which
//           showed that machine learning could be used to predict overloads with good results.</p>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Card;
