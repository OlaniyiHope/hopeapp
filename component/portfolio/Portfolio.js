import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';


const Portfolio = () => {
    return(
<View style={styles.Container} >

    <Text style={styles.title}>Projects Done</Text>
    <Text style={styles.titles}>
   PROJECT: 21LET
DESCRIPTION: A real estate project where users can book for an apartment and also upload their apartment on the same site.
DURATION: 5 months
ROLE: Front End developer, designed the ui and wrote coding interface with react js, consumed the api's from the 
backend developer, i routed the pages also created a search button with react autocomplete, used datepicker and added beautiful 
real estate pictures
URL: http://21let.com/</Text>
    <Text style={styles.titles}>
    PROJECT: The Miracle Motors
DESCRIPTION: A transport company where users book their ticket and date for travelling
DURATION: 3 months
ROLE: Website managemment, i added a lot of changes to the interface, i also added available vehicles and trips
i managed users that booked tickets, i also did some graphics design and social media marketing to promote
the company
URL: https://themiraclemotorsng.com/</Text>
    <Text style={styles.titles}>
    PROJECT: MasterPiece Schools
DESCRIPTION: A school website
DURATION: 1 weeek
ROLE: I designed the ui and also build the site with bootstrap, it's a school site where student can have access to what
is going around in their school, check their calenders and look at new events, hoping to add the student portal
where school fees is being paid and exam result can be checked
URL: http://masterpieceschools.com.ng/</Text>
    <Text style={styles.titles}>
    PROJECT: Youfund Africa
DESCRIPTION: A crowd funding platform
DURATION: 3 months
ROLE: full stack developer, it is a site where users that needs help or that has an idea but they dont have money 
to fund the idea can go to, the users uploads images and description of the ideas they have,
they check their dashboard to see if they were funded and to ask for support
URL: http://youfundafrica.com/</Text>
    <Text style={styles.titles}>
    PROJECT: take Collection
DESCRIPTION: An Ecommerce website
DURATION: 1 months
ROLE: Full stack developer, it is an online shopping site, for clothers, shoes, bags etc. Users can add to cr
cart and buy as much as they want with their credit card
</Text>
  
    </View>


    )
    
}

export default Portfolio;

