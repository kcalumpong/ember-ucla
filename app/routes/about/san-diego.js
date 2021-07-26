/* eslint-disable prettier/prettier */
import Route from '@ember/routing/route';
import axios from 'axios';

export default class AboutSanDiegoRoute extends Route {
    model() {
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=San%20Diego&units=imperial&appid=0e027475a180d2c5213af4c0650345d9`)
          .then(function(res) {
            console.log(res.data)
              return res.data.main
            })
            .catch(function(err) {
              console.log(err)
            })
    }
}
