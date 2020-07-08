import React, { useState, useEffect } from "react";
import axios from "axios";
import headerImg from '../../assets/img/showcaseimage.jpg';
import cardImg1 from '../../assets/img/blackfam.jpg'
import cardImg2 from '../../assets/img/Kitchen.jpg'
import cardImg3 from '../../assets/img/familymovingin.jpg'
import ListingCards from '../../components/ListingCards/ListingCards';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '@material-ui/core/Button';
import { Typography, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import { Jumbotron, Image } from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
    sectionPadding: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6)
    },

    heroSection: {
        marginTop: '4rem',
        height: '70vh',
        textAlign: 'center',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${headerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    }
}));

export default function HomeView() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/pages/").then((res) => {
            setListings(res.data)
            console.log(res.data)
        });
    }, [])

    const classes = useStyles();

    return (
        <div>
            <Header />
            <Container className={classes.heroSection} disableGutters maxWidth="false">
                <Grid item xs={12} md={6}>
                    <Container disableGutters maxWidth="false">

                    </Container>
                </Grid>

            </Container>

            <Container className={classes.sectionPadding} maxWidth="lg">
                <Grid container direction="column" align="center">
                    <Grid item xs={12} >
                        <Typography variant="h4">
                            Latest Listings
                        </Typography>
                        <ListingCards data={listings} />
                        <Button variant="contained" color="primary" href="/listings">
                            View More
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            <Container className={classes.sectionPadding} maxWidth="md">
                <Grid container direction="row" xs={12} spacing={0}>
                    <Grid className={classes.icon} item xs={12} md={6} align="center" justify="center">
                        <Typography variant="h6">
                            Helping You Find the Perfect Fit
                            </Typography>
                        <Typography variant="p">
                            orem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis
                            nam!
                            </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Container disableGutters maxWidth="false">
                            <img src={cardImg1} style={{ width: "100%", height: "auto" }} />
                        </Container>
                    </Grid>
                </Grid>
                <Grid container direction="row" xs={12} spacing={0}>
                    <Grid item xs={12} md={6}>
                        <Container disableGutters maxWidth="false">
                            <img src={cardImg2} style={{ width: "100%", height: "auto" }} />
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={6} align="center">
                        <Typography variant="h6">
                            Luxury at the Right Price
                            </Typography>
                        <Typography variant="p">
                            orem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis
                            nam!
                            </Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" xs={12} spacing={0}>
                    <Grid item xs={12} md={6} align="center">
                        <Typography variant="h6">
                            Helping Investors Maximize Occupancy
                            </Typography>
                        <Typography variant="p">
                            orem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis
                            nam!
                            </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Container disableGutters maxWidth="false">
                            <img src={cardImg3} style={{ width: "100%", height: "auto" }} />
                        </Container>
                    </Grid>
                </Grid>
            </Container >

            <Container className={classes.sectionPadding} maxWidth="md">
                <Grid container xs={12} direction="row" align="center">
                    <Typography variant="h6">
                        Search hundreds of listings including apartments, houses, condos and townhomes available for rent in
                        Accra. You'll find your next home in any style you prefer.
                        </Typography>
                </Grid>
            </Container>
            <Footer />
        </div>
    )
}







// class HomeView extends React.Component {
//     state = {
//         listings: [],
//     };



//     render(theme) {
//         return (
//             <div>
//                 <Header />
//                 <Container disableGutters maxWidth="false">
//                     < Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '80vh' }} />
//                 </Container>
//                 <Jumbotron fluid className="p-0">
//                     <div className="jumbotron-overlay">
//                         <div className="container text-center jumbotron-content">
//                             <h1 className="display-4 font-weight-bold">
//                                 Discover Your New Home
//                         </h1>
//                             <p className="h3 font-weight-normal">Helping renters find the perfect fit!</p>
//                             <hr></hr>
//                         </div>
//                     </div>
//                 </Jumbotron>


//                 <Container maxWidth="lg">
//                     <Grid container direction="column" align="center">
//                         <Grid item xs={12} >
//                             <Typography variant="h4">
//                                 Latest Listings
//                             </Typography>
//                             <ListingCards data={this.state.listings} />
//                             <Button variant="contained" color="primary" href="/listings">
//                                 Primary
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 </Container>

//                 <section id="listings" className="py-5">
//                     <div className="container">
//                         <h2 className="text-center mb-4 font-weight-light">Latest Listings</h2>
//                         <ListingCards data={this.state.listings} />
//                         <div className="row justify-content-center mt-3">
//                             <a href="/listings">
//                             <Button variant="contained" color="primary" href="/listings">
//                                 Primary
//                             </Button>
//                             <Button size="lg" variant="primary">
//                                     View More
//                                 </Button> 
//                             </a>
//                         </div>
//                     </div>
//                 </section>

//                 <Container maxWidth="md">
//                     <Grid container direction="row" xs={12} spacing={0}>
//                         <Grid item xs={12} md={6} align="center" justify="center">
//                             <Typography variant="h6">
//                                 Helping You Find the Perfect Fit
//                             </Typography>
//                             <Typography variant="p">
//                                 orem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis
//                                 nam!
//                             </Typography>
//                         </Grid>
//                         <Grid item xs={12} md={6}>
//                             <Container disableGutters maxWidth="false">
//                                 <img src={cardImg1} style={{ width: "100%", height: "auto" }} />
//                             </Container>
//                         </Grid>
//                     </Grid>
//                     <Grid container direction="row" xs={12} spacing={0}>
//                         <Grid item xs={12} md={6}>
//                             <Container disableGutters maxWidth="false">
//                                 <img src={cardImg2} style={{ width: "100%", height: "auto" }} />
//                             </Container>
//                         </Grid>
//                         <Grid item xs={12} md={6} align="center">
//                             <Typography variant="h6">
//                                 Luxury at the Right Price
//                             </Typography>
//                             <Typography variant="p">
//                                 orem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis
//                                 nam!
//                             </Typography>
//                         </Grid>
//                     </Grid>
//                     <Grid container direction="row" xs={12} spacing={0}>
//                         <Grid item xs={12} md={6} align="center">
//                             <Typography variant="h6">
//                                 Helping Investors Maximize Occupancy
//                             </Typography>
//                             <Typography variant="p">
//                                 orem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis
//                                 nam!
//                             </Typography>
//                         </Grid>
//                         <Grid item xs={12} md={6}>
//                             <Container disableGutters maxWidth="false">
//                                 <img src={cardImg3} style={{ width: "100%", height: "auto" }} />
//                             </Container>
//                         </Grid>
//                     </Grid>
//                 </Container >

//                 <section id="services" className="py-5">
//                     <div className="container">
//                         <div className="row justify-content-center text-center align-items-center services-info">
//                             <div className="col-md-6 order-2 order-md-1">
//                                 <h3>Helping You Find the Perfect Fit</h3>
//                                 <p className="font-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis
//                     nam! </p>
//                             </div>
//                             <div className="col-md-6 p-0 order-1 order-md-2">
//                                 <div className="card rounded-0 border-0">
//                                     <Image src={cardImg1} className="card-img rounded-0" alt="..." elevation={0} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row justify-content-center text-center align-items-center services-info">
//                             <div className="col-md-6 p-0">
//                                 <div className="card rounded-0 border-0">
//                                     <Image src={cardImg2} className="card-img rounded-0" alt="..." />
//                                 </div>
//                             </div>
//                             <div className="col-md-6 ">
//                                 <h3>Luxury at the Right Price</h3>
//                                 <p className="font-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis
//                     nam! </p>
//                             </div>
//                         </div>
//                         <div className="row justify-content-center text-center align-items-center services-info">
//                             <div className="col-md-6 order-2 order-md-1">
//                                 <h3>Helping Investors Maximize Occupancy</h3>
//                                 <p className="font-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis
//                     nam! </p>
//                             </div>
//                             <div className="col-md-6 p-0 order-1 order-md-2">
//                                 <div className="card rounded-0 border-0">
//                                     <Image src={cardImg3} className="card-img rounded-0" alt="..." />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <Container maxWidth="md">
//                     <Grid container xs={12} direction="row" align="center">
//                         <Typography variant="h6">
//                             Search hundreds of listings including apartments, houses, condos and townhomes available for rent in
//                             Accra. You'll find your next home in any style you prefer.
//                         </Typography>
//                     </Grid>
//                 </Container>

//                 <section className="py-5">
//                     <div className="container mb-5">
//                         <div className="row justify-content-center text-center ">
//                             <div className="col-md-12">
//                                 <h4>Search hundreds of listings including apartments, houses, condos and townhomes available for rent in
//                     Accra. You'll find your next home in any style you prefer.</h4>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <Footer />
//             </div >
//         );
//     }
// }

// export default HomeView;